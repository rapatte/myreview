/* eslint-disable react-hooks/exhaustive-deps */
import { reviewServices, commentServices } from 'application';
import { Review } from 'domain/review/review';
import { Comment } from 'domain/comment/comment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewDetails = () => {
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
    </>
  );
};

export default ReviewDetails;
