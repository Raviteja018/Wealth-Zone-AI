import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/white_logo.png";
import logo_white from "../assets/WGZAI-white.png";
import logoText from "../assets/logo_text-white.png";

export default function AIWebxNavbar() {
  const [open, setOpen] = useState(false);

  const services = [
    "Data Analytics",
    "Software Development",
    "IT Consulting",
    "Cloud Services",
    "Software Testing",
    "AI Agents",
    "BPO Services",
    "Customer Support",
    "Marketing Services",
  ];

  return (
    <nav className="bg-[#0e468d] backdrop-blur-lg shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={logo_white} alt="WZG-AI" className="h-20 w-20 object-contain" />
            <div className="leading-tight overflow-hidden w-48">
              <motion.div
                className="text-lg font-bold tracking-wide text-sky-600 whitespace-nowrap"
                animate={{ x: ["100%", "-100%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 6,
                  ease: "linear",
                }}
              >
                <span>
                  <img src={logoText} className="h-42" alt="logo text" />
                </span>
              </motion.div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8 text-white font-medium items-center relative">
            <a href="/" className="hover:text-sky-600 transition">
              Home
            </a>
            <a href="/about" className="hover:text-sky-600 transition">
              About
            </a>

            {/* Services with dropdown */}
            <div className="group relative">
              <a
                href="/services"
                className="hover:text-sky-600 transition inline-block"
              >
                Services
              </a>

              {/* Dropdown */}
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-300">
                <ul className="py-2">
                  {services.map((service, idx) => (
                    <li key={idx}>
                      <a
                        href={`/services/${service
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-sky-100 hover:text-sky-700 rounded-lg transition"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            
            <a href="/careers" className="hover:text-sky-600 transition">
              Careers
            </a>

            {/* Contact styled as button */}
            <a
              href="/contact"
              className="bg-sky-600 text-white px-4 py-2 rounded-lg shadow hover:bg-sky-700 transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 hover:text-sky-600 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="/" className="block px-4 py-2 hover:bg-sky-100">
            Home
          </a>
          <a href="/about" className="block px-4 py-2 hover:bg-sky-100">
            About
          </a>
          <div className="border-t">
            <p className="px-4 py-2 font-medium text-gray-600">Services</p>
            <ul>
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href={`/services/${service
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block px-6 py-2 text-gray-700 hover:bg-sky-100 hover:text-sky-700 transition"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <a href="/careers" className="block px-4 py-2 hover:bg-sky-100">
            Careers
          </a>

          {/* Contact styled as button in mobile */}
          <a
            href="/contact"
            className="block mx-4 my-3 text-center bg-sky-600 text-white px-4 py-2 rounded-lg shadow hover:bg-sky-700 transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
