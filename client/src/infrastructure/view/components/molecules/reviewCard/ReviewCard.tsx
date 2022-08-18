import React from 'react';
import { CardMenu } from '..';

function ReviewCard({ review }) {
  return (
    <div className="card__content">
      <div className="card__header">
        <CardMenu id={review.id} />
        <h3 className="card__header__title">
          {review.title.length > 15
            ? review.title.substr(0, 13) + '...'
            : review.title}
        </h3>
      </div>
      <p className="card__client">{review.score}</p>
      <img
        className="card__illustration"
        src={review.poster}
        alt="illustration"
      />
    </div>
  );
}

export default ReviewCard;
