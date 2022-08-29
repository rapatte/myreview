import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthService } from '../../infrastructure/auth/auth.service';
import { UserRepositoryAdapter } from '../../infrastructure/user/user.repository.adapter';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import JwtRefreshGuard from './jwt-refresh.guard';
@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserRepositoryAdapter,
    private jwtService: JwtService,
  ) {}
  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() request: any): Promise<any> {
    const { user } = request;
    const accessTokenCookie = this.authService.getCookieWithJwtAccessToken(
      user.id,
      user.username,
      user.role,
    );
    const refreshTokenCookie = this.authService.getCookieWithJwtRefreshToken(
      user.id,
    );
    await this.userService.setCurrentRefreshToken(
      refreshTokenCookie.token,
      user.id,
    );
    request.res.setHeader('Set-Cookie', [
      accessTokenCookie,
      refreshTokenCookie.cookie,
    ]);

    return user;
    // try {
    //   return await this.authService.login(req.user);
    // } catch (error) {
    //   throw new HttpException(
    //     {
    //       status: HttpStatus.UNAUTHORIZED,
    //       error: 'Wrong username or password.',
    //     },
    //     HttpStatus.UNAUTHORIZED,
    //   );
    // }
  }
  @UseGuards(JwtRefreshGuard)
  @Get('refresh')
  async refresh(@Req() request: any, @Res() response: any) {
    try {
      const refreshToken = request.cookies['Refresh'];
      if (!refreshToken) {
        response.status(400).send('Access denied. Your session expired');
      }
      const decoded: any = this.jwtService.decode(refreshToken);
      if (decoded) {
        const user = await this.userService.getOne(decoded.userId);
        const accessTokenCookie = this.authService.getCookieWithJwtAccessToken(
          user.id,
          user.username,
          user.role,
        );
        request.res.setHeader('Set-Cookie', accessTokenCookie);
        response.status(200).send(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @HttpCode(200)
  async logOut(@Req() request: any, @Res() response: any) {
    await this.userService.removeRefreshToken(request.user.id);
    request.res.setHeader('Set-Cookie', this.authService.getCookiesForLogOut());
    response.status(200).send('You have been logout.');
  }
}
