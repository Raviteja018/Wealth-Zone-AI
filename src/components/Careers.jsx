import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ✅ Use your job object
const jobs = [
  {
    title: "UI/UX Designer – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Remote / Bangalore",
  },
];

const internships = []; // <-- Empty to test "No internships"

export default function Careers() {
  const navigate = useNavigate();

  const handleApply = (jobTitle) => {
    navigate("/job-details", { state: { jobTitle } });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12 relative overflow-hidden">
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
                <button
                  onClick={() => handleApply(job.title)}
                  className="mt-4 w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors"
                >
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
          {internships.length === 0 ? (
            <p className="text-gray-600 italic">No internships right now.</p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6">
              {internships.map((intern, index) => (
                <motion.div
                  key={index}
                  className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-sky-100"
                  whileHover={{ scale: 1.03 }}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{intern.title}</h3>
                  <p className="text-gray-600 mb-1">Duration: {intern.duration}</p>
                  <button
                    onClick={() => handleApply(intern.title)}
                    className="mt-4 w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors"
                  >
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
