import { Review } from 'domain/mission/mission';

export const missionList = (data: Review[]) => {
  return {
    type: 'display-list-missions',
    payload: data,
  };
};

export const missionUpdated = (data: Review) => {
  return {
    type: 'update-status-mission',
    payload: data,
  };
};
export const missionPosted = (data: Review) => {
  return {
    type: 'add-mission',
    payload: data,
  };
};
export const missionFiltred = (data: Review[]) => {
  return {
    type: 'filtre-mission',
    payload: data,
  };
};
export const deleteMission = id => {
  return {
    type: 'delete-mission',
    payload: id,
  };
};
