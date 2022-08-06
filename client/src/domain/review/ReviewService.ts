import { Review } from './review';
import { IReviewRepository } from './review.irepository';

export const ReviewService = (
  repository: IReviewRepository,
): IReviewRepository => ({
  getReviews: (): Promise<Review[]> => {
    return repository.getReviews();
  },
  updateReview: (id, data): Promise<Review> => {
    return repository.updateReview(id, data);
  },
  deleteReview: (id): Promise<string> => {
    return repository.deleteReview(id);
  },
  addReview: (review: Review): Promise<Review> => {
    return repository.addReview(review);
  },

  reviewFiltred: (keywords: string[]): Promise<Review[]> => {
    return repository.reviewFiltred(keywords);
  },
  getAvailableReviews: (): Promise<Review[]> => {
    return repository.getAvailableReviews();
  },
  getByTitle: (title): Promise<any> => {
    return repository.getByTitle(title);
  },
});