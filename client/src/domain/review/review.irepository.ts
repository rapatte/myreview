import { Review } from './review';

export interface IReviewRepository {
  getReviews: () => Promise<Review[]>;
  updateReview: (id: string, data: Review) => Promise<Review>;
  deleteReview: (id: string) => Promise<string>;
  addReview: (mission: Review) => Promise<Review>;
  reviewFiltred: (keywords: string[]) => Promise<Review[]>;
  getMovieReviews: () => Promise<Review[]>;
  getByTitle: (title) => Promise<any>;
  getOneReview: (id) => Promise<Review>;
  getIdTrailer: (title) => Promise<any>;
}
