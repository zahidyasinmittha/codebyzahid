import React from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { sectionwrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { socialmedia } from "../constants";
import Tilt from "react-tilt";

const FeedbackCard = ({
  index,
  name,
  link,
  icon
}) => (
  <div className="flex flex-col justify-center items-center cursor-pointer " onClick={() => window.open(link, "_blank")}>
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-white p-10 rounded-[100%] hover:bg-transparent"
    >
      <Tilt>
        <img src={icon} className="w-[130px] transform hover:rotate-[360deg] transition duration-1000" />
      </Tilt>
    </motion.div>
    <p className="text-center mt-2 text-secondary">{name}</p>
  </div>
);

const Social = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            Join the conversation on social media
          </p>
          <h2 className={styles.sectionHeadText}>Virtual Identites</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
      >
        {socialmedia.map((socialmedia, index) => (
          <FeedbackCard key={socialmedia.name} index={index} {...socialmedia} />
        ))}
      </div>
    </div>
  );
};

export default sectionwrapper(Social, "");
