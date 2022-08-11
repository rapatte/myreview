import { Module } from '@nestjs/common';
import { AuthService } from '../domain/auth/auth.service';
import { UserModule } from './user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../exposition/auth/local.strategy';

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
