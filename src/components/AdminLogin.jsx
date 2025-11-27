import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLock, FaTimes, FaUserShield } from "react-icons/fa";
import { toast } from "react-toastify";

const AdminLogin = ({ isOpen, onClose, onLogin }) => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Hardcoded password for demonstration
        if (password === "admin123") {
            onLogin();
            onClose();
            setPassword("");
            setError(false);
            toast.success("Welcome, Admin!");
        } else {
            setError(true);
            toast.error("Invalid Password");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-gray-900/90 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <FaTimes className="text-xl" />
                        </button>

                        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
                                <FaUserShield className="text-3xl text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Admin Access</h2>
                            <p className="text-blue-100 text-sm mt-1">Please enter your credentials</p>
                        </div>

                        <div className="p-8">
                            <form onSubmit={handleLogin} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                    <div className="relative">
                                        <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                setError(false);
                                            }}
                                            className={`w-full pl-10 pr-4 py-3 border rounded-lg outline-none focus:ring-2 transition-all ${error
                                                    ? "border-red-300 focus:ring-red-200 focus:border-red-500"
                                                    : "border-gray-200 focus:ring-blue-100 focus:border-blue-500"
                                                }`}
                                            placeholder="Enter admin password"
                                            autoFocus
                                        />
                                    </div>
                                    {error && (
                                        <p className="text-red-500 text-xs mt-2 ml-1">Incorrect password. Please try again.</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                                >
                                    Access Dashboard
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AdminLogin;
