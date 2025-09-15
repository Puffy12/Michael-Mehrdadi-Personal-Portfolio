import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { TbDatabaseImport } from "react-icons/tb";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import WordGame from "@/public/ReactWordGame.png";
import JaredPort from "@/public/JaredPort.png";
import DimEyeShow from "@/public/Purneet.png";
import Person1 from "@/public/person1.jpg"
import Person2 from "@/public/person2.jpg"
import Person3 from "@/public/person3.jpg"
import AllHandsImg from "@/public/CARB/All-Hands.png"
import DataAnalysisImg from "@/public/CARB/Data-Anaylsis .png"
import SF6Img from "@/public/CARB/SF6.png"
import SemiImg from "@/public/CARB/Semi.png"
import OutreachImg from "@/public/CARB/Outreach.png"
import XMLImg from "@/public/CARB/XML.png"


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

/*
  {
    name: "Reviews",
    hash: '#reviews',
  },
*/

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
  {
    title: "STEM Student Intern",
    location: "Sacramento, CA",
    description:
      "Developed Python scripts to automate tasks and streamline workflows, created web-scraping tools for data collection and analysis, performed data transformations and visualizations in ObservableHQ, and managed XML batch testing.",
    icon: React.createElement(TbDatabaseImport),
    date: "2024 - present",
  }
  
] as const;

export const projectsData = [
  {
    title: "Sac State IEEE",
    description:
      "SacStateIEEE Website is a Next.js & TailwindCSS web application, hosted on Vercel for the IEEE Club at CSUS",
    tags: ["React", "Next.js", "Vercel", "Typescript","FramerMotion"],
    imageUrl: corpcommentImg,
    url: "https://ieee-web-app.vercel.app/",
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
    title: "Dim Eye Show Podcast website",
    description:
      "This commissioned project was built using Next.js, TypeScript, and TailwindCSS, featuring a dynamic, responsive design with animated UI elements and social media integration created for the Dim Eye Show.",
    tags: ["Next.js", "Typescript", "Tailwind", "Podcast"],
    imageUrl: DimEyeShow,
    url: "https://purneet-website.vercel.app/",
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
    title: "Jared Eastlick Personal Portfolio",
    description:
      "A personal portfolio website built with Next.js and Chakra UI, showcasing the work, experience, hobbies, and contact information of freelance writer Jared Eastlick. ",
    tags: ["Next.js", "Chakura UI", "Tailwind", "Javascript", "Portfolio"],
    imageUrl: JaredPort,
    url: "https://jared-eastlick-portfolio.vercel.app/",
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
  "Svelte",
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
  "Data Science",
  "Cyber Security",
  "Customer Service",
  "Data Visualization",
  "Proficient Programming Skills",
  "Leadership",
  "Teamwork",
  "Problem Solving",
  "Time Management",

] as const;

export const carbProjectsData = [
  {
    title: "All Hands Presentation",
    description:
      "Presented comprehensive analysis of RMP (Refrigerant Management Program) data spanning from 2011 to present, showcasing how compliance has evolved and demonstrating the effectiveness of facility detail data for refrigeration systems across California. The presentation highlighted key insights and trends in environmental compliance.",
    tags: ["Data Analysis", "Presentation", "RMP", "Compliance"],
    imageUrl: AllHandsImg,
    url: "#",
  },
  {
    title: "RMP Data Analysis",
    description:
      "Leveraged the modernized refrigerant management reporting tool to analyze historical data from 2011 onwards, examining compliance trends and the effectiveness of refrigeration systems in California. Conducted comprehensive analysis of facility detail data to identify patterns and improvements in environmental compliance.",
    tags: ["Data Analysis", "RMP", "Compliance", "Historical Data"],
    imageUrl: DataAnalysisImg,
    url: "#",
  },
  {
    title: "SF6 Form Automation Script",
    description:
      "Developed a comprehensive Python script to export SF6 reporting forms in a single cleaned and condensed format, streamlining the export process and performing automated data analysis. The script was compiled into an executable with full documentation covering usage instructions and technical details for future development.",
    tags: ["Python", "Automation", "SF6", "Data Processing"],
    imageUrl: SF6Img,
    url: "#",
  },
  {
    title: "Catch All Semiconductor Automation Script",
    description:
      "Created an advanced Python automation script for Catch All Semiconductor regulation compliance, featuring 16 complex sheets with enhanced data categorization and analysis capabilities. This sophisticated tool includes comprehensive documentation and additional features for improved regulatory reporting efficiency.",
    tags: ["Python", "Automation", "Semiconductor", "Complex Forms"],
    imageUrl: SemiImg,
    url: "#",
  },
  {
    title: "RMP Compliance Outreach",
    description:
      "Utilized D&B data and the modernized RMP database to conduct targeted outreach by excluding already-reporting companies from registered entities with likely reporting NAICS codes (supermarkets, large refrigeration, wineries). Successfully identified and contacted companies, many of which had switched to glycol systems, while others were educated about compliance requirements.",
    tags: ["Outreach", "Compliance", "Data Analysis", "Stakeholder Engagement"],
    imageUrl: OutreachImg,
    url: "#",
  },
  {
    title: "XML Batch Testing for Modernized RMP Tool",
    description:
      "Collaborated with external teams and third-party reporters to test the XML batch uploading feature, enabling companies to upload leak reports, annual reports, and service records in bulk. Updated XML schema, conducted extensive testing, and provided stakeholder assistance and documentation explaining the new system's capabilities.",
    tags: ["XML", "Batch Testing", "Schema Updates", "Documentation"],
    imageUrl: XMLImg,
    url: "#",
  },
] as const;


export const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image:
      Person1,
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image:
    Person2,
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image:
      Person3,
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
] as const;


