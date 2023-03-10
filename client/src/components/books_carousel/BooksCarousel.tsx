import Carousel from 'react-bootstrap/Carousel';

function BooksCarousel() {
  return (
    <Carousel>
      <Carousel.Item style={{ height: 400 }}>
        <img
          className="d-block w-100"
          src="https://www.placebear.com/g/200/300"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: 400 }}>
        <img
          className="d-block w-100"
          src="https://www.placebear.com/200/300"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: 400 }}>
        <img
          className="d-block w-100"
          src=" http://baconmockup.com/200/300"
          alt="Third slide"
          style={{ objectFit: 'cover' }}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BooksCarousel;
