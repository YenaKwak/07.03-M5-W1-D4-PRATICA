import React from 'react'
import SingleComment from './SingleComment'

export default function CommentList({comments}) {
  return (
    <ul>
      {comments.map((comment, index) => (
        <SingleComment key={index} comment={comment} />
      ))}
    </ul>
  );
};
