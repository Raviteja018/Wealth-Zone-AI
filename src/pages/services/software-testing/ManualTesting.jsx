import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MousePointer, CheckCircle2, ArrowRight, Sparkles, ClipboardCheck, Bug, Eye, UserCheck, Search, FileText, Target, Zap } from 'lucide-react';

const ManualTesting = () => {
    const features = [
        {
            icon: ClipboardCheck,
            title: 'Functional Testing',
            description: 'Verifying that each function of the software application operates in conformance with the requirement specification.'
        },
        {
            icon: UserCheck,
            title: 'Usability Testing',
            description: 'Evaluating a product by testing it on users to ensure it is intuitive and easy to use.'
        },
        {
            icon: Bug,
            title: 'Exploratory Testing',
            description: 'Simultaneous learning, test design, and test execution to uncover defects that are hard to find.'
        },
        {
            icon: Eye,
            title: 'Visual Testing',
            description: 'Checking the graphical user interface to ensure it looks correct across different devices and browsers.'
        }
    ];

    const capabilities = [
        'Test Case Creation & Execution',
        'Defect Tracking & Reporting',
        'Regression Testing',
        'Compatibility Testing',
        'Localization Testing',
        'Accessibility Testing (WCAG)',
        'User Acceptance Testing (UAT) Support',
        'End-to-End Testing'
    ];

    const useCases = [
        {
            title: 'New Product Launch',
            description: 'Ensuring a flawless user experience for the first release of a new application.'
        },
        {
            title: 'UI/UX Redesign',
            description: 'Verifying that design changes have been implemented correctly and do not break existing functionality.'
        },
        {
            title: 'Complex User Flows',
            description: 'Testing intricate business logic that requires human intuition and judgment.'
        },
        {
            title: 'Mobile App Testing',
            description: 'Validating app behavior on a wide range of real devices and operating systems.'
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
                            <MousePointer className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-semibold text-blue-600">Human-Centric Quality</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Manual <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">Testing</span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            Meticulous human verification to ensure your software is intuitive, bug-free, and ready for your users.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Start Testing
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/services/software-testing"
                                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                            >
                                Back to Testing Services
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Manual Testing?</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The human touch is essential for understanding user experience and finding complex edge cases.
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
                            Comprehensive manual testing services tailored to your needs
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Testing in Action</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Scenarios where manual testing delivers the most value
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
                            Ready to Polish Your Product?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Let our expert testers ensure your software is ready for the real world.
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

export default ManualTesting;
