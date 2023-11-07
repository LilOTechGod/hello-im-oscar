import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ADO from '../assets/ADO.jpg'
import AWS from '../assets/aws-icon.png'
import CSS from '../assets/css-icon.png'
import GB from '../assets/gitbash.jpg';
import GH from '../assets/github.png';
import HTML from '../assets/github.png';
import JS from '../assets/javascript-programming-language-icon.png';
import JEST from '../assets/Jest.jpg';
import MICRO from '../assets/microsoft365.png';
import MONGO from '../assets/mongodb.gif';
import NODE from '../assets/node-js-icon.png';
import POST from '../assets/postgresql-icon.png';
import PM from '../assets/postman.jpg';
import REACT from '../assets/react-js-icon.png';
import VS from '../assets/vs.png';
import WP from '../assets/WP.png'
 

function TechStack() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <WP text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <VS text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <PM text="Third slide" />
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

export default TechStack;