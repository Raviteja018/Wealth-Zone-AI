import React from "react";
import {
  FaUsers,
  FaLightbulb,
  FaCheckCircle,
  FaChalkboardTeacher,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaUsers size={28} />,
      title: "Strong Leadership",
      description:
        "We collaborate closely with governments and enterprises, ensuring strategic guidance and impactful solutions.",
    },
    {
      icon: <FaLightbulb size={28} />,
      title: "Scalable & Secure Solutions",
      description:
        "Our platforms are designed to grow with your business while maintaining top-level security and reliability.",
    },
    {
      icon: <FaCheckCircle size={28} />,
      title: "End-to-End Execution",
      description:
        "From ideation to deployment, we deliver innovative solutions that meet your business objectives efficiently.",
    },
    {
      icon: <FaChalkboardTeacher size={28} />,
      title: "Proven AI Expertise",
      description:
        "We have extensive experience in AI-driven digital transformation, helping organizations leverage data effectively.",
    },
    {
      icon: <FaShieldAlt size={28} />,
      title: "Trust & Transparency",
      description:
        "We maintain complete transparency in processes and decisions, building long-term trust with our clients.",
    },
    {
      icon: <FaRocket size={28} />,
      title: "Innovation Focus",
      description:
        "We constantly explore new technologies and methodologies to keep your business ahead of the curve.",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-sky-50 to-blue-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Heading */}
        <motion.h2
          className="text-sky-700 font-bold tracking-widest uppercase text-2xl  text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>

        <motion.h3
          className="mt-3 text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-sky-600 to-blue-800 bg-clip-text text-transparent">
            Building Trust with Every Step
          </span>
        </motion.h3>

        <motion.p
          className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          At <span className="font-semibold text-sky-700">Wealth Zone AI</span>,
          we combine expertise, innovation, and transparency to help businesses
          thrive in today’s digital age.
        </motion.p>

        {/* Zig-Zag Feature Cards */}
        <div className="mt-16 flex flex-col space-y-12">
  {features.map((f, i) => (
    <motion.div
      key={i}
      className={`flex flex-col md:flex-row items-center gap-6 w-auto transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
        i % 2 !== 0 ? "md:flex-row-reverse md:text-right" : "md:text-left"
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.15 }}
      viewport={{ once: true }}
    >
      <div className="flex-shrink-0 bg-gradient-to-br from-sky-600 to-blue-700 text-white p-8 rounded-xl shadow-lg transition-all duration-500 group-hover:from-blue-500 group-hover:to-sky-500 group-hover:scale-105 w-auto">
        {f.icon}
      </div>
      <div className="p-4 bg-white rounded-xl shadow-md transition-all duration-500 hover:bg-sky-50 w-auto">
        <h4 className="text-xl font-semibold text-gray-900">{f.title}</h4>
        <p className="mt-2 text-gray-600">{f.description}</p>
      </div>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}