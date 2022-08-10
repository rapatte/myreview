import { Injectable } from '@nestjs/common';
import { UserDomain } from '../../domain/user/user.domain';
import { UserService } from '../../domain/user/user.service';
import { User } from '../../types/User';

@Injectable()
export class UserServiceAdapter {
  private userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }

  public async save(user: User): Promise<UserDomain> {
    const userDomain = new UserDomain(user);
    return this.userService.save(userDomain);
  }
  public async getAll(): Promise<UserDomain[]> {
    return this.userService.getAll();
  }
  public async getOne(userId: string): Promise<UserDomain> {
    return this.userService.getOne(userId);
  }
  public async remove(userId: string): Promise<string> {
    return this.userService.remove(userId);
  }
  public async update(
    userId: string,
    user: Partial<UserDomain>,
  ): Promise<UserDomain> {
    return this.userService.update(userId, user);
  }
  public async search(keywords: string[]): Promise<UserDomain[]> {
    return this.userService.search(keywords);
  }
  public async getUsername(username: string[]): Promise<UserDomain[]> {
    return this.userService.getUsername(username);
  }
}
