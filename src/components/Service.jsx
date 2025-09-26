import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  ShoppingCart,
  Palette,
  BarChart,
  Wrench,
  Layers,
  Gauge,
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
    bg: "bg-gradient-to-r from-sky-500 to-blue-600",
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-r from-sky-500 to-blue-600",
  },
  {
    title: "E-commerce Website Development",
    icon: <ShoppingCart className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-r from-sky-500 to-blue-600",
  },
  {
    title: "Graphic & Creative Designs",
    icon: <Palette className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-r from-sky-500 to-blue-600",
  },
  {
    title: "SEO & Digital Marketing",
    icon: <BarChart className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-r from-sky-500 to-blue-600",
  },
  {
    title: "Website Maintenance & Support",
    icon: <Wrench className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-r from-sky-500 to-blue-600",
  },
  {
    title: "CMS Websites & Integration",
    icon: <Layers className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-r from-sky-500 to-blue-600",
  },
  {
    title: "Performance Optimization",
    icon: <Gauge className="w-8 h-8 text-white" />,
    bg: "bg-gradient-to-r from-sky-500 to-blue-600",
  },
];

export default function Services() {
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

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
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
              whileHover={{ scale: 1.05 }}
            >
              <Card>
                <CardContent className="flex flex-col items-center">
                  <motion.div
                    className={`rounded-full p-4 mb-4 shadow-lg ${service.bg}`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {service.title}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export { Card, CardContent };
