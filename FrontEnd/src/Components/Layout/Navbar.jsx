import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "#home", alwaysPurple: true },
  { label: "About", href: "#about" },
  { label: "Academic", href: "#academic" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "My Team", href: "#team" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md shadow-md p-4"
    >
      <div className="container mx-auto flex justify-between items-center">

        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-primary tracking-wide">
            BhabaniShankar
          </h1>
        </div>

        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={item.href}
                className={`${
                  item.alwaysPurple ? "text-primary" : "text-gray-300 hover:text-primary"
                } text-lg font-medium transition-all`}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <button
          className="md:hidden text-gray-300 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 right-0 w-2/3 bg-black/90 backdrop-blur-lg p-6 rounded-lg md:hidden"
          >
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`${
                      item.alwaysPurple ? "text-primary" : "text-gray-300 hover:text-primary"
                    } text-lg font-medium transition-all`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
