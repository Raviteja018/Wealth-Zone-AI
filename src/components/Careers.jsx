import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Award,
  TrendingUp,
  Heart,
  Coffee,
  Zap,
  GraduationCap,
  ArrowRight,
  Search,
  Filter,
  School,
  BookOpen,
  Cpu,
  Send,
  Globe
} from "lucide-react";

// ✅ Use your job object
const jobs = [
  {
    title: "Cyber Security – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Hyderabad",
  },
  {
    title: "UI/UX Designer – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Hyderabad",
  },
  {
    title: "Python Full-Stack Developer – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Hyderabad",
  },
  {
    title: "React JS Developer – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Hyderabad",
  },
  {
    title: "Digital Marketing – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Hyderabad",
  },
  {
    title: "MERN Stack Developer – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Hyderabad",
  },
  {
    title: "AWS Cloud Engineer – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Hyderabad",
  },
];

const internships = [
  {
    id: 1,
    title: "Cyber Security Internship",
    duration: "6 Months",
    description: "Gain hands-on experience in ethical hacking, network security, and vulnerability assessment.",
    highlights: [
      "Ethical Hacking",
      "Network Security",
      "Vulnerability Assessment",
      "Security Auditing"
    ],
    prerequisites: ["Networking Basics", "Linux Fundamentals", "Basic Scripting"],
    location: "Hyderabad, Vijayawada",
    stipend: "Performance-based"
  },
  {
    id: 3,
    title: "Full Stack Development (MERN)",
    duration: "6 Months",
    description: "Master the MERN stack (MongoDB, Express.js, React, Node.js) and build full-fledged web applications from scratch.",
    highlights: [
      "React.js",
      "Node.js & Express",
      "MongoDB",
      "RESTful APIs"
    ],
    prerequisites: ["JavaScript", "HTML/CSS", "Basic Programming"],
    location: "Hyderabad, Vijayawada",
    stipend: "Performance-based"
  },
  {
    id: 4,
    title: "Data Analytics Internship",
    duration: "6 Months",
    description: "Learn data analysis, visualization, and interpretation using industry-standard tools and techniques.",
    highlights: [
      "Python for Data Science",
      "SQL",
      "Data Visualization",
      "Statistical Analysis"
    ],
    prerequisites: ["Basic Python", "Statistics", "Excel"],
    location: "Hyderabad, Vijayawada",
    stipend: "Performance-based"
  }
];

export default function Careers() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleApply = (jobTitle) => {
    navigate("/job-details", { state: { jobTitle } });
  };

  // Combine all positions (now just jobs)
  const allPositions = [
    ...jobs.map(job => ({ ...job, category: 'job' })),
    ...internships.map(internship => ({ ...internship, category: 'internship' })),
  ];

  // Filter positions
  const filteredPositions = allPositions.filter(position => {
    const matchesTab = activeTab === 'all' || position.category === activeTab;
    const matchesSearch = position.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Unique Card Stack Layout */}
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-20 overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 50h100M50 0v100' stroke='%234F46E5' stroke-width='1'/%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">Join Our Team</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Your Next Big
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Career Move
                </span>
                Starts Here
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join a team that values innovation, collaboration, and personal growth. We're building the future of technology, and we want you to be part of it.
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => document.getElementById('openings').scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Explore Opportunities
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#wzg-ai"
                  className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  WZG-AI Program
                </a>
              </div>
            </motion.div>

            {/* Right Side - Stacked Position Cards Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block relative h-[500px]"
            >
              {/* Featured Positions - Stacked Card Effect */}
              {allPositions.slice(0, 4).map((position, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20, rotate: 0 }}
                  animate={{
                    opacity: 1 - (idx * 0.15),
                    y: idx * 20,
                    rotate: idx * 2,
                    scale: 1 - (idx * 0.05)
                  }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="absolute top-0 left-0 right-0 bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-100"
                  style={{
                    zIndex: 10 - idx,
                    transformOrigin: 'top center'
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${position.category === 'job'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-purple-100 text-purple-700'
                      }`}>
                      {position.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                    {position.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    {idx === 0 && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                        New
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* "More Positions" indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium shadow-lg"
              >
                +{allPositions.length - 4} More Positions
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WZG-AI Section */}
      <section id="wzg-ai" className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6"
            >
              <Cpu className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Future of Education</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold mb-2 text-gray-900"
            >
              WZG-AI – STEM & Robotics Education
            </motion.h2>
            <p className="text-blue-700 font-medium mb-6 text-center">Available in: Andhra Pradesh, Telangana, Karnataka</p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Turning students into creators: hands-on STEM, Robotics and AI aligned with NEP 2020.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-blue-900/5 border border-blue-100 hover:border-blue-300 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Project Overview</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  WZG-AI transforms traditional schooling by integrating STEM, Robotics and AI into everyday learning. Our curriculum — co-developed by educators and engineers — gives students hands-on experience through real projects, coding, and engineering activities that spark curiosity, build critical thinking, and develop future-ready skills.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Aligned to NEP 2020, WZG-AI supports classroom adoption, teacher upskilling, and measurable student outcomes through project portfolios and certification. This project embodies our commitment to excellence, combining cutting-edge technology with intuitive design.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg shadow-blue-900/5 border border-blue-50 hover:shadow-xl transition-shadow">
                  <BookOpen className="w-8 h-8 text-purple-500 mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">NEP 2020 Aligned</h4>
                  <p className="text-sm text-gray-600">Curriculum designed to meet modern educational standards.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg shadow-blue-900/5 border border-blue-50 hover:shadow-xl transition-shadow">
                  <School className="w-8 h-8 text-pink-500 mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">For Schools</h4>
                  <p className="text-sm text-gray-600">Implemented from Standard 1 onwards with teacher support.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-900/10 border-t-4 border-blue-600"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">School Collaboration Inquiry</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Enter school name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Principal Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Enter principal name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location / Address</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="School address" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Details</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Phone or Email" />
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-900/20 transition-all duration-300 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </div>

          {/* Internship / Demo Class Section */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl shadow-blue-900/10 border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8">
                  <h3 className="text-4xl font-extrabold text-blue-600 mb-2">Internship Program</h3>
                  <p className="text-lg font-semibold text-gray-800 italic mb-2">People | Process | Technology</p>
                  <p className="text-blue-700 font-medium mb-4">Available in: Andhra Pradesh, Telangana</p>

                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
                    <h4 className="text-lg font-bold text-blue-800 mb-4">Our Services Include</h4>
                    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                      {[
                        "AI / ML", "Data Analytics", "Cyber Security SME's", "Robotic Engineer",
                        "Microsoft Technologies", "Java Full Stack Development", "Python Full Stack Development",
                        "Mern Stack, React JS, Node JS", "Salesforce", "Testing", "SAP", "Pega"
                      ].map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          <span className="text-sm text-gray-700 font-medium">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Locations</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-500" />
                        <span className="font-medium">Andhra Pradesh</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-500" />
                        <span className="font-medium">Telangana</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Why Choose Us?</h4>
                    <ul className="space-y-2">
                      {[
                        "Internship Certification", "Live Project Sessions",
                        "Best Lead (Industry Experts)", "Placement Assistance"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <Award className="w-4 h-4 text-orange-500" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold text-xl shadow-lg">
                      JOIN NOW
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Duration</p>
                      <p className="text-2xl font-bold text-gray-900">6 Months</p>
                    </div>
                  </div>

                  <p className="text-gray-600 italic border-l-4 border-blue-500 pl-4 py-1 mb-6">
                    "Join with us where your contribution matters and your growth is our priority."
                  </p>

                  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm overflow-hidden">
                    <p className="text-sm font-semibold text-gray-500 mb-2">Send Your CV at</p>
                    <div className="flex flex-col gap-3">
                      <a href="mailto:info@wealthzonegroupai.com" className="flex items-center gap-2 text-blue-600 font-bold hover:underline break-all">
                        <Send className="w-4 h-4 flex-shrink-0" />
                        info@wealthzonegroupai.com
                      </a>
                      <a href="https://www.wealthzonegroupai.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 font-medium hover:text-blue-600 transition-colors break-all">
                        <Globe className="w-4 h-4 flex-shrink-0" />
                        www.wealthzonegroupai.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Candidate Registration</h4>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Candidate Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Your full name" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                      <input type="tel" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="+91..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Year of Passing</label>
                      <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all">
                        <option>Select Year</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Qualification</label>
                    <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all">
                      <option>Select Qualification</option>
                      <option>B.Tech</option>
                      <option>B.Sc</option>
                      <option>BBA</option>
                      <option>BCA</option>
                      <option>MCA</option>
                      <option>M.Tech</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <textarea rows="2" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Your current address"></textarea>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-300">
                    Register for Demo Class
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              // { icon: Users, number: '50+', label: 'Team Members' },
              { icon: Award, number: '100+', label: 'Projects Delivered' },
              { icon: TrendingUp, number: '5+', label: 'Years of Growth' },
              { icon: GraduationCap, number: '10+', label: 'Open Positions' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-4"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section id="why-join" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Join Wealth Zone?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in creating an environment where talent thrives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Career Growth',
                description: 'Continuous learning and development opportunities',
                color: 'bg-blue-500'
              },
              {
                icon: Heart,
                title: 'Work-Life Balance',
                description: 'Flexible hours and remote work options',
                color: 'bg-pink-500'
              },
              {
                icon: Coffee,
                title: 'Great Culture',
                description: 'Collaborative and inclusive work environment',
                color: 'bg-orange-500'
              },
              {
                icon: Zap,
                title: 'Latest Tech',
                description: 'Work with cutting-edge tools and technologies',
                color: 'bg-purple-500'
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center mb-4`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="openings" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Find the perfect role that matches your skills and aspirations
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
            {/* Removed Filter Buttons since only Jobs are left */}
          </div>

          {/* Position Cards */}
          {filteredPositions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No positions match your search criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Briefcase className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${position.category === 'job'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-purple-100 text-purple-700'
                      }`}>
                      {position.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {position.title}
                  </h3>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{position.location}</span>
                    </div>
                    {position.duration && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{position.duration}</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleApply(position.title)}
                    className="group/btn w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
