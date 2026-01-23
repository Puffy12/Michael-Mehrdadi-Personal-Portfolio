"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  FaReact, 
  FaAws, 
  FaDocker, 
  FaDatabase,
  FaShieldAlt,
  FaUsers,
  FaCode,
  FaChartLine,
  FaArrowLeft,
  FaMapMarkerAlt,
  FaClock,
  FaBriefcase,
  FaBuilding
} from "react-icons/fa";
import { SiTerraform, SiPostgresql, SiOkta } from "react-icons/si";

export default function CarbPage() {
  const responsibilities = [
    {
      icon: FaCode,
      title: "Full-Stack Development",
      description: "Lead full-stack development of a secure, web-based platform that collects and manages stakeholder responses to satellite-detected methane plume events across California."
    },
    {
      icon: FaReact,
      title: "React Architecture",
      description: "Architect and implement modern user interfaces using React, ensuring intuitive user experiences for facility operators, partner agencies, and CARB programs."
    },
    {
      icon: FaAws,
      title: "Cloud Infrastructure",
      description: "Integrate identity and access management via Okta and build cloud-native infrastructure on AWS with CI/CD, Terraform, and Docker, delivering scalable, production-ready applications."
    },
    {
      icon: FaDatabase,
      title: "Database Design",
      description: "Design and maintain relational data models with PostgreSQL to support real-time data ingestion, reporting, and cross-agency collaboration."
    },
    {
      icon: FaUsers,
      title: "Cross-Team Collaboration",
      description: "Collaborate with scientists, policy experts, and IT teams to align software capabilities with methane reduction goals and regulatory requirements."
    },
    {
      icon: FaShieldAlt,
      title: "Security Compliance",
      description: "Develop and document secure, authenticated workflows that meet California Department of Technology (CDT) and CARB security standards."
    },
    {
      icon: FaChartLine,
      title: "Iterative Development",
      description: "Drive iterative deployment and testing cycles, gathering user feedback to refine UI/UX and ensure accessibility and effectiveness across diverse stakeholder groups."
    },
    {
      icon: FaBuilding,
      title: "Technical Leadership",
      description: "Present technical solutions in agency-wide working groups and contribute to CARB's evolving strategy on integrating technology with climate science and policy."
    }
  ];

  const skills = [
    "Full-Stack Development",
    "React.js",
    "TypeScript",
    "AWS",
    "PostgreSQL",
    "Okta IAM",
    "Terraform",
    "Docker",
    "CI/CD",
    "REST APIs"
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
            >
              <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Portfolio</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 p-0.5">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/carb-pogo-2.png"
                    alt="CARB Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="text-white font-semibold hidden sm:block">CARB</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            {/* Organization Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-3 bg-slate-900/50 border border-slate-800 rounded-full px-4 py-2 mb-8"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src="/carb-pogo-2.png"
                  alt="CARB Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="text-slate-300 font-medium">California Air Resources Board</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Scientific Data System
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                User Interface Lead
              </span>
            </motion.h1>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 text-slate-400 mb-8"
            >
              <div className="flex items-center gap-2">
                <FaBriefcase className="w-4 h-4 text-cyan-500" />
                <span>Full-time</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="w-4 h-4 text-cyan-500" />
                <span>Sep 2025 – Present · 5 mos</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-4 h-4 text-cyan-500" />
                <span>Sacramento, CA · Hybrid</span>
              </div>
            </motion.div>

            {/* Duration Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex flex-wrap items-center gap-3"
            >
              <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-lg px-4 py-2">
                <span className="text-cyan-400 font-semibold">1 yr 4 mos</span>
                <span className="text-slate-500">total tenure at CARB</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <span>Intern → UI Lead</span>
              </div>
            </motion.div>
          </motion.section>

          {/* Summary Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Leading full-stack development of a secure, web-based platform that collects and manages 
                stakeholder responses to satellite-detected methane plume events across California. 
                Building modern React interfaces with cloud-native AWS infrastructure, implementing 
                enterprise-grade security with Okta, and designing robust PostgreSQL data models 
                for real-time environmental data management and cross-agency collaboration.
              </p>
            </div>
          </motion.section>

          {/* Responsibilities Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Key Responsibilities</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {responsibilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="group bg-slate-900/30 hover:bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 rounded-xl p-6 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-teal-500/30 transition-colors">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tech Stack */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Technology Stack</h2>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { icon: FaReact, name: "React", color: "text-cyan-400" },
                  { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-400" },
                  { icon: FaAws, name: "AWS", color: "text-orange-400" },
                  { icon: SiOkta, name: "Okta", color: "text-indigo-400" },
                  { icon: SiTerraform, name: "Terraform", color: "text-purple-400" },
                  { icon: FaDocker, name: "Docker", color: "text-blue-500" },
                  { icon: FaCode, name: "TypeScript", color: "text-blue-400" },
                  { icon: FaShieldAlt, name: "Security", color: "text-green-400" },
                  { icon: FaDatabase, name: "CI/CD", color: "text-rose-400" },
                  { icon: FaChartLine, name: "Analytics", color: "text-teal-400" },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.05 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-slate-800/50 transition-colors cursor-default"
                  >
                    <tech.icon className={`w-8 h-8 ${tech.color}`} />
                    <span className="text-slate-300 text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Skills Tags */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.03 }}
                  className="px-4 py-2 bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 rounded-full text-slate-300 hover:text-cyan-400 text-sm font-medium transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* Previous Role - Internship */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Previous Role</h2>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 lg:p-10">
              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Student Research Assistant</h3>
                  <p className="text-slate-400">Internship</p>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                  <span className="flex items-center gap-2">
                    <FaClock className="w-4 h-4 text-cyan-500" />
                    Oct 2024 – Sep 2025 · 1 yr
                  </span>
                </div>
              </div>

              {/* Internship Responsibilities */}
              <ul className="space-y-4">
                {[
                  "Developed backend Python tools to automate manual reporting workflows and data processing.",
                  "Created web scrapers to collect, analyze, and transform large regulatory datasets.",
                  "Generated interactive data visualizations using ArcGIS to support air quality research.",
                  "Tested and managed XML batch uploads for emissions reporting tools used by RMP R3 stakeholders."
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    className="flex gap-3 text-slate-300"
                  >
                    <span className="text-cyan-400 mt-1.5">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Internship Skills */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <div className="flex flex-wrap gap-2">
                  {["Python", "Web Scraping", "ArcGIS", "Data Visualization", "XML", "Automation", "Data Processing"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-slate-400 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Impact Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-2xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-white mb-6">Impact</h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Contributing to California&apos;s climate action goals by building technology that enables 
                rapid response to methane emissions detected by satellite imagery. The platform facilitates 
                coordination between CARB, facility operators, and partner agencies to ensure swift 
                compliance and emission reduction across the state.
              </p>
              <div className="flex items-center gap-3 text-cyan-400">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-medium">Actively developing and deploying new features</span>
              </div>
            </div>
          </motion.section>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              California Air Resources Board · Sacramento, CA
            </p>
            <Link 
              href="/"
              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
            >
              View Full Portfolio →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
