import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      if (!asin) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/books/${asin}/comments`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0YTJjZjljNDM3MDAwMTkzYzM1YzkiLCJpYXQiOjE3MTM0Mzg5NDMsImV4cCI6MTcxNDY0ODU0M30.RMpTPfKT_526d8XK7g8WWozEsL7o0XM8QvJxqKGDttw",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setComments(data);
          setIsLoading(false);
          setError(false);
        } else {
          setIsLoading(false);
          setError(true);
        }
      } catch (error) {
        setIsLoading(false);
        setError(true);
      }
    };

    fetchComments();
  }, [asin]);

  const handleCommentAdded = (newComment) => {
    setComments([...comments, newComment]);
  };

  const editComment = async (commentId, updatedComment) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedComment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0YTJjZjljNDM3MDAwMTkzYzM1YzkiLCJpYXQiOjE3MTM0Mzg5NDMsImV4cCI6MTcxNDY0ODU0M30.RMpTPfKT_526d8XK7g8WWozEsL7o0XM8QvJxqKGDttw",
          },
        }
      );
      if (response.ok) {
        const updatedData = await response.json();
        const newComments = comments.map((comment) =>
          comment._id === commentId ? updatedData : comment
        );
        setComments(newComments);
      } else {
        throw new Error("Failed to edit comment");
      }
    } catch (error) {
      console.error("Error editing comment", error);
    }
  };

  return (
    <div>
      {isLoading && <Loading />}
      {error && <Error />}
      <CommentList
        comments={comments}
        setComments={setComments}
        editComment={editComment}
      />
      {asin && <AddComment asin={asin} onCommentAdded={handleCommentAdded} />}
    </div>
  );
};

export default CommentArea;
