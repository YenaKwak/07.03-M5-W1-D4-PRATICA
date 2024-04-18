import React, { useState } from "react";
import { Button, ListGroup, Form } from "react-bootstrap";

const SingleComment = ({ comment, removeComment, editComment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    const updatedComment = {
      ...comment,
      comment: editedComment,
    };
    await editComment(comment._id, updatedComment);
    setIsEditing(false);
  };

  const deleteComment = async (commentId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (!isConfirmed) return;

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0YTJjZjljNDM3MDAwMTkzYzM1YzkiLCJpYXQiOjE3MTM0NDAwMzYsImV4cCI6MTcxNDY0OTYzNn0.5sS13zTSNSBq8keYmzeGkv4lcEpwxt2zYWjAVVfNWms",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.text(); // 서버로부터 오류 내용을 받아옴
        throw new Error(errorData || "Failed to delete the comment.");
      }

      alert("Comment has been deleted!");
      removeComment(commentId);
    } catch (error) {
      console.error("Error deleting comment: ", error);
      alert("Error deleting comment: " + error.message);
    }
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {isEditing ? (
        <Form.Control
          as="textarea"
          value={editedComment}
          onChange={(e) => setEditedComment(e.target.value)}
        />
      ) : (
        <div>
          {comment.comment}
          <br />
          <strong>rate:</strong> {comment.rate}
        </div>
      )}
      <div>
        {isEditing ? (
          <Button variant="success" onClick={handleSave}>
            Save
          </Button>
        ) : (
          <Button variant="secondary" onClick={handleEdit}>
            Edit
          </Button>
        )}
        <Button variant="danger" onClick={() => deleteComment(comment._id)}>
          Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default SingleComment;
