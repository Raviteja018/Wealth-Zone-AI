import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, CheckCircle2, ArrowRight } from 'lucide-react';

const RevenueCycle = () => {
    const features = [
        'Claims Submission & Management',
        'Accounts Receivable Follow-up',
        'Payment Posting & Reconciliation',
        'Patient Billing & Collections',
        'Denial Management & Appeals',
        'Revenue Integrity Analysis'
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto relative text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-cyan-200 rounded-full mb-6 shadow-sm">
                            <Activity className="w-5 h-5 text-cyan-600" />
                            <span className="text-sm font-semibold text-cyan-600">Financial Performance</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Revenue <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Cycle</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            Optimize your entire revenue cycle from patient access to final payment with our end-to-end solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Maximize Financial Health</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Our revenue cycle management services are designed to accelerate cash flow, reduce administrative burden, and improve financial outcomes. We handle the complexities of billing so you can focus on patient care.
                            </p>
                            <div className="grid gap-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl transform rotate-3"></div>
                            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Revenue Cycle" className="relative rounded-3xl shadow-xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Accelerate Your Cash Flow</h2>
                        <p className="text-cyan-100 mb-8 text-lg">Streamline your billing processes and improve your bottom line today.</p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg">
                                Get Started <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/services/bpo-services/medical-coding" className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-cyan-600 transition-all duration-300">
                                Back to Medical Coding
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default RevenueCycle;
