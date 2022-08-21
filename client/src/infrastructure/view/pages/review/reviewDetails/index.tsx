/* eslint-disable react-hooks/exhaustive-deps */
import { reviewServices, commentServices } from 'application';
import { Review } from 'domain/review/review';
import { Comment } from 'domain/comment/comment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from 'infrastructure/view/components/organisms/forms/commentForm/commentForm';
import { notifyError, notifySuccess } from 'utils/toastify';

const ReviewDetails = () => {
  const [values, setValues] = useState<Review>({});
  const params = useParams<any>();
  const [review, setReview] = useState<Review>({});
  const [comments, setComments] = useState<Comment[]>();
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
      setValues({});
      notifySuccess('Comment posted');
    } catch (error: any) {
      console.log(error.response);

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
      {comments?.map(comment => {
        return comment.content;
      })}
      {error}
      <CommentForm
        values={values}
        setValues={setValues}
        handleClick={handleSubmit}
        type="add"
        title="Post a comment (must be logged in)"
      />
    </>
  );
};

export default ReviewDetails;
