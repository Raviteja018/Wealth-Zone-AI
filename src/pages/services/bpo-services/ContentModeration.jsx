import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Eye, Filter, Activity, Sparkles, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

const ContentModeration = () => {
    const navigate = useNavigate();
    const services = [
        {
            title: 'Content Review',
            description: 'Professional moderation of user-generated content across platforms.',
            icon: Eye,
            gradient: 'from-blue-500 to-indigo-500',
            iconBg: 'bg-blue-50',
            iconColor: 'text-blue-600',
            link: '/services/bpo-services/content-moderation/content-review'
        },
        {
            title: 'AI Moderation',
            description: 'Advanced AI tools for automated content filtering and flagging.',
            icon: Shield,
            gradient: 'from-sky-500 to-blue-500',
            iconBg: 'bg-sky-50',
            iconColor: 'text-sky-600',
            link: '/services/bpo-services/content-moderation/ai-moderation'
        },
        {
            title: 'Policy Development',
            description: 'Custom community guidelines and moderation policies.',
            icon: Filter,
            gradient: 'from-indigo-500 to-violet-500',
            iconBg: 'bg-indigo-50',
            iconColor: 'text-indigo-600',
            link: '/services/bpo-services/content-moderation/policy-development'
        },
        {
            title: 'Real-time Monitoring',
            description: '24/7 monitoring of your digital platforms.',
            icon: Activity,
            gradient: 'from-cyan-500 to-blue-600',
            iconBg: 'bg-cyan-50',
            iconColor: 'text-cyan-600',
            link: '/services/bpo-services/content-moderation/real-time-monitoring'
        }
    ];

    const benefits = [
        'Expert human moderators',
        'AI-powered automation',
        '24/7 coverage',
        'Multilingual support',
        'Custom moderation rules',
        'Detailed reporting'
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-indigo-200 rounded-full mb-6 shadow-sm">
                            <Shield className="w-5 h-5 text-indigo-600" />
                            <span className="text-sm font-semibold text-indigo-600">Community Safety</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Moderation</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            Keep your online community safe, engaging, and brand-appropriate with our expert moderation services.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Get Started
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/services/bpo-services"
                                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
                            >
                                Back to BPO Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    whileHover={{ y: -5 }}
                                    onClick={() => navigate(service.link)}
                                >
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-bl-full transition-all duration-300 group-hover:scale-150`}></div>
                                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-4`}>
                                        <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                                    <div className="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all">
                                        <span>Learn More</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Zap className="w-6 h-6 text-indigo-600" />
                            <h2 className="text-3xl font-bold text-gray-900">Key Benefits</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                >
                                    <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-blue-600">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Protect Your Community?</h2>
                        <p className="text-indigo-100 mb-8 text-lg max-w-2xl mx-auto">Let us help you maintain a safe and positive online environment for your users.</p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContentModeration;
