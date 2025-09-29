import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const job = {
  title: "UI/UX Designer – Fresher",
  company: "Wealth Zone Technologies",
  type: "Full-Time",
  location: "Remote / Bangalore",
  description:
    "We are looking for creative and enthusiastic UI/UX Design Freshers who are passionate about user-centered design...",
  responsibilities: [
    "Collaborate with product managers and developers to understand user requirements.",
    "Assist in creating wireframes, prototypes, user flows, and UI mockups.",
    "Support in designing mobile and web interfaces using Figma, Adobe XD, or similar tools.",
  ],
  qualifications: [
    "Bachelor's degree/diploma in Design, Computer Science, or related fields.",
    "Basic knowledge of UI/UX principles and user-centered design.",
    "Familiar with tools like Figma, Adobe XD, Sketch, or Photoshop.",
  ],
  offers: [
    "Real-time projects and mentorship",
    "Opportunity to build live apps and websites",
    "Flexible and creative working culture",
  ],
};

export default function JobDetails() {
  const location = useLocation();
  const jobTitle = location.state?.jobTitle || "Job";

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12 flex justify-center">
      <motion.div
        href="mailto:info@wealthzonegroupai.com?subject=Job Application - UI/UX Designer Fresher&body=Please attach your CV and details here."
        className="max-w-3xl w-full bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{job.title}</h1>
        <p className="text-gray-600 mb-4">
          {job.company} • {job.location} • {job.type}
        </p>
        <p className="text-gray-700 mb-6">{job.description}</p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Responsibilities
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          {job.responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Qualifications
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          {job.qualifications.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          What We Offer
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          {job.offers.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Application Form */}
        <form
          action="mailto:hr@wealthzone.com"
          method="POST"
          encType="multipart/form-data"
          className="space-y-4"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Upload Resume
            </label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              className="w-full border rounded-lg px-3 py-2"
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
