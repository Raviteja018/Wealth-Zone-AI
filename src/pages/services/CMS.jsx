import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layers, Edit, Globe, Settings, CheckCircle2, Users, Zap, ArrowRight } from 'lucide-react';

const CMS = () => {
  const services = [
    {
      title: 'Easy Management',
      description: 'Intuitive content management systems for effortless updates.',
      icon: Edit,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Multi-User Access',
      description: 'Manage permissions and roles for your team members.',
      icon: Users,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Custom Integration',
      description: 'Seamless integration with your existing tools and systems.',
      icon: Settings,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Fast Deployment',
      description: 'Quick setup and launch of your content management system.',
      icon: Zap,
      gradient: 'from-blue-500 to-blue-600'
    }
  ];

  const benefits = [
    'WordPress, Drupal, or custom CMS',
    'User-friendly admin interface',
    'SEO optimization tools',
    'Media management',
    'Content scheduling',
    'Training & documentation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              CMS Websites & Integration
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empower your team with easy-to-use content management solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-4`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our CMS Solutions?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-center">
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
            Get Started with CMS
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CMS;
