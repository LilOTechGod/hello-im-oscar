import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import React from "react";
import Typewriter from "typewriter-effect";
import  ImageOne  from "./components/ImageOne";
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import TechStack from './components/TechStack'

function App() {
  return (
      <>
        <Header />
        <Hero />
        <ImageOne />
        <AboutMe />
        <TechStack />
        <Footer />
      </>
  );
}

export default App;
