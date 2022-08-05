import { Review } from 'domain/review/review';
import axios from 'axios';

import { IReviewRepository } from 'domain/review/review.irepository';
import { ReviewDTO } from './review.dto';
import { Http } from 'infrastructure/util/Http';

export const reviewRepository = (client: Http): IReviewRepository => ({
  getReviews: async () => {
    const reviews = await client.get<ReviewDTO[]>('/reviews');

    return reviews.map(
      (ReviewDTO): Review => ({
        id: ReviewDTO.id,
        title: ReviewDTO.title,
        profile: ReviewDTO.profile,
        client: ReviewDTO.client,
        description: ReviewDTO.description,
        isActive: ReviewDTO.isActive,
      }),
    );
  },
  updateReview: async (id, data) => {
    const reviewUpdated = await client.patch<ReviewDTO>(`/reviews/${id}`, data);
    return reviewUpdated;
  },
  deleteReview: async id => {
    const reviewDeleted = await client.delete<String>(`/reviews/${id}`);

    return reviewDeleted;
  },
  addReview: async (review: Review) => {
    const postReview = await client.post<ReviewDTO>('/reviews', review);

    return postReview;
  },

  reviewFiltred: async (keywords: string[]) => {
    const parameterizeArray = (key, arr) => {
      arr = arr.map(encodeURIComponent);
      return '?criteria=' + arr.join(`&${key}=`);
    };
    const url = '/reviews/search/' + parameterizeArray('criteria', keywords);

    const reviewFiltred = await client.get<ReviewDTO[]>(url);
    return reviewFiltred.map(
      (reviewDTO): Review => ({
        id: reviewDTO.id,
        title: reviewDTO.title,
        profile: reviewDTO.profile,
        client: reviewDTO.client,
        description: reviewDTO.description,
        isActive: reviewDTO.isActive,
      }),
    );
  },
  getAvailableReviews: async () => {
    const reviews = await client.get<ReviewDTO[]>('reviews/available');
    return reviews.map(
      (reviewDTO): Review => ({
        id: reviewDTO.id,
        title: reviewDTO.title,
        profile: reviewDTO.profile,
        client: reviewDTO.client,
        description: reviewDTO.description,
        isActive: reviewDTO.isActive,
      }),
    );
  },
  getByTitle: async title => {
    const options: any = {
      method: 'GET',
      url: 'https://movie-database-alternative.p.rapidapi.com/',
      params: { t: title, r: 'json', page: '1' },
      headers: {
        'X-RapidAPI-Key': '470c8ec277msh3667b1455217e32p1ac1bajsndf884baa2024',
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
      },
    };
    return await client.request(options);
  },
});
