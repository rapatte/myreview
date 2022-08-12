import { Review } from 'domain/review/review';
import { useAsyncReducer } from 'infrastructure/view/hooks';
import * as React from 'react';
import { reviewReducer } from './reviewReducer';
import { Dispatch, ProviderProps, State } from '../types/storeTypes';

export const ReviewStateContext = React.createContext<
  { state: State<Review>; dispatch: Dispatch } | undefined
>(undefined);

const initialState: State<Review> = {
  catalog: [],
};

function ReviewProvider({ children }: ProviderProps) {
  const [state, dispatch] = useAsyncReducer(reviewReducer, initialState);
  const value = { state, dispatch };
  return (
    <ReviewStateContext.Provider value={value}>
      {children}
    </ReviewStateContext.Provider>
  );
}

export { ReviewProvider };
