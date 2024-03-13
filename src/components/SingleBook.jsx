import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);
  if(!book) return null;

  return (
    <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 my-5 mx-4 d-flex justify-content-center">
    <Card
      onClick={() => setSelected(!selected)}
      className={`text-center ${selected ? "border-danger" : ""}`}
      style={{ width: '18rem', border: selected ? '3px solid red' : 'none', height: '40em' }}
    >

      <div className="card-img-container">
        <Card.Img src={book.img} className="book-img" alt={book.title} />
      </div>
      <Card.Body className="pt-4">
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>Category: {book.category}</Card.Text>
        <Card.Text>Price: ${book.price}</Card.Text>
      </Card.Body>
    </Card>
  </div>
);
};



export default SingleBook;

// {books.map((book, index) => (
//   <div key={index} className="col-xl-3 col-lg-6 col-md-6 col-sm-12 my-5">
//       <div class="card my-3 mx-auto text-center">
//           <div className="card-img-container">
//           <img src={book.img} className="card-img-top book-img" alt={book.title} />
//           <div className="card-body pt-4">
//               <h6 className="card-title fw-bold">{book.title}</h6>
//               <p className="card-text pt-1">Category: {book.category}</p>
//               <p className="card-text">Price: ${book.price}</p>
//           </div>
//       </div>