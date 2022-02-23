import { EntityRepository, Repository } from 'typeorm';

import { JobsModel } from '../domain/models/jobs.model';
import { ExampleEntity as JobsEntity } from '../domain/entities/example.entities';

@EntityRepository(JobsEntity)
export class JobsRepositoryWrapper extends Repository<JobsEntity> {
  saveExample(job: JobsModel) {
    return this.createQueryBuilder('example')
      .insert()
      .setParameter('description', job.description)
      .execute();
  }
}
