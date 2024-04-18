import React from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ comments, setComments, editComment }) => {
  // editComment를 props로 받음
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
          editComment={editComment} // SingleComment에 editComment를 전달
        />
      ))}
    </ListGroup>
  );
};

export default CommentList;
