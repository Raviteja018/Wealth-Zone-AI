import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HeroImage from "../assets/services/hero_professional1.jpg";

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
    <section className="relative overflow-hidden min-h-screen flex flex-col bg-white">
      {/* 20 Years Celebration Banner */}
      <div className="w-full bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-3 sm:py-4 text-center relative z-50 shadow-md">
        {showConfetti && <Confetti />}
        <motion.div
          className="text-white text-sm sm:text-base font-medium flex flex-wrap items-center justify-center gap-2 relative z-10 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onHoverStart={() => setShowConfetti(true)}
        >
          <span className="text-lg">✨</span>
          <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent font-bold tracking-wide">
            Celebrating 20th Year of Innovation & Excellence
          </span>
          <span className="hidden sm:inline text-yellow-500/50">•</span>
          <span className="text-yellow-100/80 text-xs sm:text-sm border border-yellow-500/30 px-2 py-0.5 rounded-full">2006 - Present</span>
          <span className="text-lg">🎉</span>
        </motion.div>
      </div>

      {/* Main Content Split Layout */}
      <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-0 flex flex-col lg:flex-row items-center justify-center gap-12 relative z-30">

        {/* Left Column: Text Content */}
        <motion.div
          className="flex-1 text-left lg:pr-8 max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-blue-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Wealth Zone Group AI <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Powering the Future
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Harness the full potential of <span className="font-semibold text-blue-600">Artificial Intelligence</span>, <span className="font-semibold text-indigo-600">Cyber Security</span>, <span className="font-semibold text-sky-600">Digital Marketing</span> and <span className="font-semibold text-purple-600">Cloud Computing</span> to revolutionize your business processes.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={handleService}
              className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
            >
              Explore Services
            </button>
            <button
              onClick={handleProducts}
              className="px-8 py-3.5 rounded-full border-2 border-blue-100 text-blue-600 font-bold text-lg hover:bg-blue-50 hover:border-blue-200 transition-all"
            >
              View Products
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Image & Floating Elements */}
        <motion.div
          className="flex-1 relative w-full max-w-lg lg:max-w-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Abstract Background Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-blue-50 via-indigo-50 to-white rounded-full blur-3xl -z-10 opacity-70" />

          {/* Main Image */}
          <motion.img
            src={HeroImage}
            alt="Professional Business Woman"
            className="relative z-10 w-full h-auto drop-shadow-2xl rounded-2xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Floating Card 1: Experience */}
          <motion.div
            className="absolute top-10 -left-6 sm:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl z-20 border border-white/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">🏆</div>
              <div>
                <p className="text-2xl font-bold text-slate-800">20+</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Years Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 2: Projects */}
          <motion.div
            className="absolute bottom-20 -right-4 sm:-right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl z-20 border border-white/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">🚀</div>
              <div>
                <p className="text-2xl font-bold text-slate-800">500+</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Projects Done</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 3: Satisfaction */}
          <motion.div
            className="absolute -bottom-6 left-10 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl z-20 border border-white/50 flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
              ))}
            </div>
            <div className="pl-2">
              <p className="text-sm font-bold text-slate-800">100%</p>
              <p className="text-[10px] text-gray-500">Satisfaction</p>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/7842770089"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 rounded-full p-4 shadow-2xl z-50 hover:bg-green-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="text-white text-2xl sm:text-3xl" />
      </motion.a>
    </section>
  );
}