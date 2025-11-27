import React from "react";
import { motion } from "framer-motion";
import {
  FaChevronRight,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaAward,
  FaChartLine,
  FaShieldAlt,
  FaGlobe,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";
import aboutImg from "../assets/aboutus.jpg";
import { useNavigate } from "react-router-dom";


export default function AboutUs() {

  const navigate = useNavigate();






  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-800 overflow-hidden">
      {/* Hero Section - Elegant Light Design */}
      <div className="relative bg-white overflow-hidden">
        {/* Subtle Geometric Background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-50 to-blue-50 rounded-full filter blur-3xl opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full mb-6"
              >
                <div className="w-2 h-2 roundfed-full bg-blue-600"></div>
                <span className="text-sm font-medium text-gray-700">Est. 2006 • 19 Years of Excellence</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                Transforming Visions Into
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Digital Reality
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A team of dedicated innovators crafting exceptional digital experiences and solutions that empower businesses to thrive in the modern world.
              </p>

              {/* Elegant Stats */}
              <div className="grid grid-cols-3 gap-8 mb-10">
                {[
                  { number: '200+', label: 'Projects', icon: FaRocket },
                  { number: '50+', label: 'Clients', icon: FaUsers },
                  { number: '19+', label: 'Years', icon: FaAward }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <stat.icon className="text-blue-600" />
                    </div>
                    <p className="text-2xl font-bold text-blue-900 mb-1">{stat.number}</p>
                    <p className="text-xs text-gray-600 uppercase tracking-wide">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                onClick={() => document.getElementById('our-story').scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300"
              >
                Discover Our Story
                <FaChevronRight className="group-hover:translate-x-1 transition-transform text-sm" />
              </motion.button>
            </motion.div>

            {/* Right Side - Elegant Image Layout */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Main Image with Border */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src={aboutImg}
                    alt="About Wealth Zone"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>

              {/* Minimal Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-lg border border-blue-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <FaRocket className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900 text-sm">Mission-Driven</p>
                    <p className="text-xs text-gray-600">Innovation First</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-6 -right-6 bg-blue-600 rounded-xl p-5 shadow-lg text-white"
              >
                <div className="flex items-center gap-3">
                  <FaAward className="text-2xl" />
                  <div>
                    <p className="text-2xl font-bold">98%</p>
                    <p className="text-xs text-blue-50">Satisfaction</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-gradient-to-br from-blue-50/30 to-white py-16 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: FaLightbulb, title: 'Innovation', desc: 'Cutting-edge solutions' },
              { icon: FaUsers, title: 'Collaboration', desc: 'Teamwork driven' },
              { icon: FaShieldAlt, title: 'Quality', desc: 'Excellence assured' },
              { icon: FaGlobe, title: 'Global Reach', desc: 'Worldwide impact' }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center transition-colors duration-300">
                  <value.icon className="text-xl text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-blue-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div id="our-story" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { number: "19+", label: "Years Experience", icon: FaAward, color: "from-amber-500 to-orange-600" },
            { number: "500+", label: "Projects Delivered", icon: FaRocket, color: "from-sky-500 to-blue-600" },
            { number: "200+", label: "Happy Clients", icon: FaUsers, color: "from-emerald-500 to-teal-600" },
            { number: "98%", label: "Success Rate", icon: FaChartLine, color: "from-purple-500 to-indigo-600" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {stat.number}
              </h3>
              <p className="text-gray-600 font-medium mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20" id="our-story">

        {/* Who We Are - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-12 bg-gradient-to-b from-sky-500 to-blue-600 rounded-full"></div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent">
              Our Story
            </h2>
          </div>

          <div className="prose-lg text-gray-700 space-y-6 mb-12">
            <p>
              Founded in <strong>2006</strong> as <strong>Oyster Technologies</strong> and later rebranded to <strong>WealthZone Group AI</strong>, our company has grown into a leading <strong>product and service-based IT organization</strong> specializing in <strong>Artificial Intelligence (AI), Advanced Digital Solutions, Software Development, and Digital Marketing Services</strong>.
            </p>
            <p>
              At <strong>WealthZone Group AI</strong>, we combine <strong>Innovation, Intelligence, and Technology</strong> to empower Businesses with Transformative Digital Solutions. From <strong>custom Software and Web Applications</strong> to <strong>AI-Driven Automation, Data Analytics, and Enterprise Systems</strong>, we help Organizations Enhance Efficiency, Scalability, and Customer Engagement.
            </p>
            <p>
              Over the years, we've built a Strong Reputation for Delivering <strong>Cutting-edge Products, Strategic Consulting, and Full-Cycle IT Services</strong> that Drive Measurable Business Growth. Our Diverse Team of Experts works relentlessly to create <strong>Smarter, Faster, and Future-Ready Solutions</strong> — Enabling Businesses to stay ahead in today's Competitive Digital Landscape.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={aboutImg}
                alt="About Us"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Founded in <span className="font-bold text-sky-700">2006</span> as{" "}
                <span className="font-bold text-sky-700">Oyster Technologies</span>, we embarked on a
                journey to revolutionize the digital landscape. In <span className="font-bold text-sky-700">2019</span>,
                we evolved into <span className="font-bold text-sky-700">WealthZone Group AI</span>,
                marking our commitment to cutting-edge artificial intelligence and innovation.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                Today, we stand as a <span className="font-semibold text-gray-900">leading global IT powerhouse</span>,
                specializing in <span className="font-semibold text-blue-600">AI Solutions</span>,
                <span className="font-semibold text-blue-600"> Advanced Software Development</span>,
                <span className="font-semibold text-blue-600"> Cloud Technologies</span>, and
                <span className="font-semibold text-blue-600"> Digital Marketing</span>.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {["AI & ML", "Cloud Computing", "Software Development", "Digital Marketing", "Cybersecurity", "App Development"].map((tech, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 text-sky-700 text-sm font-medium border border-sky-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-8 sm:p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FaRocket className="text-3xl" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-blue-50 leading-relaxed text-lg">
              To empower businesses globally by delivering innovative, scalable, and intelligent
              technology solutions that drive sustainable growth, enhance operational efficiency,
              and create lasting value in the digital economy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 sm:p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FaLightbulb className="text-3xl" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-purple-50 leading-relaxed text-lg">
              To be the world's most trusted technology partner, recognized for transforming
              complex challenges into elegant solutions through artificial intelligence,
              innovation, and unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FaLightbulb,
                title: "Innovation First",
                description: "Constantly pushing boundaries with creative thinking and cutting-edge technologies.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: FaShieldAlt,
                title: "Integrity",
                description: "Building trust through transparency, honesty, and ethical business practices.",
                color: "from-emerald-500 to-teal-500"
              },
              {
                icon: FaUsers,
                title: "Client-Centric",
                description: "Your success is our success. We're committed to exceeding expectations.",
                color: "from-sky-500 to-blue-500"
              },
              {
                icon: FaAward,
                title: "Excellence",
                description: "Delivering superior quality in every project, every time, without compromise.",
                color: "from-purple-500 to-indigo-500"
              },
              {
                icon: FaHandshake,
                title: "Collaboration",
                description: "Working together with clients and teams to achieve remarkable results.",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: FaGlobe,
                title: "Global Impact",
                description: "Creating solutions that make a positive difference worldwide.",
                color: "from-cyan-500 to-blue-500"
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <value.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 sm:p-12 border border-gray-200"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent mb-4">
              Why Clients Choose Us
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We don't just build software—we build partnerships that drive lasting success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Proven Track Record",
                description: "19 years of excellence with 500+ successful projects across diverse industries and 98% client satisfaction rate."
              },
              {
                title: "Expert Team",
                description: "Highly skilled professionals with deep expertise in AI, cloud, software development, and emerging technologies."
              },
              {
                title: "End-to-End Solutions",
                description: "From concept to deployment and ongoing support—we handle everything with precision and care."
              },
              {
                title: "Cutting-Edge Technology",
                description: "We leverage the latest tools, frameworks, and AI capabilities to keep you ahead of the competition."
              },
              {
                title: "Agile & Transparent",
                description: "Regular updates, clear communication, and flexible development approach tailored to your needs."
              },
              {
                title: "Cost-Effective",
                description: "Premium quality solutions at competitive pricing, ensuring maximum ROI for your investment."
              }
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaCheckCircle className="text-emerald-500 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}
