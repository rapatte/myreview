import { Review } from 'domain/review/review';

import { IReviewRepository } from 'domain/review/review.irepository';
import { ReviewDTO } from './review.dto';
import { Http } from 'infrastructure/util/Http';

export const reviewRepository = (client: Http): IReviewRepository => ({
  getReviews: async () => {
    const reviews = await client.get<ReviewDTO[]>('/reviews');

    return reviews.map(
      (reviewDTO): Review => ({
        id: reviewDTO.id,
        title: reviewDTO.title,
        score: reviewDTO.score,
        poster: reviewDTO.poster,
        synopsis: reviewDTO.synopsis,
        trailer: reviewDTO.trailer,
        casting: reviewDTO.casting,
        genre: reviewDTO.genre,
        category: reviewDTO.category,
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
        score: reviewDTO.score,
        poster: reviewDTO.poster,
        synopsis: reviewDTO.synopsis,
        trailer: reviewDTO.trailer,
        casting: reviewDTO.casting,
        genre: reviewDTO.genre,
        category: reviewDTO.category,
      }),
    );
  },
  getMovieReviews: async () => {
    const reviews = await client.get<ReviewDTO[]>('reviews/movie');
    return reviews.map(
      (reviewDTO): Review => ({
        id: reviewDTO.id,
        title: reviewDTO.title,
        score: reviewDTO.score,
        poster: reviewDTO.poster,
        synopsis: reviewDTO.synopsis,
        trailer: reviewDTO.trailer,
        casting: reviewDTO.casting,
        genre: reviewDTO.genre,
        category: reviewDTO.category,
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
