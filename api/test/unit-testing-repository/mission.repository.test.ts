import { INestApplication, Injectable } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { EntityManager, getConnection, Like, Repository } from 'typeorm';
import { IMissionRepository } from '../../src/domain/mission/IMissionRepository';
import { MissionDomain } from '../../src/domain/mission/MissionDomain';
import { MissionEntity } from '../../src/infrastructure/job/MissionEntity';
import Utils from '../../src/utils/Utils';
import { Mission } from '../utils/types/Mission';

@Injectable()
class MissionRepositoryAdapter implements IMissionRepository {
  constructor(
    @InjectRepository(MissionEntity)
    private readonly missionEntityRepository: Repository<MissionEntity>,
  ) {}

  save(mission: MissionDomain): Promise<MissionDomain> {
    throw new Error('Method not implemented.');
  }
  async getAll(): Promise<any> {
    return await this.missionEntityRepository.find();
  }
  remove(missionId: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
  update(missionId: string, mission: MissionDomain): Promise<MissionDomain> {
    throw new Error('Method not implemented.');
  }
  getOne(missionId: string): Promise<MissionDomain> {
    throw new Error('Method not implemented.');
  }

  async search(keywords: string[]): Promise<MissionDomain[]> {
    const request = await this.searchByElement(keywords);

    const missions: MissionEntity[] = Utils.removeDuplicateObject(request);

    return missions.map((mission) => new MissionDomain(mission));
  }

  async searchByElement(array: Array<any>) {
    const elements: any[] = [];
    await Promise.all(
      array.map(async (element) => {
        const request: Array<string | number | object> =
          await this.missionEntityRepository.find({
            where: [
              { profile: Like(`%${element}%`) },
              { stack: Like(`%${element}%`) },
              { client: Like(`%${element}%`) },
            ],
          });
        request.forEach((req) => elements.push(req));
      }),
    );

    return elements;
  }
}

describe('Testing Search Method', () => {
  let app: INestApplication;
  let entityManager: EntityManager;
  let repository: MissionRepositoryAdapter;
  const missions = [
    {
      profile: 'dev fullstack javascript',
      client: 'BNP Paribas',
      address: '10 rue de Paris 75000 Paris',
      project: 'WEB APP',
      description: 'full stack',
      duration: '6 mois',
      stack: 'React, Nodejs, Mongodb',
      teamOrganisation: 'test',
    },
    {
      profile: 'dev Java',
      client: 'Metro',
      address: '11 rue de Paris 75001 Paris',
      project: 'ANDROID MOBILE APP',
      description: 'back-end',
      duration: '12 mois',
      stack: 'Java, Postgresql, spring',
      teamOrganisation: 'test',
    },
    {
      profile: 'devOps',
      client: 'Decathlon',
      address: '12 rue de Paris 75002 Paris',
      project: 'CI',
      description: 'opérationnel',
      duration: '24 mois',
      stack: 'Jenkins, Dockers, SonarQube',
      teamOrganisation: 'test',
    },
    {
      profile: 'devOps',
      client: 'BNP Paribas',
      address: '10 rue de Paris 75000 Paris',
      project: 'WEB APP',
      description: 'full stack',
      duration: '6 mois',
      stack: 'React, Nodejs, Mongodb',
      teamOrganisation: 'test',
    },
  ];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: ':memory:',
          entities: [MissionEntity],
          logging: false,
          synchronize: true,
        }),
        TypeOrmModule.forFeature([MissionEntity]),
      ],
      providers: [MissionRepositoryAdapter],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();

    repository = moduleFixture.get<MissionRepositoryAdapter>(
      MissionRepositoryAdapter,
    );

    const connection = getConnection();
    entityManager = connection.createEntityManager();

    missions.forEach(
      async (mission) =>
        await entityManager.insert<MissionEntity>(MissionEntity, mission),
    );
  });

  it('Should display list of missions', async () => {
    const request = await repository.getAll();
    expect(request.length).toBeGreaterThan(0);
  });

  it('Should display a  list of missions with profile keyword search', async () => {
    const request = await repository.search(['Java']);
    expect(request.length).toBeGreaterThan(0);
  });

  it('Should display a list of missions with multiple profile keywords search', async () => {
    const request = await repository.search(['Java', 'dev']);
    expect(request).toEqual(missions);
  });

  it('Should display a list of missions with stack keyword search', async () => {
    const missions = await repository.search(['React', 'Jenkins']);
    expect(missions.length).toBeGreaterThan(0);
  });

  it('Should display a list of missions with stack keyword search', async () => {
    const missions = await repository.search(['React', 'Jenkins']);
    expect(missions.length).toBeGreaterThan(0);
  });

  it('Should display a list of missions with client keyword search', async () => {
    const missions = await repository.search(['Decathlon', 'Metro']);
    expect(missions.length).toBeGreaterThan(0);
  });

  it('Should display a list of missions with client,stack,profile keyword search', async () => {
    const missions = await repository.search(['Decathlon', 'Java', 'Jenkins']);
    expect(missions.length).toBeGreaterThan(0);
  });

  it('Should display a list of missions with client,stack,profile keyword search', async () => {
    const missions = await repository.search(['devOps', 'BNP']);
    expect(missions.length).toBeGreaterThan(0);
  });
});
