import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import video from '../assets/video.webm';
import './Hero.css';
import React, { useState, useEffect } from "react";

function Hero() {

// A custom hook that takes a text array and a delay as arguments
// and returns the current text to display
const useAutoTyping = (texts, delay) => {
  // The index of the current text in the array
  const [index, setIndex] = useState(0);
  // The current text to display
  const [text, setText] = useState("");
  // The current character position in the text
  const [position, setPosition] = useState(0);

  // A useEffect hook that runs every time the index or position changes
  useEffect(() => {
    // If the position is equal to the length of the current text, move to the next text
    if (position === texts[index].length) {
      // Set a timeout to wait before changing the text
      const timer = setTimeout(() => {
        // Increment the index by one, or reset it to zero if it reaches the end of the array
        setIndex((index + 1) % texts.length);
        // Reset the position to zero
        setPosition(0);
      }, delay);

      // Clear the timeout when the component unmounts or the index changes
      return () => clearTimeout(timer);
    }

    // Set a timeout to update the text by adding one character
    const timer = setTimeout(() => {
      setText(texts[index].slice(0, position + 1));
      // Increment the position by one
      setPosition(position + 1);
    }, delay);

    // Clear the timeout when the component unmounts or the position changes
    return () => clearTimeout(timer);
  }, [index, position, texts, delay]);

  // Return the current text
  return text;
};

// A component that uses the custom hook and renders the text in a h1 element
const AutoTypingText = () => {
  // An array of texts to display
  const texts = ["Hello", "World", "This is React"];
  // A delay in milliseconds between each character
  const delay = 100;
  // The current text from the custom hook
  const text = useAutoTyping(texts, delay);

  return <h1>{text}</h1>;
};

    return (
      <div>
        <Row>
          <Col sm={6}className='video'>
            <video width='100%' height='' controls className='video'>
                <source src={video} type='video/webm'></source>
            </video>
          </Col>
          <Col sm={6} className='bg-danger'>
            sm=4
          </Col>
        </Row>
        <div className='container heroDivider'></div>

      </div>
    );
  }
  
  export AutoTypingText;
  export default Hero;