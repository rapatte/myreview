import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  Delete,
  Param,
  Patch,
  Query,
  HttpException,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { User } from '../../types/User';
import { UserEntity } from '../../infrastructure/user/user.entity';
import { UserServiceAdapter } from './user.service.adapter';
import { encryptedPassword } from '../../utils/funcs';
@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userServiceAdapter: UserServiceAdapter) {}
  @ApiCreatedResponse({ type: UserEntity })
  @Post()
  async create(
    @Body() user: User,
    @Res() response: Response,
  ): Promise<User | void> {
    try {
      const userProperties = Object.values(user);
      userProperties.map((propertie) => {
        if (propertie === '') {
          throw new HttpException(
            'All fields must be filled in.',
            HttpStatus.BAD_REQUEST,
          );
        }
      });
      const userAlreadyExists = await this.userServiceAdapter.getUsername([
        user.username,
      ]);

      if (userAlreadyExists.length > 0) {
        throw new HttpException(
          'Username already exists.',
          HttpStatus.BAD_REQUEST,
        );
      } else {
        const pass = await encryptedPassword(user.password);
        user.password = pass;
        const newUser = await this.userServiceAdapter.save(user);
        response.status(HttpStatus.CREATED).send(newUser);
        return;
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  @ApiCreatedResponse({
    type: UserEntity,
    isArray: true,
    description: 'Table of users',
  })
  @Get()
  async getAll(@Res() response: Response): Promise<void> {
    try {
      const users = await this.userServiceAdapter.getAll();
      response.status(HttpStatus.OK).send(users);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Get('search')
  async search(@Query('criteria') search: string[]) {
    try {
      if (typeof search === 'string') {
        return await this.userServiceAdapter.search([search]);
      } else {
        return await this.userServiceAdapter.search(search);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @ApiCreatedResponse({ type: UserEntity, description: 'the user' })
  @ApiNotFoundResponse()
  @Get(':id')
  async getOne(@Res() response: Response, @Param('id') userId: string) {
    try {
      const user = await this.userServiceAdapter.getOne(userId);
      return response.status(HttpStatus.OK).send(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Delete(':id')
  async deleteUser(@Res() response: Response, @Param('id') userId: string) {
    try {
      const res = await this.userServiceAdapter.remove(userId);
      response.status(HttpStatus.ACCEPTED).send(res);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Patch(':id')
  async updateUser(
    @Res() response: Response,
    @Param('id') userId: string,
    @Body() user: Partial<any>,
  ) {
    try {
      const userUpdated = await this.userServiceAdapter.update(userId, user);
      response.status(HttpStatus.OK).send(userUpdated);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
