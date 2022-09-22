/* eslint-disable react-hooks/exhaustive-deps */
import { reviewServices, commentServices } from 'application';
import { Review } from 'domain/review/review';
import { Comment } from 'domain/comment/comment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CommentForm } from 'infrastructure/view/components';
import { notifyError, notifySuccess } from 'utils/toastify';
import { UseUser } from 'infrastructure/view/hooks/UseUsers';
import ListingComment from 'infrastructure/view/components/organisms/cardLists/comment/ListingComment';
import './index.scss';

const ReviewDetails = () => {
  const [values, setValues] = useState<Review>({});
  const userContext = UseUser();
  const params = useParams<any>();
  const [review, setReview] = useState<Review>({});
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState<any>();
  const reviewId = params.id;

  const getReview = async () => {
    setReview(await reviewServices.getOneReview(params.id));
  };
  const getComments = async () => {
    try {
      const commentsReceived = await commentServices.getCommentsReview(
        params.id,
      );
      setComments(commentsReceived);
    } catch (e: any) {
      setError(e.response.data.message);
    }
  };

  useEffect(() => {
    getReview();
  }, []);

  useEffect(() => {
    getComments();
  }, []);

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      await commentServices.addComment(values);
      notifySuccess('Comment posted');
      setError('');
      getComments();
    } catch (error: any) {
      if (!userContext.state.user) {
        notifyError('You must be logged in.');
        return;
      }
      notifyError(error.response.data.message);
    }
  };

  return (
    <>
      <iframe
        title="Trailer"
        src={review.trailer?.replace('watch?v=', 'embed/')}
      />
      {review.title} SCORE : {review.score}
      {error}
      <ListingComment reviewId={reviewId} />
      {/* <CommentForm
        values={values}
        setValues={setValues}
        handleClick={handleSubmit}
        id={params.id}
        type="add"
      /> */}
    </>
  );
};

export default ReviewDetails;
