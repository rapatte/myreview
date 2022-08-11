import { ReviewDomain } from './review.domain';

export interface IReviewService {
  save(review: ReviewDomain): Promise<ReviewDomain>;
  getAll(): Promise<ReviewDomain[]>;
  remove(reviewId: string): Promise<string>;
  update(reviewId: string, review: ReviewDomain): Promise<ReviewDomain>;
  getOne(reviewId: string): Promise<ReviewDomain>;
  search(keywords: string[]): Promise<ReviewDomain[]>;
  getMovies(): Promise<ReviewDomain[]>;
  getSeries(): Promise<ReviewDomain[]>;
}
