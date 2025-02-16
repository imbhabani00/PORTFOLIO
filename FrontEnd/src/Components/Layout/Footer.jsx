import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-black text-gray-400 text-center py-6 mt-10 relative"
    >
      <div className="container mx-auto">
        <motion.p
          whileHover={{ color: "#A020F0", scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="text-lg"
        >
          &copy; 2025 BhabaniShankar. All rights reserved.
        </motion.p>

        <div className="flex justify-center mt-4 space-x-4">
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
            href="https://github.com"
            className="text-gray-400 hover:text-primary"
          >
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
            href="https://linkedin.com"
            className="text-gray-400 hover:text-primary"
          >
            LinkedIn
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
            href="mailto:email@example.com"
            className="text-gray-400 hover:text-primary"
          >
            Email
          </motion.a>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-primary rounded-full shadow-glow"></div>
    </motion.footer>
  );
}
