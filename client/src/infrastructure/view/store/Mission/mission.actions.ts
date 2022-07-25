import { Mission } from 'domain/mission/mission';

export const missionList = (data: Mission[]) => {
  return {
    type: 'display-list-missions',
    payload: data,
  };
};

export const missionUpdated = (data: Mission) => {
  return {
    type: 'update-status-mission',
    payload: data,
  };
};
export const missionPosted = (data: Mission) => {
  return {
    type: 'add-mission',
    payload: data,
  };
};
export const missionFiltred = (data: Mission[]) => {
  return {
    type: 'filtre-mission',
    payload: data,
  };
};
export const deleteMission = id => {
  console.log('action', id);

  return {
    type: 'delete-mission',
    payload: id,
  };
};
