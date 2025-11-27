import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Clock,
  CheckCircle2,
  Target,
  GraduationCap,
  Gift,
  Mail,
  User,
  Upload,
  Send
} from "lucide-react";
import toast from "react-hot-toast";

const jobDetails = {
  "UI/UX Designer – Fresher": {
    title: "UI/UX Designer – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Hyderabad",
    description:
      "We are looking for creative and enthusiastic UI/UX Design Freshers who are passionate about user-centered design...",
    responsibilities: [
      "Collaborate with product managers and developers to understand user requirements.",
      "Assist in creating wireframes, prototypes, user flows, and UI mockups.",
      "Support in designing mobile and web interfaces using Figma, Adobe XD, or similar tools.",
    ],
    qualifications: [
      "Bachelor's degree/diploma in Design, Computer Science, or related fields.",
      "Basic knowledge of UI/UX principles and user-centered design.",
      "Familiar with tools like Figma, Adobe XD, Sketch, or Photoshop.",
    ],
    offers: [
      "Real-time projects and mentorship",
      "Opportunity to build live apps and websites",
      "Flexible and creative working culture",
    ],
  },
  "Python Full-Stack Developer – Fresher": {
    title: "Python Full-Stack Developer – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Hyderabad",
    description:
      "We are seeking a passionate Python Full-Stack Developer to join our team and help build innovative web applications...",
    responsibilities: [
      "Develop and maintain web applications using Python and modern JavaScript frameworks.",
      "Design and implement RESTful APIs and database schemas.",
      "Collaborate with cross-functional teams to define, design, and ship new features.",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field.",
      "Proficiency in Python and at least one Python web framework (Django, Flask, FastAPI).",
      "Experience with frontend technologies like React, Vue, or Angular.",
      "Knowledge of database systems like PostgreSQL or MongoDB.",
    ],
    offers: [
      "Hands-on experience with real projects",
      "Mentorship from experienced developers",
      "Competitive salary and growth opportunities",
    ],
  },
  "Java Full-Stack Developer – Fresher": {
    title: "Java Full-Stack Developer – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Hyderabad",
    description:
      "Join our team as a Java Full-Stack Developer to build robust and scalable enterprise applications...",
    responsibilities: [
      "Develop and maintain Java-based web applications.",
      "Design and implement RESTful services and APIs.",
      "Work with frontend technologies to create responsive user interfaces.",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field.",
      "Strong knowledge of Java and Spring framework.",
      "Experience with frontend technologies like React or Angular.",
      "Understanding of database systems and SQL.",
    ],
    offers: [
      "Comprehensive training program",
      "Work on enterprise-level applications",
      "Career growth opportunities",
    ],
  },
  "Cyber Security – Fresher": {
    title: "Cyber Security – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Hyderabad",
    description:
      "Join our cybersecurity team to protect our systems and data from evolving threats. Learn from industry experts and gain hands-on experience in security operations...",
    responsibilities: [
      "Monitor security systems and respond to security incidents.",
      "Assist in vulnerability assessments and penetration testing.",
      "Help implement security policies and best practices.",
      "Participate in security awareness training programs.",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science, Cybersecurity, or related field.",
      "Basic understanding of network security, cryptography, and security protocols.",
      "Familiarity with security tools like Wireshark, Nmap, or Metasploit.",
      "Knowledge of operating systems (Windows, Linux) and networking concepts.",
    ],
    offers: [
      "Comprehensive cybersecurity training",
      "Hands-on experience with security tools",
      "Career growth in a high-demand field",
    ],
  },
  "React JS Developer – Fresher": {
    title: "React JS Developer – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Hyderabad",
    description:
      "We're looking for passionate React JS developers to build modern, responsive web applications. Work with cutting-edge technologies and create amazing user experiences...",
    responsibilities: [
      "Develop new user-facing features using React.js.",
      "Build reusable components and front-end libraries.",
      "Translate designs and wireframes into high-quality code.",
      "Optimize components for maximum performance across devices.",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field.",
      "Strong proficiency in JavaScript, including ES6+ syntax.",
      "Experience with React.js and its core principles.",
      "Familiarity with RESTful APIs and modern front-end build tools.",
    ],
    offers: [
      "Work on modern web applications",
      "Collaborative development environment",
      "Continuous learning opportunities",
    ],
  },
  "Digital Marketing – Fresher": {
    title: "Digital Marketing – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Hyderabad",
    description:
      "Launch your digital marketing career with us! Learn SEO, social media marketing, content strategy, and analytics while working on real campaigns...",
    responsibilities: [
      "Assist in planning and executing digital marketing campaigns.",
      "Manage social media accounts and create engaging content.",
      "Conduct keyword research and optimize content for SEO.",
      "Analyze campaign performance and prepare reports.",
    ],
    qualifications: [
      "Bachelor's degree in Marketing, Communications, or related field.",
      "Basic understanding of digital marketing concepts and tools.",
      "Familiarity with social media platforms and Google Analytics.",
      "Strong written and verbal communication skills.",
    ],
    offers: [
      "Hands-on experience with digital marketing tools",
      "Exposure to diverse marketing campaigns",
      "Professional development opportunities",
    ],
  },
  "MERN Stack Developer – Fresher": {
    title: "MERN Stack Developer – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Hyderabad",
    description:
      "Join our team as a MERN Stack Developer and build full-stack web applications using MongoDB, Express.js, React, and Node.js. Work on exciting projects and grow your skills...",
    responsibilities: [
      "Develop and maintain web applications using the MERN stack.",
      "Design and implement RESTful APIs with Node.js and Express.",
      "Build responsive user interfaces with React.js.",
      "Work with MongoDB for database design and management.",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field.",
      "Proficiency in JavaScript and understanding of the MERN stack.",
      "Experience with MongoDB, Express.js, React, and Node.js.",
      "Knowledge of version control systems like Git.",
    ],
    offers: [
      "Work on full-stack projects",
      "Mentorship from experienced developers",
      "Competitive compensation and benefits",
    ],
  },
  "AWS Cloud Engineer – Fresher": {
    title: "AWS Cloud Engineer – Fresher",
    company: "Wealth Zone Technologies",
    type: "Full-Time",
    location: "Hyderabad",
    description:
      "Start your cloud computing career with AWS! Learn to design, deploy, and manage scalable cloud infrastructure while working with industry-leading technologies...",
    responsibilities: [
      "Assist in deploying and managing applications on AWS cloud.",
      "Help configure and maintain AWS services (EC2, S3, RDS, Lambda).",
      "Support cloud infrastructure monitoring and optimization.",
      "Participate in implementing DevOps practices and CI/CD pipelines.",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field.",
      "Basic understanding of cloud computing concepts and AWS services.",
      "Familiarity with Linux/Unix systems and scripting (Python, Bash).",
      "Knowledge of networking, security, and database fundamentals.",
    ],
    offers: [
      "AWS certification support and training",
      "Hands-on experience with cloud technologies",
      "Career growth in cloud computing",
    ],
  },
  "UI/UX Designer – Intern": {
    title: "UI/UX Designer – Intern",
    company: "Wealth Zone Technologies",
    type: "Internship",
    location: "Hyderabad",
    description:
      "Gain valuable experience as a UI/UX Design Intern and work on real projects...",
    responsibilities: [
      "Assist in creating user flows, wireframes, and prototypes.",
      "Participate in user research and usability testing.",
      "Collaborate with the design team on various projects.",
    ],
    qualifications: [
      "Currently pursuing a degree in Design or related field.",
      "Basic understanding of design tools like Figma or Adobe XD.",
      "Passion for user-centered design principles.",
    ],
    offers: [
      "Hands-on experience with real projects",
      "Mentorship from senior designers",
      "Certificate upon completion",
    ],
  },
  "Python Full-Stack Developer – Intern": {
    title: "Python Full-Stack Developer – Intern",
    company: "Wealth Zone Technologies",
    type: "Internship",
    location: "Hyderabad",
    description:
      "Kickstart your career as a Python Full-Stack Developer with our internship program...",
    responsibilities: [
      "Assist in developing web applications using Python and JavaScript.",
      "Work with APIs and databases.",
      "Participate in code reviews and team meetings.",
    ],
    qualifications: [
      "Currently pursuing a degree in Computer Science or related field.",
      "Basic knowledge of Python and web development.",
      "Eagerness to learn and grow as a developer.",
    ],
    offers: [
      "Real-world project experience",
      "Mentorship from experienced developers",
      "Potential for full-time employment",
    ],
  },
  "Java Full-Stack Developer – Intern": {
    title: "Java Full-Stack Developer – Intern",
    company: "Wealth Zone Technologies",
    type: "Internship",
    location: "Hyderabad",
    description:
      "Join our Java internship program to gain hands-on experience in full-stack development...",
    responsibilities: [
      "Assist in developing Java-based applications.",
      "Work with Spring framework and frontend technologies.",
      "Participate in the full software development lifecycle.",
    ],
    qualifications: [
      "Currently pursuing a degree in Computer Science or related field.",
      "Basic understanding of Java programming.",
      "Interest in full-stack development.",
    ],
    offers: [
      "Practical experience with Java technologies",
      "Guidance from senior developers",
      "Networking opportunities",
    ],
  },
};

export default function JobDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const jobTitle = location.state?.jobTitle || "UI/UX Designer – Fresher";
  const job = jobDetails[jobTitle] || jobDetails["UI/UX Designer – Fresher"];

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    role: jobTitle,
    experienceType: '',
    experienceYears: '',
    resume: null
  });

  // Error and loading states
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Clear experience years if switching to fresher
    if (name === 'experienceType' && value === 'fresher') {
      setFormData(prev => ({
        ...prev,
        experienceYears: ''
      }));
    }
  };

  // Handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          resume: 'File size must be less than 5MB'
        }));
        return;
      }

      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          resume: 'Only PDF, DOC, and DOCX files are allowed'
        }));
        return;
      }

      setFormData(prev => ({
        ...prev,
        resume: file
      }));

      // Clear error
      if (errors.resume) {
        setErrors(prev => ({
          ...prev,
          resume: ''
        }));
      }
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }

    // Experience type validation
    if (!formData.experienceType) {
      newErrors.experienceType = 'Please select experience type';
    }

    // Experience years validation (only if experienced)
    if (formData.experienceType === 'experience') {
      if (!formData.experienceYears) {
        newErrors.experienceYears = 'Years of experience is required';
      } else if (formData.experienceYears < 1 || formData.experienceYears > 50) {
        newErrors.experienceYears = 'Please enter a valid number of years (1-50)';
      }
    }

    // Resume validation
    if (!formData.resume) {
      newErrors.resume = 'Please upload your resume';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Prepare form data for API
      const submitData = new FormData();
      submitData.append('fullName', formData.fullName);
      submitData.append('email', formData.email);
      submitData.append('phoneNumber', formData.phoneNumber);
      submitData.append('role', formData.role);
      submitData.append('experienceType', formData.experienceType);

      // Only add experience years if user is experienced
      if (formData.experienceType === 'experience') {
        submitData.append('experienceYears', formData.experienceYears);
      }

      submitData.append('resume', formData.resume);

      // Submit to API
      const response = await fetch('http://localhost:8080/api/jobs/apply', {
        method: 'POST',
        body: submitData
      });

      if (response.ok) {
        
        toast.success('✅ Application submitted successfully! We will review your application and get back to you within 3-5 business days.');

        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          role: jobTitle,
          experienceType: '',
          experienceYears: '',
          resume: null
        });

        // Reset file input
        document.getElementById('resume-upload').value = '';
      } else {
        const errorData = await response.json();
        alert('❌ Failed to submit application. Please try again.');
        console.error('Submission error:', errorData);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('❌ An error occurred. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Careers
          </button>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                <Briefcase className="w-4 h-4" />
                {job.type}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {job.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Posted Today</span>
                </div>
              </div>
            </div>

            <motion.button
              onClick={() => document.getElementById('apply-form').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.02 }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              Apply Now
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Job Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* About the Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Role</h2>
              <p className="text-gray-600 leading-relaxed">{job.description}</p>
            </motion.div>

            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Responsibilities</h2>
              </div>
              <ul className="space-y-3">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Qualifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Qualifications</h2>
              </div>
              <ul className="space-y-3">
                {job.qualifications.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What We Offer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Gift className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">What We Offer</h2>
              </div>
              <ul className="space-y-3">
                {job.offers.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Application Form */}
          <div className="lg:col-span-1">
            <motion.div
              id="apply-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-md sticky top-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply for this Position</h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${errors.fullName ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                        }`}
                    />
                  </div>
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                        }`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      placeholder="9876543210"
                      maxLength="10"
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${errors.phoneNumber ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                        }`}
                    />
                  </div>
                  {errors.phoneNumber && <p className="text-xs text-red-500 mt-1">{errors.phoneNumber}</p>}
                </div>

                {/* Experience Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Experience Type <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      name="experienceType"
                      value={formData.experienceType}
                      onChange={handleChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-colors appearance-none cursor-pointer ${errors.experienceType ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                        }`}
                    >
                      <option value="">Select Experience Type</option>
                      <option value="fresher">Fresher</option>
                      <option value="experience">Experienced</option>
                    </select>
                  </div>
                  {errors.experienceType && <p className="text-xs text-red-500 mt-1">{errors.experienceType}</p>}
                </div>

                {/* Experience Years - Conditional */}
                {formData.experienceType === 'experience' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Years of Experience <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        name="experienceYears"
                        value={formData.experienceYears}
                        onChange={handleChange}
                        required={formData.experienceType === 'experience'}
                        placeholder="e.g., 2"
                        min="1"
                        max="50"
                        className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${errors.experienceYears ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                          }`}
                      />
                    </div>
                    {errors.experienceYears && <p className="text-xs text-red-500 mt-1">{errors.experienceYears}</p>}
                  </motion.div>
                )}

                {/* Upload Resume */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload Resume <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="hidden"
                      id="resume-upload"
                    />
                    <label
                      htmlFor="resume-upload"
                      className={`flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed rounded-xl cursor-pointer transition-all ${errors.resume
                        ? 'border-red-500 hover:border-red-600 hover:bg-red-50'
                        : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                        }`}
                    >
                      <Upload className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">
                        {formData.resume ? formData.resume.name : 'Choose file or drag here'}
                      </span>
                    </label>
                    <p className="text-xs text-gray-500 mt-2">PDF, DOC, DOCX (Max 5MB)</p>
                    {errors.resume && <p className="text-xs text-red-500 mt-1">{errors.resume}</p>}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 font-bold py-4 rounded-xl shadow-md transition-all duration-300 ${loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg text-white'
                    }`}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Note:</strong> We'll review your application and get back to you within 3-5 business days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
