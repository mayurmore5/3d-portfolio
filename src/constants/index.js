import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  kaggle,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  movie,
  estate,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  promotion,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning",
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
    name: "Data Science",
    icon: kaggle,
  },
  
  
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Tech Researchers Club",
    icon: mobile,
    iconBg: "#383E56",
    date: "March 2023 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Android Club",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "March 2024 - April 2025",
    points: [
      "Developing and maintaining applications using React Native and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Managment Lead",
    company_name: "Tech Researchers Club",
    icon: mobile,
    iconBg: "#383E56",
    date: "Jan 2024 - Jan 2025",
    points: [
"      Served as Management Lead in Tech Researchers club, overseeing event planning and execution",
"Coordinated with multiple teams to ensure smooth communication and timely deliverables",
"Managed logistics for workshops, guest lectures, and competitions with 100+ participants",
"Fostered a collaborative and inclusive environment, boosting member engagement and retentio"
    ],
  },
  {
    title: "Competitive Programming",
    company_name: "CP Club",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "I have CodeChef rating of 1500+",
      "Soloved 750+ LeetCode Problems and also have 1600 LeetCode Contest Rating.",
      "I have CodeForces rating of 900",
      "This showcases my problem solving skills.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  
  {
    name: "Promotion Prediction",
    description:
      "Web Application that predicts the employee promotion based on different parameters.Also analyzes and gives the data about promotion using different metrics.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "ml",
        color: "green-text-gradient",
      },
      {
        name: "datascience",
        color: "pink-text-gradient",
      },
    ],
    image: promotion,
    source_code_link: "https://github.com/mayurmore5/emp_promotion",
  },
  {
    name: "Movie App",
    description:
      "A dynamic movie app that provides detailed information on all movies, including cast, ratings, and trailers, while highlighting trending titles to keep users updated with the latest in entertainment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "nativewind",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/mayurmore5/movie",
  },
  {
    name: "E-commerce app",
    description:
      "A user-friendly e-commerce real estate app that showcases property listings with images, prices, and details. Users can explore, filter, and inquire about homes, rentals, and trending real estate deals.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: estate,
    source_code_link: "https://github.com/mayurmore5/estate",
  }
];

export { services, technologies, experiences, testimonials, projects };
