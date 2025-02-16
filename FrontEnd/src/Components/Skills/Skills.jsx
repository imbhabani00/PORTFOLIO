import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaFigma, FaNodeJs, FaBootstrap, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiDotnet } from "react-icons/si";
import { motion } from "framer-motion"; // For animations

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, color: "shadow-orange-500" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, color: "shadow-blue-500" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, color: "shadow-yellow-400" },
  { name: "Figma", icon: <FaFigma className="text-pink-500" />, color: "shadow-pink-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, color: "shadow-cyan-400" },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" />, color: "shadow-purple-500" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, color: "shadow-green-500" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, color: "shadow-green-400" },
  { name: "SQL Server", icon: <FaDatabase className="text-red-500" />, color: "shadow-red-500" }, // Fixed SQL Server Icon
  { name: "ASP.NET", icon: <SiDotnet className="text-blue-400" />, color: "shadow-blue-400" },
];

export default function Skills() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Title with Animation */}
        <motion.h2
          className="text-5xl font-bold text-purple-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>
        <p className="text-gray-300 mt-4">Here are the technologies I specialize in:</p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-6 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl bg-gray-900 flex flex-col items-center justify-center transition-all hover:scale-110 hover:${skill.color} shadow-md relative overflow-hidden`}
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Opposite Corner Border Effect */}
              <div className="absolute inset-0 border-4 border-transparent hover:border-purple-500 transition-all"></div>

              <div className="text-6xl">{skill.icon}</div>
              <p className="text-lg font-semibold mt-3">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Description Below */}
        <motion.div
          className="mt-12 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p>
            I specialize in **Frontend Technologies** like **HTML, CSS, JavaScript, Tailwind, Bootstrap**, and design tools like **Figma**.
            I also have expertise in **Backend Development** with **Node.js, ASP.NET, and MongoDB/SQL Server** for database management.
            My goal is to build **high-performance, scalable, and visually stunning applications** that enhance user experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
