// <-- 1. Merged useEffect and useState into one import
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Robo from "../assets/robo.png";
import Pattern from "../assets/pattern.jpg";

// Confetti component (no changes)
const Confetti = () => {
  const [confetti, setConfetti] = useState([]);
  const colors = ['#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe', '#ffffff', '#3b82f6cc', '#60a5facc'];
  const shapes = ['🎊', '✨', '🎉', '🎈', '🎁'];

  useEffect(() => {
    // Create confetti elements
    const newConfetti = Array(15).fill().map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 20,
      size: Math.random() * 10 + 10,
      duration: Math.random() * 2 + 3,
      delay: Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      rotate: Math.random() * 360
    }));
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {confetti.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-xl select-none"
          style={{
            left: `${item.x}%`,
            color: item.color,
            fontSize: `${item.size}px`,
            transform: `rotate(${item.rotate}deg)`,
          }}
          initial={{ y: item.y, opacity: 0 }}
          animate={{
            y: '100vh',
            opacity: [0, 0.9, 0.9, 0],
            x: `${item.x + (Math.random() - 0.5) * 20}%`,
            rotate: item.rotate + 360,
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {item.shape}
        </motion.div>
      ))}
    </div>
  );
};

export default function Hero() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(true);

  const handleService = () => {
    navigate("/services");
  };

  const handleProducts = () => {
    navigate("/products");
  };

  // <-- 2. Variants for staggered entry animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each child animating in
      },
    },
  };

  const itemFadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 }
    },
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${Pattern})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* 19 Years Celebration Banner with Confetti */}
      {/* <-- MODIFICATION: More vibrant gradient, taller, and shadow-xl */}
      <div className="w-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 py-3 sm:py-4 text-center relative z-50 overflow-visible shadow-xl">
        {showConfetti && <Confetti />}
        <motion.div
          // <-- MODIFICATION: Larger text, bold font, more gap
          className="text-white text-base sm:text-lg font-bold flex items-center justify-center gap-2 sm:gap-3 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 0.8,
            scale: {
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2
            }
          }}
          onHoverStart={() => setShowConfetti(true)}
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            className="inline-block"
          >
            ✨
          </motion.span>
          
          {/* <-- MODIFICATION: Added shining text animation */}
          <motion.span
            className="inline-block bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent"
            style={{ backgroundSize: '200% auto' }}
            animate={{
              backgroundPosition: ['-200% center', '200% center'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 2, // Wait 2 seconds between shines
            }}
          >
            Celebrating 19 Years of Innovation & Excellence
          </motion.span>

          {/* <-- MODIFICATION: De-emphasized secondary text */}
          <span className="hidden sm:inline text-white/80 mx-1">•</span>
          <span className="hidden sm:inline font-normal text-white/80">2006 - Present</span>
          
          <motion.span
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
            className="inline-block"
          >
            🎉
          </motion.span>
        </motion.div>
      </div>
      {/* Overlay gradient for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/95 to-white/0 z-20"></div>

      {/* Decorative blur circle */}
      <div className="absolute -bottom-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between relative z-30">
        
        {/* <-- 3. Left Content - Wrapped in motion.div for staggering */}
        <motion.div
          className="max-w-2xl text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="show" // Animate when component mounts
        >
          {/* <-- 4. Added variants to children */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-4 bg-gradient-to-r from-sky-600 to-blue-800 bg-clip-text text-transparent"
            variants={itemFadeInLeft}
          >
            Wealth Zone Group AI – <br className="hidden sm:block" />
            Powering the Future with Intelligent Solutions
          </motion.h1>

          <motion.p
            className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed"
            variants={itemFadeInLeft}
          >
            Harness the full potential of{" "}
            <span className="font-semibold text-gray-800">Artificial Intelligence</span>,{" "}
            <span className="font-semibold text-gray-800">Blockchain</span>, and{" "}
            <span className="font-semibold text-gray-800">Cloud Computing</span>{" "}
            to revolutionize your business processes.
            <span className="block mt-2">
              Wealth Zone AI delivers tailored, next-gen technology solutions
              that optimize efficiency, drive innovation, and unlock new growth
              opportunities.
            </span>
          </motion.p>

          {/* <-- 5. Added variants to button container */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row sm:space-x-4 gap-4 justify-center lg:justify-start"
            variants={itemFadeInLeft}
          >
            {/* <-- 6. Converted button to motion.button for better hover/tap */}
            <motion.button
              onClick={handleService}
              className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-sky-600 to-sky-700 text-white font-semibold shadow-lg cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 100, 200, 0.2)" // Lift effect
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Our Services
            </motion.button>
            <motion.button
              onClick={handleProducts}
              className="px-6 sm:px-8 py-3 rounded-full border border-sky-600 text-sky-700 font-semibold hover:bg-sky-50 cursor-pointer"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgb(240 249 255)" // Tailwind sky-50
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Our Products
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side - Robo Illustration */}
        <motion.div
          className="mt-10 sm:mt-12 lg:mt-0 lg:ml-12"
          // <-- 7. Added initial state for entry animation
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            // <-- 8. Added opacity and scale to the animate prop
            opacity: 1,
            scale: 1,
            y: [0, -20, 0, 20, 0],
            x: [0, 10, -10, 10, 0],
            rotate: [0, 5, -5, 5, 0],
          }}
          transition={{
            // <-- 9. Defined separate transitions for entry vs. loop
            duration: 6, // Default duration for loops
            repeat: Infinity,
            ease: "easeInOut",
            opacity: { duration: 0.8, ease: "easeOut", repeat: 0 }, // Entry only
            scale: { duration: 0.8, ease: "easeOut", repeat: 0 },   // Entry only
          }}
        >
          <img
            src={Robo}
            alt="AI Robot"
            className="w-56 sm:w-72 lg:w-[460px] drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* <-- 10. WhatsApp Floating Button - Converted to motion.a */}
      <motion.a
        href="https://wa.me/7842770089"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 rounded-full p-4 shadow-lg z-20"
        animate={{
          scale: [1, 1.1, 1], // Pulsing animation
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.2,
          rotate: 15, // Fun rotate on hover
        }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="text-white text-2xl sm:text-3xl" />
      </motion.a>
    </section>
  );
}