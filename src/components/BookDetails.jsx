import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import booksData from "../data/fantasy.json";

export default function BookDetails() {
  const { asin } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const foundBook = booksData.find((b) => b.asin === asin);
    setBook(foundBook);
  }, [asin]);

  if (!book) {
    return <h4>Loading book details...</h4>;
  }

  return (
    <div>
      <div className="container text-center">
        <h4 className="fw-bold">{book.title}</h4>
        <p className="mt-4">ASIN: {book.asin}</p>
        <p>Price: ${book.price}</p>
        <p>Category: {book.category}</p>
        <img
          src={book.img}
          alt={book.title}
          style={{ maxWidth: "500px" }}
          className="my-4"
        />
      </div>
    </div>
  );
}
