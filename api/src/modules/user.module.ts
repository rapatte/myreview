import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConfig } from '../config/jwtConfig';
import { AuthService } from '../infrastructure/auth/auth.service';
import { UserService } from '../domain/user/user.service';
import { JwtStrategy } from '../exposition/auth/jwt.strategy';
import { LocalStrategy } from '../exposition/auth/local.strategy';
import { UserController } from '../exposition/user/user.controller';
import { UserServiceAdapter } from '../exposition/user/user.service.adapter';
import { UserEntity } from '../infrastructure/user/user.entity';
import { UserRepositoryAdapter } from '../infrastructure/user/user.repository.adapter';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule,
    JwtModule.registerAsync(jwtConfig),
  ],
  exports: [TypeOrmModule],
  controllers: [UserController],
  providers: [
    UserService,
    UserServiceAdapter,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    { provide: 'IUserRepository', useClass: UserRepositoryAdapter },
    { provide: 'IUserService', useClass: UserService },
  ],
})
export class UserModule {}
