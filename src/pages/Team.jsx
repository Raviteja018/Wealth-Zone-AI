import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const officials = [
    {
      name: 'B.Sri Lakkshhmi',
      designation: 'Founder',
      color: 'bg-green-500',
      qualification: 'MBA (Finance & IT)',
    },
    {
      name: 'B.Chakravarthy',
      designation: 'Operation Manager',
      color: 'bg-pink-500',
      qualification: 'MBA (Finance & IT)',
    },
  ];

  const teamMembers = [
    { name: 'G.Giri Ram', designation: 'Tech Lead', color: 'bg-yellow-500' },
    {
      name: 'K.Ram Prasad',
      designation: 'Network Engineer',
      color: 'bg-red-500',
    },
    { name: 'G.Revanth', designation: 'Senior Developer', color: 'bg-sky-500' },
    {
      name: 'G.Rama Mohan',
      designation: 'Senior Developer',
      color: 'bg-sky-500',
    },
    {
      name: 'Ch.Nikhil',
      designation: 'UI/UX Designer',
      color: 'bg-sky-500',
    },
    { name: 'Y.Sravani', designation: 'Senior Developer', color: 'bg-sky-500' },
    {
      name: 'Srikanth',
      designation: 'Senior React Native Developer',
      color: 'bg-red-500',
    },
    { name: 'Sk.Pervez', designation: 'Senior Developer', color: 'bg-red-500' },
    {
      name: 'B.Raviteja',
      designation: 'Senior Developer',
      color: 'bg-red-500',
    },
    { name: 'M.Pradeep', designation: 'System Engineer', color: 'bg-sky-500' },
    {
      name: 'K.Sai Preethi',
      designation: 'Devops Engineer',
      color: 'bg-sky-500',
    },
    {
      name: 'S.Venkatesh',
      designation: 'Senior Java Developer',
      color: 'bg-sky-500',
    },
    {
      name: 'M.Uma Maheshwari',
      designation: 'Accountant',
      color: 'bg-sky-500',
    },
    {
      name: 'Ch.Sri Ram',
      designation: 'Tester',
      color: 'bg-sky-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Leadership Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Our Leadership
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Meet the driving force behind our success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {officials.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div
                className={`w-32 h-32 rounded-full ${member.color} flex items-center justify-center text-white text-4xl font-bold mb-4`}
              >
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.designation}</p>
              {member.qualification && (
                <p className="text-gray-500 text-sm mt-1">
                  {member.qualification}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Our Team
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            The talented individuals who make it all happen
          </p>
        </motion.div>

        {/* Team Members - First Row (Left to Right) */}
        <div className="relative overflow-hidden mb-8">
          <div className="flex overflow-x-auto pb-8 space-x-6 scrollbar-hide">
            {teamMembers.slice(0, Math.ceil(teamMembers.length / 2)).map((member, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`w-24 h-24 rounded-full ${member.color} flex items-center justify-center text-white text-2xl font-bold mb-4`}
                >
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-sm">{member.designation}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Members - Second Row (Right to Left) */}
        <div className="relative overflow-hidden">
          <div className="flex overflow-x-auto pb-8 space-x-6 scrollbar-hide">
            {teamMembers.slice(Math.ceil(teamMembers.length / 2)).map((member, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`w-24 h-24 rounded-full ${member.color} flex items-center justify-center text-white text-2xl font-bold mb-4`}
                >
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-sm">{member.designation}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
