import React, { useEffect, useState } from 'react';
import { Review } from 'domain/review/review';
import { useReview } from 'infrastructure/view/hooks/UseReviews';
import { reviewList } from 'infrastructure/view/store/review/review.actions';
import { Checkbox, Title } from 'infrastructure/view/components/atoms';
import { Card, ReviewCard } from '../../../molecules';
import { reviewServices } from 'application';

function ListingReviewCards() {
  const reviewContext = useReview();
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [catalog, setCatalog] = useState<Review[]>();

  const handleChange = () => {
    setChecked(!checked);
  };
  const getMoviesOnly = async () => {
    if (checked) {
      try {
        await reviewServices.getMovieReviews().then(data => {
          reviewContext.dispatch(reviewList(data));
        });
        setError('');
      } catch (error: any) {
        setError(error.response.data.message);
      }
    } else {
      await reviewServices.getReviews().then(data => {
        reviewContext.dispatch(reviewList(data));
      });
      setError('');
    }
  };

  useEffect(() => {
    setCatalog(reviewContext.state.catalog);
  }, [reviewContext.state.catalog]);

  useEffect(() => {
    getMoviesOnly();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <div className="container">
      <Title label="Les Reviews" format="h2" />
      <Checkbox
        checked={checked}
        onChange={handleChange}
        error={error}
        label="Only movies"
      />
      <ul className="container__cards">
        {catalog && catalog.length > 0
          ? catalog.map((review, index) => (
              <Card key={index} id={review.id}>
                <ReviewCard key={review.id} review={review} />
              </Card>
            ))
          : 'Chargement'}
      </ul>
    </div>
  );
}

export default ListingReviewCards;
