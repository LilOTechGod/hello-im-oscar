import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import React, {useState, useEffect} from "react";
import ParallaxLottie  from "./components/ParallaxLottie";
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import TechStack from './components/TechStack'
import { Resume } from "./components/Resume";
import { Portfolio } from "./components/Portfolio";
import  Testimonials from "./components/Testimonials";
import { ContactMe } from "./components/ContactMe";
import { animateScroll as scroll } from 'react-scroll';


function App() {
  // The scrollNav state variable is initially set to false, which means the button is not visible when the page first loads.
  const [scrollNav, setScrollNav] = useState(false);
  // checks the current scroll position of the window (window.scrollY). If the scroll position is greater than or equal to 100px, it sets scrollNav to true. Otherwise, it sets scrollNav to false.
  const toggleScrollNav = () => {
    if (window.scrollY >= 600) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  // function is added as an event listener for the "scroll" event on the window object inside a useEffect hook. This means toggleScrollNav is called every time the user scrolls.
  useEffect(() => {
    window.addEventListener("scroll", toggleScrollNav);
    return () => window.removeEventListener("scroll", toggleScrollNav);
  }, []);

  return (
      <>
        <Header />
        <Hero />
        <ParallaxLottie />
        <AboutMe />
        <Resume />
        <TechStack />
        <Portfolio />
        <Testimonials />
        <ContactMe />
        <Footer />
        {scrollNav && 
          <button className="scrollToTopBtn" onClick={() => scroll.scrollToTop()}><i class="bi bi-arrow-up-circle scrollUpBtn"></i></button>
        }      
      </>
  );
}

export default App;
