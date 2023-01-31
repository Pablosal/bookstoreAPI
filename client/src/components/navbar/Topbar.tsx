import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';
import { Link } from 'react-router-dom';

function Topbar() {
  const [isUserLogged, setUserLogged] = React.useState(false);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">Bookcenter</Link>
        </Navbar.Brand>
        <Nav>
          {isUserLogged ? (
            <Nav.Link>
              <Link to="/profile">My Profile</Link>
            </Nav.Link>
          ) : (
            <>
              <Nav.Link>
                <Link to="/register">Register</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/login">Login</Link>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Topbar;
