import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10">
    
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left"
      >
        <h1 className="text-2xl font-bold text-white">
          I am <span className="text-primary">BhabaniShankar</span>
        </h1>
        <h2 className="text-5xl text-gray-300 font-semibold mt-2">
          Full Stack Developer
        </h2>
        <p className="text-gray-400 mt-4 max-w-lg">
          Passionate about building modern web applications with high
          performance, security, and seamless user experience.
        </p>

        <div className="flex justify-center md:justify-start space-x-6 mt-6">
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-primary text-2xl transition-all duration-200 ease-in-out"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-primary text-2xl transition-all duration-200 ease-in-out"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="mailto:email@example.com"
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-primary text-2xl transition-all duration-200 ease-in-out"
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </motion.div>

      {/* Centered Profile Image */}
      <div className="relative flex justify-center items-center">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="electric-border w-64 h-64 absolute rounded-full animate-electric"></div>
        </div>

        <img
          src="/Men.jpg"
          alt="BhabaniShankar"
          className="w-60 h-60 rounded-full relative z-10"
          style={{
            filter: "drop-shadow(10px 10px 20px purple)",
          }}
        />
      </div>
    </section>
  );
}
