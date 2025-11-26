import React from "react";
import { FaUtensils, FaIdCard, FaUserTie, FaRobot, FaArrowRight, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const products = [
  {
    title: "Bonjour – Food Delivery App",
    description: "A sleek and modern food delivery platform inspired by the charm of Paris, featuring real-time tracking and personalized recommendations.",
    points: [
      "Real-time order tracking",
      "Secure payment gateway integration",
      "Personalized restaurant recommendations",
    ],
    icon: <FaUtensils className="text-white text-3xl" />,
    gradient: "from-orange-500 to-red-600",
    delay: 0.1,
  },
  {
    title: "OTRAS – One Time Registration",
    description: "A unified applicant registration platform for government exams and recruitment, streamlining the process with single-time registration.",
    points: [
      "Single-time registration for multiple applications",
      "Document upload and verification system",
      "Real-time application tracking",
    ],
    icon: <FaIdCard className="text-white text-3xl" />,
    gradient: "from-blue-500 to-cyan-600",
    delay: 0.2,
  },
  {
    title: "HRM Portal & Service Provider",
    description: "Comprehensive HR management system streamlining processes from recruitment to retirement with powerful reporting tools.",
    points: [
      "Employee self-service portal",
      "Automated payroll processing",
      "Performance management system",
    ],
    icon: <FaUserTie className="text-white text-3xl" />,
    gradient: "from-purple-500 to-indigo-600",
    delay: 0.3,
  },
  {
    title: "WZG AI – STEM & Robotics",
    description: "Turning students into creators with hands-on STEM, Robotics, and AI education aligned with NEP 2020.",
    points: [
      "NEP 2020 aligned curriculum",
      "Hands-on robotics kits and engineering projects",
      "Project-based coding and AI exercises",
    ],
    icon: <FaRobot className="text-white text-3xl" />,
    gradient: "from-green-500 to-emerald-600",
    delay: 0.4,
  },
  {
    title: "Cheetah – LMS Platform",
    description: "An advanced Learning Management System for school students introduced by WZG-AI, fostering personalized education.",
    points: [
      "Personalized learning paths",
      "Interactive study materials",
      "Progress tracking for students & parents",
    ],
    icon: <FaGraduationCap className="text-white text-3xl" />,
    gradient: "from-yellow-400 to-orange-500",
    delay: 0.5,
  },
];

export default function OurProducts() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-sky-50 overflow-hidden" id="products">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our innovative AI-powered products designed to transform industries
            with intelligence, automation, and performance.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: product.delay }}
              className="group relative p-6 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon with Gradient Circle */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${product.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {product.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-sky-700 transition-colors">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                {product.description}
              </p>

              {/* Points */}
              <ul className="space-y-2 mb-6">
                {product.points.map((point, i) => (
                  <li key={i} className="flex items-start text-gray-500 text-xs leading-relaxed">
                    <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient} mr-2 flex-shrink-0`} />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <button className="flex items-center text-sm font-semibold text-gray-500 group-hover:text-sky-600 transition-colors mt-auto">
                Learn More <FaArrowRight className="ml-2 text-xs transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
