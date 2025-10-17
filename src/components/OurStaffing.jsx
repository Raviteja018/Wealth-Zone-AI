import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserTie,
  FaHandshake,
  FaClock,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import staffingImg from "../assets/staffing.jpg";
import contractImg from "../assets/contractual.jpg";
import tempToHireImg from "../assets/temp-to.jpg";

export default function OurStaffing() {
  const [activeTab, setActiveTab] = useState("direct");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState("");

  const tabs = [
    { id: "direct", label: "Direct Staffing", icon: <FaUserTie /> },
    { id: "contract", label: "Contract Staffing", icon: <FaHandshake /> },
    { id: "temp", label: "Temp-to-Hire", icon: <FaClock /> },
  ];

  const cardData = {
    direct: {
      title: "Direct Staffing",
      desc: "Permanent placement solutions for long-term growth.",
      points: [
        "Full-time permanent positions",
        "Comprehensive candidate screening",
        "Cultural fit assessment",
        "Long-term career development",
        "Competitive salary packages",
        "Benefits and equity options",
      ],
      stats: [
        { label: "Success Rate", value: "95%" },
        { label: "Avg. Placement", value: "14 days" },
        { label: "Candidates", value: "500+" },
      ],
      button: "Get Started with Direct Staffing",
      image: staffingImg,
      color: "blue",
      accordionContent:
        "Direct Staffing means hiring permanent employees directly into your company for long-term positions. It involves full-time employment, candidate screening, cultural fit checks, and career growth planning.",
    },
    contract: {
      title: "Contract Staffing",
      desc: "Flexible workforce solutions for project-based needs.",
      points: [
        "Project-based assignments",
        "Specialized skill matching",
        "Flexible duration contracts",
        "Rapid deployment capability",
        "Cost-effective solutions",
        "Scalable team expansion",
      ],
      stats: [
        { label: "Success Rate", value: "98%" },
        { label: "Avg. Placement", value: "7 days" },
        { label: "Candidates", value: "1000+" },
      ],
      button: "Get Started with Contract Staffing",
      image: contractImg,
      color: "green",
      accordionContent:
        "Contract Staffing refers to hiring employees on a temporary or contract basis to complete specific projects or roles. This allows flexibility, rapid deployment, and cost-effective staffing without long-term commitment.",
    },
    temp: {
      title: "Temp-to-Hire Staffing",
      desc: "Evaluate talent before long-term commitment.",
      points: [
        "Trial-based employment period",
        "No-risk hiring process",
        "Streamlined conversion process",
        "Lower turnover rates",
        "Access to pre-screened talent",
        "Cost-effective hiring path",
      ],
      stats: [
        { label: "Conversion Rate", value: "92%" },
        { label: "Trial Duration", value: "30 days" },
        { label: "Candidates", value: "750+" },
      ],
      button: "Get Started with Temp-to-Hire Staffing",
      image: tempToHireImg,
      color: "purple",
      accordionContent:
        "Temp-to-Hire Staffing allows you to hire employees on a trial basis. You can evaluate their skills and fit during the trial period before offering permanent employment, reducing hiring risks.",
    },
  };

  const active = cardData[activeTab];

  const colorClasses = {
    blue: {
      bg: "bg-sky-700",
      hover: "hover:bg-sky-800",
      text: "text-sky-700",
      lightBg: "bg-sky-50",
      border: "border-sky-100",
      iconBg: "bg-sky-100",
      solidText: "text-sky-600",
    },
    green: {
      bg: "bg-gradient-to-r from-sky-500 to-violet-600",
      hover: "hover:from-sky-600 hover:to-violet-700",
      text: "text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-violet-600",
      solidText: "text-sky-600",
      lightBg: "bg-gradient-to-r from-sky-50 to-violet-50",
      border: "border border-sky-200",
      iconBg: "bg-gradient-to-r from-sky-100 to-violet-100",
    },
    purple: {
      bg: "bg-violet-600",
      hover: "hover:bg-violet-700",
      text: "text-violet-600",
      lightBg: "bg-violet-50",
      border: "border-violet-100",
      iconBg: "bg-violet-100",
      solidText: "text-violet-600",
    },
  };

  const theme = colorClasses[active.color];

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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`${formType} request submitted successfully!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setIsModalOpen(false);
    setFormData({
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
  };

  return (
    <section className="bg-gray-50 py-16 relative">
      <ToastContainer />
      <div className="container mx-auto text-center px-6">
        <h1 className="text-4xl font-extrabold mb-4">
          <span className="text-gray-900">Complete </span>
          <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
            Staffing Solutions
          </span>
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
          From permanent placements to flexible contracts, we deliver the right
          talent for every business need.
        </p>
      </div>
      {/* --- Tabs Section --- */}
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => {
            const tabColor = cardData[tab.id].color;
            const tabTheme = colorClasses[tabColor];
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 font-medium ${
                  isActive
                    ? `${tabTheme.bg} text-white shadow-md`
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </motion.button>
            );
          })}
        </div>

        {/* --- Card Section --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className={`${theme.lightBg} rounded-3xl shadow-xl p-10 md:p-14 w-auto mx-auto flex flex-col md:flex-row gap-10 items-center`}
          >
            <div className="flex-1 text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className={`${theme.iconBg} p-2 rounded-lg ${theme.text}`}>
                  {tabs.find((t) => t.id === activeTab)?.icon}
                </span>
                {active.title}
              </h2>
              <p className="text-gray-600 mb-6">{active.desc}</p>

              <ul className="space-y-2 mb-6">
                {active.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <FaCheckCircle className={`${theme.solidText} text-lg`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setFormType(active.title);
                }}
                className={`${theme.bg} ${theme.hover} text-white px-6 py-3 rounded-lg font-medium transition-all`}
              >
                {active.button} →
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center gap-6">
              <motion.img
                src={active.image}
                alt={active.title}
                className="rounded-2xl shadow-lg w-full object-cover h-56 md:h-64"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex justify-between w-full text-center">
                {active.stats.map((s, i) => (
                  <div
                    key={i}
                    className={`bg-white rounded-xl py-4 px-6 flex-1 mx-1 shadow-sm border ${theme.border}`}
                  >
                    <h4 className={`text-2xl font-bold ${theme.text}`}>{s.value}</h4>
                    <p className="text-sm text-gray-600">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- Accordion Section --- */}
      <div className="container mx-auto px-6 mt-16 max-w-3xl">
      {["direct", "contract", "temp"].map((type) => {
        const data = cardData[type];
        const isOpen = openAccordion === type;
        return (
          <div
            key={type}
            className="mb-4 text-center rounded-lg shadow-sm overflow-hidden"
          >
            <motion.button
              onClick={() => setOpenAccordion(isOpen ? null : type)}
              className={`w-full flex justify-between items-center p-4 font-medium text-gray-800 bg-sky-100 hover:bg-sky-200 transition-all`}
              whileHover={{ scale: 1.02 }}
            >
              <span>{`What does ${data.title} mean?`}</span>
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </motion.button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-4 pb-4 text-gray-700 bg-white"
                >
                  {data.accordionContent}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
      {/* --- Modal Form Section --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-sky-100 rounded-2xl shadow-2xl w-[90%] md:w-[70%] lg:w-[60%] p-8 relative max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                &times;
              </button>

              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                {formType} Request Form
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                {/* Job Info */}
                <div>
                  <label className="block font-medium mb-1">
                    Job Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Enter the job title"
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Position Type <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-4 mt-1">
                    {["Contractual", "Full-time","Temp-to-hire"].map((type) => (
                      <label key={type} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="positionType"
                          value={type}
                          checked={formData.positionType === type}
                          onChange={handleChange}
                          required
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Shift <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="e.g., Day, Night"
                    type="text"
                    name="shift"
                    value={formData.shift}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="City, State, Country"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="(+91)1234567890"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block font-medium mb-1">Respond By</label>
                  <div className="flex items-center gap-4 mt-1">
                    {["Phone", "Email"].map((type) => (
                      <label key={type} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="respondBy"
                          value={type}
                          checked={formData.respondBy === type}
                          onChange={handleChange}
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2 text-center mt-4">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-sky-500 to-violet-600 hover:from-sky-600 hover:to-violet-700 text-white font-semibold px-10 py-4 rounded-lg shadow-md transition-all duration-300"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
