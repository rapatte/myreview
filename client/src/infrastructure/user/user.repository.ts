import { Review } from 'domain/review/review';

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
  addUser: async (review: Review) => {
    const postReview = await client.post<UserDTO>('/users', review);
    return postReview;
  },
  login: async (user: any) => {
    const res = await client.post<any>('/auth/login', user);
    return res;
  },
});
