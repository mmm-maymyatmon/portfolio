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
  zustand,
  vue3,
  nuxt3,
  photoshop,
  tailwind,
  git,
  figma,
  roiup,
  metamyanmar,
  umg,
  teatalk,
  jobit,
  tripguide,
  filezilla,
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
    title: "WordPress Developer",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Zustand",
    icon: zustand,
  },

  {
    name: "Vue3",
    icon: vue3,
  },
  {
    name: "Nuxt3",
    icon: nuxt3,
  },
  {
    name: "Filezilla",
    icon: filezilla,
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
    name: "photoshop",
    icon: photoshop,
  },
];

const experiences = [
  {
    title: "Senior Web Developer",
    company_name: "Meta Team Myanmar",
    icon: metamyanmar,
    iconBg: "#383E56",
    date: "Jan 2020 - Jan 2023",
    points: [
      "Created and modified custom WordPress themes to meet client needs, enhancing design, layout, and features.",
      "Collaborated with UI design teams to implement visually appealing designs that improve user experience.",
      "Communicated with Japanese clients to gather requirements and provide timely updates.",
      "Customized CSS styles, templates, and integrated plugins to enhance functionality, including contact forms and SEO optimization.",
      "Developed responsive web applications using React.js, ensuring optimal performance and cross-browser compatibility."
    ],
  },
  {
    title: "Senior Frontend Developer",
    company_name: "UMG Idealab Myanmar",
    icon: umg,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Oct 2023",
    points: [
      "Participated in discussions with business and development teams to define clear objectives for a large-scale social media platform.",
      "Developed the frontend using Nuxt 3 and created an admin dashboard with Vue 3 for efficient content management.",
      "Collaborated with UI/UX teams and analysts to gather requirements and ensure project alignment.",
      "Utilized HTML, CSS, JavaScript, and Bootstrap to translate design mockups into responsive, cross-browser compatible code.",
      "Improved code organization by fixing conflicts and separating components, integrating frontend with Laravel Blade for enhanced user experience."
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "ROIUP STUDIOS CO., LTD.",
    icon: roiup,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - July 2023",
    points: [
      "Collaborated with senior developers to develop and maintain web applications, ensuring high performance and responsiveness across both front-end and back-end technologies.",
      "Embraced challenges by learning and implementing new technologies, enhancing both skill set and knowledge base.",
      "Wrote and debugged code to ensure product functionality and quality, significantly contributing to overall project success.",
      "Demonstrated the ability to meet tight deadlines while maintaining composure in high-pressure situations.",
      "Assisted operations by identifying, researching, and resolving performance and production issues, ensuring smooth application functionality."
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
    name: "Teatalk Platform",
    description:
      "A vibrant social media platform that connects users, allowing them to share experiences, engage in conversations, and build communities. Similar to Facebook, Teatalk offers features for posting updates, sharing photos, and messaging friends, fostering meaningful interactions and connections among its users.",
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
    image: teatalk,
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
