"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { carbProjectsData } from "@/lib/data";
import CarbProject from "@/components/carb-project";
import CarbHeader from "@/components/carb-header";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CarbPage() {
  const [activeSection, setActiveSection] = useState("Home");
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(carbProjectsData.length / projectsPerPage);

  const currentProjects = carbProjectsData.slice(
    currentIndex * projectsPerPage,
    (currentIndex + 1) * projectsPerPage
  );

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Glowing Blue-Green Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-green-500 to-blue-700 dark:from-blue-800 dark:via-green-600 dark:to-blue-900"></div>
      
      {/* Animated Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-green-400/30 to-blue-500/30 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent dark:via-gray-700/10"></div>
      
      {/* Floating Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-500/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <CarbHeader activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10 flex flex-col items-center px-4 pt-16 sm:pt-20">
        {/* Home Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-6xl"
        >
          {/* Intro Section */}
          <section id="home" className="relative text-center py-12 sm:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 px-4 glow-text"
                animate={{ 
                  scale: [1, 1.02, 1],
                  textShadow: [
                    "0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(34, 197, 94, 0.3)",
                    "0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(34, 197, 94, 0.5)",
                    "0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(34, 197, 94, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                California Air Resources Board
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl font-bold text-white/90 mb-6 sm:mb-8 px-4"
                animate={{ 
                  opacity: [0.8, 1, 0.8],
                  y: [0, -2, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                Showcasing my contributions and accomplishments during my internship
              </motion.p>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"
                animate={{ 
                  scaleX: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </section>

          {/* About Section */}
          <section className="text-center py-12 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Modern Card Container with Glowing Border */}
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-2xl border border-white/20 dark:border-gray-700/20 glow-pulse float-animation hover:scale-105 transition-transform duration-500 cursor-pointer">
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-2xl gradient-border opacity-30"></div>
                <div className="absolute inset-[2px] rounded-2xl bg-white/90 dark:bg-gray-900/90"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-4 glow-text">
                    About My Role
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto px-4">
                    As a Student Intern at the California Air Resources Board, I used 
                    my expertise encompassed developing sophisticated Python automation scripts, conducting comprehensive 
                    RMP data analysis spanning over a decade of historical records, and orchestrating strategic 
                    compliance outreach campaigns. Through innovative XML batch testing frameworks and advanced 
                    semiconductor regulation tools, I delivered measurable improvements in operational efficiency 
                    while ensuring unwavering adherence to California&apos;s stringent environmental standards. My work 
                    directly contributed to CARB&apos;s mission of protecting public health and preserving our environment 
                    through technological solutions and data driven insights.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-7xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-7xl"
          >
            <section id="projects" className="py-12 sm:py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8 sm:mb-12"
              >
                {/* Animated Gradient Border Container for Key Accomplishments */}
                <div className="relative inline-block mb-6 sm:mb-8">
                  <div className="absolute inset-0 rounded-xl gradient-border opacity-30"></div>
                  <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl px-6 py-3 hover:scale-105 transition-transform duration-500 cursor-pointer">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 px-4 glow-text">
                      Key Accomplishments
                    </h2>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 px-4">
                  Explore the projects and tools I developed during my internship
                </p>
              </motion.div>

              {/* Navigation Controls */}
              <div className="flex justify-center items-center mb-6 sm:mb-8 px-4">
                <button
                  onClick={prevPage}
                  className="p-2 sm:p-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 mr-3 sm:mr-4 disabled:opacity-50 disabled:cursor-not-allowed glow-pulse"
                  disabled={totalPages <= 1}
                >
                  <FaChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" />
                </button>
                
                <div className="flex space-x-1 sm:space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        i === currentIndex
                          ? "bg-gradient-to-r from-blue-500 to-green-500 scale-125 shadow-lg"
                          : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextPage}
                  className="p-2 sm:p-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 ml-3 sm:ml-4 disabled:opacity-50 disabled:cursor-not-allowed glow-pulse"
                  disabled={totalPages <= 1}
                >
                  <FaChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" />
                </button>
              </div>

              {/* Projects Grid */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4"
                  >
                    {currentProjects.map((project, index) => (
                      <motion.div
                        key={`${currentIndex}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="transform hover:scale-105 transition-transform duration-300"
                      >
                        <CarbProject {...project} />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Page Indicator */}
              <div className="text-center mt-6 sm:mt-8 px-4">
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Page {currentIndex + 1} of {totalPages}
                </p>
              </div>
            </section>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
