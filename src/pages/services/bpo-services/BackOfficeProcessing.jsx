import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Database, ClipboardList, ShieldCheck, ArrowRight, Sparkles, CheckCircle2, Zap, Layers, FolderOpen, FileCheck, Server } from 'lucide-react';

const BackOfficeProcessing = () => {
    const features = [
        {
            icon: Database,
            title: 'Data Entry & Management',
            description: 'Accurate and efficient data processing to keep your records up-to-date.'
        },
        {
            icon: ClipboardList,
            title: 'Invoice Processing',
            description: 'Streamline your accounts payable and receivable with automated workflows.'
        },
        {
            icon: ShieldCheck,
            title: 'Compliance & Auditing',
            description: 'Ensure your operations meet regulatory standards with thorough checks.'
        },
        {
            icon: Layers,
            title: 'Document Digitization',
            description: 'Convert physical records into searchable digital formats for easy access.'
        }
    ];

    const capabilities = [
        'Data Entry Services',
        'Payroll Processing',
        'Claims Processing',
        'Order Management',
        'Inventory Management',
        'Market Research',
        'Content Moderation',
        'Transcription Services'
    ];

    const useCases = [
        {
            title: 'Financial Services',
            description: 'Processing loan applications and verifying customer documents.'
        },
        {
            title: 'Retail & Logistics',
            description: 'Managing inventory records and processing shipping manifests.'
        },
        {
            title: 'Healthcare',
            description: 'Digitizing patient records and processing insurance claims.'
        },
        {
            title: 'Legal Firms',
            description: 'Transcribing legal proceedings and organizing case files.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-sky-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-sky-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-sky-200 rounded-full mb-6 shadow-sm">
                            <FileText className="w-5 h-5 text-sky-600" />
                            <span className="text-sm font-semibold text-sky-600">Operational Efficiency</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Back Office <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">Processing</span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            Optimize your workflow by outsourcing time-consuming administrative tasks.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 text-white font-semibold rounded-xl hover:bg-sky-700 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Streamline Operations
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/services/bpo-services"
                                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-sky-600 hover:text-sky-600 transition-all duration-300"
                            >
                                Back to BPO Services
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Focus on Core Business</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Let us handle the paperwork while you focus on growth and strategy.
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
                                className="group bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                                <div className="flex items-center gap-2 text-sky-600 font-semibold group-hover:gap-3 transition-all">
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
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
                            <Zap className="w-8 h-8 text-sky-600" />
                            <h2 className="text-4xl font-bold text-gray-900">Our Capabilities</h2>
                        </div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Reliable back-office solutions for smooth operations
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
                                <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Efficiency in Action</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Supporting diverse industries with precision and speed
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
                                className="bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-sky-200 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-blue-600">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Optimize?
                        </h2>
                        <p className="text-xl text-sky-100 mb-8 leading-relaxed">
                            Reduce overhead and improve accuracy with our back-office services.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-600 font-bold rounded-xl hover:bg-gray-50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
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

export default BackOfficeProcessing;
