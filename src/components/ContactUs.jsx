import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaUser, 
  FaBuilding,
  FaPaperPlane,
  FaCheckCircle,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram
} from "react-icons/fa";

export default function ContactUs() {
  const services = [
    "Data Analytics",
    "Software Development",
    "IT Consulting",
    "Cloud Services",
    "Software Testing",
    "AI Agents",
    "BPO Services",
    "Customer Support",
    "Marketing Services",
  ];

  const [selectedService, setSelectedService] = useState("");

  return (
    <section className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 to-white py-16 sm:py-20 overflow-hidden">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <FaCheckCircle className="text-blue-600" />
              <span className="text-sm font-medium text-blue-700">We're Here to Help</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
              Let's Start a
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Get in Touch
            </h3>

            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Phone</h4>
                  <a href="tel:+917842770089" className="text-gray-600 hover:text-blue-600">+91 7842770089</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Email</h4>
                  <a href="mailto:info@wealthzonegroupai.com" className="text-gray-600 hover:text-blue-600 block">info@wealthzonegroupai.com</a>
                  <a href="mailto:hr@wealthzonegroupai.com" className="text-gray-600 hover:text-blue-600 block">hr@wealthzonegroupai.com</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Address</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    2nd floor, A2 Square Building, Jai Hind Gandhi Rd, Madhapur, Hyderabad, Telangana 500081, India
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaClock />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600">24/7 Available</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="font-semibold text-blue-900 mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/company/wealth-zone-group-ai/" className="w-10 h-10 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-colors">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/wealth_zone_group_ai?igsh=MTZjeHplMDVtdWtndA==" className="w-10 h-10 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-colors">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/share/17giu3QTEn/" className="w-10 h-10 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-colors">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">Select a Service *</option>
                {services.map((service, idx) => (
                  <option key={idx} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Subject *"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              />

              <textarea
                placeholder="Message *"
                rows="6"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
              ></textarea>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                Send Message
                <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Our Location</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15224.6!2d78.387556!3d17.451194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzA0LjMiTiA3OMKwMjMnMTUuMiJF!5e0!3m2!1sen!2sin!4v1759085298585!5m2!1sen!2sin"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
