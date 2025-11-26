import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Pattern from "../assets/pattern.jpg";

// Confetti component
const Confetti = () => {
  const [confetti, setConfetti] = useState([]);
  const colors = ['#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe', '#ffffff', '#3b82f6cc', '#60a5facc'];
  const shapes = ['🎊', '✨', '🎉', '🎈', '🎁'];

  useEffect(() => {
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

  return (
    <section
      className="relative overflow-hidden min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${Pattern})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 19 Years Celebration Banner */}
      <div className="w-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 py-3 sm:py-4 text-center relative z-50 overflow-visible shadow-xl">
        {showConfetti && <Confetti />}
        <motion.div
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
              repeatDelay: 2,
            }}
          >
            Celebrating 20th Year of Innovation & Excellence
          </motion.span>

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

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-sky-400/30 via-blue-500/20 to-indigo-600/30 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/25 via-pink-500/20 to-rose-500/25 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-gradient-to-br from-cyan-400/20 via-teal-500/15 to-emerald-500/20 blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center relative z-30 px-4 sm:px-6 lg:px-12 py-16 bg-white/80">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Heading with Gradient */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Wealth Zone Group AI
            </span>
            <span className="block mt-4 text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              Powering the Future with Intelligent Solutions
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-8 text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Harness the full potential of{" "}
            <span className="font-bold text-sky-600">Artificial Intelligence</span>,{" "}
            <span className="font-bold text-indigo-600">Cyber Security</span>,{" "}
            <span className="font-bold text-blue-600">Digital Marketing</span>{" and "}
            <span className="font-bold text-purple-600">Cloud Computing</span>{" "}
            to revolutionize your business processes.
          </motion.p>

          {/* Service Icons Grid */}
          {/* <motion.div
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { icon: "🤖", label: "AI Solutions", color: "from-sky-400 to-blue-600" },
              { icon: "🔒", label: "Cyber Security", color: "from-purple-400 to-pink-600" },
              { icon: "☁️", label: "Cloud Computing", color: "from-cyan-400 to-teal-600" },
              { icon: "📊", label: "Digital Marketing", color: "from-orange-400 to-red-600" }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className={`relative group cursor-pointer`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                  <motion.div
                    className="text-5xl mb-3"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                  >
                    {service.icon}
                  </motion.div>
                  <p className="text-white font-semibold text-sm sm:text-base">{service.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div> */}

          {/* CTA Buttons */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              onClick={handleService}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 text-white font-bold text-lg shadow-2xl cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 20px 40px rgba(14, 165, 233, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Explore Our Services
            </motion.button>
            <motion.button
              onClick={handleProducts}
              className="px-10 py-4 rounded-full border-2 border-sky-600 text-sky-700 font-bold text-lg hover:bg-sky-50 cursor-pointer shadow-lg"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgb(240 249 255)",
                boxShadow: "0px 20px 40px rgba(14, 165, 233, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              View Our Products
            </motion.button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { number: "19+", label: "Years Experience" },
              { number: "500+", label: "Projects Delivered" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.1 + idx * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 mt-2 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/7842770089"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 rounded-full p-4 shadow-2xl z-50 hover:bg-green-600"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.2,
          rotate: 15,
        }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="text-white text-2xl sm:text-3xl" />
      </motion.a>
    </section>
  );
}