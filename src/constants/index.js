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
  zustand,
  meta,
  metamyanmar,
  umg,
  roiup,
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "CMS Developer",
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "zustand",
    icon: zustand,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Senior Web Developer",
    company_name: "Meta Team Myanmar (Japan Company)",
    icon: metamyanmar,
    iconBg: "#383E56",
    date: "Jan 2020 - Jan 2023",
    points: [
      "Created custom WordPress themes and tailored existing ones to meet specific client needs, focusing on design, layout, and feature enhancements.",
      "Collaborated with UI design teams to produce visually appealing and user-friendly experiences.",
      "Communicated directly with Japanese clients to understand their requirements and provide timely updates.",
      "Customized CSS, modified templates, and integrated plugins for enhanced functionality, including contact forms, sliders, galleries, and SEO optimization.",
      "Ensured cross-browser compatibility across Chrome, Firefox, Safari, and Internet Explorer.",
      "Maintained effective communication throughout the development process to ensure client satisfaction.",
      
    ],
  },
  {
    title: "Senior Frontend Developer",
    company_name: "UMG Idealab Myanmar",
    icon: umg,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Nov 2023",
    points: [
      "Actively engaged with business and development teams to define clear project objectives for a large-scale social media platform.",
      "Developed the frontend for a large-scale social media platform using Nuxt 3 and created a Vue 3 admin dashboard for content management.",
      "Collaborated with UI/UX teams, business stakeholders, system analysts, and developers to establish project objectives and gather requirements.",
      "Utilized HTML, CSS, JavaScript, and Bootstrap to convert design mockups into responsive, cross-browser-compatible code.",
      "Resolved code conflicts and modularized components to enhance code organization and maintainability.",
      "Integrated frontend and backend functionalities to improve overall user experience."
    ],
  },
  {
    title: "Full stack Developer (Freelance)",
    company_name: "Roiup Studios Co., Ltd. (Chiang Mai, Thailand)",
    icon: roiup,
    iconBg: "#383E56",
    date: "Feb 2024 - Oct 2024",
    points: [
      "Collaborated with senior developers to build and maintain web applications, leveraging both front-end and back-end technologies for optimal performance and responsiveness.",
      "Embraced new technologies to enhance skills and expand knowledge.",
      "Successfully met tight deadlines while maintaining composure under pressure in critical situations.",
      "Supported operations by identifying, researching, and resolving performance and production issues to ensure smooth application functionality.",
    ],
  }
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
