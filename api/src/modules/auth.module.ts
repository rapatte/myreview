import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConfig } from '../config/jwtConfig';
import { AuthService } from '../infrastructure/auth/auth.service';
import { UserService } from '../domain/user/user.service';
import { JwtStrategy } from '../exposition/auth/jwt.strategy';
import { LocalStrategy } from '../exposition/auth/local.strategy';
import { AuthController } from '../exposition/auth/auth.controller';
import { UserRepositoryAdapter } from '../infrastructure/user/user.repository.adapter';
import { UserModule } from './user.module';

@Module({
  imports: [PassportModule, JwtModule.registerAsync(jwtConfig), UserModule],
  exports: [AuthService],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    { provide: 'IUserRepository', useClass: UserRepositoryAdapter },
    { provide: 'IUserService', useClass: UserService },
  ],
})
export class AuthModule {}
