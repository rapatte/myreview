import { User } from './user';

export interface IUserRepository {
  deleteUser: (id: string) => Promise<string>;
  updateUser: (id: string, data: User) => Promise<User>;
  addUser: (user: User) => Promise<User>;
  login: (user: any) => Promise<any>;
  refresh: () => Promise<any>;
  logout: () => Promise<string>;
}
