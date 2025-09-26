import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import logo from "../assets/WG.png";
import { motion } from "framer-motion";
import brain from "../assets/brain1.png";

export default function AIWebxNavbar() {
  const [open, setOpen] = useState(false);

  // ✅ Define links with paths
  const links = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "Services", path: "/services" },
    { label: "Products", path: "/products" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white/50 backdrop-blur-sm border-b border-[#0f1724]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Running Text */}
          <div className="flex items-center gap-0">
            <div className="relative flex items-center">
              <img src={logo} alt="AI WebX" className="h-18 w-18 object-contain" />
              <span>
                <img className="h-18 w-18 object-contain" src={brain} alt="Brain" />
              </span>
            </div>
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
                WEALTH ZONE GROUP AI
              </motion.div>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map(({ label, path }) => (
              <Link
                key={label}
                to={path} // ✅ actual path
                className="relative group px-2 py-1 font-medium text-gray-800 transition-colors duration-300 hover:text-emerald-500"
              >
                <span className="font-sans">{label}</span>
                <span className="absolute left-0 right-0 -bottom-2 h-0.5 bg-emerald-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}

            {/* Contact Button */}
            <Link
              to="/contact"
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold shadow-lg hover:brightness-105 transition"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="p-2 rounded-md inline-flex items-center justify-center text-slate-200 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 bg-gradient-to-b from-[#071021]/60 to-transparent border-t border-[#0f1724]/30">
          {links.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/5"
              onClick={() => setOpen(false)} // ✅ closes menu on click
            >
              {label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="w-full mt-1 block text-center px-4 py-2 bg-emerald-400 text-slate-900 rounded-md font-semibold"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
