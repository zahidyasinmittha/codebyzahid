import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { sectionwrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("down", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi there, and welcome to my portfolio! My name is Zahid Yasin, and I'm a
        web developer and software engineer with 1 years of experience creating
        custom solutions for clients across a variety of industries. My passion
        for technology started at a young age, and I've been honing my skills
        ever since. I specialize in HTML,CSS,JAVASCRIPT and framwork like
        TAILWIND,BOOTSTRAP,THREEJS AND REACT, and I have a particular knack for
        REACT,JAVASCRIPT AND THREEJS, which has allowed me to create unique and
        innovative solutions for my clients.Throughout my career, I've had the
        opportunity to work on a wide range of projects, from small websites to
        large-scale software applications. I pride myself on my attention to
        detail, my ability to communicate effectively with clients and team
        members, and my commitment to delivering high-quality work on time and
        within budget.In addition to my technical skills, I'm also a lifelong
        learner who is always seeking out new challenges and opportunities to
        expand my knowledge and skillset. Whether I'm learning a new programming
        language or exploring the latest trends in web development, I'm always
        striving to stay on the cutting edge of the field.
        <br />
        Thank you for taking the time to visit my portfolio. If you have any
        questions or would like to discuss a potential project, please don't
        hesitate to get in touch!
      </motion.p>

      <div className="mt-20 flex justify-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default sectionwrapper(About, "about");
