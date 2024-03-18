import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import CommentArea from './CommentArea';

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  if (!book) return null;

  const toggleSelected = () => setSelected(!selected);

  return (
    <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 my-5 mx-4 d-flex justify-content-center">
      <Card
        onClick={toggleSelected}
        className="text-center"
        style={{ width: '18rem', cursor: 'pointer', border: selected ? '2px solid red' : 'none' }}
      >
        <div className="card-img-container">
          <Card.Img src={book.img} className="book-img" alt={book.title} />
        </div>
        {!selected && (
          <Card.Body className="pt-4">
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>Category: {book.category}</Card.Text>
            <Card.Text>Price: ${book.price}</Card.Text>
          </Card.Body>
        )}
      </Card>
      {selected && <CommentArea asin={book.asin} />}
    </div>
  );
};

export default SingleBook;
