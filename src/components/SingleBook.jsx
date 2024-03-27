import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleBook = ({ book, setSelectedAsin, isSelected }) => {
  return (
    <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 my-5 mx-4 d-flex justify-content-center">
      <Card
        onClick={() => setSelectedAsin(book.asin)}
        className="text-center"
        style={{
          width: "18rem",
          height: "100%",
          cursor: "pointer",
          border: isSelected ? "2px solid red" : "none",
        }}
      >
        <div className="card-img-container">
          <Card.Img
            variant="top"
            src={book.img}
            className="book-img"
            alt={book.title}
          />
        </div>
        <Card.Body className="pt-4 card-body">
          <Card.Title>{book.title}</Card.Title>
          <Link to={`/book/${book.asin}`}>
            <Button variant="primary">Detail</Button>
          </Link>
          <Card.Text>Category: {book.category}</Card.Text>
          <Card.Text>Price: ${book.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleBook;
