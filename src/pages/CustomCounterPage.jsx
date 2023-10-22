// CustomCounterPage.js
import React from 'react';
import useCounter from '../useCounter';
import Counter from '../Counter';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const CustomCounterPage = () => {
  const { count, increment, decrement, reset, setValue } = useCounter();

  return (
    <div>
        <Card style={{ height: '25rem', boxShadow: '2px 2px 3px 3px #000' }}>
          <Card.Body className="text-center">
            <Card.Title><h1 className="mb-4">Counter Page</h1></Card.Title><p>&nbsp;</p>
            <Card.Text>
              <Counter count={count} increment={increment} decrement={decrement} reset={reset} setValue={setValue} />
              {/*<p></p><Link to="/error-boundary">Go to Error Boundary Page</Link>*/}
            </Card.Text>
          </Card.Body>
        </Card>
        
        
      
    </div>
  );
};

export default CustomCounterPage;
