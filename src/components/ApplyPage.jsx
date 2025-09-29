import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function ApplyPage() {
  const location = useLocation();
  const jobTitle = location.state?.jobTitle || "General Application";

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12 flex justify-center items-center">
      <motion.div
        className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8 max-w-xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Apply for {jobTitle}
        </h1>
        <p className="text-gray-600 mb-8">
          Please fill out the form below and our team will get back to you.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Upload Resume
            </label>
            <input
              type="file"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              accept=".pdf,.doc,.docx"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Cover Letter (Optional)
            </label>
            <textarea
              rows="4"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Tell us why you'd be a great fit"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-sky-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
            whileTap={{ scale: 0.97 }}
          >
            Submit Application
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
