import { Review } from 'domain/review/review';

export const reviewList = (data: Review[]) => {
  return {
    type: 'display-list-reviews',
    payload: data,
  };
};

export const reviewUpdate = (data: Review) => {
  return {
    type: 'update-review',
    payload: data,
  };
};
export const getOneReview = (data: Review) => {
  return {
    type: 'getOneReview',
    payload: data,
  };
};
export const reviewPost = (data: Review) => {
  return {
    type: 'add-review',
    payload: data,
  };
};
export const reviewFilter = (data: Review[]) => {
  return {
    type: 'filtre-review',
    payload: data,
  };
};
export const reviewDelete = id => {
  return {
    type: 'delete-review',
    payload: id,
  };
};
