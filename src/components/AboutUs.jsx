import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser } from "react-icons/fa";
import aboutImg from "../assets/aboutus.jpg";
import Delivery from "../assets/Projects/delivery.jpg";
import Examination from "../assets/Projects/examination.jpg";
import HRM from "../assets/Projects/HRM.jpg";
import ai from "../assets/Projects/ai.jpg";
import cyber from "../assets/Projects/cyber.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function AboutUs() {
  // const team = [
  //   {
  //     name: "B.Sri Lakkshhmi",
  //     designation: "Founder",
  //     color: "bg-green-500",
  //     Qualification: "MBA (Finance & IT)",
  //   },
  //   {
  //     name: "B.Chakravarthy",
  //     designation: "Operation Manager",
  //     color: "bg-pink-500",
  //     Qualification: "MBA (Finance & IT)",
  //   },
  //   { name: "G.Giri Ram", designation: "Tech Lead", color: "bg-yellow-500" },
  //   {
  //     name: "K.Ram Prasad",
  //     designation: "Network Engineer",
  //     color: "bg-red-500",
  //   },
  //   { name: "G.Revanth", designation: "Senior Developer", color: "bg-sky-500" },
  //   {
  //     name: "G.Rama Mohan",
  //     designation: "Senior Developer",
  //     color: "bg-sky-500",
  //   },
  //   {
  //     name: "Ch.Nikhil",
  //     designation: "UI/UX Designer",
  //     color: "bg-sky-500",
  //   },
  //   { name: "Y.Sravani", designation: "Senior Developer", color: "bg-sky-500" },
  //   {
  //     name: "Srikanth",
  //     designation: "Senior React Native Developer",
  //     color: "bg-red-500",
  //   },
  //   { name: "Sk.Pervez", designation: "Senior Developer", color: "bg-red-500" },
  //   {
  //     name: "B.Raviteja",
  //     designation: "Senior Developer",
  //     color: "bg-red-500",
  //   },
  //   { name: "M.Pradeep", designation: "System Engineer", color: "bg-sky-500" },
  //   {
  //     name: "K.Sai Preethi",
  //     designation: "Devops Engineer",
  //     color: "bg-sky-500",
  //   },
  //   {
  //     name: "S.Venkatesh",
  //     designation: "Senior Java Developer",
  //     color: "bg-sky-500",
  //   },
  //   {
  //     name: "M.Uma Maheshwari",
  //     designation: "Accountant",
  //     color: "bg-sky-500",
  //   },
  //    {
  //     name: "Ch.Sri Ram",
  //     designation: "Tester",
  //     color: "bg-sky-500",
  //   },
  // ];

  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      name: "Bonjour – Food Delivery App",
      shortDescription:
        "A sleek and modern food delivery platform inspired by the charm of Paris.",
      description:
        "Bonjour is a comprehensive food delivery solution that brings the authentic taste of Paris to your doorstep. Our platform features real-time order tracking, secure payment integration, and a user-friendly interface that makes ordering your favorite French delicacies effortless. With features like scheduled deliveries, favorite restaurants, and personalized recommendations, Bonjour offers a seamless dining experience.",
      features: [
        "Real-time order tracking",
        "Secure payment gateway integration",
        "Personalized restaurant recommendations",
        "Scheduled deliveries",
        "Loyalty program integration",
      ],
      technologies: ["React Native", "Java", "MySql", "AWS"],
      image: Delivery,
    },
    {
      name: "OTRAS – Online Examination Platform",
      shortDescription:
        "A government-grade online exam system built for scale and security.",
      description:
        "OTRAS is a robust examination platform designed for educational institutions and government agencies. It supports various question types, automated grading, and advanced anti-cheating mechanisms. The system ensures data integrity and provides detailed analytics for performance evaluation. OTRAS can handle thousands of concurrent users with minimal latency, making it ideal for large-scale examinations.",
      features: [
        "AI-powered proctoring",
        "Multi-format question support",
        "Real-time analytics dashboard",
        "Secure browser lockdown",
        "Automated result processing",
      ],
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Docker"],
      image: Examination,
    },
    {
      name: "HRM Portal",
      shortDescription:
        "Comprehensive HR management system for modern organizations.",
      description:
        "Our HRM Portal is an all-in-one human resource management solution that streamlines HR processes from recruitment to retirement. The platform offers modules for attendance management, payroll processing, performance reviews, and employee self-service. With its intuitive interface and powerful reporting tools, organizations can make data-driven HR decisions and improve workforce productivity.",
      features: [
        "Employee self-service portal",
        "Automated payroll processing",
        "Performance management system",
        "Leave and attendance tracking",
        "Compliance management",
      ],
      technologies: ["React","Python", "Django", "MySQL", "Redis"],
      image: HRM,
    },
    {
      name: "STEM – AI Education Initiative",
      shortDescription:
        "Empowering young minds with AI and technology education.",
      description:
        "The STEM initiative is a comprehensive educational platform that introduces students to artificial intelligence, robotics, and programming through interactive lessons and hands-on projects. Our curriculum is designed by industry experts and educators to make complex concepts accessible and engaging for students of all ages. The platform includes virtual labs, coding exercises, and project-based learning modules.",
      features: [
        "Interactive coding environment",
        "Project-based learning modules",
        "Virtual robotics simulation",
        "Progress tracking and assessments",
        "Educator dashboard",
      ],
      technologies: ["React", "Python", "TensorFlow", "Firebase"],
      image: ai,
    },
    {
      name: "Cyber-Security Training Platform",
      shortDescription:
        "Hands-on cybersecurity training with real-world scenarios.",
      description:
        "Our Cybersecurity Training Platform provides immersive, hands-on learning experiences for security professionals and enthusiasts. The platform offers virtual labs, capture-the-flag challenges, and real-world attack simulations. Participants can practice penetration testing, network defense, and incident response in a safe, controlled environment. The curriculum is regularly updated to address emerging threats and security trends.",
      features: [
        "Virtual cybersecurity labs",
        "Real-world attack simulations",
        "Progress tracking and certification",
        "Interactive learning modules",
        "Community challenges and competitions",
      ],
      technologies: ["React", "Python", "Docker", "Kubernetes"],
      image: cyber,
    },
  ];

  const [index, setIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);

  // Auto-slide every 3 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % team.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [team.length]);

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
            Learn more about who we are, our mission, vision, and the journey
            that drives us forward.
          </p>
        </motion.div>

        {/* Who We Are */}
<div className="mt-12">
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="relative"
  >
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
      <h3 className="text-2xl sm:text-3xl font-bold text-sky-700">
        Who We Are
      </h3>
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-medium rounded-full shadow-md">
        <span className="animate-pulse">✨</span>
        <span>Celebrating 19 Years of Excellence</span>
        <span className="animate-pulse">🎉</span>
      </div>
    </div>

    {/* Floating Image */}
    <img
      src={aboutImg}
      alt="About Us"
      className="float-right ml-6 mb-4 w-full sm:w-[50%] lg:w-[45%] h-72 object-cover rounded-xl shadow-xl"
    />

    <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
      Founded in <span className="font-semibold text-sky-700">2006</span> as{" "}
      <span className="font-semibold text-sky-700">Oyster Technologies</span>{" "}
      and later rebranded to{" "}
      <span className="font-semibold text-sky-700">WealthZone Group AI</span>, our
      company has grown into a leading{" "}
      <span className="font-medium text-gray-900">
        product and service-based IT organization
      </span>{" "}
      specializing in{" "}
      <span className="font-medium text-gray-900">
        Artificial Intelligence (AI), Advanced Digital Solutions, Software
        Development, and Digital Marketing Services.
      </span>
    </p>

    <p className="mt-4 text-gray-700 leading-relaxed text-base lg:text-lg">
      At <span className="font-semibold text-sky-700">WealthZone Group AI</span>, we
      combine <span className="font-medium text-gray-900">Innovation, Intelligence,</span> and{" "}
      <span className="font-medium text-gray-900">Technology</span> to empower
      Businesses with Transformative Digital Solutions. From{" "}
      <span className="font-medium text-gray-900">
        custom Software and Web Applications
      </span>{" "}
      to{" "}
      <span className="font-medium text-gray-900">
        AI-Driven Automation, Data Analytics, and Enterprise Systems
      </span>
      , we help Organizations Enhance Efficiency, Scalability, and Customer
      Engagement.
    </p>

    <p className="mt-4 text-gray-700 leading-relaxed text-base lg:text-lg">
      Over the years, we’ve built a Strong Reputation for Delivering{" "}
      <span className="font-medium text-gray-900">
        Cutting-edge Products, Strategic Consulting, and Full-Cycle IT Services
      </span>{" "}
      that Drive Measurable Business Growth. Our Diverse Team of Experts works
      relentlessly to create{" "}
      <span className="font-semibold text-gray-900">
        Smarter, Faster, and Future-Ready Solutions
      </span>{" "}
      — Enabling Businesses to stay ahead in today’s Competitive Digital
      Landscape.
    </p>
  </motion.div>
</div>



        {/* --------------------------------------------------------------
   Projects Carousel – 2 cards visible, auto + manual navigation
   -------------------------------------------------------------- */}
        <section className="py-16 bg-white mt-20" id="projects">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 uppercase">
              Projects
              <span className="block h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></span>
            </motion.h2>
            <motion.p className="mt-6 text-gray-600 text-base max-w-3xl mx-auto leading-relaxed">
              <span className="text-sky-500 font-semibold">
                Wealth-Zone-Group-AI
              </span>{" "}
              brings Deep Expertise and Innovation to every Project.
            </motion.p>

            {/* Carousel container */}
            <div className="relative mt-12 overflow-hidden">
              {/* Arrow – left */}
              <button
                onClick={() =>
                  setProjectIndex(
                    (i) => (i - 1 + projects.length) % projects.length
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 rounded-full hover:bg-white transition"
                aria-label="Previous project"
              >
                <FaChevronLeft className="w-6 h-6 text-blue-900" />
              </button>

              {/* Arrow – right */}
              <button
                onClick={() =>
                  setProjectIndex((i) => (i + 1) % projects.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition"
                aria-label="Next project"
              >
                <FaChevronRight className="w-6 h-6 text-blue-900" />
              </button>

              {/* Cards wrapper – flex, snap, smooth scroll */}
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${projectIndex * 50}%)` }}
              >
                {/* Duplicate first & last items for seamless loop */}
                {[...projects, projects[0]].map((project, i) => {
                  const realIdx = i % projects.length;
                  return (
                    <motion.div
                      key={`${project.name}-${i}`}
                      className="flex-shrink-0 w-full sm:w-1/2 px-4 bg-white p-4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-lg font-semibold text-blue-900 mb-2">
                            {project.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 flex-1">
                            {project.shortDescription}
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedProject(realIdx);
                            }}
                            className="text-sky-500 hover:text-sky-600 font-medium text-sm flex items-center justify-center w-full py-2 border border-sky-500 rounded-lg hover:bg-sky-50 transition-colors mt-auto cursor-pointer"
                          >
                            Read More <span className="ml-1">→</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Dots indicator (optional) */}
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setProjectIndex(i)}
                  className={`w-2 h-2 rounded-full transition ${
                    i === projectIndex ? "bg-blue-900 w-8" : "bg-gray-400"
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Team Carousel Section */}
        {/* <section className="py-16 lg:py-20 bg-gradient-to-b from-sky-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sky-700 mb-12">Our Senior Team</h2>
            <div className="relative h-80 flex items-center justify-center overflow-hidden">
              <AnimatePresence>
                {team.map((member, i) => {
                  let position = (i - index + team.length) % team.length;
                  return (
                    <motion.div
                      key={member.name}
                      className="absolute w-60 sm:w-72 h-64 bg-sky-100 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 cursor-pointer"
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
                      <div
                        className={`w-16 h-16 flex items-center justify-center rounded-full ${member.color} text-white text-3xl mb-4`}
                      >
                        <FaUser />
                      </div>
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-sm text-gray-600">
                        {member.designation}
                      </p>
                      {member.Qualification && (
                        <p className="text-sm text-gray-800">
                          {member.Qualification}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </section> */}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {expandedProject !== null && (
          <div className="fixed inset-0 bg-black/50 z-70 flex items-center justify-center p-4">
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <button
                  onClick={() => setExpandedProject(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-2 shadow-md"
                >
                  ✕
                </button>
                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={projects[expandedProject]?.image}
                    alt={projects[expandedProject]?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {projects[expandedProject]?.name}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    {projects[expandedProject]?.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {projects[expandedProject]?.features.map(
                        (feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {projects[expandedProject]?.technologies.map(
                        (tech, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end mt-8">
                    <button
                      onClick={() => setExpandedProject(null)}
                      className="px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
