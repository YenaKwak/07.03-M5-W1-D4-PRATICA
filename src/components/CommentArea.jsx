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
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0YTJjZjljNDM3MDAwMTkzYzM1YzkiLCJpYXQiOjE3MTA3MTI2MTUsImV4cCI6MTcxMTkyMjIxNX0.KxMqpzMDhZ0iqUXLOyzujrO8UWGdIFzprpskaKctnbA",
            },
          }
        );
        console.log(response);
        if (response.ok) {
          let comments = await response.json();
          setComments(comments);
          setIsLoading(false);
          setError(false);
        } else {
          console.log("error");
          setIsLoading(false);
          setError(true);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setError(true);
      }
    };

    fetchComments();
  }, [asin]);

  const handleCommentAdded = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      {isLoading && <Loading />}
      {error && <Error />}
      <CommentList comments={comments} setComments={setComments} />
      <AddComment asin={asin} onCommentAdded={handleCommentAdded} />
    </div>
  );
};

export default CommentArea;
