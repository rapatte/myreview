import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDomain } from '../../domain/user/user.domain';
import { IUserRepository } from '../../domain/user/user.irepository';
import Utils from '../../utils/funcs';
import {
  UserEntity,
  fromDomainToEntity,
  fromEntityToDomain,
} from './user.entity';

@Injectable()
export class UserRepositoryAdapter implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntityRepository: Repository<UserEntity>,
  ) {}

  async save(user: UserDomain): Promise<UserDomain> {
    const entityConvertedUser = fromDomainToEntity(user);
    const savedUser = await this.userEntityRepository.save(entityConvertedUser);
    const domainConvertedUser = fromEntityToDomain(savedUser);
    return domainConvertedUser;
  }

  async getAll(): Promise<UserDomain[]> {
    const userList = await this.userEntityRepository.find();
    const domainConvertedList = userList.map((user) => new UserDomain(user));
    return domainConvertedList;
  }

  async remove(id: string): Promise<string> {
    await this.userEntityRepository.delete(id);
    return `User deleted.`;
  }

  async update(id: string, user: Partial<UserDomain>): Promise<UserDomain> {
    const userFound = await this.userEntityRepository.findOne({
      id,
    });
    const userUpdated = await this.userEntityRepository.save({
      ...userFound,
      ...user,
    });
    const userConvertedUser = fromEntityToDomain(userUpdated);
    return userConvertedUser;
  }

  async getOne(id: string): Promise<any> {
    const userFound = await this.userEntityRepository.findOne({
      id,
    });
    const domainConvertedUser = fromEntityToDomain(userFound);
    return domainConvertedUser;
  }

  async search(keywords: string[]): Promise<UserDomain[]> {
    const request = await this.searchByElement(keywords);

    const users: UserEntity[] = Utils.removeDuplicateObject(request);

    return users.map((user) => new UserDomain(user));
  }

  async searchByElement(array: Array<any>) {
    const elements: any[] = [];
    await Promise.all(
      array.map(async (element) => {
        const request: Array<string | number | object> =
          await this.userEntityRepository.find({
            where: {
              username: element,
            },
          });
        request.forEach((req) => elements.push(req));
      }),
    );
    return elements;
  }
}
