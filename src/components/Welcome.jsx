import React from 'react'
import Alert from 'react-bootstrap/Alert';

const Welcome = () => {
    return (
        <div className="mx-5 my-5">
        <h4>un titolo per l'applicazione.</h4>
        <Alert key="primary" variant="primary">
        che renderizzera' un Alert !
        </Alert>
      </div>
    );
  }


  export default Welcome;