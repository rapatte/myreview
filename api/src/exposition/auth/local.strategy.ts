import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthService } from '../../infrastructure/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    try {
      const user = await this.authService.validateUser(username, password);
      return user;
    } catch (error) {
      if (error) {
        throw new HttpException(
          {
            status: HttpStatus.UNAUTHORIZED,
            error: 'Wrong username or password.',
          },
          HttpStatus.UNAUTHORIZED,
        );
      }
    }
  }
}
