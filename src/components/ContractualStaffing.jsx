import React from "react";
import TempoImg from "../assets/tempostaffing.jpg";
import { motion } from "framer-motion";
import {
  FaClock,
  FaFileInvoiceDollar,
  FaUsers,
  FaMoneyBillWave,
  FaDoorOpen,
  FaCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import temporaryimg from "../assets/directhaier.jpg";

export default function ContractualStaffing() {
  const navigate = useNavigate();

  const temporaryStaffingCards = [
    {
      title: "Faster Hiring, Less Work",
      desc: "We recruit, screen, and place qualified workers based on your immediate needs. Spend less time on job postings, scheduling, or interviews.",
      icon: <FaClock className="text-sky-600 text-3xl" />,
    },
    {
      title: "Payroll and Compliance",
      desc: "Manage timekeeping, taxes, and onboarding paperwork. Your internal staff stays focused on daily operations while we handle the administrative side.",
      icon: <FaFileInvoiceDollar className="text-sky-600 text-3xl" />,
    },
    {
      title: "Scalable Services",
      desc: "We provide coverage during peak seasons, special projects, or absences. Stay staffed without increasing long-term headcount or shifting job descriptions.",
      icon: <FaUsers className="text-sky-600 text-3xl" />,
    },
    {
      title: "Steady Income",
      desc: "We help you find consistent work without long delays or long application processes. You earn a paycheck weekly and gain experience while working.",
      icon: <FaMoneyBillWave className="text-sky-600 text-3xl" />,
    },
    {
      title: "Your Foot in the Door",
      desc: "Temporary roles often lead to full-time offers. If the job fits, you can stay; if it doesn’t, we help you move into the next opportunity.",
      icon: <FaDoorOpen className="text-sky-600 text-3xl" />,
    },
    {
      title: "Perfect Fit Jobs",
      desc: "We listen to your preferences, then match you with roles that fit. Whether you want days, nights, or weekends, we find temporary work that fits your life.",
      icon: <FaCheckCircle className="text-sky-600 text-3xl" />,
    },
  ];
  return (
    <>
      <div className="w-full bg-sky-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Text */}
          <div className="lg:w-7/12 space-y-6 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-sky-900 leading-tight">
              Contractual Staffing <br /> Agency in Wealth-Zone-Group-AI
            </h2>
            <p className="text-2xl font-semibold text-sky-600">
              Short-Term Employment for Long-Term Success
            </p>

            <p className="text-gray-600 leading-relaxed">
              Advance Group helps you fill temporary positions quickly with
              qualified workers who meet your exact needs. Whether you’re
              covering absences, managing peak demand, or supporting short-term
              projects, we provide fast access to reliable talent in
              manufacturing, administrative, and clerical roles. You stay
              productive without overextending your team. We handle recruiting,
              screening, and placement, so you can focus on day-to-day
              operations.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => navigate("/careers")}
                className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
              >
                Search Jobs
              </button>
              <button
                onClick={() => navigate("/request-employee")}
                className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
              >
                Request Employees
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className=" mt-[-40px] lg:w-5/12 flex justify-center lg:justify-end">
            <img
              src={TempoImg}
              alt="Worker operating machine"
              className=" w-auto h-72 object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Section 2 - What Does Temporary Hire Mean */}
      <div className="relative bg-sky-500 text-white py-16">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Side - Image */}
            <div className="w-full lg:w-5/12 order-2 lg:order-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative w-full overflow-hidden rounded-[3rem] shadow-2xl"
              >
                <img
                  src={temporaryimg}
                  alt="Temporary hire employee"
                  className="w-full h-full object-cover rounded-[3rem]"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-[3rem]" />
              </motion.div>
            </div>

            {/* Right Side - Text */}
            <div className="w-full lg:w-7/12 order-1 lg:order-2 space-y-6 text-center">
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                What Is Temporary Staffing?
              </h2>

              <p className="text-lg opacity-90">
                Temporary staffing gives you options when you need help fast but
                don’t want to commit long term. <br />
                The Advance Group fills open roles with workers ready to step
                in, contribute, and adapt quickly. <br />
                We don’t just fill spaces. Instead, we keep your operation
                moving with qualified, capable hires without slowing down your
                core team.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 - How Our Temporary Staffing Helps You Meet Your Goals */}
      <div className="py-8 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sky-600">
              How Our Temporary Staffing Helps You Meet Your Goals
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Our temporary staffing solutions give you flexibility when
              operations shift, deadlines tighten, or workloads spike. We help
              you keep production steady and offices running by placing
              qualified workers in short-term roles.
            </p>
            <p className="mt-4 text-sky-800 font-xl font-semibold">
              Why do recruiters and candidates turn to us?
            </p>
          </div>

          {/* Features Grid */}
          <section className="py-4 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {temporaryStaffingCards.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-6 bg-white text-center rounded-2xl border border-gray-100
                   shadow-md transition-all duration-300 flex flex-col items-center space-y-4
                   hover:shadow-xl hover:bg-sky-50"
                >
                  <div className="w-16 h-16  rounded-full flex items-center justify-center mb-4 bg-gray-100">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
