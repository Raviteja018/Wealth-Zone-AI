import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PieChart, BarChart3, Layout, Eye, Zap, CheckCircle2, ArrowRight, Sparkles, Presentation, Share2, Smartphone, Layers } from 'lucide-react';

const DataVisualization = () => {
    const features = [
        {
            icon: Layout,
            title: 'Interactive Dashboards',
            description: 'Dynamic, real-time dashboards that allow you to drill down into data and explore insights.'
        },
        {
            icon: Presentation,
            title: 'Custom Reporting',
            description: 'Automated, pixel-perfect reports tailored to your specific business requirements.'
        },
        {
            icon: Share2,
            title: 'Collaborative Tools',
            description: 'Share insights easily across your organization with secure, role-based access.'
        },
        {
            icon: Smartphone,
            title: 'Mobile Responsive',
            description: 'Access your critical data and insights from any device, anywhere, at any time.'
        }
    ];

    const capabilities = [
        'Custom dashboard design',
        'Real-time data streaming',
        'Geospatial mapping',
        'Interactive charts & graphs',
        'Automated PDF reporting',
        'White-label solutions',
        'Data storytelling',
        'Cross-platform compatibility'
    ];

    const useCases = [
        {
            title: 'Executive Reporting',
            description: 'High-level overviews of company performance for C-suite executives and stakeholders.'
        },
        {
            title: 'Marketing Analytics',
            description: 'Visualizing campaign performance, customer journeys, and ROI metrics.'
        },
        {
            title: 'Operational Monitoring',
            description: 'Real-time tracking of production lines, logistics, and supply chain operations.'
        },
        {
            title: 'Financial Dashboards',
            description: 'Visual representation of revenue, expenses, and cash flow for financial planning.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-sky-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-400 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-200 rounded-full mb-6 shadow-sm">
                            <PieChart className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-semibold text-blue-600">Data Analytics</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">Visualization</span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            Turn complex data into clear, compelling visual stories. Empower your team to spot trends, outliers, and opportunities at a glance with our interactive visualization solutions.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Get Started
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/services/data-analytics"
                                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                            >
                                Back to Data Analytics
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Visual Excellence</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Tools designed to make your data beautiful, accessible, and actionable
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-sky-500 rounded-xl flex items-center justify-center mb-4">
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <Zap className="w-8 h-8 text-blue-600" />
                            <h2 className="text-4xl font-bold text-gray-900">Our Capabilities</h2>
                        </div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive visualization services for every data need
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {capabilities.map((capability, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                            >
                                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{capability}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Use Cases</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            See how clear visualization transforms business understanding
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {useCases.map((useCase, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-sky-600">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Visualize Your Success?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Let us help you turn your data into a powerful visual asset for your business.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        >
                            Schedule a Consultation
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default DataVisualization;
