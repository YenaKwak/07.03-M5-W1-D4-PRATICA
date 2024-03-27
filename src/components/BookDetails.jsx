import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { asin } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch("/books/fantasy.json");
        const books = await response.json();
        const foundBook = books.find((book) => book.asin === asin);
        setBook(foundBook);
      } catch (error) {
        console.error(
          "Failed to fetch book details. 책 디테일을 불러오지 못함",
          error
        );
      }
    };

    fetchBookDetails();
  }, [asin]);

  if (!book) {
    return <h4>Loading book details!</h4>;
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
