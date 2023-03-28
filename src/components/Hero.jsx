import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <section className="relative h-screen w-full mx-auto">
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
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex  items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-80 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I'm <span className="text-[#915eff]">ZAHID</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Hey there! I'm a software engineer and web developer on a mission to
            bring innovative ideas to life. I believe that technology should
            make our lives easier, not more complicated, and that's why I'm
            committed to creating user-friendly applications that solve
            real-world problems.
          </p>
        </div>
      </div>
      {!isLoading && <ComputersCanvas />}
      <div
        className="w-full absolute xs:bottom-10 bottom-3 flex
        justify-center items-center"
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4  border-secondary justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
