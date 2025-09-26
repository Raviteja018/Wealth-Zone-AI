import React from "react";
import { FaUniversity, FaBookReader, FaUserCog } from "react-icons/fa";

const products = [
  {
    title: "OTRAS – Online Transparent Recruitment & Assessment System",
    points: [
      "AI-driven government exam management",
      "Application verification, fraud prevention, OMR scanning",
    ],
    icon: <FaUniversity className="text-white text-2xl" />,
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "EduSmart – AI-Powered EdTech Platform",
    points: ["Smart learning, assessments, analytics"],
    icon: <FaBookReader className="text-white text-2xl" />,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "AI-Enabled HRMS",
    points: ["Employee management with AI assistant"],
    icon: <FaUserCog className="text-white text-2xl" />,
    gradient: "from-purple-500 to-indigo-600",
  },
];

export default function OurProducts() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white" id="products">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
        Our <span className="text-sky-600">Products</span>
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Explore our innovative AI-powered products designed to transform industries 
        with intelligence, automation, and performance.
      </p>

      {/* Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="group relative p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
          >
            {/* Icon with Gradient Circle */}
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r ${product.gradient} shadow-md mb-6 group-hover:scale-110 transition`}
            >
              {product.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-4 group-hover:text-sky-600 transition">
              {product.title}
            </h3>

            {/* Points */}
            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
              {product.points.map((point, i) => (
                <li key={i} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
