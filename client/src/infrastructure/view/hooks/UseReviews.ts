import { useContext } from 'react';
import { ReviewStateContext } from '../store/review/reviewContext';

export const useReview = () => {
  const context = useContext(ReviewStateContext);
  if (context === undefined) {
    throw new Error('NONE');
  }
  return context;
};
