import { UserDomain } from './user.domain';

export interface IUserService {
  save(user: UserDomain): Promise<UserDomain>;
  getAll(): Promise<UserDomain[]>;
  remove(userId: string): Promise<string>;
  update(userId: string, user: UserDomain): Promise<UserDomain>;
  getOne(userId: string): Promise<UserDomain>;
  search(keywords: string[]): Promise<UserDomain[]>;
}
