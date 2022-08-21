import { User } from './user';
import { IUserRepository } from './user.irepository';

export const UserService = (repository: IUserRepository): IUserRepository => ({
  updateUser: (id, data): Promise<User> => {
    return repository.updateUser(id, data);
  },
  deleteUser: (id): Promise<string> => {
    return repository.deleteUser(id);
  },
  addUser: (user: User): Promise<User> => {
    return repository.addUser(user);
  },
  login: (user: any): Promise<any> => {
    return repository.login(user);
  },
});
