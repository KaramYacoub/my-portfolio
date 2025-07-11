import Portfolio from "../assets/portfolio.png";
import MovieHub from "../assets/MovieHub.png";
import blogapp from "../assets/blogapp.png";
import shoppingcart from "../assets/shoppingcart.png";
import weatherapp from "../assets/weatherapp.png";
import TicTacToe from "../assets/TicTacToe.png";
import todo from "../assets/todo.png";
import ILMVerse from "../assets/ILM-Verse.png";
import ChatMates from "../assets/ChatMates.png";

export const projects = [
  {
    title: "ILM-VERSE (Graduation Project)",
    description:
      "A comprehensive Learning Management System (LMS) tailored for TFS School, supporting students, parents, teachers, and administrators. It digitizes educational workflows and introduces monitoring, admin, and marketing features.",
    tech: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "PostgreSQL (Supabase)",
      "MongoDB (Atlas)",
      "MVC Pattern",
    ],
    image: ILMVerse,
    github: "https://github.com/KaramYacoub/ILM-Verse",
    isDeployed: true,
    live: "https://ilm-verse-frontend-kcil.vercel.app/",
  },
  {
    title: "ChatMates",
    description:
      "A real-time chat application that allows users to chat and call each other to learn their languages.",
    tech: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "MongoDB (Atlas)",
      "TanStack Query",
      "Stream",
      "MVC Pattern",
    ],
    image: ChatMates,
    github: "https://github.com/KaramYacoub/ChatMates",
    isDeployed: true,
    live: "https://chat-matess.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects and skills.",
    tech: ["JavaScript", "React.js", "Tailwind CSS"],
    image: Portfolio,
    github: "https://github.com/KaramYacoub/my-Portfolio",
    isDeployed: true,
    live: "https://karamportfolio.netlify.app/",
  },
  {
    title: "MovieHub",
    description: "A web application for browsing and discovering movies.",
    tech: [
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "TMDB API",
    ],
    image: MovieHub,
    github: "https://github.com/KaramYacoub/MovieHub",
    isDeployed: false,
    live: "#",
  },
  {
    title: "Blog-app",
    description:
      "A blogging platform allowing users to see posts. only the admin can create, edit, and delete posts.",
    tech: [
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    image: blogapp,
    github: "https://github.com/KaramYacoub/Blog-app",
    isDeployed: false,
    live: "#",
  },
  {
    title: "Shopping Cart",
    description: "An e-commerce shopping cart application.",
    tech: ["JavaScript", "React.js", "CSS", "local storage"],
    image: shoppingcart,
    github: "https://github.com/KaramYacoub/shopping-cart",
    isDeployed: false,
    live: "#",
  },
  {
    title: "Weather App",
    description: "A weather forecasting application.",
    tech: ["JavaScript", "Node.js", "Express.js", "EJS", "CSS"],
    image: weatherapp,
    github: "https://github.com/KaramYacoub/Weather-app",
    isDeployed: false,
    live: "#",
  },
  {
    title: "Tic-Tac-Toe",
    description: "A classic Tic-Tac-Toe game.",
    tech: ["JavaScript", "React.js", "CSS"],
    image: TicTacToe,
    github: "https://github.com/KaramYacoub/Tic-Tac-Toe",
    isDeployed: false,
    live: "#",
  },
];
