import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobAdapter } from './job.repository.adapter';
import { JobEntity } from '../domain/entities/job.entities';

@Module({
  imports: [TypeOrmModule.forFeature([JobEntity])],
  providers: [JobAdapter],
  exports: [JobEntity],
})
export class RepositoriesModule {}
