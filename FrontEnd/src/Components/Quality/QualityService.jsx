import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaPaintBrush,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaLaptopCode className="text-purple-400 text-5xl" />,
    description:
      "Building modern, responsive, and high-performance websites using the latest technologies.",
  },
  {
    title: "Full-Stack Development",
    icon: <FaCode className="text-purple-400 text-5xl" />,
    description:
      "Developing both frontend and backend solutions with React, Node.js, Asp.Net, and databases.",
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt className="text-purple-400 text-5xl" />,
    description:
      "Creating high-quality mobile applications with React Native and Flutter.",
  },
  {
    title: "Database Management",
    icon: <FaDatabase className="text-purple-400 text-5xl" />,
    description:
      "Optimizing and managing SQL and NoSQL databases for better performance.",
  },
  {
    title: "Cloud Solutions",
    icon: <FaCloud className="text-purple-400 text-5xl" />,
    description: "Deploying and managing scalable cloud-based applications.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush className="text-purple-400 text-5xl" />,
    description:
      "Designing intuitive and visually appealing user interfaces for great experiences.",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-black text-white">
      
      <div className="text-center">
        <h2 className="text-5xl font-bold text-purple-400">
          My Quality Services
        </h2>
        <p className="text-gray-300 mt-4">
          Providing high-quality and modern development services to bring your
          ideas to life.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12 container mx-auto px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border border-purple-500/50 rounded-xl shadow-lg hover:shadow-purple-500 transition-all text-center"
          >
            {service.icon}
            <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-400 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
