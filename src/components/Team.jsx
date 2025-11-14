import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaAward, 
  FaLightbulb, 
  FaHandshake,
  FaLinkedinIn,
  FaEnvelope,
  FaChartLine,
  FaGraduationCap
} from 'react-icons/fa';


const Team = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const leadership = [
    {
      name: 'B.Sri Lakkshhmi',
      designation: 'Founder & CEO',
      qualification: 'MBA (Finance & IT)',
      description: 'Visionary leader with 19+ years of experience in technology and business innovation.',
      linkedin: '',
      email:"bsrilakkshhmi@wealthzonegroupai.com",
    },
    {
      name: 'B.Chakravarthy',
      designation: 'Operation Manager',
      qualification: 'MBA (Finance & IT)',
      description: 'Strategic operations expert driving organizational excellence and growth.',
      linkedin:'https://www.linkedin.com/in/bictra-chakravarthy-847717367/',
      email:"chakravarthy@wealthzonegroupai.com",
    },
  ];

  const teamMembers = [
    { name: 'Henry Paul', designation: 'Legal Advisor [High Court]', department: 'Engineering', color: 'bg-blue-600' },
    { name: 'Sunil', designation: 'Cyber Securtiy Manager', department: 'Engineering', color: 'bg-blue-600' },
    { name: 'Venkata Jagadish', designation: 'Project Manager [Testing]', department: 'Engineering', color: 'bg-blue-600' },
    { name: 'K.Ram Prasad', designation: 'Network Engineer', department: 'Engineering', color: 'bg-blue-600' },
    { name: 'G.Revanth', designation: 'Senior Developer', department: 'Engineering', color: 'bg-blue-600' },
    { name: 'G.Rama Mohan', designation: 'Senior Developer', department: 'Engineering', color: 'bg-blue-600' },
    { name: 'Srikanth', designation: 'Senior React Native Developer', department: 'Engineering', color: 'bg-blue-600' },
    { name: 'Sk.Pervez', designation: 'Senior Developer', department: 'Engineering', color: 'bg-blue-600' },
    { name: 'B.Raviteja', designation: 'Senior Developer', department: 'Engineering', color: 'bg-blue-600' },
    { name: 'S.Venkatesh', designation: 'Senior Java Developer', department: 'Engineering', color: 'bg-blue-600' },
    { name: 'Y.Sravani', designation: 'Senior Developer', department: 'Engineering', color: 'bg-blue-600' },
    { name: 'Ch.Nikhil', designation: 'UI/UX Designer', department: 'Design', color: 'bg-purple-600' },
    { name: 'K.Sai Preethi', designation: 'DevOps Engineer', department: 'Operations', color: 'bg-green-600' },
    { name: 'M.Pradeep', designation: 'System Engineer', department: 'Operations', color: 'bg-green-600' },
    { name: 'Ch.Sri Ram', designation: 'QA Tester', department: 'Quality', color: 'bg-orange-600' },
    { name: 'M.Uma Maheshwari', designation: 'Accountant', department: 'Finance', color: 'bg-indigo-600' },
  ];

  const teamStats = [
    { icon: FaUsers, number: '50+', label: 'Team Members', color: 'bg-blue-600' },
    { icon: FaGraduationCap, number: '10+', label: 'Specializations', color: 'bg-purple-600' },
    { icon: FaAward, number: '200+', label: 'Projects Completed', color: 'bg-green-600' },
    { icon: FaChartLine, number: '98%', label: 'Client Satisfaction', color: 'bg-indigo-600' },
  ];

  const cultureValues = [
    {
      icon: FaLightbulb,
      title: 'Innovation First',
      description: 'We encourage creative thinking and embrace new technologies to deliver cutting-edge solutions.',
    },
    {
      icon: FaHandshake,
      title: 'Collaboration',
      description: 'Teamwork is at our core. We believe in open communication and collective success.',
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'We set high standards and continuously strive to exceed expectations in everything we do.',
    },
    {
      icon: FaUsers,
      title: 'People First',
      description: 'Our team members are our greatest asset. We invest in growth and well-being.',
    },
  ];

  const departments = ['all', 'Engineering', 'Design', 'Operations', 'Quality', 'Finance'];

  const filteredMembers = selectedDepartment === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === selectedDepartment);

  // Reset index when department changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedDepartment]);

  // Auto-scroll effect
  useEffect(() => {
    if (filteredMembers.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [filteredMembers.length]);

  // Scroll to center the current card
  useEffect(() => {
    if (containerRef.current && filteredMembers.length > 0) {
      const container = containerRef.current;
      const totalItems = filteredMembers.length;
      const middleSetStartIndex = totalItems;
      const targetIndex = middleSetStartIndex + currentIndex;
      const card = container.children[targetIndex];

      if (card) {
        const containerWidth = container.offsetWidth;
        const cardWidth = card.offsetWidth;
        const scrollLeft = card.offsetLeft - (containerWidth / 2) + (cardWidth / 2);
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex, filteredMembers.length]);

  // Create looped array for infinite scroll effect
  const loopedMembers = [...filteredMembers, ...filteredMembers, ...filteredMembers];

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 to-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <FaUsers className="text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Meet Our Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
              The People Behind
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Our Success
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse team of passionate professionals dedicated to delivering excellence and innovation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team Stats */}
      {/* <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className={`w-14 h-14 ${stat.color} rounded-xl mx-auto mb-4 flex items-center justify-center`}>
                <stat.icon className="text-2xl text-white" />
              </div>
              <p className="text-3xl font-bold text-blue-900 mb-1">{stat.number}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* Leadership Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our Leadership
          </h2>
          <p className="text-lg text-gray-600">
            Visionary leaders guiding our journey to excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {leadership.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-blue-600 rounded-xl flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                  {leader.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{leader.designation}</p>
                  <p className="text-sm text-gray-600 mb-3">{leader.qualification}</p>
                  <p className="text-gray-700 leading-relaxed">{leader.description}</p>
                  <div className="flex gap-3 mt-4">
                    {leader.name == "B.Chakravarthy"?<a href={leader.linkedin} className="w-9 h-9 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-colors">
                      <FaLinkedinIn />
                    </a>:<></>}
                    <a href={`mailto:${leader.email}`} className="w-9 h-9 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-colors">
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Culture */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Culture & Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide our team every day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our Team Members
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Talented professionals across different departments
          </p>

          {/* Department Filter */}
          {/* <div className="flex flex-wrap justify-center gap-3">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedDepartment === dept
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dept === 'all' ? 'All Team' : dept}
              </button>
            ))}
          </div> */}
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            ref={containerRef}
            className="flex overflow-x-auto pb-8 scrollbar-hide"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              paddingLeft: 'calc(50% - 128px)',
              paddingRight: 'calc(50% - 128px)',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {loopedMembers.map((member, index) => {
              const originalIndex = index % filteredMembers.length;
              const isActive = originalIndex === currentIndex;
              
              return (
                <motion.div
                  key={`${member.name}-${index}`}
                  className={`flex-shrink-0 w-64 mx-4 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'scale-110 bg-white shadow-xl z-10' 
                      : 'scale-90 bg-gray-50 shadow-md opacity-70'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: isActive ? 1 : 0.7, y: 0 }}
                  viewport={{ once: false, amount: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setCurrentIndex(originalIndex)}
                >
                  <div 
                    className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 transition-all duration-300 ${
                      isActive ? 'scale-110' : 'scale-90'
                    }`}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                    isActive ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {member.name}
                  </h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    isActive ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {member.designation}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {filteredMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to team member ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Team;
