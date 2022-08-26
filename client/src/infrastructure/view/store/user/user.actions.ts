import { User } from 'domain/user/user';

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
export const login = (data: any) => {
  return {
    type: 'login',
    payload: data,
  };
};
export const logout = () => {
  return {
    type: 'logout',
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
