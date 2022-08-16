import React from 'react';
import { useState, useEffect } from 'react';
import { notifyError, notifySuccess } from 'utils/toastify';
import { reviewServices } from 'application';
import { ReviewForm } from 'infrastructure/view/components';
import { Review } from 'domain/review/review';
import { Link, useHistory, useParams } from 'react-router-dom';
import { reviewUpdate } from 'infrastructure/view/store/review/review.actions';
import { useReview } from 'infrastructure/view/hooks/UseReviews';

const UpdateReview: React.FC = () => {
  const [values, setValues] = useState<Review>({});
  const history = useHistory();
  const params: { id: string } = useParams();
  const reviewContext = useReview();

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      await reviewServices.updateReview(params.id, values);
      reviewContext.dispatch(reviewUpdate(values));
      setValues({});
      history.push('/reviews/');
      notifySuccess('La review est mise à jour');
    } catch (error: any) {
      notifyError(error.response.data.message);
    }
  };

  const getReviewById = () => {
    const catalog = reviewContext.state.catalog;
    const data = catalog.filter(data => data.id === params.id);
    const [review] = data;
    return review;
  };

  useEffect(() => {
    const review = getReviewById();
    setValues(review);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="update-mission-page">
        <div className="buttonSwitch">
          <Link to="/reviews">
            <img
              id="goBack"
              src="/goBack.png"
              alt="go back"
              className={'back-button-mission'}
            />
          </Link>
        </div>
        <div>
          <ReviewForm
            type="update"
            title="Update a review"
            values={values}
            setValues={setValues}
            handleClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};
export default UpdateReview;
