import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaUser, FaEnvelope, FaPhone, FaPaperPlane, FaArrowLeft,
    FaGraduationCap, FaCalendarAlt, FaLaptopCode, FaSchool,
    FaMapMarkerAlt, FaUsers, FaFileUpload
} from "react-icons/fa";
import { toast } from "react-toastify";

// API Configuration
const API_ENDPOINTS = {
    CANDIDATE: 'http://localhost:8080/api/candidate/submit',
    INSTITUTION: 'http://localhost:8080/api/student/submit'
};

// Constants
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const CURRENT_YEAR = new Date().getFullYear();
const YEAR_RANGE = Array.from({ length: CURRENT_YEAR - 2020 + 3 }, (_, i) => 2020 + i);

// Dropdown Options
const QUALIFICATIONS = [
    "B.Tech/B.E", "BCA", "MCA", "M.Tech/M.E",
    "BSc Computer Science", "MSc Computer Science", "Diploma", "Other"
];

const COURSES = [
    "Full Stack Development", "Frontend Development", "Backend Development",
    "AI/ML (Artificial Intelligence & Machine Learning)", "Data Science",
    "Cloud Computing", "DevOps", "Mobile App Development", "Cybersecurity", "Other"
];

// Reusable Input Component
const FormInput = ({ icon: Icon, name, type = "text", placeholder, value, onChange, required = false, error }) => (
    <div className="relative group">
        <Icon className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${error ? 'text-red-500' : 'text-gray-400 group-focus-within:text-blue-600'}`} />
        <input
            type={type}
            name={name}
            required={required}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg text-gray-800 placeholder-gray-400 outline-none transition-all text-sm ${error
                ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                : 'border-gray-200 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600'
                }`}
        />
        {error && <span className="text-xs text-red-500 mt-1 absolute -bottom-5 left-0">{error}</span>}
    </div>
);

// Reusable Select Component
const FormSelect = ({ icon: Icon, name, placeholder, value, onChange, options, required = false, error }) => (
    <div className="relative group">
        <Icon className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${error ? 'text-red-500' : 'text-gray-400 group-focus-within:text-blue-600'}`} />
        <select
            name={name}
            required={required}
            value={value}
            onChange={onChange}
            className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg text-gray-800 outline-none transition-all text-sm appearance-none cursor-pointer ${error
                ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                : 'border-gray-200 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600'
                }`}
        >
            <option value="" disabled>{placeholder}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
        {error && <span className="text-xs text-red-500 mt-1 absolute -bottom-5 left-0">{error}</span>}
    </div>
);

const EnquiryForm = ({ type, category, onBack, onSuccess }) => {
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", message: "",
        qualification: "", yearOfPassing: "", courseInterest: "", resume: null,
        schoolName: "", address: "", studentCount: "", currentSoftware: ""
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) newErrors.name = "Name is required";

        // Phone validation (10 digits only)
        const phoneRegex = /^\d{10}$/;
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Phone must be exactly 10 digits";
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (category === "internship") {
            if (!formData.qualification) newErrors.qualification = "Qualification is required";
            if (!formData.yearOfPassing) newErrors.yearOfPassing = "Year is required";
            if (!formData.courseInterest) newErrors.courseInterest = "Course is required";
        } else {
            if (!formData.schoolName.trim()) newErrors.schoolName = "School name is required";
            if (!formData.address.trim()) newErrors.address = "Address is required";

            // Student count validation (numbers only)
            if (formData.studentCount && isNaN(formData.studentCount)) {
                newErrors.studentCount = "Must be a number";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }

        if (type === 'file') {
            const file = files[0];
            if (file && file.size > MAX_FILE_SIZE) {
                toast.error("File size should be less than 5MB");
                return;
            }
            setFormData({ ...formData, [name]: file });
        } else {
            // For phone number, only allow digits
            if (name === 'phone' || name === 'studentCount') {
                if (value && !/^\d*$/.test(value)) return;
            }
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error("Please fix the errors in the form");
            return;
        }

        setLoading(true);

        try {
            let response;

            if (category === "internship") {
                const submitData = new FormData();
                submitData.append('candidateName', formData.name);
                submitData.append('email', formData.email);
                submitData.append('mobileNumber', formData.phone);
                submitData.append('additionalDetails', formData.message);
                submitData.append('qualification', formData.qualification);
                submitData.append('yearOfPassing', formData.yearOfPassing);
                submitData.append('courseInterested', formData.courseInterest);
                submitData.append('keySkills', formData.message);
                if (formData.resume) submitData.append('resume', formData.resume);

                response = await fetch(API_ENDPOINTS.CANDIDATE, {
                    method: 'POST',
                    body: submitData
                });
            } else {
                // School / Institution Submission (JSON)
                const payload = {
                    contactPersonName: formData.name,
                    mobileNumber: formData.phone,
                    emailAddress: formData.email,
                    schoolName: formData.schoolName,
                    schoolAddress: formData.address,
                    approxNoOfStudents: parseInt(formData.studentCount) || 0,
                    currentSoftwareUsed: formData.currentSoftware || "None",
                    trainingNeeds: formData.message || "Not specified"
                };

                response = await fetch(API_ENDPOINTS.INSTITUTION, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
            }

            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(`API Error: ${response.status} - ${errorData || response.statusText}`);
            }


            toast.success("Application submitted successfully!");
            if (onSuccess) onSuccess();

            // Reset form
            setFormData({
                name: "", email: "", phone: "", message: "",
                qualification: "", yearOfPassing: "", courseInterest: "", resume: null,
                schoolName: "", address: "", studentCount: "", currentSoftware: ""
            });

            toast.success("Application submitted successfully!");

        } catch (error) {
            console.error("Submission error:", error);
            toast.error(`Failed to submit: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-3xl  z-10 mx-auto overflow-y-auto max-h-[70vh] p-4 no-scrollbar"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <button
                    onClick={onBack}
                    className="flex items-center text-gray-500 hover:text-teal-600 transition-colors text-sm font-medium group"
                >
                    <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back
                </button>
                <h2 className="text-xl font-bold text-gray-800 text-right border-b-2 border-blue-600 pb-1">{type}</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Common Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormInput
                        icon={FaUser}
                        name="name"
                        placeholder={category === "internship" ? "Candidate Name" : "Contact Person Name"}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        error={errors.name}
                    />
                    <FormInput
                        icon={FaPhone}
                        name="phone"
                        type="tel"
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        error={errors.phone}
                    />
                </div>

                <FormInput
                    icon={FaEnvelope}
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    error={errors.email}
                />

                {/* Internship Fields */}
                {category === "internship" && (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormSelect
                                icon={FaGraduationCap}
                                name="qualification"
                                placeholder="Select Qualification"
                                value={formData.qualification}
                                onChange={handleChange}
                                options={QUALIFICATIONS}
                                required
                                error={errors.qualification}
                            />
                            <FormSelect
                                icon={FaCalendarAlt}
                                name="yearOfPassing"
                                placeholder="Year of Passing"
                                value={formData.yearOfPassing}
                                onChange={handleChange}
                                options={YEAR_RANGE}
                                required
                                error={errors.yearOfPassing}
                            />
                        </div>

                        <FormSelect
                            icon={FaLaptopCode}
                            name="courseInterest"
                            placeholder="Course Interested In"
                            value={formData.courseInterest}
                            onChange={handleChange}
                            options={COURSES}
                            required
                            error={errors.courseInterest}
                        />

                        <div className="relative group">
                            <FaFileUpload className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                            <input
                                type="file"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none transition-all text-sm cursor-pointer"
                            />
                            <span className="text-xs text-gray-500 mt-1 block pl-10">Upload Resume (PDF, DOC, DOCX - Max 5MB)</span>
                        </div>
                    </>
                )}

                {/* Training Fields */}
                {category === "training" && (
                    <>
                        <FormInput
                            icon={FaSchool}
                            name="schoolName"
                            placeholder="School / Institution Name"
                            value={formData.schoolName}
                            onChange={handleChange}
                            required
                            error={errors.schoolName}
                        />
                        <FormInput
                            icon={FaMapMarkerAlt}
                            name="address"
                            placeholder="School Address (City, Area)"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            error={errors.address}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormInput
                                icon={FaUsers}
                                name="studentCount"
                                placeholder="Approx. No. of Students"
                                value={formData.studentCount}
                                onChange={handleChange}
                                error={errors.studentCount}
                            />
                            <FormInput
                                icon={FaLaptopCode}
                                name="currentSoftware"
                                placeholder="Current Software Used (if any)"
                                value={formData.currentSoftware}
                                onChange={handleChange}
                            />
                        </div>
                    </>
                )}

                {/* Message Textarea */}
                <textarea
                    name="message"
                    rows="3"
                    placeholder="Additional Message (Optional)"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none text-sm"
                />

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900'
                        } transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2`}
                >
                    {loading ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        <>
                            <FaPaperPlane className="text-sm" />
                            Submit Application
                        </>
                    )}
                </motion.button>
            </form>
        </motion.div>
    );
};

export default EnquiryForm;
