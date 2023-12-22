import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ADO from '../assets/ADEVO.jpg'
import AWS from '../assets/aws-icon.png'
import CSS from '../assets/css-icon.png'
import GB from '../assets/GBB.jpg';
import GH from '../assets/github.png';
import HTML from '../assets/html-icon.png';
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
import HASURA  from '../assets/Hasura.jpg'
import ADS from '../assets/Azure-Logo.jpg'
import CGPT from '../assets/CGPT.jpg'

function TechStack() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Define an array of image sources
  const images = [ADO, AWS, CSS, GB, GH, HTML, JS, JEST, MICRO, MONGO, NODE, POST, PM, REACT, VS, WP, HASURA, CGPT, ADS];

  // Define a function to create carousel items with four images each
  const createCarouselItem = (startIndex) => {
    return (
      <Carousel.Item>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {images.slice(startIndex, startIndex + 5).map((image, index) => (
            <img key={index} style={{width: '16%', height: '9rem', padding: '1rem', objectFit: 'contain'}} src={image} alt={`Image ${startIndex + index + 1}`} />
          ))}
        </div>
      </Carousel.Item>
    )
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='my-5'>
      {/* Loop through the images array and create carousel items every four images */}
      {images.map((image, index) => {
        if (index % 5 === 0) {
          return createCarouselItem(index);
        }
      })}
    </Carousel>
  );
}

export default TechStack;
