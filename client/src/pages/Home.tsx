import * as React from 'react';
import { useState } from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { Col, Row, Container } from 'react-bootstrap';
import HeroSection from '../components/hero/HeroSection';
import { fetchBooks } from '../utils/api/books_requests';

const Home = () => {
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
  // if (status !== 'success') return <h1>Cargando</h1>;
  return (
    <Container>
      <Row>
        <Col></Col>
      </Row>
      <Row>
        <HeroSection />
      </Row>
      <Row>
        {/* <Col>
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
          </Col> */}
      </Row>
    </Container>
  );
};

export default Home;
