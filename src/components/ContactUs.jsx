import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactUs() {
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
            Reach out to our team for any inquiries about our services or to discuss your project requirements.
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                <FaPhone />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-700">+91 8949393939939</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-700">info@wealthzonegroup.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Address</h4>
                <p className="text-gray-700">
                 2nd floor, A2 Square, Buliding, Jai Hind Gandhi Rd, Cyber Hills
              Colony, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana
              500081, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                <FaClock />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Business Hours</h4>
                <p className="text-gray-700">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <input
              type="text"
              placeholder="Subject *"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <textarea
              placeholder="Message *"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
