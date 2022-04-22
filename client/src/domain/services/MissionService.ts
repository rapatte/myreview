import { MissionRepository } from '../repositories/MissionRepository.interface';
// Here we can change the repository by one that implement the IMissionRepository interface
// const repository: IMissionRepository = missionRepository;

export const missionService = (
  repository: MissionRepository,
): MissionRepository => ({
  getMissions: () => {
    return repository.getMissions();
  },
});