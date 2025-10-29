import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ProjectsSection = ({ projects }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = () => {
      if (!scrollContainer) return;
      const card = scrollContainer.querySelector('.project-card');
      if (!card) return;
      
      const cardWidth = card.offsetWidth + 24; // width + margin
      const scrollAmount = cardWidth * 2; // scroll 2 cards at a time
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollContainer.scrollLeft + scrollAmount >= maxScroll) {
        // Reset to start for infinite loop
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };

    const interval = setInterval(scrollStep, 3000); // scroll every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-extrabold text-blue-900 uppercase tracking-wide relative inline-block"
        >
          Projects
          <span className="block h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          <span className="text-sky-500 font-semibold">Wealth-Zone-Group-AI</span>{" "}
          Brings Deep Expertise And Innovation To Every Project. We Combine Strategy,
          Creativity, And Technology To Deliver World-Class Digital Experiences.
        </motion.p>

        {/* Auto-scrolling Projects Carousel */}
        <div className="mt-12 relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth pb-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.02 }}
                className="project-card mx-3 min-w-[280px] sm:min-w-[320px] md:min-w-[360px] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 flex-shrink-0 group"
              >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
