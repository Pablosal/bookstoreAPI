import * as React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <Container>
      <Row
        style={{
          justifyContent: 'center',
        }}
      >
        <Col
          style={{
            textAlign: 'left',
          }}
        >
          <Row
            style={{
              paddingTop: '2rem',
            }}
          >
            <h1>Find what are the best books to learn the skills you need</h1>
          </Row>
          <Row>
            <span>
              From the people with real reviews and how can this book take you
              to the next level
            </span>
          </Row>
        </Col>
        <Col>
          <img
            src="https://m.media-amazon.com/images/I/41Tb7nx23pL.jpg"
            alt="Hero selected Book"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
