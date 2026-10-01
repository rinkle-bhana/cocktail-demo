import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Cocktail from './components/Cocktail';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
        <Navigation />
        <Hero />
        <Cocktail />
    </main>
  )
}

export default App;