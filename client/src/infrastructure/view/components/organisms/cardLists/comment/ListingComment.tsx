import React, { useState, useEffect } from 'react';
import './ListingComment.scss';

import Comment from 'infrastructure/view/components/molecules/comment/Comment';
import AddComment from 'infrastructure/view/components/molecules/comment/AddComment';
import { commentServices } from 'application';

const ListingComment = reviewId => {
  const [comments, updateComments] = useState<any>([]);
  const [error, setError] = useState('');
  const [deleteModalState, setDeleteModalState] = useState(false);

  const getComments = async () => {
    // const res = await fetch('./data/data.json');
    // const data = await res.json();
    // updateComments(data.comments);
    try {
      const commentsReceived = await commentServices.getCommentsReview(
        reviewId,
      );
      updateComments(commentsReceived);
    } catch (e: any) {
      setError(e.response.data.message);
    }
  };

  useEffect(() => {
    // localStorage.getItem('comments') !== null
    //   ? updateComments(JSON.parse(localStorage.getItem('comments')))
    //   : getData();
    getComments();
  }, []);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
    deleteModalState
      ? document.body.classList.add('overflow--hidden')
      : document.body.classList.remove('overflow--hidden');
  }, [comments, deleteModalState]);

  // update score
  let updateScore = (score, id, type) => {
    let updatedComments = [...comments];

    if (type === 'comment') {
      updatedComments.forEach(data => {
        if (data.id === id) {
          data.score = score;
        }
      });
    } else if (type === 'reply') {
      updatedComments.forEach(comment => {
        comment.replies.forEach(data => {
          if (data.id === id) {
            data.score = score;
          }
        });
      });
    }
    updateComments(updatedComments);
  };

  // add comments
  let addComments = newComment => {
    let updatedComments = [...comments, newComment];
    updateComments(updatedComments);
  };

  // add replies
  let updateReplies = (replies, id) => {
    let updatedComments = [...comments];
    updatedComments.forEach(data => {
      if (data.id === id) {
        data.replies = [...replies];
      }
    });
    updateComments(updatedComments);
  };

  // edit comment
  let editComment = (content, id, type) => {
    let updatedComments = [...comments];

    if (type === 'comment') {
      updatedComments.forEach(data => {
        if (data.id === id) {
          data.content = content;
        }
      });
    } else if (type === 'reply') {
      updatedComments.forEach(comment => {
        comment.replies.forEach(data => {
          if (data.id === id) {
            data.content = content;
          }
        });
      });
    }

    updateComments(updatedComments);
  };

  // delete comment
  let commentDelete = (id, type, parentComment) => {
    let updatedComments = [...comments];
    let updatedReplies = [];

    if (type === 'comment') {
      updatedComments = updatedComments.filter(data => data.id !== id);
    } else if (type === 'reply') {
      comments.forEach(comment => {
        if (comment.id === parentComment) {
          updatedReplies = comment.replies.filter(data => data.id !== id);
          comment.replies = updatedReplies;
        }
      });
    }

    updateComments(updatedComments);
  };

  return (
    <main className="Comment-Section">
      {comments.map(comment => (
        <Comment
          key={comment.id}
          commentData={comment}
          updateScore={updateScore}
          updateReplies={updateReplies}
          editComment={editComment}
          commentDelete={commentDelete}
          setDeleteModalState={setDeleteModalState}
        />
      ))}
      <AddComment
        buttonValue={'send'}
        addComments={addComments}
        replyingTo={undefined}
      />
    </main>
  );
};

export default ListingComment;
