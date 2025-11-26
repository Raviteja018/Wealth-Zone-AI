import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Building2, Sparkles, Calendar } from "lucide-react";

export default function BranchAnnouncement() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show splash after 1 second
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const branches = [
        {
            city: "Vizag",
            fullName: "Visakhapatnam",
            color: "from-blue-500 to-cyan-500",
            icon: "🌊",
            description: "Coastal Tech Hub"
        },
        {
            city: "Bangalore",
            fullName: "Bengaluru",
            color: "from-purple-500 to-pink-500",
            icon: "🚀",
            description: "Silicon Valley of India"
        },
        {
            city: "Vijayawada",
            fullName: "Vijayawada",
            color: "from-orange-500 to-red-500",
            icon: "🏙️",
            description: "Business Capital"
        }
    ];

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                onClick={() => setIsVisible(false)}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="relative max-w-5xl w-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl shadow-2xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Animated Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        <motion.div
                            className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.5, 0.3, 0.5],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all group"
                    >
                        <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
                    </button>

                    {/* Content */}
                    <div className="relative z-10 p-8 sm:p-12">
                        {/* Header */}
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-center mb-8"
                        >
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="inline-block text-6xl mb-4"
                            >
                                🎉
                            </motion.div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                                Exciting News!
                            </h2>
                            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
                                We're expanding across India! New branches opening soon in three major cities.
                            </p>
                        </motion.div>

                        {/* Branch Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {branches.map((branch, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="relative group"
                                >
                                    <div className={`bg-gradient-to-br ${branch.color} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300`}>
                                        {/* Icon */}
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                                            className="text-5xl mb-4"
                                        >
                                            {branch.icon}
                                        </motion.div>

                                        {/* City Name */}
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {branch.city}
                                        </h3>
                                        <p className="text-white/80 text-sm mb-3">{branch.fullName}</p>
                                        <p className="text-white/70 text-xs mb-4">{branch.description}</p>

                                        {/* Status Badge */}
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                                            <Sparkles className="w-3 h-3 text-white" />
                                            <span className="text-xs font-semibold text-white">{branch.status}</span>
                                        </div>

                                        {/* Decorative Corner */}
                                        <div className="absolute top-2 right-2">
                                            <MapPin className="w-5 h-5 text-white/40" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom Info */}
                        {/* <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                                <Calendar className="w-4 h-4 text-blue-300" />
                                <span className="text-sm text-blue-100 font-medium">
                                    Expected Launch: Q2 2025
                                </span>
                            </div>
                            <p className="text-sm text-blue-200 max-w-xl mx-auto">
                                Join us as we bring cutting-edge technology solutions closer to you. Stay tuned for updates!
                            </p>
                        </motion.div> */}

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="text-center mt-8"
                        >
                            <button
                                onClick={() => setIsVisible(false)}
                                className="px-8 py-3 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Got It!
                            </button>
                        </motion.div>
                    </div>

                    {/* Decorative Bottom Wave */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
