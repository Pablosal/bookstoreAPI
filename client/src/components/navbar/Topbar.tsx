import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as React from 'react';

function Topbar() {
  const [isUserLogged, setUserLogged] = React.useState(false);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"> Bookcenter </Navbar.Brand>
        <Nav>
          {isUserLogged ? (
            <Nav.Link href="#link"> My Profile </Nav.Link>
          ) : (
            <>
              <Nav.Link href="#link"> Register </Nav.Link>
              <Nav.Link href="#link"> Login </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Topbar;
