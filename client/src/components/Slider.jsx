import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'
import slider1 from './images-resized/slider5.png';
import slider2 from './images-resized/slider4.png';
import slider3 from './images-resized/slider3.png';

class Slider extends React.Component {

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1} alt="Surface Studio 2"
          />
          <Carousel.Caption>
            <h3>Surface Laptop 3</h3>
            <Button variant="dark">Shop the Surface Range - Starting from €999.99</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2} alt="Surface Studio"
          />

          <Carousel.Caption>
            <h3>Surface Studio</h3>
            <p>Starting from €5699.99</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3} alt="Surface Event 2019"
          />

          <Carousel.Caption>
            <h3>Surface Event October 2019</h3>
            <p>Keep upto-date with New Products</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel >
    );
  }

}

export default Slider;