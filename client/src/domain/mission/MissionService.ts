import { Review } from './mission';
import { IMissionRepository } from './mission.irepository';

export const MissionService = (
  repository: IMissionRepository,
): IMissionRepository => ({
  getMissions: (): Promise<Review[]> => {
    return repository.getMissions();
  },
  updateMission: (id, data): Promise<Review> => {
    return repository.updateMission(id, data);
  },
  deleteMission: (id): Promise<string> => {
    return repository.deleteMission(id);
  },
  addMission: (mission: Review): Promise<Review> => {
    return repository.addMission(mission);
  },

  missionFiltred: (keywords: string[]): Promise<Review[]> => {
    return repository.missionFiltred(keywords);
  },
  getAvailableMissions: (): Promise<Review[]> => {
    return repository.getAvailableMissions();
  },
});
