import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, CreditCard, TrendingUp, Shield, CheckCircle2, Package, Zap, ArrowRight } from 'lucide-react';

const Ecommerce = () => {
  const services = [
    {
      title: 'Custom Stores',
      description: 'Tailored e-commerce solutions built for your unique business model.',
      icon: ShoppingCart,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Payment Integration',
      description: 'Secure payment gateways with multiple payment options.',
      icon: CreditCard,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Inventory Management',
      description: 'Automated inventory tracking and management systems.',
      icon: Package,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Sales Analytics',
      description: 'Real-time insights to optimize your sales performance.',
      icon: TrendingUp,
      gradient: 'from-blue-500 to-blue-600'
    }
  ];

  const benefits = [
    'Mobile-first responsive design',
    'Secure payment processing',
    'Advanced product filtering',
    'Shopping cart optimization',
    'SEO & marketing tools',
    'Multi-currency support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              E-commerce Development
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build powerful online stores that convert visitors into loyal customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-4`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our E-commerce Solutions?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
          >
            Launch Your Store
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Ecommerce;
