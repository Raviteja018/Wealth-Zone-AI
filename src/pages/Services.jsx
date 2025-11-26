import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BarChart3, Code, Cloud, TestTube, Bot, Headphones, Phone, TrendingUp, Megaphone, ArrowRight, Sparkles, CheckCircle2, Target, Rocket, Users, Award, Zap, FileText, Shield, MapPin } from 'lucide-react';
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
    iconColor: 'text-blue-600',
    category: 'development'
  },
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs. From web applications to enterprise systems, we build scalable and robust software.',
    link: '/services/software-development',
    image: SoftwareDevelopment,
    icon: Code,
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-100',
    iconColor: 'text-purple-600',
    category: 'development'
  },
  {
    title: 'IT Consulting',
    description: 'Expert IT consulting services to help you navigate the complex technology landscape and implement effective IT strategies.',
    link: '/services/it-consulting',
    image: ITConsulting,
    icon: TrendingUp,
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    category: 'consulting'
  },
  {
    title: 'Cloud Services',
    description: 'Comprehensive cloud solutions including migration, management, and optimization for your business in the cloud.',
    link: '/services/cloud-services',
    image: CloudServices,
    icon: Cloud,
    gradient: 'from-sky-500 to-blue-500',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
    category: 'development'
  },
  {
    title: 'Software Testing',
    description: 'Ensure your software is bug-free and performs at its best with our comprehensive testing services.',
    link: '/services/software-testing',
    image: SoftwareTesting,
    icon: TestTube,
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    category: 'development'
  },
  {
    title: 'AI Agents',
    description: 'Intelligent AI solutions that automate processes, enhance decision-making, and improve customer experiences.',
    link: '/services/ai-agents',
    image: AIAgents,
    icon: Bot,
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    category: 'development'
  },
  {
    title: 'BPO Services',
    description: 'Outsource your business processes to improve efficiency and reduce operational costs.',
    link: '/services/bpo-services',
    image: BPOServices,
    icon: Headphones,
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    category: 'support'
  },
  {
    title: 'Customer Support',
    description: '24/7 customer support solutions to ensure your customers always receive exceptional service.',
    link: '/services/customer-support',
    image: CustomerSupport,
    icon: Phone,
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    category: 'support'
  },
  {
    title: 'Marketing Services',
    description: 'Comprehensive digital marketing strategies to grow your brand and reach your target audience effectively.',
    link: '/services/marketing-services',
    image: MarketingServices,
    icon: Megaphone,
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    category: 'consulting'
  },
  {
    title: 'Medical Coding',
    description: 'Accurate and efficient medical coding services to streamline healthcare documentation, billing, and compliance with industry standards.',
    link: '/services/medical-coding',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    icon: FileText,
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    category: 'support'
  },
  {
    title: 'Content Moderation',
    description: 'Professional content moderation services to maintain online community standards, filter inappropriate content, and ensure a safe digital environment.',
    link: '/services/content-moderation',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    icon: Shield,
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    category: 'support'
  },
  {
    title: 'Google Mapping',
    description: 'Custom Google Maps integration and location-based services to enhance your business visibility and provide better user experiences.',
    link: '/services/google-mapping',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    icon: MapPin,
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    category: 'development'
  }
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'development', label: 'Development' },
    { id: 'consulting', label: 'Consulting' },
    { id: 'support', label: 'Support' }
  ];

  // Filter services based on active category
  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean Split Layout */}
      <section className="relative bg-white pt-16 pb-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                <span className="text-sm font-semibold text-blue-600">Services Overview</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Comprehensive
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  IT Solutions
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                End-to-end technology services designed to accelerate your business growth and digital transformation journey.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { number: '200+', label: 'Projects', icon: Rocket },
                  { number: '50+', label: 'Experts', icon: Users },
                  { number: '98%', label: 'Satisfaction', icon: Award },
                  { number: '24/7', label: 'Support', icon: CheckCircle2 }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <stat.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{stat.number}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={() => document.getElementById('services-grid').scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  Explore Services
                </button>
              </div>
            </motion.div>

            {/* Right Side - Service Icons Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-4 gap-4">
                {services.slice(0, 12).map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                    className="group relative"
                  >
                    <Link
                      to={service.link}
                      className="block p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Business-Focused',
                description: 'Solutions designed to meet your specific business objectives and drive measurable results.',
                color: 'bg-blue-500'
              },
              {
                icon: Rocket,
                title: 'Fast Delivery',
                description: 'Agile methodologies ensure rapid deployment without compromising quality.',
                color: 'bg-purple-500'
              },
              {
                icon: Award,
                title: 'Proven Expertise',
                description: 'Industry-certified professionals with years of hands-on experience.',
                color: 'bg-cyan-500'
              },
              {
                icon: Users,
                title: 'Dedicated Support',
                description: '24/7 technical support and maintenance to keep your systems running smoothly.',
                color: 'bg-indigo-500'
              },
              {
                icon: Zap,
                title: 'Latest Technology',
                description: 'Cutting-edge tools and frameworks to build future-ready solutions.',
                color: 'bg-teal-500'
              },
              {
                icon: CheckCircle2,
                title: 'Quality Assured',
                description: 'Rigorous testing and quality control processes for flawless delivery.',
                color: 'bg-emerald-500'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-grid" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Comprehensive IT solutions to power your digital transformation
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <Link to={service.link} className="block h-full">
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/placeholder-service.jpg';
                      }}
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>

                    {/* Floating icon badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`${service.iconBg} p-3 rounded-xl shadow-lg backdrop-blur-sm bg-opacity-95 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                        <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss how our services can help you achieve your goals. Get in touch with our experts today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/request-employee"
                className="px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
