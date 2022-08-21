import React from 'react';
import { useState } from 'react';
import { notifyError, notifySuccess } from 'utils/toastify';
import { reviewServices } from 'application';
import { ReviewForm } from 'infrastructure/view/components/organisms';
import { Review } from 'domain/review/review';
import { Link, useHistory } from 'react-router-dom';
import { reviewPost } from 'infrastructure/view/store/review/review.actions';
import { useReview } from 'infrastructure/view/hooks/UseReviews';

const AddReview: React.FC = () => {
  const [values, setValues] = useState<Review>({});

  const history = useHistory();
  const reviewContext = useReview();

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const newReview = await reviewServices.addReview(values);
      reviewContext.dispatch(reviewPost(values));
      setValues({});
      history.push(`details/${newReview.id}`);
      notifySuccess('Review registered');
    } catch (error: any) {
      notifyError('All fields must be filled');
    }
  };

  return (
    <>
      <div className="add-review-page">
        <div className="buttonSwitch">
          <Link to="/reviews">
            <img
              id="goBack"
              src="/goBack.png"
              alt="go back"
              className={'back-button-review'}
            />
          </Link>
        </div>
        <div>
          <ReviewForm
            type="add"
            title={'Add a review'}
            values={values}
            setValues={setValues}
            handleClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default AddReview;
