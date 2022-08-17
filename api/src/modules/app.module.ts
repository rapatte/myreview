import { Module } from '@nestjs/common';
import { ReviewModule } from './review.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '../config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user.module';
import { CommentModule } from './comment.module';
import { AuthModule } from './auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: configuration,
    }),
    ReviewModule,
    UserModule,
    CommentModule,
    AuthModule,
  ],
})
export class AppModule {}
