import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTools, FaLightbulb, FaStar, FaBullhorn, FaChartLine, FaRocket } from "react-icons/fa";
import StaffingImage from "../assets/staffing.jpg";
 
export default function OurStaffing() {
 
    const navigate = useNavigate();
 
  return (
    <>
      {/* Section 1 - Main Staffing Info */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl font-extrabold text-sky-600 leading-tight">
              Professional <br />
              <span className="text-sky-600">Staffing Solutions</span> <br />
              Across <span className="text-sky-600">Ohio & Michigan</span>
            </h1>
            <p className="text-gray-600 leading-relaxed">
              We specialize in connecting top talent with outstanding opportunities.
              Whether you need direct hire, temporary, or temp-to-hire staffing, our
              team ensures the perfect match for your business goals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Empower your workforce with our flexible staffing solutions designed for
              manufacturing, IT, and administrative sectors.
            </p>
            <button
            onClick={() => navigate("/request-employee")}
             className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300">
              Request an Employee
            </button>
          </div>
 
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={StaffingImage}
              alt="Staffing Services"
              className="w-full rounded-3xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
 
      {/* Section 2 - Cards Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
            Build Your Team the Right Way <br />
            <span className="text-blue-600">With Our Flexible Staffing Solutions</span>
          </h2>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Direct Hire Staffing Services
              </h3>
              <p className="text-gray-600 mb-6">
                Need a full-time employee with the skills and experience to make
                a positive impact on your organization? We recruit and screen
                qualified candidates for you to choose from.
              </p>
              <button onClick={() => navigate("/direct-staffing")}
               className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all duration-300">
                Get Started
              </button>
            </div>
 
            {/* Card 2 */}
            <div className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Contractual Staffing Services
              </h3>
              <p className="text-gray-600 mb-6">
                Manage vacations, illnesses, and demand spikes without adding to
                your permanent workforce. We provide qualified, reliable staff when you need them most.
              </p>
              <button  onClick={()=>navigate("/contractual-staffing")}
               className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all duration-300">
                Get Started
              </button>
            </div>
 
            {/* Card 3 */}
            <div className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Temp-to-Hire Staffing Services
              </h3>
              <p className="text-gray-600 mb-6">
                Try one of our temp-to-hire employees for your Ohio or Michigan
                business. Evaluate performance before making a full-time hiring decision.
              </p>
              <button onClick={() => navigate("/temp-to-hire-staffing")}
               className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
 
      {/* Section 3 - Recruiting Process */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
            We Create a More Efficient Recruiting Process
          </h2>
 
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
                <FaTools className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Build</h3>
              <p className="text-gray-600">a great work culture.</p>
            </div>
 
            {/* Card 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
                <FaLightbulb className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Focus</h3>
              <p className="text-gray-600">on the wellbeing, safety, and happiness of your employees.</p>
            </div>
 
            {/* Card 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
                <FaStar className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Create</h3>
              <p className="text-gray-600">a work environment that attracts and retains superior employees.</p>
            </div>
 
            {/* Card 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
                <FaBullhorn className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Showcase</h3>
              <p className="text-gray-600">how your company provides what job seekers desire most.</p>
            </div>
 
            {/* Card 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
                <FaChartLine className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Exceed</h3>
              <p className="text-gray-600">candidate expectations.</p>
            </div>
 
            {/* Card 6 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
                <FaRocket className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Achieve</h3>
              <p className="text-gray-600">
                your recruiting goals—even in this tough job market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
