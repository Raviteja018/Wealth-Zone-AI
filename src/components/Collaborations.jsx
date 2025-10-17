import React, { useRef, useEffect } from "react";
import Ranstad from "../assets/collab/randstad.jpeg";
import TCS from "../assets/collab/tcs.jpeg";
import Team from "../assets/collab/team-lease.jpeg";
import TechM from "../assets/collab/TechM.jpeg";
import Wells from "../assets/collab/wells.jpeg";
import Wipro from "../assets/collab/wipro.jpeg";
import Robo from "../assets/collab/robo.jpeg";
import Team_Source from "../assets/collab/Team.jpeg";
import Quess from "../assets/collab/Quess.jpeg";
import People_media from "../assets/collab/people-media.jpeg";
import Deloitte from "../assets/collab/deloitte.jpeg";
import { image } from "framer-motion/client";

const collaborations = [
  { id: 1, name: "Ranstad", image: Ranstad },
  { id: 2, name: "TCS", image: TCS },
  { id: 3, name: "Team-Lease", image: Team },
  { id: 4, name: "Tech Mahindra", image: TechM },
  { id: 5, name: "Wells", image: Wells },
  { id: 6, name: "wipro", image: Wipro },
  { id: 7, name: "Quess", image: Robo },
  { id: 8, name: "Team", image: Quess },
  { id: 9, name: "Robo", image: Team_Source },
  { id: 10, name: "people-media", image: People_media },
  { id: 11, name: "deloitte", image: Deloitte },
];

const Collaborations = () => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  // Duplicate items for seamless infinite loop
  const items = [...collaborations, ...collaborations];

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const container = containerRef.current;
    const scroller = scrollerRef.current;

    // Calculate total width needed for all items
    const itemWidth = 200; // Width of each item including margins
    const totalWidth = items.length * itemWidth;

    // Set initial position
    let position = 0;
    const speed = 1; // Pixels per frame
    const fps = 60;

    // Create animation frame loop
    let animationId;
    let lastTime = 0;

    const animate = (time) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      // Update position
      position += (speed * deltaTime) / (1000 / fps);

      // Reset position when scrolled one full width
      if (position >= totalWidth / 2) {
        position = 0;
      }

      // Apply transform for smooth scrolling
      scroller.style.transform = `translateX(-${position}px)`;

      // Continue animation
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [items.length]);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 text-center overflow-hidden">
      {/* Heading */}
      <h2 className="text-4xl font-semibold text-gray-900 mb-4">
        Trusted <span className="text-[#167ae6] font-bold">Collaborations</span>
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Partnering with industry leaders to drive innovation forward
      </p>

      {/* Horizontal Scroll Container */}
      <div ref={containerRef} className="relative w-full overflow-hidden py-6">
        <div
          ref={scrollerRef}
          className="flex items-center will-change-transform"
          style={{
            width: "max-content",
            animation: "scroll 30s linear infinite",
          }}
        >
          {items.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 mx-6 w-48 h-24 flex items-center justify-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="max-h-[70%] max-w-[80%] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Add CSS for smooth scrolling */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }
      `}</style>
    </section>
  );
};

export default Collaborations;