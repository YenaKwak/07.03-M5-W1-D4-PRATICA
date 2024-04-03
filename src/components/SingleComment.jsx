import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment, removeComment }) => {
  const deleteComment = async (commentId) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0YTJjZjljNDM3MDAwMTkzYzM1YzkiLCJpYXQiOjE3MTIwNzkxNzMsImV4cCI6MTcxMzI4ODc3M30.hays_4CvoKZmBVdKLeOX4hQWxA6NwlAyXNcOSNQBqYo",
          },
        }
      );
      if (response.ok) {
        alert("Comment has been deleted!");
        removeComment(commentId);
      } else {
        throw new Error("There was an error deleting comment.");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>
        {comment.comment}
        <br />
        <strong>rate:</strong> {comment.rate}
      </div>
      <Button variant="danger" onClick={() => deleteComment(comment._id)}>
        delete
      </Button>
    </ListGroup.Item>
  );
};
export default SingleComment;
