import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    location: "Sacrmento, CA",
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
      "I'm now a full-stack developer working as a freelancer. My main stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Sac State IEE",
    description:
      "SacStateIEEE Website is a Next.js & TailwindCSS web application, hosted on Vercel for the IEE Club at CSUS",
    tags: ["React", "Next.js", "Vercel", "Typescript","FramerMotion"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Game of Life (Java)",
    description:
      "The Game of Life concept game(cellular automaton) made using a custom java graphics engine built from the ground up, Link.",
    tags: ["Java", "OpenGL", "Object Oriented", "Graphics Engine"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Youtube MP3/MP4 Downloader",
    description:
      "Video downloader application with a modern graphical user interface (GUI) using Python. With a supporting API",
    tags: ["Python 3", "GUI", "API", "Downloader"],
    imageUrl: wordanalyticsImg,
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
