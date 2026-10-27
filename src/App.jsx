import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Cocktail from './components/Cocktail';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
        <Navigation />
        <Hero />
        <Cocktail />
        <About />
        <Art />
        <Menu />
        <Contact />
    </main>
  )
}

export default App;