import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'
import slider1 from './images-resized/slider7.png';
import slider2 from './images-resized/slider8.png';
import slider3 from './images-resized/slider5.png';

class Slider extends React.Component {

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1} alt="Surface Pro 7"
          />
          <Carousel.Caption>
            <h3 id="slider-header" >Discover Surface Pro 7</h3>
            <Button href="./surfaces/" variant="dark">Shop the Surface Range - Starting from €999.99</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2} alt="Surface Laptop 3"
          />
          <Carousel.Caption>
            <h3 id="slider-header" >Discover Surface Laptop 3</h3>
            <Button href="./surfaces/" variant="dark">Shop the Surface Range - Starting from €999.99</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3} alt="Surface Studio 2"
          />
          <Carousel.Caption>
            <h3 id="slider-header" >Discover Surface Studio 2</h3>
            <Button href="./surfaces/" variant="dark">Shop the Surface Range - Starting from €999.99</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

}

export default Slider;