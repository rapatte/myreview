import { Module } from '@nestjs/common';

import { MissionModule } from './mission.module';
import { ReviewModule } from './review.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '../config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CooperatorModule } from './cooperator.module';

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
    MissionModule,
    CooperatorModule,
    ReviewModule,
  ],
})
export class AppModule {}
