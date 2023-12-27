import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import React from "react";
import  ImageOne  from "./components/ImageOne";
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import TechStack from './components/TechStack'
import { Resume } from "./components/Resume";
import { Portfolio } from "./components/Portfolio";


function App() {
  return (
      <>
        <Header />
        <Hero />
        <ImageOne />
        <AboutMe />
        <Resume />
        <Portfolio />
        <TechStack />
        <Footer />
      </>
  );
}

export default App;
