import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className=" d-flex justify-content-center py-3">
            <img src={logo} alt="ProShop" width="150px" />

            <p> &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
