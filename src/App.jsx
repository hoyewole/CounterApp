// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, useLocation  } from 'react-router-dom';
import CustomCounterPage from './pages/CustomCounterPage';
import NotFound from './pages/NotFound';
import ErrorBoundaryTest from './pages/ErrorBoundaryTest';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {
  //const location = useLocation();
  return (
    <>
      <Container>
        <Router>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary p-4">
              <Navbar.Brand href="/"><h2>Counter App</h2></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="underline" className="justify-content-end" style={{width: '100%'}}>
                  <Nav.Item>
                    <Nav.Link href="/CounterApp/" className={location.pathname === '/CounterApp/' ? 'active' : ''}>Custom Counter</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/CounterApp/pages/error-boundary" className={location.pathname === '/CounterApp/pages/error-boundary' ? 'active' : ''}>Error Boundary Test</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/CounterApp/pages/my-error-page" className={location.pathname === '/CounterApp/pages/my-error-page' ? 'active' : ''}>Error 404 Page</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            {/*
            <nav>
              <ul>
                <li>
                  <Link to="/">Custom Counter</Link>
                </li>
                <li>
                  <Link to="/error-boundary">Error Boundary Test</Link>
                </li>
                <li>
                  <Link to="/my-error-page">Error 404 Page</Link>
                </li>
              </ul>
            </nav>*/}

            <Routes>
              <Route path="/CounterApp/" element={<CustomCounterPage />} />
              <Route path="/CounterApp/pages/error-boundary" element={<ErrorBoundaryTest />} />
              <Route path="*" element={<NotFound />} />
              {/* Wildcard route for 404 Not Found */}
            </Routes>
        </Router>
          <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary p-4">
            <h5 className="text-center text-white">&copy; CounterApp 2023 | Designed by: </h5>
          </Navbar>
      </Container>
    </>
  );
}

export default App;

