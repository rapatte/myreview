import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../domain/user/user.service';
import { UserController } from '../exposition/user/user.controller';
import { UserServiceAdapter } from '../exposition/user/user.service.adapter';
import { UserEntity } from '../infrastructure/user/user.entity';
import { UserRepositoryAdapter } from '../infrastructure/user/user.repository.adapter';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [TypeOrmModule],
  controllers: [UserController],
  providers: [
    UserService,
    UserServiceAdapter,
    { provide: 'IUserRepository', useClass: UserRepositoryAdapter },
    { provide: 'IUserService', useClass: UserService },
  ],
})
export class UserModule {}
