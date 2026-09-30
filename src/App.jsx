import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
        <Navigation />
        <Hero />
        <div className="h-dvh bg-black"></div>
    </main>
  )
}

export default App;