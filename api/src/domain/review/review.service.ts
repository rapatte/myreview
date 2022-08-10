import { Inject, Injectable } from '@nestjs/common';
import { ReviewDomain } from './review.domain';
import { IReviewRepository } from './review.irepository';
import { IReviewService } from './review.iservice';

@Injectable()
export class ReviewService implements IReviewService {
  private reviewRepositoryAdapter: IReviewRepository;
  constructor(@Inject('IReviewRepository') reviewAdapter: IReviewRepository) {
    this.reviewRepositoryAdapter = reviewAdapter;
  }

  async save(review: ReviewDomain) {
    return await this.reviewRepositoryAdapter.save(review);
  }
  async getAll() {
    const reviews = await this.reviewRepositoryAdapter.getAll();
    if (reviews.length === 0) {
      throw new Error('No reviews in the database.');
    }
    return reviews;
  }
  async getOne(reviewId: string) {
    const review = await this.reviewRepositoryAdapter.getOne(reviewId);
    if (!review) {
      throw new Error('Review not found.');
    }
    return review;
  }
  async remove(reviewId: string) {
    const review = await this.reviewRepositoryAdapter.getOne(reviewId);
    if (!review) {
      throw new Error('Review not found or already deleted.');
    }
    return await this.reviewRepositoryAdapter.remove(reviewId);
  }
  async update(reviewId: string, review: Partial<ReviewDomain>) {
    const reviewFound = await this.reviewRepositoryAdapter.getOne(reviewId);
    if (!reviewFound) {
      throw new Error('Review not found.');
    }
    if (review === reviewFound) {
      throw new Error('Identical review or already modified.');
    }
    return await this.reviewRepositoryAdapter.update(reviewId, review);
  }
  async search(keywords: string[]) {
    const reviews = await this.reviewRepositoryAdapter.search(keywords);
    if (reviews.length === 0) {
      throw new Error('No reviews found.');
    }
    return reviews;
  }
  async getMovies() {
    const reviews = await this.reviewRepositoryAdapter.getMovies();
    if (reviews.length === 0) {
      throw new Error('No movie.');
    }
    return reviews;
  }
}
