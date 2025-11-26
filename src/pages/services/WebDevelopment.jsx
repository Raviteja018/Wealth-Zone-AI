import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Code, Database, Zap, CheckCircle2, ArrowRight, Sparkles, Layout, Server, Smartphone, ShoppingCart } from 'lucide-react';

const WebDevelopment = () => {
  const features = [
    {
      icon: Layout,
      title: 'Frontend Development',
      description: 'Responsive, interactive user interfaces built with modern frameworks like React and Next.js.'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Robust, scalable server-side solutions using Node.js, Python, and cloud technologies.'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Efficient data modeling and management with SQL and NoSQL databases.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Blazing fast load times and optimized core web vitals for better SEO and user experience.'
    }
  ];

  const capabilities = [
    'Custom Web Application Development',
    'Progressive Web Apps (PWA)',
    'E-commerce Solutions',
    'Content Management Systems (CMS)',
    'API Development & Integration',
    'Cloud Infrastructure & DevOps',
    'SaaS Product Development',
    'Website Maintenance & Support'
  ];

  const useCases = [
    {
      title: 'E-commerce Platforms',
      description: 'Scalable online stores with secure payment gateways and inventory management.'
    },
    {
      title: 'Enterprise Portals',
      description: 'Internal tools and dashboards for managing business operations and data.'
    },
    {
      title: 'Social Networks',
      description: 'Community platforms with real-time messaging, feeds, and user profiles.'
    },
    {
      title: 'SaaS Applications',
      description: 'Subscription-based software products with multi-tenancy and subscription management.'
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
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Web Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">Development</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Build your digital presence with high-performance, scalable, and secure web applications tailored to your business goals.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Full-Stack Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development services covering every layer of your application
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
              From simple websites to complex web applications, we have the skills to deliver
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Build</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored web solutions for diverse business needs
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
              Ready to Launch Your Website?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's build a web presence that drives growth and engages your audience.
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

export default WebDevelopment;
