import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Robo from "../assets/robo.png";
import Pattern from "../assets/pattern.jpg"; // your pattern PNG

export default function Hero() {
  const navigate = useNavigate();

  const handleService = () => {
    navigate("/services");
  };

  const handleProducts = () => {
    navigate("/products");
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${Pattern})`,
        backgroundRepeat: "no-repeat", // you can use "repeat", "repeat-x", "repeat-y", or "no-repeat"
        backgroundSize: "cover", // or "cover" if you want full coverage
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
        
      }}

    >
    {/* <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent to-80% z-0"></div> */}
<div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/95 to-transparent to-85% z-0"></div>


      {/* Decorative Blurred Circles */}
      {/* <div className="absolute -top-20 -left-20 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div> */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-[2.5rem] lg:text-5xl font-bold leading-tight mt-4 bg-gradient-to-r from-sky-600 to-blue-800 bg-clip-text text-transparent">
            Wealth Zone Group AI – <br />
            Powering the Future with Intelligent Solutions
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Harness the full potential of{" "}
            <span className="font-semibold text-gray-800">
              Artificial Intelligence
            </span>
            , <span className="font-semibold text-gray-800">Blockchain</span>,
            and{" "}
            <span className="font-semibold text-gray-800">Cloud Computing</span>{" "}
            to revolutionize your business processes.
            <span className="block mt-2">
              Wealth Zone AI delivers tailored, next-gen technology solutions
              that optimize efficiency, drive innovation, and unlock new growth
              opportunities.
            </span>
          </p>

          {/* Call-to-action */}
          <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 gap-4 justify-center lg:justify-start">
            <button
              onClick={handleService}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-sky-600 to-sky-700 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Our Services
            </button>
            <button
              onClick={handleProducts}
              className="px-8 py-3 rounded-full border border-sky-600 text-sky-700 font-semibold hover:bg-sky-50 transition-all duration-300"
            >
              Our Products
            </button>
          </div>
        </div>

        {/* Right Side - Robo Illustration */}
        <motion.div
          className="mt-12 lg:mt-0 lg:ml-12"
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 10, -10, 10, 0],
            rotate: [0, 5, -5, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={Robo}
            alt="AI Robot"
            className="w-72 lg:w-[460px] drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/7842770089"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition transform hover:scale-110 z-20"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </section>
  );
}
