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
  Filter
} from "lucide-react";

// ✅ Use your job object
const jobs = [
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
    title: "Cyber Security – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Hyderabad",
  },
  //   {
  //   title: "Java Full-Stack Developer – Fresher",
  //   company: "Wealth Zone Technologies",
  //   type: "Full-Time",
  //   location: "Hyderabad",
  // },
];

const internships = [
 {
    title: "UI/UX Designer – Fresher",
    company: "Wealth Zone Technologies",
    type: "Internship",
    location: "Hyderabad",
  },
    {
    title: "Python Full-Stack Developer – Fresher",
    company: "Wealth Zone Technologies",
    type: "Internship",
    location: "Hyderabad",
  },
      {
    title: "React JS Developer – Fresher",
    company: "Wealth Zone Technologies",
    type: "Internship",
    location: "Hyderabad",
  },
  {
    title: "Digital Marketing – Fresher",
    company: "Wealth Zone Technologies",
    type: "Internship",
    location: "Hyderabad",
  },{
    title: "Cyber Security – Fresher",
    company: "Wealth Zone Technologies",
    type: "Internship",
    location: "Hyderabad",
  },
]; // <-- Empty to test "No internships"

export default function Careers() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleApply = (jobTitle) => {
    navigate("/job-details", { state: { jobTitle } });
  };

  // Combine all positions
  const allPositions = [
    ...jobs.map(job => ({ ...job, category: 'job' })),
    ...internships.map(intern => ({ ...intern, category: 'internship' }))
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
                  href="#why-join"
                  className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  Why Join Us?
                </a>
              </div>

              {/* Mini Stats */}

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
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      position.category === 'job' 
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
            <div className="flex gap-2">
              {['all', 'job', 'internship'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab === 'all' ? 'All' : tab === 'job' ? 'Full-Time' : 'Internships'}
                </button>
              ))}
            </div>
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
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      position.category === 'job' 
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
