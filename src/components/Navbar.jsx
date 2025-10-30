import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo_white from "../assets/white_logo.png";
import logoText from "../assets/logo_text-white.png";
import { FiMenu } from "react-icons/fi";

export default function AIWebxNavbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleNavigate = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <nav className="bg-[#0e468d] backdrop-blur-lg shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigate("/")}
          >
            <img
              src={logo_white}
              alt="WZG-AI"
              className="h-10 object-contain pb-2"
            />
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

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-white font-medium items-center relative">
            <button
              onClick={() => handleNavigate("/")}
              className="hover:text-sky-600 transition cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate("/about")}
              className="hover:text-sky-600 transition cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleNavigate("/staffing")}
              className="hover:text-sky-600 transition cursor-pointer"
            >
              Staffing
            </button>

            {/* Services Dropdown */}
            <div className="group relative cursor-pointer">
              <button
                onClick={() => handleNavigate("/services")}
                className="hover:text-sky-600 transition inline-block"
              >
                Services
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-300">
                <ul className="py-2">
                  {services.map((service, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() =>
                          handleNavigate(
                            `/services/${service
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`
                          )
                        }
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-sky-100 hover:text-sky-700 rounded-lg transition"
                      >
                        {service}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => handleNavigate("/careers")}
              className="hover:text-sky-600 transition cursor-pointer"
            >
              Careers
            </button>

            <button
              onClick={() => handleNavigate("/contact")}
              className="bg-sky-600 text-white px-4 py-2 rounded-lg shadow hover:bg-sky-700 transition cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 hover:text-sky-600 focus:outline-none"
            >
              <FiMenu className="text-white text-3xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg pb-6">
          <button
            onClick={() => handleNavigate("/")}
            className="block px-4 py-2 hover:bg-sky-100"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigate("/about")}
            className="block px-4 py-2 hover:bg-sky-100"
          >
            About
          </button>
          <button
            onClick={() => handleNavigate("/staffing")}
            className="block px-4 py-2 hover:bg-sky-100"
          >
            Staffing
          </button>

          <div className="border-t">
            <button
              onClick={() => handleNavigate("/services")}
              className="w-full text-left px-4 py-2 font-medium text-gray-600 hover:bg-sky-100"
            >
              Services
            </button>
            <ul>
              {services.map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={() =>
                      handleNavigate(
                        `/services/${service
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`
                      )
                    }
                    className="block w-full text-left px-6 py-2 text-gray-700 hover:bg-sky-100 hover:text-sky-700 transition"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => handleNavigate("/careers")}
            className="block px-4 py-2 hover:bg-sky-100"
          >
            Careers
          </button>

          <button
            onClick={() => handleNavigate("/contact")}
            className="block mx-4 my-3 text-center bg-sky-600 text-white px-4 py-2 rounded-lg shadow hover:bg-sky-700 transition"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
