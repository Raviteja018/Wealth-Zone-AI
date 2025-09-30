import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const jobDetails = {
  "UI/UX Designer – Fresher": {
    title: "UI/UX Designer – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Hyderabad",
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
  },
  "Python Full-Stack Developer – Fresher": {
    title: "Python Full-Stack Developer – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Hyderabad",
    description:
      "We are seeking a passionate Python Full-Stack Developer to join our team and help build innovative web applications...",
    responsibilities: [
      "Develop and maintain web applications using Python and modern JavaScript frameworks.",
      "Design and implement RESTful APIs and database schemas.",
      "Collaborate with cross-functional teams to define, design, and ship new features.",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field.",
      "Proficiency in Python and at least one Python web framework (Django, Flask, FastAPI).",
      "Experience with frontend technologies like React, Vue, or Angular.",
      "Knowledge of database systems like PostgreSQL or MongoDB.",
    ],
    offers: [
      "Hands-on experience with real projects",
      "Mentorship from experienced developers",
      "Competitive salary and growth opportunities",
    ],
  },
  "Java Full-Stack Developer – Fresher": {
    title: "Java Full-Stack Developer – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Hyderabad",
    description:
      "Join our team as a Java Full-Stack Developer to build robust and scalable enterprise applications...",
    responsibilities: [
      "Develop and maintain Java-based web applications.",
      "Design and implement RESTful services and APIs.",
      "Work with frontend technologies to create responsive user interfaces.",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field.",
      "Strong knowledge of Java and Spring framework.",
      "Experience with frontend technologies like React or Angular.",
      "Understanding of database systems and SQL.",
    ],
    offers: [
      "Comprehensive training program",
      "Work on enterprise-level applications",
      "Career growth opportunities",
    ],
  },
  "UI/UX Designer – Intern": {
    title: "UI/UX Designer – Intern",
    company: "Wealth Zone Technologies",
    type: "Internship",
    location: "Hyderabad",
    description:
      "Gain valuable experience as a UI/UX Design Intern and work on real projects...",
    responsibilities: [
      "Assist in creating user flows, wireframes, and prototypes.",
      "Participate in user research and usability testing.",
      "Collaborate with the design team on various projects.",
    ],
    qualifications: [
      "Currently pursuing a degree in Design or related field.",
      "Basic understanding of design tools like Figma or Adobe XD.",
      "Passion for user-centered design principles.",
    ],
    offers: [
      "Hands-on experience with real projects",
      "Mentorship from senior designers",
      "Certificate upon completion",
    ],
  },
  "Python Full-Stack Developer – Intern": {
    title: "Python Full-Stack Developer – Intern",
    company: "Wealth Zone Technologies",
    type: "Internship",
    location: "Hyderabad",
    description:
      "Kickstart your career as a Python Full-Stack Developer with our internship program...",
    responsibilities: [
      "Assist in developing web applications using Python and JavaScript.",
      "Work with APIs and databases.",
      "Participate in code reviews and team meetings.",
    ],
    qualifications: [
      "Currently pursuing a degree in Computer Science or related field.",
      "Basic knowledge of Python and web development.",
      "Eagerness to learn and grow as a developer.",
    ],
    offers: [
      "Real-world project experience",
      "Mentorship from experienced developers",
      "Potential for full-time employment",
    ],
  },
  "Java Full-Stack Developer – Intern": {
    title: "Java Full-Stack Developer – Intern",
    company: "Wealth Zone Technologies",
    type: "Internship",
    location: "Hyderabad",
    description:
      "Join our Java internship program to gain hands-on experience in full-stack development...",
    responsibilities: [
      "Assist in developing Java-based applications.",
      "Work with Spring framework and frontend technologies.",
      "Participate in the full software development lifecycle.",
    ],
    qualifications: [
      "Currently pursuing a degree in Computer Science or related field.",
      "Basic understanding of Java programming.",
      "Interest in full-stack development.",
    ],
    offers: [
      "Practical experience with Java technologies",
      "Guidance from senior developers",
      "Networking opportunities",
    ],
  },
};

export default function JobDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const jobTitle = location.state?.jobTitle || "UI/UX Designer – Fresher";
  const job = jobDetails[jobTitle] || jobDetails["UI/UX Designer – Fresher"]; // Fallback to default job if not found

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12 flex justify-center">
      <motion.div
        className="max-w-3xl w-full bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Go back"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
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
          action={`mailto:hr@wealthzone.com?subject=Job Application - ${encodeURIComponent(job.title)}&body=Position: ${encodeURIComponent(job.title)}%0D%0A%0D%0APlease attach your CV and details here.`}
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
