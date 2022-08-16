import React, { useEffect, useState } from 'react';
import { useReview } from 'infrastructure/view/hooks/UseReviews';
import { Review } from 'domain/review/review';

function ReviewCardDetails({ id }) {
  const reviewContext: any = useReview();
  const [review, setReview] = useState<Review>({});

  useEffect(() => {
    const missionSelected = reviewContext.state.catalog.filter(
      (mission: Review) => mission.id === id,
    );
    setReview(missionSelected[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="details__mission">
      <h3>Review</h3>
      <div className="details__mission__title">Titre : {review.title}</div>
      <div className="details__mission__profil">
        Profil recherché : {review.score}
      </div>
      <div className="details__mission__client">Client : {review.poster}</div>
      <div className="details__mission__description">
        Description : {review.synopsis}
      </div>
    </div>
  );
}

export default ReviewCardDetails;
