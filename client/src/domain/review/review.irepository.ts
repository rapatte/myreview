import { Review } from './review';

export interface IReviewRepository {
  getReviews: () => Promise<Review[]>;
  updateReview: (id: string, data: Review) => Promise<Review>;
  deleteReview: (id: string) => Promise<string>;
  addReview: (mission: Review) => Promise<Review>;
  reviewFiltred: (keywords: string[]) => Promise<Review[]>;
  getAvailableReviews: () => Promise<Review[]>;
  getByTitle: (title) => Promise<any>;
}
