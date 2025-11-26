import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, Layout, Smartphone, Eye, Zap, CheckCircle2, ArrowRight, Sparkles, Monitor, PenTool, Layers, MousePointer } from 'lucide-react';

const UIUXDesign = () => {
    const features = [
        {
            icon: Eye,
            title: 'User Research',
            description: 'Deep dive into user behaviors, needs, and motivations to inform design decisions.'
        },
        {
            icon: Layout,
            title: 'Wireframing',
            description: 'Create structural blueprints of your interface to plan layout and functionality.'
        },
        {
            icon: Layers,
            title: 'Prototyping',
            description: 'Interactive prototypes that simulate the final product experience for testing and validation.'
        },
        {
            icon: Palette,
            title: 'Visual Design',
            description: 'Stunning, pixel-perfect interfaces that align with your brand identity and delight users.'
        }
    ];

    const capabilities = [
        'User Journey Mapping',
        'Information Architecture',
        'Design Systems & Style Guides',
        'Interactive Prototyping',
        'Usability Testing',
        'Accessibility (WCAG) Compliance',
        'Mobile-First Design',
        'Micro-interactions & Animation'
    ];

    const useCases = [
        {
            title: 'E-commerce Platforms',
            description: 'Optimized conversion funnels and seamless shopping experiences that drive sales.'
        },
        {
            title: 'SaaS Dashboards',
            description: 'Complex data visualization and workflow management tools made intuitive and easy to use.'
        },
        {
            title: 'Mobile Applications',
            description: 'Native and cross-platform app designs that follow platform-specific guidelines.'
        },
        {
            title: 'Corporate Websites',
            description: 'Professional, engaging websites that communicate brand value and generate leads.'
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
                            <Palette className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-semibold text-blue-600">Design Services</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            UI/UX <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">Design</span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            Create meaningful and relevant experiences for your users. We combine aesthetics with usability to build digital products that people love to use.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Start Design Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/services/software-development"
                                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                            >
                                Back to Development
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Design Process</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A user-centered approach to solving complex design challenges
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
                            <h2 className="text-4xl font-bold text-gray-900">Design Capabilities</h2>
                        </div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive design services from concept to delivery
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Design</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Crafting exceptional experiences across all digital touchpoints
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
                            Ready to Elevate Your User Experience?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Let's create a design that not only looks great but also drives results for your business.
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

export default UIUXDesign;
