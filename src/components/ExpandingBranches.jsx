import React from "react";
import { motion } from "framer-motion";
import { MapPin, Building2, Sparkles, Calendar, TrendingUp } from "lucide-react";

export default function ExpandingBranches() {
    const branches = [
        {
            city: "Vizag",
            fullName: "Visakhapatnam",
            color: "from-blue-50 to-cyan-50",
            borderColor: "border-blue-200",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&q=80",
            description: "Coastal Tech Hub"
        },
        {
            city: "Bangalore",
            fullName: "Bengaluru",
            color: "from-purple-50 to-pink-50",
            borderColor: "border-purple-200",
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600",
            image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80",
            description: "Silicon Valley of India"
        },
        {
            city: "Vijayawada",
            fullName: "Vijayawada",
            color: "from-orange-50 to-red-50",
            borderColor: "border-orange-200",
            iconBg: "bg-orange-100",
            iconColor: "text-orange-600",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
            description: "Business Capital"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-4">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm">Expanding Nationwide</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Our Branches 
                        {/* <span className="text-blue-600">Opening Soon</span> */}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We're expanding across India to bring cutting-edge technology solutions closer to you
                    </p>
                </motion.div>

                {/* Branch Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {branches.map((branch, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Glassmorphism Card */}
                            <div className={`relative bg-gradient-to-br ${branch.color} backdrop-blur-lg border-2 ${branch.borderColor} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}>
                                {/* City Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={branch.image}
                                        alt={branch.city}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                                    {/* Status Badge on Image */}
                                    <div className="absolute top-4 right-4">
                                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${branch.iconBg} ${branch.iconColor} backdrop-blur-sm`}>
                                            <Sparkles className="w-3 h-3" />
                                            <span className="text-xs font-bold">{branch.status}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                        {branch.city}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3">{branch.fullName}</p>
                                    <p className="text-gray-500 text-xs font-medium mb-4">{branch.description}</p>

                                    {/* Location Icon */}
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-sm">Location scouting in progress</span>
                                    </div>
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Info Card */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="bg-white/60 backdrop-blur-lg border-2 border-blue-100 rounded-2xl p-8 shadow-lg">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                                    <Building2 className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Total Branches</h4>
                                    <p className="text-gray-600">4 Cities Nationwide</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-center text-gray-600 text-sm">
                                🎉 Join us as we expand our presence across India. Stay tuned for updates and career opportunities!
                            </p>
                        </div>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
}
