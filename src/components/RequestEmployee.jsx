import React, { useState } from "react";
import { motion } from "framer-motion";
import employeeImg from "../assets/requestemplyoee.jpg";
export default function RequestEmployee() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    positionType: "",
    shift: "",
    location: "",
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    respondBy: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been submitted!");
  };
 
  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 bg-white md:gap-10 lg:gap-16">
      {/* Top Section (Text + Image) */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-5 text-center md:text-left">
          <h2 className="text-4xl font-bold text-sky-600">
            Request An <span className="">Employee</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
  Looking for someone new? Someone outstanding to add to your team or help on a project?
</p>
<p className="text-gray-600 leading-relaxed">
 
</p>
<p className="text-gray-600 leading-relaxed">
  We’d be happy to help. Fill out our form below and we’ll call to discuss your needs.
  Whether you need a single professional for a short-term role or an entire team for a long-term project, we specialize in finding the right talent quickly and efficiently.
  Our experts take the time to understand your company’s culture, skill requirements, and goals ensuring we match you with employees who fit perfectly, both professionally and personally.
</p>
<p className="text-gray-600 leading-relaxed">
  Let us do the heavy lifting so you can stay focused on growing your business while we find the people who make it possible.
</p>
 
        </div>
 
        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={employeeImg}
            alt="Employee Discussion"
            className="rounded-[2rem] w-[90%] md:w-[80%] shadow-md object-cover"
          />
        </motion.div>
      </div>
 
      {/* Request Employee Form */}
<form
  onSubmit={handleSubmit}
  className="w-full bg-white shadow-md rounded-2xl p-8 border border-gray-100"
>
  {/* Job Information */}
  <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">
    Job Information
  </h2>
 
  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <label className="block font-medium mb-1">
        Job Title <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
 
    <div>
      <label className="block font-medium mb-1">
        Is this position Contractual or full-time?{" "}
        <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center gap-6 mt-1">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="positionType"
            value="Contractual"
            onChange={handleChange}
            required
          />
          Contractual
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="positionType"
            value="Full-time"
            onChange={handleChange}
          />
          Full-time
        </label>
      </div>
    </div>
 
    <div>
      <label className="block font-medium mb-1">
        Shift <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="shift"
        value={formData.shift}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
 
    <div>
      <label className="block font-medium mb-1">
        Location <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
  </div>
 
  {/* Contact Information */}
  <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-6 border-b pb-2">
    Your Contact Information
  </h2>
 
  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <label className="block font-medium mb-1">
        First Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
    <div>
      <label className="block font-medium mb-1">
        Last Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
 
    <div>
      <label className="block font-medium mb-1">
        Company <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
 
    <div>
      <label className="block font-medium mb-1">
        Phone <span className="text-red-500">*</span>
      </label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
 
    <div>
      <label className="block font-medium mb-1">
        Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
 
    <div>
      <label className="block font-medium mb-1">Respond by</label>
      <div className="flex items-center gap-6 mt-1">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="respondBy"
            value="Phone"
            onChange={handleChange}
          />
          Phone
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="respondBy"
            value="Email"
            onChange={handleChange}
          />
          Email
        </label>
      </div>
    </div>
  </div>
 
  {/* Submit Button */}
  <div className="mt-10 flex justify-center">
    <button
      type="submit"
      className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-10 py-4 rounded-lg shadow-md transition-all duration-200"
    >
      Request Employee
    </button>
  </div>
</form>
    </section>
  );
}