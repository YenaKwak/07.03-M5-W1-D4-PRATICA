import React from "react";
import Alert from "react-bootstrap/Alert";

const Welcome = () => {
  return (
    <div className="container">
      <div className="mx-5 my-5 text-center">
        <h4>All the books.</h4>
        <Alert key="primary" variant="primary">
          WELCOME! 어서오세요!
        </Alert>
      </div>
    </div>
  );
};

export default Welcome;
