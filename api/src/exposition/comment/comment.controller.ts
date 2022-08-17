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
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { Comment } from '../../types/Comment';
import { UserDomain } from '../../domain/user/user.domain';
import { CommentEntity } from '../../infrastructure/comment/comment.entity';
import { CommentServiceAdapter } from './comment.service.adapter';
import { AuthService } from '../../infrastructure/auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@ApiTags('Comments')
@Controller('comments')
export class CommentController {
  constructor(
    private readonly commentServiceAdapter: CommentServiceAdapter,
    private authService: AuthService,
  ) {}
  @ApiCreatedResponse({ type: CommentEntity })
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() comment: Comment,
    @Res() response: Response,
  ): Promise<Comment | void> {
    try {
      const commentProperties = Object.values(comment);
      commentProperties.map((propertie) => {
        if (propertie === '') {
          throw new HttpException(
            'All fields must be filled in.',
            HttpStatus.BAD_REQUEST,
          );
        }
      });
      const newComment = await this.commentServiceAdapter.save(comment);
      response.status(HttpStatus.CREATED).send(newComment);
      return;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  @ApiCreatedResponse({
    type: CommentEntity,
    isArray: true,
    description: 'Table of comments',
  })
  @Get()
  async getAll(@Res() response: Response): Promise<void> {
    try {
      const comments = await this.commentServiceAdapter.getAll();
      response.status(HttpStatus.OK).send(comments);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Get('search')
  async search(@Query('criteria') search: string[]) {
    try {
      if (typeof search === 'string') {
        return await this.commentServiceAdapter.search([search]);
      } else {
        return await this.commentServiceAdapter.search(search);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @ApiCreatedResponse({ type: CommentEntity, description: 'the comment' })
  @ApiNotFoundResponse()
  @Get(':id')
  async getOne(@Res() response: Response, @Param('id') commentId: string) {
    try {
      const comment = await this.commentServiceAdapter.getOne(commentId);
      return response.status(HttpStatus.OK).send(comment);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Delete(':id')
  async deleteUser(@Res() response: Response, @Param('id') commentId: string) {
    try {
      const res = await this.commentServiceAdapter.remove(commentId);
      response.status(HttpStatus.ACCEPTED).send(res);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Patch(':id')
  async updateComment(
    @Res() response: Response,
    @Param('id') commentId: string,
    @Body() comment: Partial<UserDomain>,
  ) {
    try {
      const commentUpdated = await this.commentServiceAdapter.update(
        commentId,
        comment,
      );
      response.status(HttpStatus.OK).send(commentUpdated);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('/test/protected')
  async getHello(@Request() req: any): Promise<any> {
    return req.user;
  }
}
