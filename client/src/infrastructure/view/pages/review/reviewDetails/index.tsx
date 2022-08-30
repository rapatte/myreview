/* eslint-disable react-hooks/exhaustive-deps */
import { reviewServices, commentServices } from 'application';
import { Review } from 'domain/review/review';
import { Comment } from 'domain/comment/comment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CommentForm } from 'infrastructure/view/components';
import { notifyError, notifySuccess } from 'utils/toastify';
import { UseUser } from 'infrastructure/view/hooks/UseUsers';

const ReviewDetails = () => {
  const [values, setValues] = useState<Review>({});
  const userContext = UseUser();
  const params = useParams<any>();
  const [review, setReview] = useState<Review>({});
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState<any>();
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
      getComments();
    } catch (error: any) {
      if (!userContext.state.catalog) {
        notifyError('You must be logged in.');
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
      {review.title}
      {/* {comments?.map(comment => {
        <CommentCard props={comment} />;
      })} */}
      {error}
      <CommentForm
        values={values}
        setValues={setValues}
        handleClick={handleSubmit}
        id={params.id}
        type="add"
      />
    </>
  );
};

export default ReviewDetails;
