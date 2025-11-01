import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Add global styles to hide scrollbar but keep functionality
const hideScrollbar = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  // Add the style to the document head
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = hideScrollbar;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

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
    { name: 'G.Revanth', designation: 'Senior Developer', color: 'bg-purple-500' },
    {
      name: 'G.Rama Mohan',
      designation: 'Senior Developer',
      color: 'bg-purple-500',
    },
     {
      name: 'Srikanth',
      designation: 'Senior React Native Developer',
      color: 'bg-blue-500',
    },
    { name: 'Sk.Pervez', designation: 'Senior Developer', color: 'bg-blue-500' },
    {
      name: 'B.Raviteja',
      designation: 'Senior Developer',
      color: 'bg-blue-500',
    },
    {
      name: 'Ch.Nikhil',
      designation: 'UI/UX Designer',
      color: 'bg-yellow-500',
    },
    { name: 'Y.Sravani', designation: 'Senior Developer', color: 'bg-red-500' },
   
    { name: 'M.Pradeep', designation: 'System Engineer', color: 'bg-red-500' },
    {
      name: 'K.Sai Preethi',
      designation: 'Devops Engineer',
      color: 'bg-sky-500',
    },
    {
      name: 'S.Venkatesh',
      designation: 'Senior Java Developer',
      color: 'bg-green-500',
    },
    {
      name: 'M.Uma Maheshwari',
      designation: 'Accountant',
      color: 'bg-green-500',
    },
    {
      name: 'Ch.Sri Ram',
      designation: 'Tester',
      color: 'bg-green-500',
    },
  ];

  // Auto-scroll effect with continuous loop
  useEffect(() => {
    if (teamMembers.length === 0) return; // Prevent division by zero
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  // Scroll to center the current index with continuous loop
  useEffect(() => {
    if (containerRef.current && teamMembers.length > 0) {
      const container = containerRef.current;
      const totalItems = teamMembers.length;
      // We are multiplying the array by 3 for the infinite loop effect
      const totalChildren = totalItems * 3;
      
      // Aim for the middle set of items
      const middleSetStartIndex = totalItems;
      const targetIndex = middleSetStartIndex + currentIndex;
      
      const card = container.children[targetIndex];

      if (card) {
        const containerWidth = container.offsetWidth;
        const cardWidth = card.offsetWidth;
        // Calculate the scroll position to center the card
        const scrollLeft = card.offsetLeft - (containerWidth / 2) + (cardWidth / 2);
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex, teamMembers.length]);


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

  // Create an array with 3 copies for the "infinite" scroll effect
  const loopedTeamMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {officials.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
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
        </motion.div>

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

        {/* Container for the scroller and the pagination dots */}
        <div className="relative mb-16">
          <div 
            ref={containerRef}
            className="flex overflow-x-auto pb-8 hide-scrollbar"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              paddingLeft: 'calc(50% - 128px)', // 128px is half of card width (w-64)
              paddingRight: 'calc(50% - 128px)',
            }}
          >
            {loopedTeamMembers.map((member, index) => {
              // The "real" index within the original teamMembers array
              const originalIndex = index % teamMembers.length;
              const isActive = originalIndex === currentIndex;
              
              return (
                <motion.div
                  key={`${member.name}-${index}`}
                  className={`flex-shrink-0 w-64 mx-4 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 ${
                    isActive 
                      ? 'scale-110 bg-white shadow-xl z-10' 
                      : 'scale-90 bg-gray-50 shadow-md opacity-80'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: isActive ? 1 : 0.8, y: 0 }}
                  viewport={{ once: false, amount: 0.8 }} // Allow re-triggering animation
                  transition={{ duration: 0.3 }}
                  onClick={() => setCurrentIndex(originalIndex)}
                >
                  <div 
                    className={`w-24 h-24 rounded-full ${member.color} flex items-center justify-center text-white text-2xl font-bold mb-4 transition-all duration-300 ${
                      isActive ? 'scale-110' : 'scale-90'
                    }`}
                  >
                    {member.name.charAt(0)}
                  </div>
                  {/* --- FIX: Added member name and closed h3 tag --- */}
                  <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                    isActive ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {member.name}
                  </h3>
                  {/* --- FIX: Added p tag for designation --- */}
                  <p className={`text-sm transition-colors duration-300 ${
                    isActive ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {member.designation}
                  </p>
                </motion.div> // <-- This motion.div was not closed properly
              );
            })}
          </div> {/* <-- This div (scrolling container) was not closed properly */}

          {/* --- FIX: Moved pagination dots outside the scrolling container --- */}
          <div className="flex justify-center mt-6 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-6 bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to team member ${index + 1}`}
              />
            ))}
          </div>
        </div> {/* <-- This div (relative container) was not closed properly */}
      </div>
    </section>
  );
};

export default Team;
