import React, { useState } from "react";

export default function AddComment({ asin, onCommentAdded }) {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify({
            comment: comment,
            rate: rate,
            elementId: asin,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0YTJjZjljNDM3MDAwMTkzYzM1YzkiLCJpYXQiOjE3MTM0Mzg5NDMsImV4cCI6MTcxNDY0ODU0M30.RMpTPfKT_526d8XK7g8WWozEsL7o0XM8QvJxqKGDttw",
          },
        }
      );
      if (!response.ok) throw new Error("Failed to post comment");

      const addedComment = await response.json();
      onCommentAdded(addedComment);

      setComment("");
      setRate(1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <select value={rate} onChange={(e) => setRate(e.target.value)}>
        {[1, 2, 3, 4, 5].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
