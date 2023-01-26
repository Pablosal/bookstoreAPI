import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Topbar from './components/navbar/Topbar';
import { Container, Col, Row } from 'react-bootstrap';
import BooksCarousel from './components/books_carousel/BooksCarousel';
import BookCard from './components/books_card/BookCard';

function App() {
  const [count, setCount] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1]);

  return (
    <div className="App">
      <Container>
      <Topbar />
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <BooksCarousel />
        </Row>
        <Row>
          <Col>
            <h1>Libros destacados</h1>
            <Row>
              {count.map((n) => {
                return (
                  <Col key={n * Math.random()}>
                    <BookCard />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
