import { UserDomain } from './user.domain';

export interface IUserRepository {
  save(user: UserDomain): Promise<UserDomain>;
  getAll(): Promise<UserDomain[]>;
  remove(userId: string): Promise<string>;
  update(userId: string, user: Partial<UserDomain>): Promise<UserDomain>;
  getOne(userId: string): Promise<UserDomain>;
  search(keywords: string[]): Promise<UserDomain[]>;
  getUsername(username: string[]): Promise<UserDomain[]>;
}
