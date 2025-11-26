import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Monitor,
  Smartphone,
  ShoppingCart,
  Palette,
  BarChart,
  Wrench,
  Layers,
  Gauge,
  Headphones,
} from "lucide-react";

// Card component
function Card({ className, children }) {
  return (
    <div
      className={`rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 ${className || ""}`}
    >
      {children}
    </div>
  );
}

// CardContent component
function CardContent({ className, children }) {
  return <div className={`p-6 ${className || ""}`}>{children}</div>;
}

const services = [
  {
    title: "Web Design & Development",
    icon: <Monitor className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    description: "Beautiful, responsive websites",
    color: "from-blue-500/10 to-cyan-500/10",
    link: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-br from-purple-500 to-pink-500",
    description: "iOS & Android applications",
    color: "from-purple-500/10 to-pink-500/10",
    link: "/services/mobile-apps",
  },
  {
    title: "E-commerce Website Development",
    icon: <ShoppingCart className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-br from-emerald-500 to-teal-500",
    description: "Online stores that convert",
    color: "from-emerald-500/10 to-teal-500/10",
    link: "/services/ecommerce",
  },
  {
    title: "Graphic & Creative Designs",
    icon: <Palette className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-br from-orange-500 to-red-500",
    description: "Stunning visual identities",
    color: "from-orange-500/10 to-red-500/10",
    link: "/services/graphic-design",
  },
  {
    title: "Digital Marketing & SEO",
    icon: <BarChart className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-br from-indigo-500 to-blue-500",
    description: "Boost your online presence",
    color: "from-indigo-500/10 to-blue-500/10",
    link: "/services/marketing-services",
  },
  {
    title: "Website Maintenance & Support",
    icon: <Wrench className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-br from-slate-500 to-gray-600",
    description: "24/7 technical assistance",
    color: "from-slate-500/10 to-gray-600/10",
    link: "/services/website-maintenance",
  },
  {
    title: "CMS Websites & Integration",
    icon: <Layers className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-br from-violet-500 to-purple-500",
    description: "Easy content management",
    color: "from-violet-500/10 to-purple-500/10",
    link: "/services/cms",
  },
  {
    title: "Performance Optimization",
    icon: <Gauge className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-br from-green-500 to-emerald-500",
    description: "Lightning-fast experiences",
    color: "from-green-500/10 to-emerald-500/10",
    link: "/services/performance-optimization",
  },

];

export default function Services() {
  const navigate = useNavigate();

  const handleServiceClick = (link) => {
    navigate(link);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50 text-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading & Divider */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            <span className="text-sky-600"> Our Services</span>
          </h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            We provide a wide range of digital solutions designed to help your
            business grow, innovate, and succeed. From elegant websites to
            powerful mobile apps and advanced marketing strategies, we’ve got
            you covered.
          </p>
        </motion.div>

        {/* Grid with Unique Layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group cursor-pointer"
              onClick={() => handleServiceClick(service.link)}
            >
              <motion.div
                className="relative h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                whileHover={{ y: -8 }}
              >
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center text-xs font-bold text-gray-400 group-hover:text-gray-600 transition-all duration-300">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon with animated background */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className={`inline-flex p-4 rounded-2xl ${service.bg} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      {service.icon}
                    </div>
                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Arrow indicator - appears on hover */}
                  <div className="mt-auto flex items-center text-sky-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-sm font-semibold">Learn More</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export { Card, CardContent };
