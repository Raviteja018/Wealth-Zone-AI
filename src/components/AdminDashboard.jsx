import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaTrash, FaSearch, FaFileDownload } from "react-icons/fa";
import { toast } from "react-toastify";

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("internship");
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("enquiry_data") || "[]");
        setData(storedData);
    }, []);

    const filteredData = data.filter(item =>
        item.category === activeTab &&
        (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const exportToCSV = () => {
        if (filteredData.length === 0) {
            toast.warning("No data to export.");
            return;
        }

        const headers = activeTab === "internship"
            ? ["Date", "Name", "Email", "Phone", "Qualification", "Year", "Course", "Skills", "Message"]
            : ["Date", "Contact Person", "Email", "Phone", "School Name", "Address", "Students", "Software", "Message"];

        const csvContent = [
            headers.join(","),
            ...filteredData.map(item => {
                const row = activeTab === "internship"
                    ? [item.date, item.name, item.email, item.phone, item.qualification, item.yearOfPassing, item.courseInterest, item.skills, item.message]
                    : [item.date, item.name, item.email, item.phone, item.schoolName, item.address, item.studentCount, item.currentSoftware, item.message];
                return row.map(cell => `"${cell || ""}"`).join(",");
            })
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `${activeTab}_applications_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                        <p className="text-gray-500 mt-1">Manage and view submitted applications</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={exportToCSV}
                            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow transition-colors"
                        >
                            <FaFileDownload /> Export CSV
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-xl shadow-sm p-1 mb-6 inline-flex">
                    <button
                        onClick={() => setActiveTab("internship")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === "internship"
                                ? "bg-blue-600 text-white shadow-md"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                    >
                        <FaGraduationCap /> Internships
                        <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs ml-2">
                            {data.filter(i => i.category === "internship").length}
                        </span>
                    </button>
                    <button
                        onClick={() => setActiveTab("training")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === "training"
                                ? "bg-purple-600 text-white shadow-md"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                    >
                        <FaLaptopCode /> School Training
                        <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs ml-2">
                            {data.filter(i => i.category === "training").length}
                        </span>
                    </button>
                </div>

                {/* Search */}
                <div className="relative mb-6">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
                    />
                </div>

                {/* Data Table */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
                                    <th className="px-6 py-4">Date</th>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Contact</th>
                                    {activeTab === "internship" ? (
                                        <>
                                            <th className="px-6 py-4">Qualification</th>
                                            <th className="px-6 py-4">Course</th>
                                            <th className="px-6 py-4">Skills</th>
                                        </>
                                    ) : (
                                        <>
                                            <th className="px-6 py-4">School</th>
                                            <th className="px-6 py-4">Address</th>
                                            <th className="px-6 py-4">Details</th>
                                        </>
                                    )}
                                    <th className="px-6 py-4">Message</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredData.length > 0 ? (
                                    filteredData.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                {item.date.split(',')[0]}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-gray-900">{item.name}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-900">{item.email}</div>
                                                <div className="text-xs text-gray-500">{item.phone}</div>
                                            </td>
                                            {activeTab === "internship" ? (
                                                <>
                                                    <td className="px-6 py-4 text-sm text-gray-700">
                                                        {item.qualification} <span className="text-gray-400">({item.yearOfPassing})</span>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-blue-600 font-medium">
                                                        {item.courseInterest}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                                                        {item.skills}
                                                    </td>
                                                </>
                                            ) : (
                                                <>
                                                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                                                        {item.schoolName}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                                                        {item.address}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-600">
                                                        <div>{item.studentCount} Students</div>
                                                        <div className="text-xs text-gray-400">{item.currentSoftware || "No software"}</div>
                                                    </td>
                                                </>
                                            )}
                                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate" title={item.message}>
                                                {item.message || "-"}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="px-6 py-12 text-center text-gray-400">
                                            <div className="flex flex-col items-center justify-center">
                                                <FaSearch className="text-4xl mb-3 opacity-20" />
                                                <p>No applications found.</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
