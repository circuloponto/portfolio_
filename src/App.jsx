//import { useState, useRef, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/MobileMenu';
/* import NavbarDesktop from './components/NavbarDesktop';
import Projects from './components/Projects';
import Slider2 from './components/Slider.jsx'; */

import Skills from './components/Skills';
import { FaArrowUp } from 'react-icons/fa';
import { motion, transform } from 'framer-motion';

import AnimatedCursor from 'react-animated-cursor';
import ImageSlider from './components/ImageSlider.jsx';
import Patern from './components/Patern.jsx';
const OPTIONS = {
  loop: true,
};
const scrollTop = () => {
  window.scrollTo(0, 0);
};
function App() {
  return (
    <div className="App">
      {/*   <AnimatedCursor
        className="progress"
        innerSize={12}
        outerSize={25}
        outerScale={2}
      /> */}
      <div className="scrollTopButton" onClick={scrollTop}>
        <FaArrowUp />
      </div>

      <Patern />
      <Navbar />
      {/*  <NavbarDesktop /> */}
      <Home />
      <About />
      <Skills />
      <ImageSlider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
