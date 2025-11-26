import React from "react";
import { FaUtensils, FaIdCard, FaUserTie, FaRobot, FaArrowRight, FaGraduationCap, FaTimes, FaCheckCircle, FaLayerGroup } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    title: "Bonjour – Food Delivery App",
    description: "A sleek and modern food delivery platform inspired by the charm of Paris, featuring real-time tracking and personalized recommendations.",
    fullDescription: "Bonjour is a comprehensive food delivery solution that brings the authentic taste of Paris to your doorstep. Our platform features real-time order tracking, secure payment integration, and a user-friendly interface that makes ordering your favorite French delicacies effortless. With features like scheduled deliveries, favorite restaurants, and personalized recommendations, Bonjour offers a seamless dining experience.",
    points: [
      "Real-time order tracking",
      "Secure payment gateway integration",
      "Personalized restaurant recommendations",
    ],
    features: [
      "Real-time order tracking",
      "Secure payment gateway integration",
      "Personalized restaurant recommendations",
      "Scheduled deliveries",
      "Loyalty program integration",
    ],
    technologies: ["React Native", "Java", "MySql", "AWS"],
    icon: <FaUtensils className="text-white text-3xl" />,
    gradient: "from-orange-500 to-red-600",
    delay: 0.1,
  },
  {
    title: "OTRAS – One Time Registration",
    description: "A unified applicant registration platform for government exams and recruitment, streamlining the process with single-time registration.",
    fullDescription: "OTRAS is a centralized registration and application management system developed for government recruitment boards and examination authorities. It allows candidates to register once and reuse their verified profile for multiple applications, eliminating repetitive data entry. The system supports dynamic multi-step forms, document uploads, and automated verification workflows.",
    points: [
      "Single-time registration for multiple applications",
      "Document upload and verification system",
      "Real-time application tracking",
    ],
    features: [
      "Single-time registration for multiple applications",
      "Dynamic multi-step applicant forms",
      "Document upload and verification system",
      "Real-time application tracking and notifications",
      "Role-based admin and reviewer dashboards",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    icon: <FaIdCard className="text-white text-3xl" />,
    gradient: "from-blue-500 to-cyan-600",
    delay: 0.2,
  },
  {
    title: "HRM Portal & Service Provider",
    description: "Comprehensive HR management system streamlining processes from recruitment to retirement with powerful reporting tools.",
    fullDescription: "Our HRM Portal is an all-in-one human resource management solution that streamlines HR processes from recruitment to retirement. The platform offers modules for attendance management, payroll processing, performance reviews, and employee self-service. With its intuitive interface and powerful reporting tools, organizations can make data-driven HR decisions.",
    points: [
      "Employee self-service portal",
      "Automated payroll processing",
      "Performance management system",
    ],
    features: [
      "Employee self-service portal",
      "Automated payroll processing",
      "Performance management system",
      "Leave and attendance tracking",
      "Compliance management",
    ],
    technologies: ["React", "Python", "Django", "MySQL", "Redis"],
    icon: <FaUserTie className="text-white text-3xl" />,
    gradient: "from-purple-500 to-indigo-600",
    delay: 0.3,
  },
  {
    title: "WZG AI – STEM & Robotics",
    description: "Turning students into creators with hands-on STEM, Robotics, and AI education aligned with NEP 2020.",
    fullDescription: "WZG AI transforms traditional schooling by integrating STEM, Robotics and AI into everyday learning. Our curriculum — co-developed by educators and engineers — gives students hands-on experience through real projects, coding, and engineering activities that spark curiosity, build critical thinking, and develop future-ready skills.",
    points: [
      "NEP 2020 aligned curriculum",
      "Hands-on robotics kits and engineering projects",
      "Project-based coding and AI exercises",
    ],
    features: [
      "NEP 2020 aligned curriculum",
      "Hands-on robotics kits and engineering projects",
      "Project-based coding and AI exercises",
      "Teacher training & deployment playbooks",
      "Progress tracking, portfolios, and certification",
    ],
    technologies: ["React", "Python", "TensorFlow", "Firebase", "Arduino"],
    icon: <FaRobot className="text-white text-3xl" />,
    gradient: "from-green-500 to-emerald-600",
    delay: 0.4,
  },
  {
    title: "Cheetah – LMS Platform",
    description: "An advanced Learning Management System for school students introduced by WZG-AI, fostering personalized education.",
    fullDescription: "Cheetah is a cutting-edge Learning Management System (LMS) designed specifically for K-12 education. It empowers schools to deliver personalized learning experiences, track student progress in real-time, and foster collaboration between teachers, students, and parents. With gamified learning modules and AI-driven analytics, Cheetah makes learning engaging and effective.",
    points: [
      "Personalized learning paths",
      "Interactive study materials",
      "Progress tracking for students & parents",
    ],
    features: [
      "AI-driven personalized learning paths",
      "Gamified quizzes and interactive content",
      "Real-time progress analytics for parents",
      "Seamless teacher-student communication",
      "Offline access to study materials",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "AWS"],
    icon: <FaGraduationCap className="text-white text-3xl" />,
    gradient: "from-yellow-400 to-orange-500",
    delay: 0.5,
  },
];

export default function OurProducts() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);

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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-center">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: product.delay }}
              className="group relative p-6 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
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
              <button
                onClick={() => setSelectedProduct(product)}
                className="relative z-10 flex items-center text-sm font-semibold text-gray-500 group-hover:text-sky-600 transition-colors mt-auto cursor-pointer"
              >
                Learn More <FaArrowRight className="ml-2 text-xs transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              layoutId={`product-${selectedProduct.title}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className={`relative h-32 bg-gradient-to-r ${selectedProduct.gradient} flex items-center px-8`}>
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl mr-6 shadow-lg">
                  {selectedProduct.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white shadow-sm">
                  {selectedProduct.title}
                </h3>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Body */}
              <div className="p-8 overflow-y-auto custom-scrollbar">
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <FaLayerGroup className="mr-2 text-sky-600" /> Overview
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProduct.fullDescription}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <FaCheckCircle className="mr-2 text-green-600" /> Key Features
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProduct.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start bg-gray-50 p-3 rounded-xl">
                        <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${selectedProduct.gradient} mr-3 flex-shrink-0`} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
