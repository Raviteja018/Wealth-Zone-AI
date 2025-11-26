import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Megaphone, Target, Share2, Mail, Sparkles, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

const MarketingServices = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: 'Digital Advertising',
      description: 'Run high-ROI campaigns on Google, Meta, LinkedIn, and more.',
      icon: Target,
      gradient: 'from-pink-500 to-rose-500',
      link: '/services/marketing-services/digital-advertising'
    },
    {
      title: 'SEO & Content Marketing',
      description: 'Boost organic traffic with data-driven SEO and compelling content.',
      icon: Megaphone,
      gradient: 'from-purple-500 to-pink-500',
      link: '/services/marketing-services/seo-content-marketing'
    },
    {
      title: 'Social Media Management',
      description: 'Grow your brand presence with engaging, consistent social content.',
      icon: Share2,
      gradient: 'from-blue-500 to-cyan-500',
      link: '/services/marketing-services/social-media-management'
    },
    {
      title: 'Email Marketing',
      description: 'Convert leads and retain customers with personalized email campaigns.',
      icon: Mail,
      gradient: 'from-orange-500 to-red-500',
      link: '/services/marketing-services/email-marketing'
    }
  ];

  const benefits = [
    'Data-driven strategies',
    'Increased brand awareness',
    'Higher conversion rates',
    'Measurable ROI',
    'Multi-channel campaigns',
    'Expert marketing team'
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-200 rounded-full mb-6 shadow-sm">
            <Megaphone className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Growth Marketing</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Marketing Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Grow your brand, attract customers, and increase revenue with strategic marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                onClick={() => navigate(service.link)}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-bl-full transition-all duration-300 group-hover:scale-150`}></div>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-4`}>
                  <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="absolute inset-0 bg-black opacity-5"></div>
          <div className="relative z-10">
            <Sparkles className="w-12 h-12 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Ready to Accelerate Your Growth</h2>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">Get a custom marketing strategy that delivers measurable results and ROI.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketingServices;