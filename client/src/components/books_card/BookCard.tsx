import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Book } from '../../utils/types';
import './BookCard.css';

const BookCard = ({ title, description, image }: Book) => {
  console.log(image);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="bookCard__description">{description}</Card.Text>
        <Button variant="primary">See more details</Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
