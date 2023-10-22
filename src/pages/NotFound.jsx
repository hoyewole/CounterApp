// NotFound.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import NotFoundimage from '../images/404-error.jpg'

const NotFound = () => {
  return (
    <div>
      <Card style={{ height: '25rem', boxShadow: '2px 2px 3px 3px #000' }}>
          <Card.Body className="text-center">
            <Card.Title><h1>Page Not Found</h1></Card.Title>
            <Card.Text>
              <img src={NotFoundimage} height="300" width="400" className="img-fluid" />
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  );
};

export default NotFound;
