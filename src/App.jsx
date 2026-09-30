import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="text-4xl font-bold text-indigo-600 mt-10">Hello, GSAP with React and Tailwind CSS!</h1>
    </div>
  )
}

export default App;