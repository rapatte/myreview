import React, { useEffect } from 'react';
import { SearchBar, ListingReviewCards } from 'infrastructure/view/components';
import { useReview } from 'infrastructure/view/hooks/UseReviews';
import { reviewServices } from 'application';
import { reviewList } from 'infrastructure/view/store/review/review.actions';

const Reviews = () => {
  const { dispatch } = useReview();
  useEffect(() => {
    reviewServices.getReviews().then(data => dispatch(reviewList(data)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SearchBar placeholder="Search a review" />
      <ListingReviewCards />
    </>
  );
};

export default Reviews;
