import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/WGZAI.png"; // your uploaded logo
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-sky-100 text-blue-950 relative overflow-hidden">
      {/* Footer Links Section */}
      <motion.div
        className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Quick Links */}
        <div>
          <h4 className="text-blue-900 font-semibold mb-4 text-lg">
            Quick Links
          </h4>
          <ul className="space-y-2 text-blue-900 text-sm">
            {["Home", "Company Profile", "About Us", "Careers", "Contact"].map(
              (link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-blue transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div className="mr-4 -ml-12">
          <h4 className="text-blue-900 font-semibold mb-4 text-lg text-center">Services</h4>
          {/* 🔹 Use grid instead of stacked list */}
          <ul className="grid grid-cols-2 gap-y-2 gap-x-6 text-blue-900 text-sm">
            {[
              "Data Analytics",
              "Software Development",
              "IT Consulting",
              "Cloud Services",
              "Software Testing",
              "AI Agents",
              "BPO Services",
              "Customer Support",
              "Marketing Services",
              "Image Conversion",
            ].map((service, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-blue transition-colors duration-300"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-blue-900 font-semibold mb-4 text-lg">
            Get In Touch
          </h4>
          <ul className="space-y-2 text-blue-900 text-sm">
            <li>
              <span className="font-medium">Address: </span>
              2nd floor, A2 Square, Building, Jai Hind Gandhi Rd, Cyber Hills
              Colony, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana
              500081, India
            </li>
            <li>
              <span className="font-medium">Phone: </span>
              +91 7842770089
            </li>
            <li>
              <span className="font-medium">Email: </span>
              info@wealthzonegroupai.com
            </li>
          </ul>
        </div>

        {/* Logo & About */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Cr" className="w-26 mb-4" />
          <p className="text-blue-900 text-sm leading-relaxed">
            Leading technology solutions <br /> provider delivering innovative{" "}
            <br /> IT and business services worldwide.
          </p>
          <div className="flex space-x-4 mt-4 text-blue-900 text-xl">
            <a href="#" className="hover:text-blue transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-blue transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-6 text-gray-500 text-xs">
        © {new Date().getFullYear()} Wealth Zone Group AI. All rights reserved.
      </div>
    </footer>
  );
}
