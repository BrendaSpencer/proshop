import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CustomNav = () => {
  return (
    <>
      <Navbar expand="md" className="bg-black text-danger" collapseOnSelect>
        <Container>
          <NavDropdown title="Categorieen" id="categorieen">
            <NavDropdown.Item>Profile</NavDropdown.Item>
          </NavDropdown>
          <LinkContainer to="/info">
            <Nav.Link>info</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/nieuws">
            <Nav.Link>nieuws</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/afspraken">
            <Nav.Link>Afspraak Boeken</Nav.Link>
          </LinkContainer>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNav;
