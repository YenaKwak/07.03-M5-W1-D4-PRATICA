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

// <div className="container mt-5">
// <div className="row">
//     {books.map((book, index) => (
//         <div key={index} className="col-xl-3 col-lg-6 col-md-6 col-sm-12 my-5">
//             <div class="card my-3 mx-auto text-center">
//                 <div className="card-img-container">
//                 <img src={book.img} className="card-img-top book-img" alt={book.title} />
//                 <div className="card-body pt-4">
//                     <h6 className="card-title fw-bold">{book.title}</h6>
//                     <p className="card-text pt-1">Category: {book.category}</p>
//                     <p className="card-text">Price: ${book.price}</p>
//                 </div>
//             </div>
//             </div>
//         </div>

// const AllTheBooks = ({searchQuery}) => {
//     const [books, setBooks] = useState([]); // 책

//     useEffect(() => {
//         fetch('/books/fantasy.json')
//         .then(response => response.json())
//         .then(data => setBooks(data))
//         .catch(error => console.log(error));
//     }, []); /
