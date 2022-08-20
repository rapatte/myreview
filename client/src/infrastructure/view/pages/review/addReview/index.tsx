import React from 'react';
import { useState, useEffect } from 'react';
import { notifyError, notifySuccess } from 'utils/toastify';
import { reviewServices } from 'application';
import { ReviewForm } from 'infrastructure/view/components/organisms';
import { Review } from 'domain/review/review';
import { Link, useHistory, useParams } from 'react-router-dom';
import { reviewPost } from 'infrastructure/view/store/review/review.actions';
import { useReview } from 'infrastructure/view/hooks/UseReviews';

const AddReview: React.FC = () => {
  const [values, setValues] = useState<Review>({});
  const history = useHistory();
  const params: { id: string } = useParams();
  const reviewContext = useReview();

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      await reviewServices.addReview(values);
      reviewContext.dispatch(reviewPost(values));
      setValues({});
      history.push(`reviews/${params.id}`);
      notifySuccess('La review est enregistrée');
    } catch (error: any) {
      notifyError(error.response.data.message);
    }
  };

  // const getReviewById = () => {
  //   const catalog = reviewContext.state.catalog;
  //   const reviewSelected = catalog.filter(review => review.id === params.id);
  //   const [review] = reviewSelected;
  //   delete review.id;
  //   return review;
  // };

  // useEffect(() => {
  //   if (params.id) {
  //     const review = getReviewById();
  //     setValues(review);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
            title={'Ajouter une review'}
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
