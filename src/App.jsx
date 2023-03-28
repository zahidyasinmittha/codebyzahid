import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Social } from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the page to load
    const timer = setTimeout(() => {
      setLoading(false);
    },4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
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
      ) : (
        // Page content
        <div className="relative z-0 bg-primary overflow-hidden">
          <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Social />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
