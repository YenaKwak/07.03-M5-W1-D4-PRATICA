import React from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ comments, setComments }) => {
  const removeCommentFromList = (commentId) => {
    const updatedComments = comments.filter(
      (comment) => comment._id !== commentId
    );
    setComments(updatedComments);
  };

  return (
    <ListGroup>
      {comments.map((comment) => (
        <SingleComment
          key={comment._id}
          comment={comment}
          removeComment={removeCommentFromList}
        />
      ))}
    </ListGroup>
  );
};

export default CommentList;
