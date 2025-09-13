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
        className="fixed top-0 left-1/2 h-[6.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        {/* CARB Logo */}
        <div className="absolute -left-28 top-1/2 -translate-y-1/2">
          <motion.div
            className="relative w-12 h-12"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Image
              src="/carb-pogo-2.png"
              alt="CARB Logo"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-2 text-base sm:w-[initial] sm:flex-nowrap sm:gap-5 sm:text-[0.9rem]">
          {carbLinks.map((link) => (
            <motion.li
              className="flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex min-w-[6rem] items-center justify-center rounded-md px-4 py-2 text-gray-500 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-200 sm:min-w-0 sm:px-3 sm:py-2",
                  {
                    "text-gray-950 dark:text-gray-200":
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
                    className="bg-gray-100 rounded-md absolute inset-0 -z-10 dark:bg-gray-800"
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
