import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaCheckCircle, FaTimes, FaArrowRight, FaChevronLeft, FaDownload } from "react-icons/fa";
import EnquiryForm from "./EnquiryForm";

const SplashScreen = ({ isOpen, onClose }) => {
    const [selectedOption, setSelectedOption] = useState(null); // "internship" | "training" | null
    const [isSuccess, setIsSuccess] = useState(false);

    const handleClose = () => {
        setIsSuccess(false);
        setSelectedOption(null);
        onClose();
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleBack = () => {
        setSelectedOption(null);
    };

    const handleSuccess = () => {
        setIsSuccess(true);
        setTimeout(() => {
            handleClose();
        }, 3000); // Closes after 3 seconds
    };

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 250,
                damping: 20
            }
        },
        exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
    };

    // Determine the current view for transitions
    const currentViewKey = isSuccess ? "success" : selectedOption ? "form" : "selection";

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900/80 backdrop-blur-sm p-4"
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] border-t-8 border-blue-600"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-30 p-2 bg-white/70 backdrop-blur-sm hover:bg-white rounded-full text-gray-500 hover:text-gray-800 transition-all duration-300 shadow-md"
                            aria-label="Close Modal"
                        >
                            <FaTimes className="text-xl" />
                        </button>

                        {/* Main Content Area */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-10 no-scrollbar">
                            <AnimatePresence mode="wait">
                                {currentViewKey === "success" && (
                                    // Success State
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex items-center justify-center min-h-[300px] text-center"
                                    >
                                        <div className="py-8">
                                            <motion.div
                                                initial={{ scale: 0, rotate: 180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ type: "spring", stiffness: 150, damping: 12 }}
                                                className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                                            >
                                                <FaCheckCircle className="text-4xl" />
                                            </motion.div>
                                            <h2 className="text-3xl font-extrabold text-gray-800 mb-3 tracking-tight">Enquiry Sent!</h2>
                                            <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto">
                                                Thank you for reaching out. A team member will contact you within 24 hours.
                                            </p>
                                        </div>
                                    </motion.div>
                                )}

                                {currentViewKey === "form" && (
                                    // Enquiry Form State
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <EnquiryForm
                                            type={selectedOption === "internship" ? "Internship Application" : "School Software Training"}
                                            category={selectedOption}
                                            onBack={handleBack}
                                            onSuccess={handleSuccess}
                                        />
                                    </motion.div>
                                )}

                                {currentViewKey === "selection" && (
                                    // Initial Selection State 
                                    <motion.div
                                        key="selection"
                                        initial={{ opacity: 0, x: -100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 100 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Introduction/Hero Section */}
                                        <div className="text-center md:text-left mb-8">
                                            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 tracking-tight leading-snug">
                                                Welcome to <span className="text-blue-600">Wealth Zone AI</span>
                                            </h2>
                                            <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto md:mx-0">
                                                Choose a program to accelerate your professional journey.
                                            </p>
                                        </div>

                                        {/* Selection Cards */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                            {/* Training Card */}
                                            <OptionCard
                                                icon={FaLaptopCode}
                                                title="STEM & Robotics Education"
                                                description="Empower educators and staff with cutting-edge skills."
                                                color="purple"
                                                onClick={() => handleOptionSelect("training")}
                                                showDownload={true}
                                            />

                                             {/* Internship Card */}
                                            <OptionCard
                                                icon={FaGraduationCap}
                                                title="Professional Internship"
                                                description="Real-world experience to kickstart your career in AI/Tech."
                                                color="blue"
                                                onClick={() => handleOptionSelect("internship")}
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Helper component for cleaner option cards
const OptionCard = ({ icon: Icon, title, description, color, onClick, showDownload }) => {
    const baseColor = color === 'blue' ? 'text-blue-600' : 'text-purple-600';
    const bgColor = color === 'blue' ? 'bg-blue-50/50' : 'bg-purple-50/50';
    const hoverBorder = color === 'blue' ? 'hover:border-blue-400' : 'hover:border-purple-400';
    const shadow = 'shadow-md hover:shadow-lg transition-all duration-300';

    const handleDownloadPDF = (e) => {
        e.stopPropagation(); 

        const link = document.createElement('a');
        link.href = '/STEM project.pdf'; 
        link.download = 'STEM project.pdf';
        link.target = '_blank'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.div
            whileHover={{ y: -3, scale: 1.01, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`cursor-pointer flex items-start p-4 sm:p-5 rounded-xl border border-gray-200 ${bgColor} ${hoverBorder} ${shadow} relative`}
        >
            <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mr-3 sm:mr-4 ${baseColor} bg-white border border-dashed border-gray-300`}>
                <Icon className="text-xl sm:text-2xl" />
            </div>
            <div className="flex-grow">
                <h3 className={`text-base sm:text-lg font-bold text-gray-800 mb-1`}>
                    {title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 leading-relaxed">
                    {description}
                </p>
                <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-2 text-sm font-semibold ${baseColor} transition-all`}>
                        Select Program <FaArrowRight className="text-xs ml-1" />
                    </span>
                    {showDownload && (
                        <motion.button
                            onClick={handleDownloadPDF}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-1 text-xs bg-purple-100 text-purple-700 px-3 py-1.5 rounded-lg hover:bg-purple-200 transition-colors font-medium"
                            title="Download Brochure"
                        >
                            <FaDownload className="text-xs" />
                            <span className="hidden sm:inline">Download PDF</span>
                        </motion.button>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default SplashScreen;