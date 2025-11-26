import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle2, ArrowRight } from 'lucide-react';

const GISIntegration = () => {
    const features = [
        'Spatial Data Analysis',
        'Layered Map Visualization',
        'Asset Tracking & Management',
        'Demographic Mapping',
        'Environmental Monitoring',
        'Urban Planning Tools'
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="relative bg-gradient-to-br from-indigo-50 via-white to-violet-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto relative text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-indigo-200 rounded-full mb-6 shadow-sm">
                            <Globe className="w-5 h-5 text-indigo-600" />
                            <span className="text-sm font-semibold text-indigo-600">Geospatial Intelligence</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            GIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Integration</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            Seamlessly integrate Geographic Information Systems (GIS) with Google Maps for powerful spatial analysis.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Unlock Spatial Insights</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Combine the familiarity of Google Maps with the analytical power of GIS. We help organizations visualize complex data sets, track assets, and make informed decisions based on geographic context.
                            </p>
                            <div className="grid gap-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-3xl transform rotate-3"></div>
                            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="GIS Integration" className="relative rounded-3xl shadow-xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-violet-600">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Visualize Your World</h2>
                        <p className="text-indigo-100 mb-8 text-lg">Transform complex data into actionable geographic insights.</p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg">
                                Get Started <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/services/bpo-services/google-mapping" className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300">
                                Back to Google Mapping
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default GISIntegration;
