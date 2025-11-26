import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import logo_white from "../assets/white_logo.png";
import logoText from "../assets/logo_text-white.png";
import { FiMenu } from "react-icons/fi";
import { Phone } from "lucide-react";

export default function AIWebxNavbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  // Helper function to check if link is active
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-gradient-to-br from-blue-600 to-blue-800 backdrop-blur-lg shadow-md sticky top-0 z-60">
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
              className="h-8 object-contain"
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
              className={`hover:text-sky-600 transition cursor-pointer ${isActive("/") ? "text-sky-400 underline underline-offset-4" : ""
                }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate("/about")}
              className={`hover:text-sky-600 transition cursor-pointer ${isActive("/about") ? "text-sky-400 underline underline-offset-4" : ""
                }`}
            >
              About
            </button>


            <button
              onClick={() => handleNavigate("/staffing")}
              className={`hover:text-sky-600 transition cursor-pointer ${isActive("/staffing") ? "text-sky-400 underline underline-offset-4" : ""
                }`}
            >
              Staffing
            </button>

            {/* Services Dropdown */}
            <div className="group relative cursor-pointer">
              <button
                onClick={() => handleNavigate("/services")}
                className={`hover:text-sky-600 transition inline-block ${isActive("/services") ? "text-sky-400 underline underline-offset-4" : ""
                  }`}
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
              onClick={() => handleNavigate("/team")}
              className={`hover:text-sky-600 transition cursor-pointer ${isActive("/team") ? "text-sky-400 underline underline-offset-4" : ""
                }`}
            >
              Our Team
            </button>


            <button
              onClick={() => handleNavigate("/projects")}
              className={`hover:text-sky-600 transition cursor-pointer ${isActive("/projects") ? "text-sky-400 underline underline-offset-4" : ""
                }`}
            >
              Projects
            </button>

            <button
              onClick={() => handleNavigate("/careers")}
              className={`hover:text-sky-600 transition cursor-pointer ${isActive("/careers") ? "text-sky-400 underline underline-offset-4" : ""
                }`}
            >
              Careers
            </button>

            <button
              onClick={() => handleNavigate("/contact")}
              className={`flex font-semibold px-4 py-2 rounded-lg shadow transition cursor-pointer ${isActive("/contact")
                ? "bg-sky-400 text-white"
                : "bg-white text-blue-500 hover:bg-sky-50"
                }`}
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
            className={`block px-4 py-2 hover:bg-sky-100 w-full text-left ${isActive("/") ? "bg-sky-100 text-sky-700 font-semibold" : ""
              }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavigate("/about")}
            className={`block px-4 py-2 hover:bg-sky-100 w-full text-left ${isActive("/about") ? "bg-sky-100 text-sky-700 font-semibold" : ""
              }`}
          >
            About
          </button>
          <button
            onClick={() => handleNavigate("/staffing")}
            className={`block px-4 py-2 hover:bg-sky-100 w-full text-left ${isActive("/staffing") ? "bg-sky-100 text-sky-700 font-semibold" : ""
              }`}
          >
            Staffing
          </button>
          <button
            onClick={() => handleNavigate("/team")}
            className={`block px-4 py-2 hover:bg-sky-100 w-full text-left ${isActive("/team") ? "bg-sky-100 text-sky-700 font-semibold" : ""
              }`}
          >
            Our Team
          </button>

          <div className="border-t">
            <button
              onClick={() => handleNavigate("/staffing")}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Staffing
            </button>
            <button
              onClick={() => handleNavigate("/team")}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Our Team
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
            onClick={() => handleNavigate("/projects")}
            className={`block px-4 py-2 hover:bg-sky-100 w-full text-left ${isActive("/projects") ? "bg-sky-100 text-sky-700 font-semibold" : ""
              }`}
          >
            Projects
          </button>

          <button
            onClick={() => handleNavigate("/careers")}
            className={`block px-4 py-2 hover:bg-sky-100 w-full text-left ${isActive("/careers") ? "bg-sky-100 text-sky-700 font-semibold" : ""
              }`}
          >
            Careers
          </button>

          <button
            onClick={() => handleNavigate("/contact")}
            className={`block mx-4 my-3 text-center px-4 py-2 rounded-lg shadow transition ${isActive("/contact")
                ? "bg-sky-700 text-white"
                : "bg-sky-600 text-white hover:bg-sky-700"
              }`}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
