
import Html from '../assets/images/Chronoloki.png';
import Html1 from '../assets/images/lokitech.png';
import Javascript1 from '../assets/images/passgen.png';
import Javascript2 from '../assets/images/Calculator.png';
import WeatherApp from '../assets/images/WeatherApp.png';
import Orphanage from '../assets/images/Orphnage.png';
import BookBazaar from "../assets/images/BookBazaar.png";
import IntegratedFarm from "../assets/images/IntegratedFarm.png";
import CrudApp from "../assets/images/CRUDAPP.png";
import BlogImage from "../assets/images/BlogImage.png";
import ContactManagement from "../assets/images/ContactMERN.png"
import TodoImage from "../assets/images/TodoImage.png"
import QuickChat from "../assets/images/QuickChat.png"


const projects = [
  {
    title: "Logi Integrated Farm",
    description:
       " Enhanced my skills in building responsive layouts, managing state, and integrating interactive features. This project demonstrates my ability to create modern interfaces and deliver seamless user experiences for clients in the agriculture sector.",
    image: IntegratedFarm,
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React"],
    category: "frontend",
    demoLink: "https://logi-integrated-farm.onrender.com",
    codeLink: "https://github.com/logapriyanm/Integrated-Farm.git"
  },
  {
    title: "RealTime Chat App",
    description:
       "This project allowed me to explore full-stack development by building a chat app with React, Node.js, MongoDB, and Socket.io. I gained hands-on experience in authentication, state management, and creating seamless, responsive user experiences.",
    image:QuickChat ,
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express.js","Socket.io"],
    category: "fullstack",
    demoLink: "https://quickchat-app-5q8p.onrender.com",
    codeLink: "https://github.com/logapriyanm/CHAT-APP.git"
  },
  {
  title: "Contact Management System",
  description:
    "Built a MERN stack contact management system with CRUD operations, search, and filtering. This project showcases my skills in full-stack development and creating efficient user interfaces.",
  image: ContactManagement,
  tags: [" React", "Express", "MongoDB", "Node.js", "Tailwind CSS"],
  category: "fullstack",
  demoLink: "https://contact-management-mern.onrender.com",
  codeLink: "https://github.com/logapriyanm/Contact-Management-MERN.git"
},
{
  title: "MERN ToDo List",
  description:
    "A full-stack task management app built using MongoDB, Express.js, React, and Node.js. It supports creating, updating, and deleting tasks with real-time interaction and persistent cloud storage.",
  image: TodoImage, 
  tags: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
  category: "fullstack",
  demoLink: "https://todolist-mern-e0un.onrender.com", 
  codeLink: "https://github.com/logapriyanm/todolist-MERN.git"
},


  {
    title: "Orphanage Management System",
    description:
      "A responsive React.js + Tailwind CSS web application for a non-profit organization, featuring dynamic content, an interactive donation system, volunteer sign-up, and contact management to support child welfare initiatives.",
    image: Orphanage,
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React"],
    category: "frontend",
    demoLink: "https://orphanage-management-system-kxtd.onrender.com",
    codeLink: "https://github.com/logapriyanm/Orphanage-Management-System.git"
  },
  {
    title: "MERN Blog Website",
    description:
      "A full-stack blog platform built using MongoDB, Express.js, React, and Node.js. Features include category management, post creation, dynamic content rendering.",
    image: BlogImage,
    tags: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
    category: "fullstack",
    demoLink: "https://blog-mern-frontend-ujkd.onrender.com",
    codeLink: "https://github.com/logapriyanm/Blog-MERN.git"
  },
  {
    title: "Book Bazaar",
    description:
     "Developed a modern and interactive online bookstore where users can seamlessly browse, search, and discover books.  It reflects my understanding of frontend architecture, user experience design, and component-based development.",
    image: BookBazaar,
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React"],
    category: "frontend",
    demoLink: "https://book-bazaar-ovgc.onrender.com",
    codeLink: "https://github.com/logapriyanm/Book-Bazaar.git"
  },
  {
    title: "Calculator",
    description:
      "A responsive web calculator built with Supports keyboard input, handles real-time calculations, and blocks invalid characters. Designed for clean usability and smooth interaction.",
    image: Javascript2,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    demoLink: "https://logapriyanm.github.io/Calculator/",
    codeLink: "https://github.com/logapriyanm/Calculator"
  },
  {
    title: "User Data",
    description:
      "A full-stack CRUD application with React.js frontend and Node.js backend. It allows users to add, edit, delete, and search user records, with persistent data storage using JSON files.",
    image: CrudApp,
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React", "Node js", "Express js"],
    category: "fullstack",
    demoLink: "https://user-data-frontend-gtb4.onrender.com/",
    codeLink: "https://github.com/logapriyanm/User-Data.git"
  },
  {
    title: "Weather App",
    description:
      "A responsive React-based weather application that displays real-time weather data, including temperature, humidity, wind speed, and location coordinates.",
    image: WeatherApp,
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React"],
    category: "frontend",
    demoLink: "https://weather-app-loki.onrender.com",
    codeLink: "https://github.com/logapriyanm/Weather-App-Loki.git"
  },
  {
    title: "Loki Technologies",
    description:
      "It features clean structure, bold typography, and a futuristic tech aesthetic—designed to impress and built to perform on all devices.",
    image: Html1,
    tags: ["HTML", "Bootstrap"],
    category: "frontend",
    demoLink: "https://logapriyanm.github.io/LOKI-Technologies/",
    codeLink: "https://github.com/logapriyanm/LOKI-Technologies"
  },
  {
    title: "Watch Shop",
    description:
      "A sleek and modern landing page for a premium watch store, highlighting luxury, technology, and elegance. Built with HTML, CSS, and Bootstrap for a clean and engaging user experience.",
    image: Html,
    tags: ["HTML", "Bootstrap"],
    category: "frontend",
    demoLink: "https://logapriyanm.github.io/Chrono-LOGI/",
    codeLink: "https://github.com/logapriyanm/Chrono-LOGI"
  },
  {
    title: "Password Generator",
    description:
      "A simple yet powerful JavaScript-based password generator that lets users customize password length and include numbers, capital/small letters, and symbols.",
    image: Javascript1,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    demoLink: "https://logapriyanm.github.io/Pass-Generator/",
    codeLink: "https://github.com/logapriyanm/Pass-Generator.git"
  },
];

export default projects;