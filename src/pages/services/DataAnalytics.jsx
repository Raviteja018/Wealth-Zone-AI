import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, PieChart, Database, Sparkles, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

const DataAnalytics = () => {
  const features = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights with our advanced analytics tools.',
      icon: TrendingUp,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Predictive Analytics',
      description: 'Leverage historical data to forecast trends and make data-driven decisions.',
      icon: BarChart3,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Data Visualization',
      description: 'Interactive dashboards and reports that make complex data easy to understand.',
      icon: PieChart,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Big Data Solutions',
      description: 'Handle large volumes of data efficiently with our scalable big data solutions.',
      icon: Database,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    'Real-time data processing and analysis',
    'Custom dashboard creation',
    'Advanced machine learning models',
    'Data integration from multiple sources',
    'Automated reporting and alerts',
    'Scalable cloud-based solutions'
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Data-Driven Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Data Analytics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlock the power of your data with our comprehensive analytics solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 opacity-10 rounded-bl-full transition-all duration-300 group-hover:scale-150`}></div>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 mb-4`}>
                  <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-16"
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to transform your data into insights?</h2>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">Contact our experts today to learn how our data analytics solutions can benefit your business.</p>
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

export default DataAnalytics;
