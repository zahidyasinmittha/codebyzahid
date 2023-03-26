import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  cpp,
  umt,
  codewithzahid,
  weatherbit,
  programingcontext,
  threejs,
  facebook,
  instagram,
  twitter,
  Github,
  linkedin,
  gmail,
  stackoverflow,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ThreeJS Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "cpp",
    icon: cpp,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "UMT",
    icon: umt,
    iconBg: "#E6DEDD",
    date: "November 2021 - June 2025",
    points: [
      "I got addimision in umt in 2021 to become a software engineer.",
      "Here I got intrest in programing and technology.",
      "Then learned CPP, Object Oriented Programing and Data Structures.",
      "Then I Started learning Web Development from online resources.",
    ],
  },
  {
    title: "Frontend and Javascript Developer",
    company_name: "YOUTUBE",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "April 2022 - Dec 2022",
    points: [
      "I started with HTML to create the structure of web pages, then moved on to CSS for styling..",
      "Next, I learned JavaScript to add interactivity to web pages.",
      "I then discovered Bootstrap and Tailwind CSS frameworks to speed up my workflow.",
      "Along the way, I practiced by building personal projects and participating in online communities.",
      "With my skills developed, I pursued freelance or entry-level web development jobs to continue learning and growing.",
    ],
  },
  {
    title: "ThreeJs Developer",
    company_name: "Youtube",
    icon: threejs,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - feb 2023",
    points: [
      "I became interested in Three.js and started by reading the documentation and following tutorials.",
      "I experimented with creating my own 3D models and scenes and learned about shaders for advanced visual effects.",
      "I participated in online communities and forums to gain knowledge and share my work.",
      "While I didn't become an expert in Three.js, I gained experience and became interested in exploring other areas of web development.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Internet",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "I followed tutorials and built simple applications to gain experience.",
      "I explored advanced topics like React Router and Redux, and also learned React Native for mobile development.",
      "I participated in online communities to learn from others and gain confidence in my abilities.",
      "I built more complex applications like e-commerce websites or social media platforms, and continue to learn and explore new features in React and other web development areas.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Ava",
    designation: "My Client",
    company: "Freeluncing",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Liam",
    designation: "My Client",
    company: "Freeluncing",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Isabella",
    designation: "CTO",
    company: "Enterprises",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

const projects = [
  {
    name: "Code With Zahid",
    description:
      "portfolio website showcasing your work and skills, featuring live background animations and all standard portfolio features like About Me section, contact info, testimonials, responsive design, social media integration.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: codewithzahid,
    source_code_link: "https://github.com/zahidyasinmittha/codewithzahid.github.io",
    website_link :"https://zahidyasinmittha.github.io/codewithzahid.github.io/"
  },
  {
    name: "Weatherbit",
    description:
      "weather website provides real-time weather information. This includes a search bar to find specific locations, current weather conditions, hourly and daily forecasts, alerts for severe weather conditions.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: weatherbit,
    source_code_link: "https://github.com/zahidyasinmittha/weatherbit",
    website_link :"https://zahidyasinmittha.github.io/weatherbit/"
  },
  {
    name: "Programing Context",
    description:
      "A programming contest website with a calendar of events, registration/login, leaderboard, code submission system, and forum. It will attract participants and encourage skill development.",
    tags: [
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: programingcontext,
    source_code_link: "https://github.com/zahidyasinmittha/all-upcoming-programing-contests-",
    website_link : "https://zahidyasinmittha.github.io/all-upcoming-programing-contests-/"
  },
];
const socialmedia = [
  {
    name:"Facabook",
    link:"https://www.facebook.com/profile.php?id=100005192955554",
    icon:facebook,
  },
  {
    name:"Instagram",
    link:"https://www.instagram.com/zahid_yasin_mittha/",
    icon:instagram
  },
  {
    name:"Twitter",
    link:"https://twitter.com/zahid_mittha?t=M700ltVV9LCJi0Rk3inLeg&s=09",
    icon:twitter
  },
  {
    name:"Github",
    link:"https://github.com/zahidyasinmittha",
    icon:Github
  },
  {
    name:"LinkedIn",
    link:"https://www.linkedin.com/in/zahid-mittha-8506b3268/",
    icon:linkedin
  },
  {
    name:"Gmail",
    link:"mailto:b.zahidmittha@gmail.com",
    icon:gmail
  },
  {
    name:"Stackoverflow",
    link:"https://stackoverflow.com/users/21493636/zahid-yasin",
    icon:stackoverflow
  },
]
export { services, technologies, experiences, testimonials, projects,socialmedia };
