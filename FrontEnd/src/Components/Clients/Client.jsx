import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    feedback: "BhabaniShankar's work exceeded our expectations. The UI/UX was flawless!",
  },
  {
    name: "Sarah Smith",
    position: "Product Manager, WebStudio",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    feedback: "The responsiveness and animations made our website look premium!",
  },
  {
    name: "Michael Johnson",
    position: "Founder, StartupX",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    feedback: "Professional, detail-oriented, and delivers top-notch results.",
  },
];

export default function ClientStories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold text-purple-400">Client Stories</h2>
          <p className="text-gray-300 mt-4">
            Here’s what our clients say about working with **BhabaniShankar**. I strive to deliver
            premium quality and innovative solutions that leave a lasting impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-lg w-full"
        >
          <Slider {...settings}>
            {testimonials.map((client, index) => (
              <div key={index} className="p-6 bg-gray-900 rounded-xl shadow-md border border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="w-1/2">
                    <h3 className="text-lg font-semibold">{client.name}</h3>
                    <p className="text-sm text-gray-400">{client.position}</p>
                    <p className="mt-4 text-gray-300 italic">
                      <FaQuoteLeft className="inline text-purple-400 text-2xl mr-2" />
                      {client.feedback}
                    </p>
                  </div>

                  <div className="w-1/2">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover border-2 border-purple-400"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

      </div>
    </section>
  );
}
