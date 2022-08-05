import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReviewDomain } from '../../domain/review/review.domain';
import { IReviewRepository } from '../../domain/review/review.irepository';
import Utils from '../../utils/Utils';
import {
  ReviewEntity,
  fromDomainToEntity,
  fromEntityToDomain,
} from './review.entity';

@Injectable()
export class ReviewRepositoryAdapter implements IReviewRepository {
  constructor(
    @InjectRepository(ReviewEntity)
    private readonly reviewEntityRepository: Repository<ReviewEntity>,
  ) {}

  async save(review: ReviewDomain): Promise<ReviewDomain> {
    const entityConvertedReview = fromDomainToEntity(review);
    const savedReview = await this.reviewEntityRepository.save(
      entityConvertedReview,
    );
    const domainConvertedReview = fromEntityToDomain(savedReview);
    return domainConvertedReview;
  }

  async getAll(): Promise<ReviewDomain[]> {
    const reviewList = await this.reviewEntityRepository.find();
    const domainConvertedList = reviewList.map(
      (review) => new ReviewDomain(review),
    );
    return domainConvertedList;
  }

  async remove(id: string): Promise<string> {
    await this.reviewEntityRepository.delete(id);
    return `Review supprimée.`;
  }

  async update(
    id: string,
    review: Partial<ReviewDomain>,
  ): Promise<ReviewDomain> {
    const reviewFound = await this.reviewEntityRepository.findOne({
      id,
    });
    const reviewUpdated = await this.reviewEntityRepository.save({
      ...reviewFound,
      ...review,
    });
    const domainConvertedReview = fromEntityToDomain(reviewUpdated);
    return domainConvertedReview;
  }

  async getOne(id: string): Promise<any> {
    const reviewFound = await this.reviewEntityRepository.findOne({
      id,
    });
    const domainConvertedReview = fromEntityToDomain(reviewFound);
    return domainConvertedReview;
  }

  async search(keywords: string[]): Promise<ReviewDomain[]> {
    const request = await this.searchByElement(keywords);

    const reviews: ReviewEntity[] = Utils.removeDuplicateObject(request);

    return reviews.map((review) => new ReviewDomain(review));
  }

  async searchByElement(array: Array<any>) {
    const elements: any[] = [];
    await Promise.all(
      array.map(async (element) => {
        const request: Array<string | number | object> =
          await this.reviewEntityRepository
            .createQueryBuilder('review')
            .where('LOWER(title) LIKE :title', {
              title: `%${element.toLowerCase()}%`,
            })
            .orWhere('LOWER(casting) LIKE :casting', {
              casting: `%${element.toLowerCase()}%`,
            })
            .orWhere('LOWER(genre) LIKE :genre', {
              genre: `%${element.toLowerCase()}%`,
            })
            .orWhere('LOWER(category) LIKE :category', {
              category: `%${element.toLowerCase()}%`,
            })
            .getMany();
        request.forEach((req) => elements.push(req));
      }),
    );
    return elements;
  }

  async getMovies() {
    const reviews = await this.reviewEntityRepository.find({
      where: {
        category: 'movie',
      },
    });
    return reviews.map((review) => fromEntityToDomain(review));
  }
}
