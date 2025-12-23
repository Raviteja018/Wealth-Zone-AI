import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaCheckCircle, FaTimes, FaArrowRight, FaDownload, FaRocket, FaUserGraduate } from "react-icons/fa";
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
        }, 3000);
    };

    // Animation Variants
    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.2 } }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 0.5
            }
        },
        exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } }
    };

    const contentVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
        exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
    };

    const currentViewKey = isSuccess ? "success" : selectedOption ? "form" : "selection";

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-hidden">
                    {/* Backdrop with Blur */}
                    <motion.div
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        onClick={handleClose}
                    />

                    {/* Main Modal Container */}
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative w-full max-w-5xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50 flex flex-col md:flex-row max-h-[90vh]"
                        style={{
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.3) inset"
                        }}
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[100px]" />
                            <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-indigo-500/10 rounded-full blur-[100px]" />
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-50 p-2 bg-white/50 hover:bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 transition-all duration-300 shadow-sm border border-white/50 group"
                        >
                            <FaTimes className="text-lg group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        {/* Left Side: Visual/Branding (Hidden on mobile for space) */}
                        <div className="hidden md:flex w-1/3 bg-blue-900 relative flex-col justify-between p-8 text-white z-10">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold tracking-tight mb-2">Wealth Zone Group AI</h3>
                                <div className="h-1 w-12 bg-white/50 rounded-full"></div>
                            </div>

                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <FaRocket className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">Accelerate Growth</p>
                                        <p className="text-xs text-blue-200">Fast-track your career path</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                        <FaUserGraduate className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">Expert Mentorship</p>
                                        <p className="text-xs text-blue-200">Learn from industry leaders</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 text-xs text-blue-300/60">
                                © 2024 Wealth Zone Group AI. All rights reserved.
                            </div>
                        </div>

                        {/* Right Side: Content */}
                        <div className="flex-1 relative flex flex-col h-full bg-white/40 no-scrollbar">
                            <div className="flex-1 p-5 sm:p-10 pb-20">
                                <AnimatePresence mode="wait">
                                    {currentViewKey === "success" && (
                                        <motion.div
                                            key="success"
                                            variants={contentVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="h-full flex flex-col items-center justify-center text-center"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                                className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-200"
                                            >
                                                <FaCheckCircle className="text-5xl" />
                                            </motion.div>
                                            <h2 className="text-3xl font-bold text-gray-800 mb-2">All Set!</h2>
                                            <p className="text-gray-600 max-w-xs mx-auto">
                                                Your enquiry has been submitted successfully. We'll be in touch shortly!
                                            </p>
                                        </motion.div>
                                    )}

                                    {currentViewKey === "form" && (
                                        <motion.div
                                            key="form"
                                            variants={contentVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
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
                                        <motion.div
                                            key="selection"
                                            variants={contentVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="h-full flex flex-col justify-center"
                                        >
                                            <div className="text-center md:text-left mb-8">
                                                <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 mb-3">
                                                    Choose Your Path
                                                </h2>
                                                <p className="text-gray-500 text-lg">
                                                    Select a program to get started with us.
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-1 gap-5">
                                                <OptionCard
                                                    icon={FaLaptopCode}
                                                    title="STEM & Robotics Education"
                                                    description="Empower educators and staff with cutting-edge skills in robotics and AI."
                                                    color="purple"
                                                    onClick={() => handleOptionSelect("training")}
                                                    showDownload={true}
                                                />

                                                <OptionCard
                                                    icon={FaGraduationCap}
                                                    title="Professional Internship"
                                                    description="Gain real-world experience and kickstart your career in the tech industry."
                                                    color="blue"
                                                    onClick={() => handleOptionSelect("internship")}
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const OptionCard = ({ icon: Icon, title, description, color, onClick, showDownload }) => {
    const isBlue = color === 'blue';
    const gradient = isBlue
        ? 'from-slate-700 to-slate-900'
        : 'from-emerald-800 to-teal-950';

    const bgHover = isBlue
        ? 'group-hover:bg-blue-50/80'
        : 'group-hover:bg-purple-50/80';

    const borderHover = isBlue
        ? 'group-hover:border-blue-200'
        : 'group-hover:border-purple-200';

    const textGradient = isBlue
        ? 'group-hover:text-slate-800'
        : 'group-hover:text-emerald-900';

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
            onClick={onClick}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden ${borderHover} ${bgHover}`}
        >
            <div className="flex items-start gap-5 relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="text-2xl" />
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <h3 className={`text-xl font-bold text-gray-800 mb-1 transition-colors ${textGradient}`}>
                            {title}
                        </h3>
                        {showDownload && (
                            <motion.button
                                onClick={handleDownloadPDF}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 bg-gray-100 hover:bg-purple-100 text-gray-500 hover:text-purple-600 rounded-lg transition-colors"
                                title="Download Brochure"
                            >
                                <FaDownload className="text-sm" />
                            </motion.button>
                        )}
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mb-3 group-hover:text-gray-600">
                        {description}
                    </p>

                    <div className="flex items-center text-sm font-semibold text-gray-400 group-hover:text-gray-800 transition-colors">
                        <span>Get Started</span>
                        <FaArrowRight className="ml-2 text-xs transform group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>

            {/* Decorative Gradient Blob on Hover */}
            <div className={`absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 blur-2xl rounded-full transition-opacity duration-500 pointer-events-none`} />
        </motion.div>
    );
};

export default SplashScreen;