
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, Target, Brain, Zap, CheckCircle2, ArrowRight, Sparkles, LineChart, Shield, Activity, Search } from 'lucide-react';

const PredictiveAnalytics = () => {
    const features = [
        {
            icon: Brain,
            title: 'Machine Learning Models',
            description: 'Custom ML models trained on your data to forecast future trends and behaviors.'
        },
        {
            icon: Activity,
            title: 'Risk Assessment',
            description: 'Identify potential risks and opportunities before they happen with predictive modeling.'
        },
        {
            icon: Target,
            title: 'Demand Forecasting',
            description: 'Optimize inventory and resource allocation by accurately predicting future demand.'
        },
        {
            icon: Search,
            title: 'Pattern Recognition',
            description: 'Detect complex patterns and anomalies in large datasets automatically.'
        }
    ];

    const capabilities = [
        'Time series forecasting',
        'Customer churn prediction',
        'Sales forecasting',
        'Risk modeling & scoring',
        'Predictive maintenance',
        'Fraud detection',
        'Market trend analysis',
        'Dynamic pricing optimization'
    ];

    const useCases = [
        {
            title: 'Retail & E-commerce',
            description: 'Forecast inventory needs and personalize product recommendations for customers.'
        },
        {
            title: 'Financial Services',
            description: 'Detect fraudulent transactions and assess credit risk with high accuracy.'
        },
        {
            title: 'Manufacturing',
            description: 'Predict equipment failures before they occur to minimize downtime.'
        },
        {
            title: 'Healthcare',
            description: 'Predict patient outcomes and optimize hospital resource utilization.'
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
                            <BarChart3 className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-semibold text-blue-600">Data Analytics</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Predictive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">Analytics</span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            Stop guessing and start knowing. Leverage the power of historical data and machine learning to forecast trends, identify risks, and make proactive decisions.
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Future-Ready Features</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Advanced predictive capabilities to keep your business ahead of the curve
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
                            Comprehensive predictive modeling solutions tailored to your industry
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
                            See how predictive analytics drives value across different sectors
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
                            Ready to Predict the Future?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Start making proactive decisions today with our advanced predictive analytics solutions.
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

export default PredictiveAnalytics;
