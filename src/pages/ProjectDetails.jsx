import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { FaArrowLeft, FaHome, FaCheckCircle, FaCode } from "react-icons/fa";

export default function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto px-6 py-16 text-center"
        >
          <div className="text-8xl mb-6">🔍</div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            Project Not Found
          </h1>
          <p className="mt-6 text-lg text-gray-600">The project you're looking for doesn't exist or has been moved.</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <FaArrowLeft /> Go Back
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
        </motion.div>
        
        {/* Floating Navigation */}
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="absolute top-8 left-8 flex gap-3 z-20"
        >
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaArrowLeft className="text-sky-600 group-hover:-translate-x-1 transition-transform" />
            <span className="text-gray-800 font-medium">Back</span>
          </button>
          {/* <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaHome className="text-sky-600" />
            <span className="text-gray-800 font-medium">Home</span>
          </button> */}
        </motion.div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {/* <div className="inline-block px-4 py-1.5 rounded-full bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 mb-4">
                <span className="text-sky-300 text-sm font-medium">Featured Project</span>
              </div> */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {project.name}
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
                {project.shortDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Main Content */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Description Card */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-sky-500 to-blue-600 rounded-full" />
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent">
                  Project Overview
                </h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {project.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                This project embodies our commitment to excellence, combining cutting-edge technology 
                with intuitive design. Built with scalability, security, and user experience at its core, 
                it represents the pinnacle of modern software engineering practices.
              </p>
            </div>

            {/* Key Features Card */}
            <div className="bg-gradient-to-br from-white/90 to-sky-50/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full" />
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                  Key Features
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="group flex items-start gap-3 p-4 rounded-xl hover:bg-white/70 transition-all duration-300"
                  >
                    <FaCheckCircle className="text-emerald-500 text-xl mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technical Excellence Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full" />
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent">
                  Technical Excellence
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Modular Architecture</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Built with clean, maintainable code following industry best practices and design patterns.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Performance Optimized</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Engineered for speed with optimized assets, lazy loading, and efficient data handling.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Security First</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Implements robust security measures including encryption, authentication, and data protection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Sidebar */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Technology Stack Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-2xl text-white">
              <div className="flex items-center gap-3 mb-6">
                <FaCode className="text-3xl text-blue-200" />
                <h3 className="text-2xl font-bold">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-medium hover:bg-white/30 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold mb-4 text-blue-100">Project Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200 text-sm">Features</span>
                    <span className="font-bold text-lg">{project.features.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200 text-sm">Technologies</span>
                    <span className="font-bold text-lg">{project.technologies.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200 text-sm">Status</span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold">Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-lg border border-amber-100">
              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Interested in Similar Solutions?</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Let's discuss how we can build something amazing for you.
                </p>
                <button
                  onClick={() => navigate("/contact")}
                  className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
