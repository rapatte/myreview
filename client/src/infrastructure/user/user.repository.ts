import { User } from 'domain/user/user';

import { IUserRepository } from 'domain/user/user.irepository';
import { UserDTO } from './user.dto';
import { Http } from 'infrastructure/util/Http';

export const userRepository = (client: Http): IUserRepository => ({
  updateUser: async (id, data) => {
    const userUpdated = await client.patch<UserDTO>(`/users/${id}`, data);
    return userUpdated;
  },
  deleteUser: async id => {
    const userDeleted = await client.delete<String>(`/users/${id}`);
    return userDeleted;
  },
  addUser: async (user: User) => {
    const postUser = await client.post<UserDTO>('/users', user);
    return postUser;
  },
  login: async (user: any) => {
    const res = await client.post<any>('/auth/login', user);
    return res;
  },
  refresh: async () => {
    return await client.get<any>('/auth/refresh');
  },
});
