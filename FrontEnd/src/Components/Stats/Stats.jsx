import React from "react";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { label: "Projects Completed", value: "10+" },
    { label: "GitHub Contributions", value: "500+" },
    { label: "Tech Stack Experience", value: "5+" },
    { label: "Certifications Earned", value: "3+" },
    { label: "Happy Clients", value: "15+" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-800/35 to-black/60">
  <div className="container mx-auto flex flex-wrap justify-center md:justify-between text-center md:text-left px-6">
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 100, rotateY: -45, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: 0,
          rotateY: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: index * 0.3,
          ease: [0.68, -0.55, 0.27, 1.55],
        }}
        whileHover={{
          scale: 1.1,
          rotateY: 10,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="text-white mx-4 my-2 px-6 py-4 border border-purple-500/50 rounded-xl shadow-lg transition-all transform"
      >
        <h3 className="text-4xl font-bold text-purple-400">{stat.value}</h3>
        <p className="text-lg text-gray-300">{stat.label}</p>
      </motion.div>
    ))}
  </div>
</section>

  );
}
