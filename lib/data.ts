import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import WordGame from "@/public/ReactWordGame.png";
import JaredPort from "@/public/JaredPort.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "American River College ",
    location: "Sacramento, CA",
    description:
      "I graduated after 3 year of studying getting my Associates Degree in Computer Science",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "Front-End Developer",
    location: "Sacramento, CA",
    description:
      "I worked as a front-end developer for 1 year intering at American River Design Hub. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Sacramento State",
    location: "Sacramento, CA",
    description:
      "I pursued further education in Computer Science at CSUS and am on track to complete my degree by May 2025",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Sacrmento, CA",
    description:
      "I'm now a full-stack developer working as a freelancer. My main stack includes React, Next.js, TypeScript, Tailwind, Vercel and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Sac State IEEE",
    description:
      "SacStateIEEE Website is a Next.js & TailwindCSS web application, hosted on Vercel for the IEEE Club at CSUS",
    tags: ["React", "Next.js", "Vercel", "Typescript","FramerMotion"],
    imageUrl: corpcommentImg,
    url: "https://sacstateieee.com/",
  },
  {
    title: "Vite Word Games",
    description:
      "Enjoy a dynamic collection of word games with Vite Word Games, a Vite, Vercel, React, and TypeScript-powered web app, designed for quick fun with friends.",
    tags: ["Vite", "Vercel", "Tailwind", "Typescript", "Word Games"],
    imageUrl: WordGame,
    url: "https://react-word-games.vercel.app/",
  },
  {
    title: "Jared Eastlick Personal Portfolio",
    description:
      "A personal portfolio website built with Next.js and Chakra UI, showcasing the work, experience, hobbies, and contact information of freelance writer Jared Eastlick. ",
    tags: ["Next.js", "Chakura UI", "Tailwind", "Javascript", "Portfolio"],
    imageUrl: JaredPort,
    url: "https://jared-eastlick-portfolio.vercel.app/",
  },
  {
    title: "Game of Life (Java)",
    description:
      "The Game of Life concept game(cellular automaton) made using a custom java graphics engine built from the ground up, Link.",
    tags: ["Java", "OpenGL", "Object Oriented", "Graphics Engine"],
    imageUrl: rmtdevImg,
    url: "https://github.com/Puffy12/Game-of-Life-Java-",
  },
  {
    title: "Youtube MP3/MP4 Downloader",
    description:
      "Video downloader application with a modern graphical user interface (GUI) using Python. With a supporting API",
    tags: ["Python 3", "GUI", "API", "Downloader"],
    imageUrl: wordanalyticsImg,
    url: "https://github.com/Puffy12/Youtube-MP3-MP4-Downloader",
  },
] as const;


export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "CSS",
  "HTML",
  "MongoDB",
  "SQL",
  "Database Management",
  "SSH",
  "Powershell",
  "C++",
  "Python",
  "Java",
  "Spring Boot",
  "REST API",
  "Postman",
  "Vite",
  "Full Stack Web Development",
  "Japanese",
  "Agile",
  "Microsoft Office",
  "Postman API",
  "Tableau",
  "Customer Service",
  "Data Visualization",
  "Proficient Programming Skills",
  "Leadership",
  "Teamwork",
  "Problem Solving",
  "Time Management",

] as const;

export const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
] as const;