import { IJobRepository } from '../../src/domain/job/IJobRepository';
import { JobDomain } from '../../src/domain/job/JobDomain';
import mockedJobs from './mockedJobs';

// const mockedAdapter: IJobRepository = {
//   save: jest.fn(async (job: JobDomain): Promise<string> => {
//     mockedJobs.push(job);
//     return 'Job offer created successfully';
//   }),
//   getAll: jest.fn(async (): Promise<JobDomain[]> => {
//     return mockedJobs;
//   }),
//   getJob: jest.fn(async (id: number): Promise<JobDomain> => {
//     return await mockedJobs.find((job) => job.id === id);
//   }),
//   remove: jest.fn(async (id: number): Promise<string> => {
//     const jobId = id;
//     const jobFound = await mockedJobs.find((job) => job.id === jobId);
//     mockedJobs.splice(mockedJobs.indexOf(jobFound), 1);
//     return 'Job offer removed';
//   }),
//   update: jest.fn(async (jobId: number, job: JobDomain): Promise<JobDomain> => {
//     const jobFound = await mockedJobs.find((job) => job.id === jobId);
//     const indexOfJobFound = mockedJobs.indexOf(jobFound);

//     mockedJobs[indexOfJobFound].setTitle = job.getTitle;
//     mockedJobs[indexOfJobFound].setAddress = job.getAddress;
//     mockedJobs[indexOfJobFound].setSalary = job.getSalary;
//     mockedJobs[indexOfJobFound].setContract_type = job.getContract_type;
//     mockedJobs[indexOfJobFound].setAuthor = job.getAuthor;
//     mockedJobs[indexOfJobFound].setDescription = job.getDescription;

//     return mockedJobs[indexOfJobFound];
//   }),
// };

class JobAdapter {
  jobs: JobDomain[];
  constructor(jobs: JobDomain[]) {
    this.jobs = jobs;
  }
}

const mockedAdapter: IJobRepository = {
  save: async (job: JobDomain): Promise<string> => {
    mockedJobs.push(job);
    return await 'Success';
  },
  getAll: async (): Promise<JobDomain[]> => {
    return mockedJobs;
  },
  getJob: async (id: number): Promise<JobDomain> => {
    return await mockedJobs.find((job) => job.id === id);
  },
  remove: async (id: number): Promise<string> => {
    const jobId = id;
    const jobFound = await mockedJobs.find((job) => job.id === jobId);
    mockedJobs.splice(mockedJobs.indexOf(jobFound), 1);
    return await 'Job offer removed';
  },
  update: async (jobId: number, job: JobDomain): Promise<JobDomain> => {
    const jobFound = await mockedJobs.find((job) => job.id === jobId);
    if (!jobFound) {
      throw new Error('JOB NOT FOUND');
    }

    const indexOfJobFound = mockedJobs.indexOf(jobFound);

    mockedJobs[indexOfJobFound].setTitle =
      job.getTitle !== '' ? job.getTitle : mockedJobs[indexOfJobFound].getTitle;

    mockedJobs[indexOfJobFound].setAddress =
      job.getAddress !== ''
        ? job.getAddress
        : mockedJobs[indexOfJobFound].getAddress;

    mockedJobs[indexOfJobFound].setSalary =
      job.getSalary !== ''
        ? job.getSalary
        : mockedJobs[indexOfJobFound].getSalary;

    mockedJobs[indexOfJobFound].setContract_type =
      job.getContract_type !== ''
        ? job.getContract_type
        : mockedJobs[indexOfJobFound].getContract_type;

    mockedJobs[indexOfJobFound].setAuthor =
      job.getAuthor !== ''
        ? job.getAuthor
        : mockedJobs[indexOfJobFound].getAuthor;

    mockedJobs[indexOfJobFound].setDescription =
      job.getDescription !== ''
        ? job.getDescription
        : mockedJobs[indexOfJobFound].getDescription;

    return mockedJobs[indexOfJobFound];
  },
};

export default mockedAdapter;
