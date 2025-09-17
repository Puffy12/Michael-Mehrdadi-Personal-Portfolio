"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface CarbHeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function CarbHeader({ activeSection, setActiveSection }: CarbHeaderProps) {
  const carbLinks = [
    { name: "Home", hash: "#home" },
    { name: "Projects", hash: "#projects" },
    { name: "Main Site", hash: "/" },
  ];

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[7rem] w-full rounded-none border border-blue-400/60 border-opacity-60 bg-gradient-to-r from-blue-500/90 via-green-500/90 to-blue-500/90 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[4rem] sm:w-[42rem] sm:rounded-full dark:from-blue-600/90 dark:via-green-600/90 dark:to-blue-600/90"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        {/* Animated Glow Effect */}
        <div className="absolute inset-0 rounded-none sm:rounded-full bg-gradient-to-r from-blue-400/20 via-green-400/20 to-blue-400/20 animate-pulse"></div>
      </motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 items-center justify-center">
        {/* CARB Logo with Spinning Animation - Centered */}
        <div className="mr-4 sm:mr-6">
          <motion.div
            className="relative w-8 h-8 sm:w-12 sm:h-12"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Spinning Logo Container */}
            <motion.div
              className="relative w-full h-full bg-white rounded-full"
            >
              <Image
                src="/carb-pogo-2.png"
                alt="CARB Logo"
                fill
                className="object-contain"
              />
            </motion.div>
            
            {/* Glowing Ring Effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-400/30"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        <ul className="flex items-center justify-center gap-y-2 text-sm sm:flex-nowrap sm:gap-5 sm:text-[0.9rem]">
          {carbLinks.map((link) => (
            <motion.li
              className="flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex min-w-[5rem] items-center justify-center rounded-md px-3 py-2 text-white/80 hover:text-white transition font-medium sm:min-w-0 sm:px-3 sm:py-2",
                  {
                    "text-white font-bold":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-white/20 rounded-md absolute inset-0 -z-10 backdrop-blur-sm"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
