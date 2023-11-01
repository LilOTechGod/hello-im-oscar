import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import React from 'react';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <div className="App">
       <Typewriter onInit={(typewriter) => {
            typewriter
                .pauseFor(2000)
                .typeString("I'm a Full Stack Software Engineer")
                .pauseFor(2000)
                .deleteChars(17)
                .typeString("web developer")
                .pauseFor(2000)
                .deleteChars(24)
                .typeString("problem solver")
                .pauseFor(2000)
                .start();
        }}
    />
    </div>
    </div>
  );
}

export default App;
