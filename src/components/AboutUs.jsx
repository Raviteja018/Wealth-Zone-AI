import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBullseye, FaEye, FaHeart, FaUser } from "react-icons/fa";
import aboutImg from "../assets/aboutus.jpg";
import Delivery from "../assets/Projects/delivery.jpg";
import Examination from "../assets/Projects/examination.jpg";
import HRM from "../assets/Projects/HRM.jpg";
import ai from "../assets/Projects/ai.jpg";
import cyber from "../assets/Projects/cyber.png";

export default function AboutUs() {
  const team = [
    { name: "B.Sri Lakkshhmi", designation: "Founder", color: "bg-green-500", Qualification: "MBA (Finance & IT)" },
    { name: "B.Chakravarthy", designation: "Operation Manager", color: "bg-pink-500", Qualification: "MBA (Finance & IT)" },
    { name: "G.Giri Ram", designation: "Tech Lead", color: "bg-yellow-500" },
    { name: "K.Ram Prasad", designation: "Network Engineer", color: "bg-red-500" },
    { name: "G.Revanth", designation: "Senior Developer", color: "bg-sky-500" },
    { name: "G.Rama Mohan", designation: "Senior Developer", color: "bg-sky-500" },
    { name: "Y.Sravani", designation: "Senior Developer", color: "bg-sky-500" },
    { name: "Srikanth", designation: "Senior React Native Developer", color: "bg-red-500" },
    { name: "Sk.Pervez", designation: "Senior Developer", color: "bg-red-500" },
    { name: "B.Raviteja", designation: "Senior Developer", color: "bg-red-500" },
    { name: "M.Pradeep", designation: "System Engineer", color: "bg-sky-500" },
    { name: "K.Sai Preethi", designation: "Devops Engineer", color: "bg-sky-500" },
    { name: "Venkatesh", designation: "Senior Java Developer", color: "bg-sky-500" },
  ];

  const projects = [
    {
      name: "Bonjour – Food Delivery App",
      description:
        "A sleek and modern food delivery platform inspired by the charm of Paris. Bonjour lets users explore authentic French pastries, meals, and beverages with a seamless ordering experience.",
      image: Delivery,
    },
    {
      name: "OTRAS – Online Examination Platform",
      description:
        "A government-grade online exam system built for scale, reliability, and security. OTRAS streamlines candidate registration, test scheduling, and real-time result processing.",
      image: Examination,
    },
    {
      name: "HRM Portal",
      description:
        "A powerful HR management system that automates employee records, payroll, leave tracking, and performance reviews — designed for modern organizations.",
      image: HRM,
    },
    {
      name: "STEM – AI Education Initiative",
      description:
        "A groundbreaking platform to teach AI and technology concepts at the school level. STEM empowers young minds to think, code, and innovate from an early age.",
      image: ai,
    },
    {
      name: "Cyber-Security",
      description:
        "We provide hands-on Cybersecurity Training with real-time projects, helping learners master threat detection, prevention, and response while gaining practical experience in securing digital systems.",
      image: cyber,
    },
  ];

  const [index, setIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % team.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [team.length]);

  // Auto-slide for projects
  useEffect(() => {
    const interval = setInterval(() => {
      setProjectIndex((prev) => (prev + 1) % projects.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section className="bg-gradient-to-b from-white via-sky-50 to-blue-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 lg:py-15">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sky-700">
            About Us
          </h2>
          <p className="mt-4 text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about who we are, our mission, vision, and the journey that drives us forward.
          </p>
        </motion.div>

        {/* Who We Are */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-4">Who We Are</h3>
            <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
              Founded In 2006, <span className="font-semibold text-sky-700">WealthZone Group AI</span> is a leading product and service-based technology company specializing in
              <span className="font-medium"> Artificial Intelligence (AI), Advanced Digital Solutions, and Digital Marketing Services.</span>
              We combine innovation and technology to help businesses grow smarter, faster, and stronger.
            </p>
          </motion.div>
          <motion.div className="flex justify-center" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <img src={aboutImg} alt="About Us" className="w-full max-w-xl h-96 rounded-xl shadow-xl object-cover" />
          </motion.div>
        </div>

        {/* Projects Carousel Section */}
        <section className="py-16 bg-white mt-20" id="projects">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 uppercase">
              Projects
              <span className="block h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></span>
            </motion.h2>
            <motion.p className="mt-6 text-gray-600 text-base max-w-3xl mx-auto leading-relaxed">
              <span className="text-sky-500 font-semibold">Wealth-Zone-Group-AI</span> brings Deep Expertise and Innovation to every Project. We combine Strategy, Creativity, and Technology to Deliver World-Class Digital Experiences.
            </motion.p>

            {/* Carousel Animation */}
            <div className="relative h-[500px] flex items-center justify-center overflow-hidden mt-0">
              <AnimatePresence>
                {projects.map((project, i) => {
                  let position = (i - projectIndex + projects.length) % projects.length;
                  return (
                    <motion.div
                      key={project.name}
                      className="absolute w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity:
                          position === 0
                            ? 1
                            : position === 1 || position === projects.length - 1
                            ? 0.4
                            : 0,
                        x:
                          position === 0
                            ? 0
                            : position === 1
                            ? 300
                            : position === projects.length - 1
                            ? -300
                            : 0,
                        zIndex: position === 0 ? 10 : 0,
                        scale: position === 0 ? 1 : 0.85,
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      exit={{ opacity: 0 }}
                    >
                      <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-lg cursor-pointer" />
                      <div className="p-4 text-left">
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">{project.name}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Team Carousel Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-sky-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sky-700 mb-12">Our Team</h2>
            <div className="relative h-80 flex items-center justify-center overflow-hidden">
              <AnimatePresence>
                {team.map((member, i) => {
                  let position = (i - index + team.length) % team.length;
                  return (
                    <motion.div
                      key={member.name}
                      className="absolute w-60 sm:w-72 h-64 bg-sky-100 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity:
                          position === 0
                            ? 1
                            : position === 1 || position === team.length - 1
                            ? 0.4
                            : 0,
                        x:
                          position === 0
                            ? 0
                            : position === 1
                            ? 200
                            : position === team.length - 1
                            ? -200
                            : 0,
                        zIndex: position === 0 ? 10 : 0,
                        scale: position === 0 ? 1 : 0.85,
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      exit={{ opacity: 0 }}
                    >
                      <div className={`w-16 h-16 flex items-center justify-center rounded-full ${member.color} text-white text-3xl mb-4`}>
                        <FaUser />
                      </div>
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.designation}</p>
                      {member.Qualification && <p className="text-sm text-gray-800">{member.Qualification}</p>}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
