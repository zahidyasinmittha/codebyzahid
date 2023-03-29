import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { sectionwrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    },3000);
  }, []);

  return (
    <>
      {loading ? (
        <motion.div
          className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-white z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
            className="w-10 h-10 border-4 border-gray-400 rounded-full loader"
          />
        </motion.div>
      ) : (
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default sectionwrapper(Tech, "");
