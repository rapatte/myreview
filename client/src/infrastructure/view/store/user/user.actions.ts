import { User } from 'domain/user/user';

export const userList = (data: User[]) => {
  return {
    type: 'display-list-users',
    payload: data,
  };
};

export const userUpdate = (data: User) => {
  return {
    type: 'update-user',
    payload: data,
  };
};
export const getOneuser = (data: User) => {
  return {
    type: 'getOneuser',
    payload: data,
  };
};
export const addUser = (data: User) => {
  return {
    type: 'add-user',
    payload: data,
  };
};
export const userFilter = (data: User[]) => {
  return {
    type: 'filtre-user',
    payload: data,
  };
};
export const userDelete = id => {
  return {
    type: 'delete-user',
    payload: id,
  };
};
