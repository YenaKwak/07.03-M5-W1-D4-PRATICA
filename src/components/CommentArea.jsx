import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      if (!asin) {
        // Added this check to avoid fetch if asin is null
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
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0YTJjZjljNDM3MDAwMTkzYzM1YzkiLCJpYXQiOjE3MTA3MTI2MTUsImV4cCI6MTcxMTkyMjIxNX0.KxMqpzMDhZ0iqUXLOyzujrO8UWGdIFzprpskaKctnbA",
            },
          }
        );
        if (!response.ok) throw new Error("Failed to fetch comments");
        const data = await response.json();
        setComments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [asin]);

  const handleCommentAdded = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      {isLoading && <div>Loading</div>}
      {error && <div>Error: {error}</div>}
      <CommentList comments={comments} />
      <AddComment asin={asin} onCommentAdded={handleCommentAdded} />
    </div>
  );
};

export default CommentArea;
