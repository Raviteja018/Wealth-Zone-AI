import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


export default function CallToAction() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/contact')
  }
  return (
    <section className="py-20 bg-blue-50 text-center">
      <motion.div
        className="max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
        <span className="text-sky-600">  Ready to Transform Your Business?</span>
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
          Let's discuss how our innovative solutions can drive your success
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300"
          onClick={handleClick}
        >
          Start Your Journey &rarr;
        </motion.button>
      </motion.div>
    </section>
  );
}
