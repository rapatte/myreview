import { Inject, Injectable } from '@nestjs/common';
import { UserDomain } from './user.domain';
import { IUserRepository } from './user.irepository';
import { IUserService } from './user.iservice';

@Injectable()
export class UserService implements IUserService {
  private userRepositoryAdapter: IUserRepository;
  constructor(@Inject('IUserRepository') userAdapter: IUserRepository) {
    this.userRepositoryAdapter = userAdapter;
  }

  async save(user: UserDomain) {
    return await this.userRepositoryAdapter.save(user);
  }
  async getAll() {
    const users = await this.userRepositoryAdapter.getAll();
    if (users.length === 0) {
      throw new Error('No users in the database');
    }
    return users;
  }
  async getOne(userId: string) {
    const user = await this.userRepositoryAdapter.getOne(userId);
    if (!user) {
      throw new Error('User not found.');
    }
    return user;
  }
  async remove(userId: string) {
    const user = await this.userRepositoryAdapter.getOne(userId);
    if (!user) {
      throw new Error('User not found or already deleted.');
    }
    return await this.userRepositoryAdapter.remove(userId);
  }
  async update(userId: string, user: Partial<UserDomain>) {
    const userFound = await this.userRepositoryAdapter.getOne(userId);
    if (!userFound) {
      throw new Error('User not found.');
    }
    if (user === userFound) {
      throw new Error('Identical user.');
    }
    return await this.userRepositoryAdapter.update(userId, user);
  }
  async search(keywords: string[]) {
    const users = await this.userRepositoryAdapter.search(keywords);
    if (users.length === 0) {
      throw new Error('No users found.');
    }
    return users;
  }
  async getUsername(username: string[]) {
    const user = await this.userRepositoryAdapter.getUsername(username);
    return user;
  }
}
