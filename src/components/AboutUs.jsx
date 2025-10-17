import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBullseye, FaEye, FaHeart, FaUser } from "react-icons/fa";
import aboutImg from "../assets/aboutus.jpg"; // Add your about image here

export default function AboutUs() {
  const team = [
    { name: "B.Sri Lakkshhmi", designation: "Founder", color: "bg-green-500", Qualification:"MBA (Finance & IT)" },
    { name: "B.Chakravarthy", designation: "Operation Manager", color: "bg-pink-500", Qualification:"MBA (Finance & IT)"},
    { name: "R.Thulasi", designation: "Tech Lead", color: "bg-orange-500" },
    { name: "G.Giri Ram", designation: "Tech Lead", color: "bg-yellow-500" },
    { name: "G.Revanth", designation: "Senior Developer", color: "bg-sky-500" },
    { name: "G.Rama Mohan", designation: "Senior Developer", color: "bg-sky-500" },
    { name: "Y.Sravani", designation: "Senior Developer", color: "bg-sky-500" },
    { name: "Sk.Pervez", designation: "Senior Developer", color: "bg-sky-500" },
    { name: "B.Raviteja", designation: "Senior Developer", color: "bg-sky-500" },
    { name: "K.Ram Prasad", designation: "Network Engineer", color: "bg-red-500" },
    { name: "M.Pradeep", designation: "System Engineer", color: "bg-sky-500" },
    { name: "Ch.Nikhil", designation: "UI/UX Designer", color: "bg-sky-500" },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % team.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [team.length]);

  return (
    <section className="bg-gradient-to-b from-white via-sky-50 to-blue-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 lg:py-15">
        {/* Heading Section */}
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

        {/* Top Content with Image */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
              We are a passionate team dedicated to delivering cutting-edge
              solutions in the world of digital innovation. Our company thrives
              on collaboration, transparency, and a relentless drive to achieve
              excellence.
              <br />
              <br />
              Through our journey, we've built a reputation for trust and
              innovation, empowering clients to transform their businesses for a
              digital-first future.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative flex justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-sky-100 rounded-full blur-3xl opacity-40"></div>
            <img
              src={aboutImg}
              alt="About Us"
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-64 sm:h-80 lg:h-96 rounded-xl shadow-xl relative z-10 object-cover object-center"
            />
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="mt-20 lg:mt-24">
          <h3 className="text-center text-2xl sm:text-3xl lg:text-3xl font-bold text-sky-700">
            Our Mission, Vision & Values
          </h3>
          <div className="mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                icon: <FaBullseye size={30} />,
                title: "Mission",
                desc: "To provide innovative and scalable solutions that empower businesses to thrive in the digital age.",
                color: "from-sky-400 to-sky-600",
              },
              {
                icon: <FaEye size={30} />,
                title: "Vision",
                desc: "To be a global leader in digital transformation, driven by creativity and innovation.",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: <FaHeart size={30} />,
                title: "Values",
                desc: "Integrity, collaboration, and customer-centricity are at the heart of everything we do.",
                color: "from-green-400 to-green-600",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center p-6 sm:p-8 rounded-2xl shadow-lg bg-white 
                          transition duration-500 transform hover:-translate-y-2 hover:bg-blue-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div
                  className={`bg-gradient-to-br ${item.color} text-white w-16 h-16 mx-auto 
                              flex items-center justify-center rounded-full shadow-md mb-4 sm:mb-6 transition duration-500`}
                >
                  {item.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 uppercase tracking-wide relative inline-block">
              Projects
              <span className="block h-1 w-16 bg-blue-400 mx-auto mt-2"></span>
            </h2>
            <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-lg leading-relaxed">
              <span className="text-sky-500">Wealth-Zone-Group-AI</span> brings a wealth of experience and expertise to every
              project. We stay abreast of industry trends and emerging technologies
              to deliver innovative solutions that address the evolving needs of our
              clients.
            </p>
          </div>
        </section>

        {/* Team Carousel */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-sky-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-sky-700 mb-10 lg:mb-12">Our Team</h2>

            <div className="relative h-72 sm:h-80 lg:h-96 flex items-center justify-center overflow-hidden">
              <AnimatePresence>
                {team.map((member, i) => {
                  let position = (i - index + team.length) % team.length;
                  return (
                    <motion.div
                      key={member.name}
                      className="absolute w-52 sm:w-64 lg:w-72 h-56 sm:h-64 lg:h-72 bg-sky-100 rounded-2xl shadow-xl flex flex-col items-center justify-center p-4 sm:p-6 lg:p-6"
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
                        className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full ${member.color} text-white text-2xl sm:text-4xl mb-2 sm:mb-4`}
                      >
                        <FaUser />
                      </div>
                      <h3 className="text-sm sm:text-lg font-semibold">{member.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{member.designation}</p>
                      <p className="text-xs sm:text-sm text-gray-800">{member?.Qualification}</p>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Journey & Goals */}
        <div className="mt-16 lg:mt-24 px-4 sm:px-6 lg:px-0">
          <h3 className="text-center text-2xl sm:text-3xl lg:text-3xl font-bold text-sky-700">
            Our Journey & Goals
          </h3>
          <div className="mt-8 lg:mt-12 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-sky-200 h-full"></div>
            <div className="space-y-12">
              {[
                { year: "2006", text: "Company Founded With A Vision To Innovate In The Digital Space." },
                { year: "2010", text: "Launched Our First Flagship Digital Product And Expanded Our Local Presence." },
                { year: "2014", text: "Introduced Cloud-Based Solutions And Scaled Operations Nationally." },
                { year: "2018", text: "Adopted AI And Machine Learning Technologies To Enhance Services." },
                { year: "2021", text: "Founded With A Vision To Redefine Digital Innovation." },
                { year: "2022", text: "Expanded Our Team And Introduced AI-Driven Solutions." },
                { year: "2023", text: "Achieved Partnerships With Global Enterprises." },
                { year: "2025", text: "Our Goal Is To Become A Trusted Leader In Digital Transformation Worldwide." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`relative flex flex-col sm:flex-row items-center ${i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`bg-white shadow-md p-4 sm:p-6 rounded-xl max-w-sm sm:max-w-md ${i % 2 === 0 ? "sm:ml-10" : "sm:mr-10"}`}
                  >
                    <h4 className="font-bold text-sky-700 text-lg sm:text-xl mb-1 sm:mb-2">{item.year}</h4>
                    <p className="text-gray-600 text-sm sm:text-base">{item.text}</p>
                  </div>
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-sky-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




