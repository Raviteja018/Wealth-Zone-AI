import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowRight, Search, Filter, Radio } from "lucide-react";

export default function Projects() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Extract unique categories (if any) or just use a default list for now
    // Since the current data doesn't have explicit categories, we'll just stick to search for now
    // or infer them if we add them later. For now, let's keep it simple and elegant.

    const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6 tracking-wide uppercase">
                            Our Portfolio
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Innovating with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Purpose</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Explore our diverse range of projects where we combine strategy, creativity, and technology to deliver world-class digital experiences.
                        </p>
                    </motion.div>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="mt-10 max-w-xl mx-auto relative"
                    >
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-lg shadow-blue-900/5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-700 placeholder-gray-400"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-24 px-6 sm:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    {filteredProjects.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No projects found matching your search.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col h-full"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden">
                                        <div className="absolute top-4 right-4 z-30">
                                            <div className="flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full shadow-sm border border-white/20">
                                                <span className="relative flex h-2.5 w-2.5">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                                </span>
                                                <span className="text-xs font-bold text-gray-700 tracking-wide">LIVE</span>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors z-10" />
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {/* Overlay with Technologies */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.slice(0, 3).map((tech, idx) => (
                                                    <span key={idx} className="text-xs font-medium text-white bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg">
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies.length > 3 && (
                                                    <span className="text-xs font-medium text-white bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg">
                                                        +{project.technologies.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {project.name}
                                        </h3>
                                        <p className="text-gray-600 mb-6 line-clamp-3 flex-grow leading-relaxed">
                                            {project.shortDescription}
                                        </p>

                                        <button
                                            onClick={() => navigate(`/projects/${project.slug}`)}
                                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-50 hover:bg-blue-600 text-gray-900 hover:text-white font-semibold rounded-xl transition-all duration-300 group/btn"
                                        >
                                            View Project
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
