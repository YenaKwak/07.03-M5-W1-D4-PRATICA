import React, { useState, useEffect } from "react";
import SingleBook from "./SingleBook";
import booksData from "../data/fantasy.json";

const AllTheBooks = ({ searchQuery, setSelectedAsin, selectedAsin }) => {
  const [books, setBooks] = useState(booksData);

  return (
    <>
      <div className="d-flex flex-wrap justify-content-start">
        {books
          .filter((book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((book) => (
            <SingleBook
              key={book.asin}
              book={book}
              setSelectedAsin={setSelectedAsin}
              isSelected={selectedAsin === book.asin}
            />
          ))}
      </div>
    </>
  );
};

export default AllTheBooks;
