"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Software Engineering</span>, I decided to pursue my
        passion for programming. I gained over 5 years of experience in software
        engineering, with proficiency in JavaScript, Python, Java, and C++. My core stack
        includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and GraphQL. I am always eager to
        learn new technologies and stay updated on industry trends. I am currently seeking
        opportunities for a{" "}
        <span className="font-medium">senior software engineering role</span>.
      </p>

      <p className="mb-3">
        <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also learning how to play the guitar.
      </p>
    </motion.section>
  );
}
