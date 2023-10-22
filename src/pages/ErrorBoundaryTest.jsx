// ErrorBoundaryTest.js
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class ErrorBoundaryTest extends Component {
  state = {
    hasError: false,
    errorMessage: '', // Store the error message
  };

  componentDidMount() {
    try {
      // Simulate an error by throwing an exception when the component mounts
      throw new Error('Simulated error within ErrorBoundaryTest Page');
    } catch (error) {
      this.setState({ hasError: true, errorMessage: error.message });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <Card style={{ height: '25rem', boxShadow: '2px 2px 3px 3px #000' }}>
            <Card.Body className="text-center">
              <Card.Title><h1>Something went wrong.</h1></Card.Title>
              <Card.Text>
                <p className="text-danger">Error Message: {this.state.errorMessage}</p>
              </Card.Text>
            </Card.Body>
          </Card>
          
        </div>
      );
    }

    return (
      <div>
        <Card style={{ height: '25rem', boxShadow: '2px 2px 3px 3px #000' }}>
          <Card.Body className="text-center">
            <Card.Title><h1>Error Boundary Test Page</h1></Card.Title>
            <Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ErrorBoundaryTest;
