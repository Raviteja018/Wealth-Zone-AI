import React from "react";
import { motion } from "framer-motion";

// Sample data
const jobs = [
  { title: "Frontend Developer", location: "Remote", type: "Full-Time" },
  { title: "Backend Developer", location: "Bangalore, India", type: "Full-Time" },
  { title: "UI/UX Designer", location: "Remote", type: "Contract" },
];

const internships = [
  { title: "AI/ML Intern", duration: "3 Months", stipend: "₹15,000" },
  { title: "Frontend Intern", duration: "6 Months", stipend: "₹10,000" },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12 relative overflow-hidden">
      {/* Decorative blurred circles */}
      {/* <div className="absolute top-0 -left-10 w-72 h-72 bg-sky-200 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 -right-10 w-96 h-96 bg-sky-300 rounded-full filter blur-3xl opacity-40"></div> */}

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-blue-800 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join Our Team
        </motion.h1>

        {/* Job Postings */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-sky-600 inline-block">
            Job Openings
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-sky-100"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-1">{job.location}</p>
                <p className="text-gray-600 font-semibold">{job.type}</p>
                <button className="mt-4 w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Internships */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-sky-600 inline-block">
            Internships
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {internships.map((intern, index) => (
              <motion.div
                key={index}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-sky-100"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{intern.title}</h3>
                <p className="text-gray-600 mb-1">Duration: {intern.duration}</p>
                <p className="text-gray-600 font-semibold">Stipend: {intern.stipend}</p>
                <button className="mt-4 w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Company Culture */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-sky-600 inline-block">
            Our Culture
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-md border border-sky-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We foster creativity and encourage new ideas to solve real-world problems using AI and technology.
              </p>
            </motion.div>
            <motion.div
              className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-md border border-sky-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Our teams work closely together, sharing knowledge and learning from each other in a supportive environment.
              </p>
            </motion.div>
            <motion.div
              className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-md border border-sky-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Growth</h3>
              <p className="text-gray-600">
                We invest in our employees' professional development and provide opportunities to advance in their careers.
              </p>
            </motion.div>
            <motion.div
              className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-md border border-sky-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Work-Life Balance</h3>
              <p className="text-gray-600">
                Flexible work hours and a supportive environment help our employees maintain a healthy work-life balance.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
