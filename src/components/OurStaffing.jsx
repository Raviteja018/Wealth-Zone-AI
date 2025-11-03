import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { 
  FaTools, 
  FaLightbulb, 
  FaStar, 
  FaBullhorn, 
  FaChartLine, 
  FaRocket,
  FaUserTie,
  FaUsers,
  FaHandshake,
  FaAward,
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaShieldAlt
} from "react-icons/fa";
import StaffingImage from "../assets/staffing.jpg";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function OurStaffing() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-white overflow-hidden">
      {/* Hero Section - Light & Bright Split Design */}
      <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-20 left-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/3 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
          {/* Top Bar with Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center justify-between mb-8 gap-4"
          >
            {/* <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-md">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">5K+</div>
                <div className="w-8 h-8 rounded-full bg-cyan-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-teal-500 border-2 border-white"></div>
              </div>
              <span className="text-gray-700 font-medium text-sm">Trusted by 200+ Companies</span>
            </div> */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-1 bg-white px-4 py-2 rounded-lg shadow-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-medium">Available Now</span>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Connect with
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
                  Top-Tier Talent
                </span>
                in Ohio & Michigan
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional staffing solutions that match your business needs. Direct hire, contractual, or temp-to-hire—we've got you covered.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <button 
                  onClick={() => navigate("/request-employee")}
                  className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  Request Staff Now
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => document.getElementById('staffing-solutions').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-bold rounded-xl shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300"
                >
                  Explore Solutions
                </button>
              </div>

              {/* Quick Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: FaUsers, number: "5000+", label: "Placements" },
                  { icon: FaClock, number: "24/7", label: "Support" },
                  { icon: FaAward, number: "98%", label: "Success Rate" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-md"
                  >
                    <stat.icon className="text-2xl text-blue-600 mb-2" />
                    <p className="text-2xl font-bold text-gray-900">{stat.number}</p>
                    <p className="text-xs text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Stacked Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Main Image Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden mb-6">
                <img
                  src={StaffingImage}
                  alt="Professional Staffing"
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <FaShieldAlt className="text-xl" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">100% Vetted Candidates</p>
                      <p className="text-sm text-gray-200">Pre-screened & background checked</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: FaUserTie, title: "Direct Hire", color: "bg-blue-500" },
                  { icon: FaHandshake, title: "Contractual", color: "bg-cyan-500" },
                  { icon: FaAward, title: "Temp-to-Hire", color: "bg-teal-500" },
                  { icon: FaRocket, title: "Fast Placement", color: "bg-indigo-500" }
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center mb-3`}>
                      <feature.icon className="text-white text-lg" />
                    </div>
                    <p className="font-semibold text-gray-900">{feature.title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20" id="staffing-solutions">

        {/* Staffing Solutions Section - Horizontal Cards */}
        <div>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tailored Staffing Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the perfect staffing model for your business needs
            </p>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-white border-l-4 border-blue-600 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8 md:flex md:items-start md:gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 md:mb-0">
                  <FaUserTie className="text-3xl text-blue-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Direct Hire Staffing</h3>
                    <button
                      onClick={() => navigate("/direct-staffing")}
                      className="hidden md:flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300"
                    >
                      Learn More
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Find permanent, full-time employees with the right skills and cultural fit. We manage the entire recruitment, screening, and onboarding process to ensure you get top-tier talent.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {["Full-time placements", "Comprehensive screening", "Cultural fit assessment", "Onboarding support"].map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => navigate("/direct-staffing")}
                    className="md:hidden flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 w-full justify-center"
                  >
                    Learn More
                    <FaArrowRight className="text-sm" />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-white border-l-4 border-indigo-600 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8 md:flex md:items-start md:gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 md:mb-0">
                  <FaHandshake className="text-3xl text-indigo-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Contractual Staffing</h3>
                    <button
                      onClick={() => navigate("/contractual-staffing")}
                      className="hidden md:flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all duration-300"
                    >
                      Learn More
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Flexible workforce solutions for seasonal peaks, special projects, or temporary coverage. Scale your team up or down without long-term commitments or overhead costs.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {["Flexible terms", "Quick deployment", "No long-term commitment", "Cost-effective"].map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <FaCheckCircle className="text-indigo-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => navigate("/contractual-staffing")}
                    className="md:hidden flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all duration-300 w-full justify-center"
                  >
                    Learn More
                    <FaArrowRight className="text-sm" />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-white border-l-4 border-cyan-600 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8 md:flex md:items-start md:gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-6 md:mb-0">
                  <FaAward className="text-3xl text-cyan-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Temp-to-Hire Staffing</h3>
                    <button
                      onClick={() => navigate("/temp-to-hire-staffing")}
                      className="hidden md:flex items-center gap-2 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-all duration-300"
                    >
                      Learn More
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Test-drive candidates before making permanent offers. Reduce hiring risks while evaluating performance, skills, and team dynamics in real working conditions.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {["Risk-free evaluation", "Performance assessment", "Seamless conversion", "Reduced turnover"].map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <FaCheckCircle className="text-cyan-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => navigate("/temp-to-hire-staffing")}
                    className="md:hidden flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-all duration-300 w-full justify-center"
                  >
                    Learn More
                    <FaArrowRight className="text-sm" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Our Process Timeline */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Recruitment Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A streamlined approach to finding and placing exceptional talent
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Understand Your Needs",
                description: "Deep dive into your company culture, role requirements, and team dynamics to ensure perfect matches.",
                icon: FaLightbulb
              },
              {
                step: "02",
                title: "Source & Screen",
                description: "Leverage our extensive network and rigorous screening process to identify top candidates.",
                icon: FaUsers
              },
              {
                step: "03",
                title: "Present Qualified Candidates",
                description: "Shortlist the best-fit candidates with detailed profiles, assessments, and recommendations.",
                icon: FaStar
              },
              {
                step: "04",
                title: "Facilitate Interviews",
                description: "Coordinate schedules, provide interview guidance, and ensure smooth communication throughout.",
                icon: FaHandshake
              },
              {
                step: "05",
                title: "Seamless Onboarding",
                description: "Support the transition with onboarding assistance, follow-ups, and ongoing performance monitoring.",
                icon: FaRocket
              }
            ].map((process, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                {/* Vertical Line */}
                {idx !== 4 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-blue-200"></div>
                )}
                
                {/* Step Number Circle */}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                  {process.step}
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <process.icon className="text-xl text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{process.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Grid - Icon Based */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
              Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Businesses Trust Us
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Strategic workforce solutions backed by expertise and dedication
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaShieldAlt, title: "100% Vetted", desc: "Background checks & assessments", color: "bg-blue-500" },
              { icon: FaClock, title: "Fast Placement", desc: "Quick candidate delivery", color: "bg-indigo-500" },
              { icon: FaAward, title: "Industry Experts", desc: "Specialized sector knowledge", color: "bg-cyan-500" },
              { icon: FaCheckCircle, title: "Guaranteed Fit", desc: "Replacement guarantee", color: "bg-teal-500" },
              { icon: FaHandshake, title: "Flexible Terms", desc: "Scalable solutions", color: "bg-purple-500" },
              { icon: FaUsers, title: "Dedicated Support", desc: "24/7 assistance", color: "bg-pink-500" },
              { icon: FaChartLine, title: "Cost-Effective", desc: "No hidden fees", color: "bg-orange-500" },
              { icon: FaRocket, title: "Quick Response", desc: "Same-day callbacks", color: "bg-red-500" }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${benefit.color} rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="text-2xl text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Split CTA Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {/* Employers CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <FaUserTie className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-3">For Employers</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Find the perfect talent to strengthen your team and drive growth.
              </p>
              <button
                onClick={() => navigate("/request-employee")}
                className="group flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Request Employees
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Job Seekers CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <FaUsers className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-3">For Job Seekers</h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Discover exciting opportunities that match your skills and goals.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="group flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Explore Opportunities
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}