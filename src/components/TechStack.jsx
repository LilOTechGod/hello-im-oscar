import React, { useState, useEffect } from 'react';
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
import ADataStudio from '../assets/ADS.jpg';
import DIS from '../assets/discord.icon.png';
import Heroku from '../assets/heroku.webp';
import Mat from '../assets/materialize.png';
import Sele from '../assets/selenium.png'
import './TechStack.css'


function TechStack() {

  const [index, setIndex] = useState(0);
  const [imagesPerSlide, setImagesPerSlide] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) { // Bootstrap's breakpoint for small screens
        setImagesPerSlide(3);
      } else {
        setImagesPerSlide(6);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call the function initially to set the state based on the initial window size

    return () => window.removeEventListener('resize', handleResize); // Clean up the event listener on unmount
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Define an array of image sources
  const images = [ADO, AWS, CSS, GB, GH, HTML, JS, JEST, MICRO, MONGO, NODE, POST, PM, REACT, VS, WP, HASURA, CGPT, ADS, ADataStudio, DIS, Heroku, Mat, Sele];

  // Define a function to create carousel items with four images each
  const createCarouselItem = (startIndex) => {
    return (
      <Carousel.Item>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {images.slice(startIndex, startIndex + imagesPerSlide).map((image, index) => (
            <img key={index} className='carouselImg' src={image} alt={`Image ${startIndex + index + 1}`} />
          ))}
        </div>
      </Carousel.Item>
    )
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='pb-5 techStack'>
      {/* Loop through the images array and create carousel items every four images */}
      {images.map((image, index) => {
        if (index % 6 === 0) {
          return createCarouselItem(index);
        }
      })}
    </Carousel>
  );
}

export default TechStack;
