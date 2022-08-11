import { Module } from '@nestjs/common';
import { AuthService } from '../domain/auth/auth.service';
import { UserModule } from './user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../exposition/auth/local.strategy';
import { AuthController } from '../exposition/auth/auth.controller';

@Module({
  imports: [UserModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
