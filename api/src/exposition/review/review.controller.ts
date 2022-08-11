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
import { Review } from '../../types/Review';
import { ReviewDomain } from '../../domain/review/review.domain';
import { ReviewEntity } from '../../infrastructure/review/review.entity';
import { ReviewServiceAdapter } from './review.service.adapter';
@ApiTags('Reviews')
@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewServiceAdapter: ReviewServiceAdapter) {}
  @ApiCreatedResponse({ type: ReviewEntity })
  @Post()
  async create(
    @Body() review: Review,
    @Res() response: Response,
  ): Promise<Review | void> {
    try {
      const reviewProperties = Object.values(review);

      reviewProperties.map((propertie) => {
        if (propertie === '') {
          throw new HttpException(
            'All fields must be filled in.',
            HttpStatus.BAD_REQUEST,
          );
        }
      });

      const newReview = await this.reviewServiceAdapter.save(review);

      response.status(HttpStatus.CREATED).send(newReview);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  @ApiCreatedResponse({
    type: ReviewEntity,
    isArray: true,
    description: 'Table of reviews',
  })
  @Get()
  async getAll(@Res() response: Response): Promise<void> {
    try {
      const reviews = await this.reviewServiceAdapter.getAll();
      response.status(HttpStatus.OK).send(reviews);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Get('movie')
  async getMovie(@Res() response: Response): Promise<void> {
    try {
      const reviews = await this.reviewServiceAdapter.getMovie();
      response.status(HttpStatus.OK).send(reviews);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Get('serie')
  async getSerie(@Res() response: Response): Promise<void> {
    try {
      const reviews = await this.reviewServiceAdapter.getSerie();
      response.status(HttpStatus.OK).send(reviews);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Get('search')
  async search(@Query('criteria') search: string[]) {
    try {
      if (typeof search === 'string') {
        return await this.reviewServiceAdapter.search([search]);
      } else {
        return await this.reviewServiceAdapter.search(search);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @ApiCreatedResponse({ type: ReviewEntity, description: 'the review' })
  @ApiNotFoundResponse()
  @Get(':id')
  async getOne(@Res() response: Response, @Param('id') reviewId: string) {
    try {
      const review = await this.reviewServiceAdapter.getOne(reviewId);
      return response.status(HttpStatus.OK).send(review);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  async deleteReview(@Res() response: Response, @Param('id') reviewId: string) {
    try {
      const res = await this.reviewServiceAdapter.remove(reviewId);
      response.status(HttpStatus.ACCEPTED).send(res);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Patch(':id')
  async updateReview(
    @Res() response: Response,
    @Param('id') reviewId: string,
    @Body() review: Partial<ReviewDomain>,
  ) {
    try {
      const reviewUpdated = await this.reviewServiceAdapter.update(
        reviewId,
        review,
      );
      response.status(HttpStatus.OK).send(reviewUpdated);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
