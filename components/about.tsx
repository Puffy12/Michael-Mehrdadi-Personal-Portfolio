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
        Full-stack web developer with expertise in{" "}
        <span className="font-medium">React, Next.js, Node.js</span>, and database
        management. Proven track record in developing efficient file management
        solutions, portfolio sites, and club websites, with measurable improvements in
        usability and performance. Passionate about building scalable web
        applications,
      </p>


      <p className="mb-3">
        <span className="italic">When I&apos;m not coding</span>, I enjoy traveling, going to the gym, and going on runs. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently learning {" "}
        <span className="font-medium">japanese and have been for 5 years</span>. I&apos;m also learning about Machine Learning/ AI.
      </p>
    </motion.section>
  );
}
