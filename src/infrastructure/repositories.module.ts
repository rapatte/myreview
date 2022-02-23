import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsAdapter } from './jobs.repository.adapter';
import { JobsEntity } from '../domain/entities/jobs.entities';

@Module({
  imports: [TypeOrmModule.forFeature([JobsEntity])],
  providers: [JobsAdapter],
  exports: [JobsEntity],
})
export class RepositoriesModule {}
