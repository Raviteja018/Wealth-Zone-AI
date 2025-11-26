import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, ArrowRight } from 'lucide-react';

const AIModeration = () => {
    const features = [
        'Automated Text Filtering',
        'Computer Vision Analysis',
        'Sentiment Analysis',
        'Spam Detection Algorithms',
        'Real-time Blocking',
        'Scalable Processing'
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="relative bg-gradient-to-br from-sky-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto relative text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-sky-200 rounded-full mb-6 shadow-sm">
                            <Shield className="w-5 h-5 text-sky-600" />
                            <span className="text-sm font-semibold text-sky-600">Automated Safety</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">Moderation</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            Leverage advanced artificial intelligence to filter and flag content at scale, instantly.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Speed and Scalability</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Our AI moderation tools process millions of data points in real-time, automatically blocking harmful content and flagging ambiguous items for human review. This hybrid approach ensures maximum efficiency and safety.
                            </p>
                            <div className="grid gap-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl transform rotate-3"></div>
                            <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="AI Moderation" className="relative rounded-3xl shadow-xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-blue-600">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Scale With Confidence</h2>
                        <p className="text-sky-100 mb-8 text-lg">Handle traffic spikes effortlessly with our AI-powered solutions.</p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg">
                                Get Started <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/services/bpo-services/content-moderation" className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-sky-600 transition-all duration-300">
                                Back to Content Moderation
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AIModeration;
