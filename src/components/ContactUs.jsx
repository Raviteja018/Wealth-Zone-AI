import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactUs() {
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

  const [selectedService, setSelectedService] = useState("");

  return (
    <section className="bg-blue-50 min-h-screen py-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900">
          <span className="text-blue-600">Get InTouch</span>
        </h2>
        <p className="mt-4 text-gray-700 max-w-xl mx-auto">
          Ready to transform your business? Let's start the conversation today
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Contact Information
          </h3>
          <p className="text-gray-700">
            Reach out to our team for any inquiries about our services or to
            discuss your project requirements.
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                <FaPhone />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-700">+91 7842770089</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-700">info@wealthzonegroupai.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Address</h4>
                <p className="text-gray-700">
                  2nd floor, A2 Square, Buliding, Jai Hind Gandhi Rd, Cyber
                  Hills Colony, VIP Hills, Silicon Valley, Madhapur, Hyderabad,
                  Telangana 500081, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                <FaClock />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Business Hours</h4>
                <p className="text-gray-700">24/7 Working</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-8">
            <h4 className="font-semibold text-gray-900 mb-4">Our Location</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15224.772545436412!2d78.3692229!3d17.4504677!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91005bd4ba91%3A0x58aec90f176a664d!2sWzg%20Ai!5e0!3m2!1sen!2sin!4v1759085298585!5m2!1sen!2sin"
              className="w-[600px] h-[250px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Send Us a Message
          </h3>
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Full Name *"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="email"
                placeholder="Email Address *"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="grid grid-cols-1  gap-4">
              <input
                type="text"
                placeholder="Company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Service Dropdown */}
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select a Service *</option>
              {services.map((service, idx) => (
                <option key={idx} value={service}>
                  {service}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Subject *"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <textarea
              placeholder="Message *"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
