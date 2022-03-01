import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobService } from '../../domain/job/job.service';
import { JobController } from '../../exposition/job/job.controller';
import { JobEntity } from './job.entity';
import { JobAdapter } from './job.repository.adapter';

@Module({
  imports: [TypeOrmModule.forFeature([JobEntity])],
  exports: [TypeOrmModule],
  providers: [JobAdapter, JobService],
  controllers: [JobController],
})
export class JobModule {}
