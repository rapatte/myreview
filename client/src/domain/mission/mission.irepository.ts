import { Review } from './mission';

export interface IMissionRepository {
  getMissions: () => Promise<Review[]>;
  updateMission: (id: string, data: Review) => Promise<Review>;
  deleteMission: (id: string) => Promise<string>;
  addMission: (mission: Review) => Promise<Review>;
  missionFiltred: (keywords: string[]) => Promise<Review[]>;
  getAvailableMissions: () => Promise<Review[]>;
}
