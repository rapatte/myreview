import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthService } from '../../infrastructure/auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any): Promise<any> {
    return await this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/protected')
  async getHello(@Request() req: any): Promise<any> {
    return req.user;
  }
}
