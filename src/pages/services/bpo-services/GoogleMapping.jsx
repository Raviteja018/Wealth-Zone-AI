import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Navigation, Globe, Layers, Sparkles, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

const GoogleMapping = () => {
    const navigate = useNavigate();
    const services = [
        {
            title: 'Custom Maps',
            description: 'Tailored map solutions integrated with your business data.',
            icon: MapPin,
            gradient: 'from-blue-500 to-indigo-500',
            iconBg: 'bg-blue-50',
            iconColor: 'text-blue-600',
            link: '/services/bpo-services/google-mapping/custom-maps'
        },
        {
            title: 'Location Services',
            description: 'Advanced geolocation and routing capabilities.',
            icon: Navigation,
            gradient: 'from-sky-500 to-blue-500',
            iconBg: 'bg-sky-50',
            iconColor: 'text-sky-600',
            link: '/services/bpo-services/google-mapping/location-services'
        },
        {
            title: 'GIS Integration',
            description: 'Seamless integration with Geographic Information Systems.',
            icon: Globe,
            gradient: 'from-indigo-500 to-violet-500',
            iconBg: 'bg-indigo-50',
            iconColor: 'text-indigo-600',
            link: '/services/bpo-services/google-mapping/gis-integration'
        },
        {
            title: 'Data Visualization',
            description: 'Interactive map-based data visualization tools.',
            icon: Layers,
            gradient: 'from-cyan-500 to-blue-600',
            iconBg: 'bg-cyan-50',
            iconColor: 'text-cyan-600',
            link: '/services/bpo-services/google-mapping/data-visualization'
        }
    ];

    const benefits = [
        'Enhanced user experience',
        'Location-based insights',
        'Improved operational efficiency',
        'Custom branding',
        'Mobile optimization',
        'Real-time updates'
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
                            <MapPin className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-semibold text-blue-600">Location Intelligence</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Google <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">Mapping</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            Leverage the power of Google Maps Platform to transform your business operations and customer experience.
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
                                to="/services/bpo-services"
                                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
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
                                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
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
                        className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-8 mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Zap className="w-6 h-6 text-blue-600" />
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
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
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
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Map Your Success?</h2>
                        <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">Let's build powerful location-based solutions that drive engagement and growth.</p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
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

export default GoogleMapping;
