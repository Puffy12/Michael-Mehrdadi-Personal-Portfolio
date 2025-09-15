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
      {/* Full Page Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-blue-200 dark:from-blue-900 dark:via-green-800 dark:to-blue-800 opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-gray-700/20"></div>
      
      <CarbHeader activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10 flex flex-col items-center px-4 pt-20">
        {/* Home Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-6xl"
        >
          {/* Intro Section */}
          <section id="home" className="relative text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                California Air Resources Board
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Showcasing my contributions and accomplishments during my internship
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
            </motion.div>
          </section>

          {/* About Section */}
          <section className="text-center py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                About My Role
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                As a Student Intern at the California Air Resources Board, I used 
                my expertise encompassed developing sophisticated Python automation scripts, conducting comprehensive 
                RMP data analysis spanning over a decade of historical records, and orchestrating strategic 
                compliance outreach campaigns. Through innovative XML batch testing frameworks and advanced 
                semiconductor regulation tools, I delivered measurable improvements in operational efficiency 
                while ensuring unwavering adherence to California&apos;s stringent environmental standards. My work 
                directly contributed to CARB&apos;s mission of protecting public health and preserving our environment 
                through technological solutions and data driven insights.
              </p>
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
            <section id="projects" className="py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                  Key Accomplishments
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Explore the projects and tools I developed during my internship
                </p>
              </motion.div>

              {/* Navigation Controls */}
              <div className="flex justify-center items-center mb-8">
                <button
                  onClick={prevPage}
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 mr-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={totalPages <= 1}
                >
                  <FaChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </button>
                
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i === currentIndex
                          ? "bg-blue-500 scale-125"
                          : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextPage}
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ml-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={totalPages <= 1}
                >
                  <FaChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              <div className="text-center mt-8">
                <p className="text-sm text-gray-500 dark:text-gray-400">
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
