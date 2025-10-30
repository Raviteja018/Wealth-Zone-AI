import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BarChart3, Code, Cloud, TestTube, Bot, Headphones, Phone, TrendingUp, Megaphone, ArrowRight, Sparkles } from 'lucide-react';
import SoftwareDevelopment from '../assets/services/software-dev.jpg';
import ITConsulting from '../assets/services/it-consulting.jpg';
import CloudServices from '../assets/services/cloud-services.jpg';
import SoftwareTesting from '../assets/services/software-testing.jpg';
import AIAgents from '../assets/services/ai-agents.jpg';
import BPOServices from '../assets/services/bpo-services.jpg';
import CustomerSupport from '../assets/services/customer-support.jpg';
import DataAnalytics from '../assets/services/data-analytics.jpg';
import MarketingServices from '../assets/services/arketing-services.jpg';

const services = [
  {
    title: 'Data Analytics',
    description: 'Harness the power of data with our advanced analytics solutions. Transform raw data into actionable insights that drive business growth.',
    link: '/services/data-analytics',
    image: DataAnalytics,
    icon: BarChart3,
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs. From web applications to enterprise systems, we build scalable and robust software.',
    link: '/services/software-development',
    image: SoftwareDevelopment,
    icon: Code,
    gradient: 'from-purple-500 to-pink-500',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    title: 'IT Consulting',
    description: 'Expert IT consulting services to help you navigate the complex technology landscape and implement effective IT strategies.',
    link: '/services/it-consulting',
    image: ITConsulting,
    icon: TrendingUp,
    gradient: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600'
  },
  {
    title: 'Cloud Services',
    description: 'Comprehensive cloud solutions including migration, management, and optimization for your business in the cloud.',
    link: '/services/cloud-services',
    image: CloudServices,
    icon: Cloud,
    gradient: 'from-sky-500 to-blue-500',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600'
  },
  {
    title: 'Software Testing',
    description: 'Ensure your software is bug-free and performs at its best with our comprehensive testing services.',
    link: '/services/software-testing',
    image: SoftwareTesting,
    icon: TestTube,
    gradient: 'from-orange-500 to-red-500',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600'
  },
  {
    title: 'AI Agents',
    description: 'Intelligent AI solutions that automate processes, enhance decision-making, and improve customer experiences.',
    link: '/services/ai-agents',
    image: AIAgents,
    icon: Bot,
    gradient: 'from-violet-500 to-purple-500',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600'
  },
  {
    title: 'BPO Services',
    description: 'Outsource your business processes to improve efficiency and reduce operational costs.',
    link: '/services/bpo-services',
    image: BPOServices,
    icon: Headphones,
    gradient: 'from-indigo-500 to-blue-500',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600'
  },
  {
    title: 'Customer Support',
    description: '24/7 customer support solutions to ensure your customers always receive exceptional service.',
    link: '/services/customer-support',
    image: CustomerSupport,
    icon: Phone,
    gradient: 'from-green-500 to-emerald-500',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    title: 'Marketing Services',
    description: 'Comprehensive digital marketing strategies to grow your brand and reach your target audience effectively.',
    link: '/services/marketing-services',
    image: MarketingServices,
    icon: Megaphone,
    gradient: 'from-pink-500 to-rose-500',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Premium Solutions</span>
          </div> */}
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link to={service.link} className="block h-full group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/placeholder-service.jpg';
                      }}
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    
                    {/* Floating icon badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`${service.iconBg} p-3 rounded-xl shadow-lg backdrop-blur-sm bg-opacity-90 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                      </div>
                    </div>
                    
                    {/* Sparkle effect on hover */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="w-5 h-5 text-white animate-pulse" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${service.gradient} transition-all duration-300">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                    
                    {/* Enhanced CTA button */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${service.gradient} bg-opacity-10 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} font-semibold group-hover:shadow-md transition-all duration-300`}>
                      <span>Explore Service</span>
                      <ArrowRight className={`w-4 h-4 ${service.iconColor} transform group-hover:translate-x-2 transition-transform duration-300`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
