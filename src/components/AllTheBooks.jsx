import React, { useState, useEffect } from "react";
import SingleBook from "./SingleBook";

const AllTheBooks = ({ searchQuery, setSelectedAsin, selectedAsin }) => {
  const [books, setBooks] = useState([]); // 책데이터를 저장하기위해..

  useEffect(() => {
    fetch("/books/fantasy.json")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.log(error));
  }, []); // 딱 한번만 렌더링되게..

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
