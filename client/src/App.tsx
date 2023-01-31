import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Topbar from './components/navbar/Topbar';
import { Container, Col, Row } from 'react-bootstrap';
import BooksCarousel from './components/books_carousel/BooksCarousel';
import BookCard from './components/books_card/BookCard';
import HeroSection from './components/hero/HeroSection';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { Book } from './utils/types';
async function fetchBooks() {
  const res = await fetch('http://localhost:3000/api/books');
  return res.json();
}
function App() {
  const [count, setCount] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1]);
  // Queries
  const { data, status } = useQuery('books', fetchBooks);
  console.log(data);

  // // Mutations
  // const mutation = useMutation(postTodo, {
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries('todos');
  //   },
  // });
  console.log(status);
  if (status !== 'success') return <h1>Cargando</h1>;
  return (
    <div className="App">
      <Container>
        <Topbar />
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <HeroSection />
        </Row>
        <Row>
          <Col>
            <h1>Todos los libros</h1>
            <Row>
              {data.books.map((book: Book) => {
                return (
                  <Col key={book._id}>
                    <BookCard {...book} />
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
