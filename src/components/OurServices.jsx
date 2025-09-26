import React from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Brain, 
  Smartphone, 
  Cloud, 
  BarChart3, 
  Headphones 
} from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    points: [
      "Tailored enterprise applications",
      "End-to-end development lifecycle",
    ],
    icon: <Code className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "AI & Machine Learning Solutions",
    points: [
      "Fraud detection, automation, predictive analytics",
      "NLP, computer vision, chatbots",
    ],
    icon: <Brain className="w-10 h-10 text-purple-600" />,
  },
  {
    title: "Web & Mobile App Development",
    points: [
      "Cross-platform mobile apps (React Native, Flutter)",
      "Responsive web platforms",
    ],
    icon: <Smartphone className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Cloud Solutions & DevOps",
    points: [
      "Cloud migration (AWS, Azure, GCP)",
      "CI/CD pipelines, automation",
    ],
    icon: <Cloud className="w-10 h-10 text-sky-600" />,
  },
  {
    title: "Data Analytics & Business Intelligence",
    points: [
      "Dashboard & reporting tools",
      "Real-time insights for decision making",
    ],
    icon: <BarChart3 className="w-10 h-10 text-orange-600" />,
  },
  {
    title: "IT Consulting & Support",
    points: [
      "Technology strategy",
      "Ongoing maintenance & support",
    ],
    icon: <Headphones className="w-10 h-10 text-red-600" />,
  },
];

export default function OurServices() {
  return (
    <section className="py-16 px-6 bg-gray-50" id="services">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Our Services
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-start space-y-4"
          >
            <div className="p-3 bg-gray-100 rounded-xl">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {service.title}
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
