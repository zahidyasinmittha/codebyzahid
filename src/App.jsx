import {BrowserRouter} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {About , Contact , Experience , Feedbacks , Hero , Navbar , Tech , Works , StarsCanvas , Social} from './components';

const App =()=>{
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <BrowserRouter>
     {isLoading && (
        <div className="fixed inset-0 w-full h-full bg-black z-50 flex justify-center items-center">
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 360, 0],
              borderRadius: ["20%", "50%", "20%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="w-20 h-20 bg-[#915eff] rounded-full"
          />
        </div>
      )}
      {!isLoading&&
      <div className='relative z-0 bg-primary overflow-hidden'>
        <div className='bg-hero-pattern bg-cover bg-center bg-no-repeat'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Social />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      }
    </BrowserRouter>
  )
}

export default App
