import { Cooperator } from '../../../../domain/cooperator/cooperator';

export const cooperatorList = (data: Cooperator[]) => {
  return {
    type: 'display-list-cooperators',
    payload: data,
  };
};
export const updateCooperator = (data: Cooperator) => {
  return {
    type: 'update-cooperator',
    payload: data,
  };
};
export const cooperatorPosted = (data: Cooperator) => {
  return {
    type: 'add-cooperator',
    payload: data,
  };
};
export const cooperatorFiltred = (data: Cooperator[]) => {
  return {
    type: 'filtre-cooperator',
    payload: data,
  };
};

export const deleteCooperator = id => {
  return {
    type: 'delete-cooperator',
    payload: id,
  };
};
