import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Aezion Inc",
    duration: "2024 - Present",
    description: "Developed with ASP.NET, HTML, CSS, JS, jQuery, and SQL Server.",
  },
  {
    role: "Frontend Developer Intern",
    company: "Java C Enterprises",
    duration: "2023",
    description: "Worked with React, HTML, CSS, Tailwind, and Figma.",
  },
  {
    role: "Full Stack Web Development (Learning & Development)",
    company: "Coding Ninja",
    duration: "2022 - 2023",
    description: "Worked on full-stack web development projects using the MERN stack.",
  },
];

const education = [
  {
    degree: "Bachelor in Computer Application (BCA)",
    institution: "Academy Of Business Administration",
    year: "2017 - 2020",
    description: "Focused on software development, programming languages, and database management.",
  },
  {
    degree: "Master in Computer Application (MCA)",
    institution: "Trident Academy Of Technology",
    year: "2021 - 2023",
    description: "Specialized in advanced programming, algorithms, and web technologies.",
  },
  {
    degree: "Master in Technology (M.Tech) in AI",
    institution: "Trident Academy Of Technology",
    year: "2024 - 2026",
    description: "Currently focusing on Artificial Intelligence, Machine Learning, and Data Science.",
  },
];

export default function ExperienceEducation() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-purple-400 text-center mb-10">Experience & Education</h2>

        {/* Flex Container for Equal Height and Width */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col space-y-6">
            <h3 className="text-3xl font-bold text-purple-400 flex items-center gap-2">
              <FaBriefcase /> Experience
            </h3>
            <div className="flex flex-col space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.3,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05, 
                    rotateY: "10deg",
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
                  }}
                  className="relative p-6 border border-purple-500/50 rounded-xl shadow-lg transition-all overflow-hidden flex-1"
                >
                  <h4 className="text-2xl font-semibold">{exp.role}</h4>
                  <p className="text-gray-400">{exp.company} | {exp.duration}</p>
                  <p className="text-gray-300 mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <h3 className="text-3xl font-bold text-purple-400 flex items-center gap-2">
              <FaGraduationCap /> Education
            </h3>
            <div className="flex flex-col space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.3,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05, 
                    rotateY: "10deg",
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
                  }}
                  className="relative p-6 border border-purple-500/50 rounded-xl shadow-lg transition-all overflow-hidden flex-1"
                >
                  <h4 className="text-2xl font-semibold">{edu.degree}</h4>
                  <p className="text-gray-400">{edu.institution} | {edu.year}</p>
                  <p className="text-gray-300 mt-2">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
}
