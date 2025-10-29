import React from "react";
import { motion } from "framer-motion";
import staffingImg from "../assets/directstaffing.jpg";
import directhaier from "../assets/directhaier.jpg";
import { FaUsers, FaClock, FaMoneyCheckAlt, FaHandshake, FaCogs, FaUserPlus } from "react-icons/fa";
 
export default function DirectStaffing() {
  return (
    <section className="w-full bg-sky-100 py-16">
      {/* Section 1 - Direct Staffing */}
      <div className="container mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center md:items-stretch gap-10">
        {/* Left Side - Text */}
        <div className="md:w-7/12 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-blue-700">
            Direct Staffing Services
            <span className="block text-sky-600 font-semibold">
              Hire Smarter, Build Stronger Teams
            </span>
          </h1>
 
          <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
            Looking for someone new? Someone outstanding to add to your team or help on a project?
          </p>
 
          <p className="mt-3 text-gray-600 leading-relaxed text-base sm:text-lg">
            We’d be happy to help. Fill out our form below and we’ll call to discuss your needs.
            Our direct staffing solutions ensure that you get the best-fit professionals who are
            ready to make an immediate impact. From technical experts to management-level hires,
            we connect you with people who bring both skill and dedication to your organization.
          </p>
 
          <p className="mt-3 text-gray-600 leading-relaxed text-base sm:text-lg">
            With our specialized approach, you can avoid long hiring cycles and focus on what
            really matters — running your business efficiently. Let us handle recruitment, screening,
            and verification, so you get qualified talent faster.
          </p>
        </div>
 
        {/* Right Side - Image */}
        <motion.div
          className="md:w-5/12 flex justify-end items-stretch"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative w-full overflow-hidden rounded-[3rem] shadow-lg group"
          >
            <img
              src={staffingImg}
              alt="Team collaboration"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]" />
          </motion.div>
        </motion.div>
      </div>
 
      {/* Section 2 - What Does Direct Hire Mean */}
      <div className="relative bg-sky-500 text-white py-20 mt-[120px]">
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
                  src={directhaier}
                  alt="Direct hire employee"
                  className="w-full h-full object-cover rounded-[3rem]"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-[3rem]" />
              </motion.div>
            </div>
 
            {/* Right Side - Text */}
            <div className="w-full lg:w-7/12 order-1 lg:order-2 space-y-6 text-center">
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                What Does <span>Direct Hire</span> Mean?
              </h2>
 
              <p className="text-lg opacity-90">
                Direct hire means we recruit candidates who become your permanent employees from the start.
                There's no temp period or trial phase. We handle all the sourcing, screening, and interviews.
              </p>
              <p className="text-lg opacity-90">
                You make the final hiring decision. The employee joins your team immediately with full commitment,
                payroll responsibility, and long-term employment expectations already in place.
              </p>
            </div>
          </div>
        </div>
      </div>
 
      {/* Section 3 - Why Direct Hire Is Your Best Staffing Solution */}
      <div className="bg-white py-20 px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-600 mb-4">
          Why Direct Hire Is Your Best Staffing Solution
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Direct hire staffing gives you faster access to qualified candidates, long-term workforce stability,
          and better hiring outcomes. Our approach helps you place skilled professionals directly on your payroll.
        </p>
 
        {/* 3x2 grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <FaUsers className="text-sky-500 text-4xl" />,
              title: "Low Turnover, Better Fit",
              points: [
                "Hire employees who align with your company culture.",
                "Improve retention and long-term performance.",
              ],
            },
            {
              icon: <FaClock className="text-sky-500 text-4xl" />,
              title: "Faster Hiring Timelines",
              points: [
                "Source candidates ready to start immediately.",
                "Avoid delays and interview bottlenecks.",
              ],
            },
            {
              icon: <FaMoneyCheckAlt className="text-sky-500 text-4xl" />,
              title: "Full Payroll Control",
              points: [
                "Employees join your payroll from day one.",
                "Maintain control over pay, benefits, and policies.",
              ],
            },
            {
              icon: <FaHandshake className="text-sky-500 text-4xl" />,
              title: "Higher Commitment",
              points: [
                "Attract professionals seeking long-term growth.",
                "Foster accountability and engagement.",
              ],
            },
            {
              icon: <FaCogs className="text-sky-500 text-4xl" />,
              title: "Flexible Hiring Options",
              points: [
                "Use direct hire independently or with your HR team.",
                "Customized staffing to fit your needs.",
              ],
            },
            {
              icon: <FaUserPlus className="text-sky-500 text-4xl" />,
              title: "Custom Recruiting",
              points: [
                "We tailor recruitment to your company’s goals.",
                "No generic candidates — only perfect fits.",
              ],
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="p-6 bg-white rounded-2xl shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-4 hover:bg-sky-200 hover:shadow-xl"
            >
              <div className="p-3 bg-gray-100 rounded-xl flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <ul className="list-none pl-5 space-y-2 text-gray-600 text-left">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}