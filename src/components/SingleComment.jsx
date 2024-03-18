import React from 'react';

const SingleComment = ({ comment }) => {
  return (
    <div>
      <p>{comment.comment}</p>
      <p>Rating: {comment.rate}</p>
    </div>
  );
};

export default SingleComment;