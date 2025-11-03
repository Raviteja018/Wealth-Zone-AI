import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/blue_logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-sky-100 text-blue-950 relative overflow-hidden py-8">
      {/* Footer Links Section */}
      <motion.div
        className="py-8 px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo + About */}
        <div>
          <img src={logo} alt="Wealth Zone Group AI" className="w-42 -mt-10 -mb-8 cursor-pointer" />
          <p className="text-blue-900 text-sm leading-relaxed">
            Leading Technology Solutions provider delivering innovative IT and
            business services worldwide.
          </p>
          <div className="flex space-x-4 mt-4 text-blue-900 text-lg">
            <a
              href="https://www.facebook.com/profile.php?id=61581608061964"
              className="hover:text-blue-600 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/wealth-zone-group-ai/about/?viewAsMember=true"
              className="hover:text-blue-600 transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/wealth_zone_group_ai?igsh=MTVvdzI2dXUwZDR4bg=="
              className="hover:text-blue-600 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
         <div>
      <h4 className="text-blue-900 font-semibold mb-4 text-lg">Quick Links</h4>
      <ul className="space-y-2 text-blue-900 text-sm">
        {links.map((link, i) => (
          <li key={i}>
            <button
              onClick={() => navigate(link.href)}
              className="hover:text-blue-600 transition-colors duration-300 block text-left w-full cursor-pointer"
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
        {/* Services */}
        <div className="ml-0 md:-ml-20">
          <h4 className="text-blue-900 font-semibold mb-4 text-lg">Services</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-blue-900 text-sm">
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
                  className="hover:text-blue-600 transition-colors duration-300 block text-left"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-blue-900 font-semibold mb-4 text-lg">Get In Touch</h4>
          <ul className="space-y-2 text-blue-900 text-sm">
            <li>
              <span className="font-medium">Address: </span>
              2nd floor, A2 Square, Jai Hind Gandhi Rd, Cyber Hills Colony, VIP
              Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500081
            </li>
            <li>
              <span className="font-medium">Phone: </span> +91 7842770089
            </li>
            <li>
              <span className="font-medium">Email: </span> info@wealthzonegroupai.com
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Copyright */}
      <div className="border-t border-gray-300 text-center py-4 text-gray-500 text-xs">
        © 2006 Wealth Zone Group AI. All rights reserved.
      </div>
    </footer>
  );
}
