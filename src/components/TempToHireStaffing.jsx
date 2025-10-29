import React from "react";
import { motion } from "framer-motion";
import staffingImg from "../assets/staffing.jpg";
import { useNavigate } from "react-router-dom";
import temptohairimg from "../assets/directhaier.jpg";
import {
  FaVial,
  FaUsers,
  FaUserCheck,
  FaUserTie,
  FaChalkboardTeacher,
  FaBriefcase,
} from "react-icons/fa";
 
export default function TempToHireStaffing() {
  const navigate = useNavigate();
 
  const services = [
    {
      icon: <FaVial className="text-sky-600 text-5xl" />,
      title: "Test Before You Commit",
      text: "Evaluate performance and fit before offering a full-time position. No long-term risk, just clarity on who’s right for the role.",
    },
    {
      icon: <FaUsers className="text-sky-600 text-5xl" />,
      title: "Lower Turnover",
      text: "We match you with long-term-minded candidates who help you build a stable, sustainable workforce.",
    },
    {
      icon: <FaUserCheck className="text-sky-600 text-5xl" />,
      title: "Direct Hires",
      text: "We handle recruiting, vetting, and placement, so you can focus on growing your long-term team.",
    },
    {
      icon: <FaUserTie className="text-sky-600 text-5xl" />,
      title: "Path to Full-Time Work",
      text: "Temp to hire gives workers a chance to prove themselves and earn a permanent position.",
    },
    {
      icon: <FaChalkboardTeacher className="text-sky-600 text-5xl" />,
      title: "Learn the Role",
      text: "Candidates gain valuable experience before committing full-time—building confidence and skill.",
    },
    {
      icon: <FaBriefcase className="text-sky-600 text-5xl" />,
      title: "Grow Into a Job",
      text: "We help you find roles that fit your skills and career goals, guiding you to the next step.",
    },
  ];
 
  return (
    <section className="w-full bg-sky-100 py-16">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center gap-10">
       
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-600 mb-3">
            Temp to Hire Staffing Agency in <span className="text-sky-600">Wealth-Zone-Group-AI</span>
          </h2>
 
          <h3 className="text-xl md:text-2xl font-semibold text-sky-500 mb-6">
            Start Slow and Grow With Flexible Staffing Solutions
          </h3>
 
          <p className="text-gray-600 leading-relaxed mb-4">
            Finding reliable workers or a dependable job doesn’t have to be complicated.
            The Advance Group offers temp to hire services in Ohio and Michigan that give
            employers flexibility and job seekers real opportunities. Whether you’re staffing
            for manufacturing, skilled trades, or clerical positions, our team matches the right
            people to the right roles—fast.Temp to hire staffing gives your business a chance to evaluate a worker before
            making a long-term commitment. For candidates, it’s a direct path to full-time
            employment with trusted companies.
          </p>
 
 
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button onClick={() => navigate("/careers")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Search Jobs
            </motion.button>
            <motion.button onClick={() => navigate("/request-employee")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-50 transition-all duration-300"
            >
              Request Employees
            </motion.button>
          </div>
        </div>
 
        {/* Right Image */}
       
        <div className="w-full md:w-1/2">
                    <img
                      src={staffingImg}
                      alt="Staffing Services"
                      className="w-full rounded-3xl shadow-lg object-cover"
                    />
                  </div>
      </div>
 
    {/* Section 2 - What Is Temp to Hire? */}
              <div className="relative bg-sky-500 text-white py-16 mt-[60px]">
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Side - Image */}
                    <div className="w-full lg:w-5/12 order-2 lg:order-1">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="relative w-full overflow-hidden rounded-[3rem] shadow-2xl"
                      >
                        <img
                          src={temptohairimg}
                          alt="Temporary hire employee"
                          className="w-full h-full object-cover rounded-[3rem]"
                        />
                        <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-[3rem]" />
                      </motion.div>
                    </div>
       
                    {/* Right Side - Text */}
                    <div className="w-full lg:w-7/12 order-1 lg:order-2 space-y-6 text-center">
                      <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                        What Is Temp to Hire?
                      </h2>
       
                      <p className="text-lg opacity-90">
                        We use temp to hire to give both sides time to evaluate fit before making a full commitment. <br />
                        It’s more than a trial run. It’s a smart way to reduce hiring risks, lower turnover, and build trust. <br />
                        Employers get dependable workers with less up-front risk. Candidates gain real experience and prove their value directly on the job. Click below to explore temp to hire solutions.
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
    {/* Section 3 - Services Grid */}
        <div className="py-16 bg-white text-center">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-sky-600 mb-4">
              How Our Temp to Hire Services Help You
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-10">
              Our temp to hire services offer more than a stopgap. They’re a reliable
              path to permanent hires — helping you build a confident, long-term
              workforce.
            </p>
            <h3 className="text-lg font-semibold text-sky-700 mb-12">
              Why do businesses and job seekers choose us?
            </h3>
 
            {/* Services Grid */}
 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:bg-sky-50 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-sky-600">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{service.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
 
    </section>
  )
}