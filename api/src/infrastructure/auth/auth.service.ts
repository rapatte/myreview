import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from '../../utils/funcs';
import { UserService } from '../../domain/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const result = await this.userService.search([username]);
    const user = result[0];
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

  async login(user: any): Promise<any> {
    const payload = { username: user.username, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
