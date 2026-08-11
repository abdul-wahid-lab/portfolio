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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Content Creator",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "DreamBridge.AI",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2025 - December 2025",
    points: [
      "Transitioned from internship to full-time, continuing to build and maintain web engineering features using FastAPI and Next.js.",
      "Extended backend APIs and improved integration between AI models and the broader product, focusing on reliability and performance.",
      "Collaborated remotely with the engineering team to ship production-ready features under real deadlines.",
      "Applied automation and cloud tooling (GCP, Selenium) to streamline recurring engineering tasks.",
    ],
  },
  {
    title: "Artificial Intelligence Engineer",
    company_name: "DreamBridge.AI",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2025 - Oct 2025",
    points: [
      "Built and tested backend APIs using FastAPI, validating endpoints with Postman and integrating them with MySQL and Cloud Firestore for data storage.",
      "Developed automation and data-collection scripts using Selenium and Beautiful Soup to support AI/ML workflows.",
      "Worked with Google Cloud Platform (GCP) to deploy and manage backend services in a remote, cross-functional team environment.",
      "Contributed to Next.js-based front-end integration, connecting AI-powered backend features to a production-facing interface.",
    ],
  },
  //{
  //  title: "Web Developer",
  //  company_name: "Shopify",
  //  icon: shopify,
  //  iconBg: "#383E56",
  //  date: "Jan 2022 - Jan 2023",
  //  points: [
  //    "Developing and maintaining web applications using React.js and other related technologies.",
  //    "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //    "Implementing responsive design and ensuring cross-browser compatibility.",
  //    "Participating in code reviews and providing constructive feedback to other developers.",
  //  ],
  //},
  {
    title: "Frontend Web Developer",
    company_name: "Holsol Technology",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Sep 2024",
    points: [
      "Designed and developed responsive WordPress websites for clients, customizing themes and plugins to match project requirements.",
      "Collaborated directly with clients to gather requirements, troubleshoot issues, and deliver sites on schedule.",
      "Optimized site performance and ensured cross-browser compatibility across all delivered projects.",
      "Managed end-to-end site deployment, from local development through to live production hosting.",
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
    name: "LinguaSign",
    description:
      "Real-time Pakistan Sign Language Detection System that translates hand gestures into text using computer vision, enabling more accessible communication for the deaf and hard-of-hearing community.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/abdul-wahid-lab/fyp-project-Pakistan-sign-language-detection-system",
  },
  {
    name: "Tumor Detection System",
    description:
      "A real-time tumor detection system that uses a trained CNN classifier to analyze live camera input and identify tumors from image data.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/abdul-wahid-lab/tumor-detection-system",
  },
  {
    name: "Maze Pathfinding Visualizer",
    description:
      "A maze generation and solving visualizer that procedurally generates mazes using randomized recursive backtracking, then solves them in real time with animated breadth-first search pathfinding.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
      {
        name: "algorithms",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/abdul-wahid-lab/maze-solving-ai-agent",
  },
 
];

export { services, technologies, experiences, testimonials, projects };
