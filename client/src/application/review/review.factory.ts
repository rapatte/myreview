import { ReviewService } from 'domain/review/ReviewService';
import { reviewRepository } from 'infrastructure/review/review.repository';
import { HttpAxios } from 'infrastructure/util/httpAxios';

const repository = reviewRepository(HttpAxios);
const reviewServices = ReviewService(repository);
export default reviewServices;
