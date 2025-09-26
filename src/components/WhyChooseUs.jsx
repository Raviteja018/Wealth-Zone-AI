import React from "react";
import {
  FaUsers,
  FaLightbulb,
  FaCheckCircle,
  FaChalkboardTeacher,
  FaUserFriends,
  FaComments,
} from "react-icons/fa";
import { motion } from "framer-motion";
import vector from "../assets/client.png";

export default function WhyChooseUs() {
  const features = [
    { icon: <FaUsers size={22} />, text: "Expertise & Experience" },
    { icon: <FaLightbulb size={22} />, text: "Tailored Solutions" },
    { icon: <FaCheckCircle size={22} />, text: "Reliability & Quality" },
    { icon: <FaChalkboardTeacher size={22} />, text: "Innovative Approach" },
    { icon: <FaUserFriends size={22} />, text: "User-Centric Design" },
    { icon: <FaComments size={22} />, text: "Transparent Communication" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-sky-50 to-blue-50 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 -right-20 w-[28rem] h-[28rem] bg-blue-300 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Heading */}
        <motion.h2
          className="text-sky-700 font-semibold tracking-widest uppercase text-xs text-center"
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

        {/* Content: Split Layout */}
        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Illustration */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-200 to-blue-200 
                            rounded-full blur-3xl opacity-40"></div>
            <motion.img
              src={vector}
              alt="Why Choose Us"
              className="w-80 lg:w-[28rem] drop-shadow-2xl relative z-10 rounded-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Right Features */}
          <div className="grid sm:grid-cols-2 gap-14">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 group"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-sky-600 to-blue-700 text-white p-4 rounded-xl shadow-lg 
                                group-hover:scale-110 transition-transform duration-500">
                  {f.icon}
                </div>
                <p className="font-medium text-gray-700 group-hover:text-sky-700 transition-colors duration-300">
                  {f.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
