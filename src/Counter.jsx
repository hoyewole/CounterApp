// Counter.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Counter = ({ count, increment, decrement, reset, setValue }) => {
  return (
    <div>
      <h5>Counter: {count}</h5>
      <Row className="mb-4">
        <Col className="d-grid gap-2"><Button size="lg" variant="success" onClick={increment}>Increment +</Button></Col>
        <Col>
          <Form.Control
            size="lg"
            type="number"
            value={count}
            onChange={(e) => setValue(parseInt(e.target.value))}
            readOnly
          />
        </Col>
        <Col className="d-grid gap-2"><Button size="lg" variant="info" onClick={decrement}>Decrement -</Button></Col>
      </Row>

      <Row>
        <Col></Col>
        <Col className="d-grid gap-2"><Button variant="danger" onClick={reset} >Reset</Button></Col>
        <Col></Col>
      </Row>
      
    </div>
  );
};

export default Counter;
