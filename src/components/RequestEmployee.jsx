import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaBriefcase, 
  FaUser, 
  FaBuilding, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";
import employeeImg from "../assets/requestemplyoee.jpg";
export default function RequestEmployee() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    positionType: "",
    shift: "",
    location: "",
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    respondBy: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been submitted!");
  };
 
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <FaCheckCircle className="text-green-300" />
                <span className="text-sm font-medium">Quick & Easy Process</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Request Top-Tier 
                <span className="block">Talent Today</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Looking for exceptional professionals to strengthen your team? We'll connect you with pre-vetted, qualified candidates who match your exact requirements.
              </p>

              <div className="space-y-4">
                {[
                  "Pre-screened & background checked",
                  "Fast turnaround time",
                  "Perfect cultural fit guaranteed"
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle className="text-white text-sm" />
                    </div>
                    <span className="text-blue-50">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={employeeImg}
                  alt="Professional Team"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-2xl max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaBriefcase className="text-2xl text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">5000+</p>
                    <p className="text-sm text-gray-600">Successful Placements</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
 
        {/* Request Employee Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tell Us What You Need
            </h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-2xl rounded-3xl p-8 sm:p-12 border border-gray-200"
          >
            {/* Job Information */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FaBriefcase className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Job Information
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Title <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Software Engineer"
                      className="w-full border-2 border-gray-200 rounded-xl p-3 pl-10 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <FaBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Is this position Contractual or full-time?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-6 mt-1">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="positionType"
                        value="Contractual"
                        onChange={handleChange}
                        required
                      />
                      Contractual
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="positionType"
                        value="Full-time"
                        onChange={handleChange}
                      />
                      Full-time
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Shift <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="shift"
                      value={formData.shift}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Morning, Afternoon, Evening"
                      className="w-full border-2 border-gray-200 rounded-xl p-3 pl-10 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <FaClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder="e.g. New York, London, Paris"
                      className="w-full border-2 border-gray-200 rounded-xl p-3 pl-10 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FaUser className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Your Contact Information
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John"
                      className="w-full border-2 border-gray-200 rounded-xl p-3 pl-10 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Doe"
                      className="w-full border-2 border-gray-200 rounded-xl p-3 pl-10 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="e.g. ABC Corporation"
                      className="w-full border-2 border-gray-200 rounded-xl p-3 pl-10 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 123-456-7890"
                      className="w-full border-2 border-gray-200 rounded-xl p-3 pl-10 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. johndoe@example.com"
                      className="w-full border-2 border-gray-200 rounded-xl p-3 pl-10 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Respond by
                  </label>
                  <div className="flex items-center gap-6 mt-1">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="respondBy"
                        value="Phone"
                        onChange={handleChange}
                      />
                      Phone
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="respondBy"
                        value="Email"
                        onChange={handleChange}
                      />
                      Email
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-10">
              <button
                type="submit"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-12 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Request Employee
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}