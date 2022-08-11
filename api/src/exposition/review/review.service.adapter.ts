import { Injectable } from '@nestjs/common';
import { ReviewDomain } from '../../domain/review/review.domain';
import { ReviewService } from '../../domain/review/review.service';
import { Review } from '../../types/Review';

@Injectable()
export class ReviewServiceAdapter {
  private reviewService: ReviewService;
  constructor(reviewService: ReviewService) {
    this.reviewService = reviewService;
  }

  public async save(review: Review): Promise<ReviewDomain> {
    const reviewDomain = new ReviewDomain(review);
    return this.reviewService.save(reviewDomain);
  }
  public async getAll(): Promise<ReviewDomain[]> {
    return this.reviewService.getAll();
  }
  public async getOne(reviewId: string): Promise<ReviewDomain> {
    return this.reviewService.getOne(reviewId);
  }
  public async remove(reviewId: string): Promise<string> {
    return this.reviewService.remove(reviewId);
  }
  public async update(
    reviewId: string,
    review: Partial<ReviewDomain>,
  ): Promise<ReviewDomain> {
    return this.reviewService.update(reviewId, review);
  }
  public async search(keywords: string[]): Promise<ReviewDomain[]> {
    return this.reviewService.search(keywords);
  }
  public async getMovie(): Promise<ReviewDomain[]> {
    return this.reviewService.getMovies();
  }
  public async getSerie(): Promise<ReviewDomain[]> {
    return this.reviewService.getSeries();
  }
}
