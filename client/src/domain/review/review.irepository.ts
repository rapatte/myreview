import { Review } from './review';

export interface IReviewRepository {
  getReviews: () => Promise<Review[]>;
  updateReview: (id: string, data: Review) => Promise<Review>;
  deleteReview: (id: string) => Promise<string>;
  addReview: (mission: Review) => Promise<Review>;
  reviewFiltred: (keywords: string[]) => Promise<Review[]>;
  getMovieReviews: () => Promise<Review[]>;
  getByTitle: (title: string) => Promise<any>;
  getOneReview: (id: string) => Promise<Review>;
  getIdTrailer: (title: string) => Promise<any>;
}
