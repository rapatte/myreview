import { MissionEntity } from '../../infrastructure/job/MissionEntity';
import { MissionDomain } from './MissionDomain';

export interface IMissionRepository {
  save(mission: MissionDomain): Promise<string>;
  getAll(): Promise<MissionDomain[]>;
  remove(missionId: string): Promise<string>;
  update(
    missionId: string,
    mission: Partial<MissionDomain>,
  ): Promise<MissionDomain>;
  getOne(missionId: string): Promise<MissionDomain>;
  search(keywords: string[]): Promise<MissionDomain[]>;
}