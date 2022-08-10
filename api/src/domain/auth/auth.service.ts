import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const result = await this.userService.search([username]);
    const user = result[0];
    if (user && user.getPassword === password) {
      const { getUsername, getPassword, ...rest } = user;
      return rest;
    }
    return null;
  }
}
