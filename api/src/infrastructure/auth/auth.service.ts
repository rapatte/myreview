import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from '../../utils/funcs';
import { UserService } from '../../domain/user/user.service';
import jwtSecret from '../../config/jwtSecret';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const req = await this.userService.getUsername([username]);
    const user = req[0];
    const pass = await compare(password, user.getPassword);
    if (pass) {
      const { ...rest } = user;
      return rest;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'Wrong username or password.',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
  public getCookieWithJwtAccessToken(
    userId: string,
    username: string,
    role: string,
  ) {
    try {
      const payload: any = { userId, username, role };
      const token = this.jwtService.sign(payload, {
        secret: jwtSecret().jwtSecret,
        expiresIn: `5m`,
      });
      return `Authentication=${token}; HttpOnly; Path=/; Max-Age=5m`;
    } catch (error) {
      console.log(error);
    }
  }

  public getCookieWithJwtRefreshToken(userId: number) {
    try {
      const payload: any = { userId };
      const token = this.jwtService.sign(payload, {
        secret: jwtSecret().jwtRefreshSecret,
        expiresIn: `30m`,
      });
      const cookie = `Refresh=${token}; HttpOnly; Path=/; Max-Age=30m`;
      return {
        cookie,
        token,
      };
    } catch (error) {
      console.log(error);
    }
  }

  public getCookiesForLogOut() {
    return [
      'Authentication=; HttpOnly; Path=/; Max-Age=0',
      'Refresh=; HttpOnly; Path=/; Max-Age=0',
    ];
  }

  // async login(user: any): Promise<any> {
  //   const payload = { username: user.username, sub: user.id, role: user.role };
  //   const access_token = this.jwtService.sign(payload);
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //     decoded_token: this.jwtService.decode(access_token),
  //     refresh_token: this.jwtService.sign(user.id, { expiresIn: '30m' }),
  //   };
  // }
}
