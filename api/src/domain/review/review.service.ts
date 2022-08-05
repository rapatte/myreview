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
      throw new Error('Aucune review dans la base de données.');
    }
    return reviews;
  }
  async getOne(reviewId: string) {
    const review = await this.reviewRepositoryAdapter.getOne(reviewId);
    if (!review) {
      throw new Error('Review introuvable.');
    }
    return review;
  }
  async remove(reviewId: string) {
    const review = await this.reviewRepositoryAdapter.getOne(reviewId);
    if (!review) {
      throw new Error('Review introuvable ou déjà supprimée.');
    }
    return await this.reviewRepositoryAdapter.remove(reviewId);
  }
  async update(reviewId: string, review: Partial<ReviewDomain>) {
    const reviewFound = await this.reviewRepositoryAdapter.getOne(reviewId);
    if (!reviewFound) {
      throw new Error('Review introuvable.');
    }
    if (review === reviewFound) {
      throw new Error('Review identique ou déjà modifiée.');
    }
    return await this.reviewRepositoryAdapter.update(reviewId, review);
  }
  async search(keywords: string[]) {
    const reviews = await this.reviewRepositoryAdapter.search(keywords);
    if (reviews.length === 0) {
      throw new Error('Aucune correspondance.');
    }
    return reviews;
  }
  async getAvailable() {
    const reviews = await this.reviewRepositoryAdapter.getAvailable();
    if (reviews.length === 0) {
      throw new Error('Aucune review disponible.');
    }
    return reviews;
  }
}
