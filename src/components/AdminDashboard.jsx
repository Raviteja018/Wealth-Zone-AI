import React, { useState, useEffect } from "react";
import { FaGraduationCap, FaLaptopCode, FaTrash, FaSearch, FaFileDownload, FaDownload, FaBriefcase } from "react-icons/fa";
import { toast } from "react-toastify";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("internship");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    // Delete Modal State
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);

            // Fetch Candidates
            let candidates = [];
            try {
                const res = await fetch("http://localhost:8080/api/candidate/allCandidates");
                if (res.ok) {
                    const data = await res.json();
                    candidates = Array.isArray(data) ? data : [];
                } else {
                    console.error("Failed to fetch candidates:", res.status);
                    toast.error(`Failed to fetch candidates: ${res.status}`);
                }
            } catch (e) {
                console.error("Error fetching candidates:", e);
            }

            // Fetch Students
            let students = [];
            try {
                const res = await fetch("http://localhost:8080/api/student/all");
                if (res.ok) {
                    const data = await res.json();
                    students = Array.isArray(data) ? data : [];
                } else {
                    console.error("Failed to fetch students:", res.status);
                    toast.error(`Failed to fetch students: ${res.status}`);
                }
            } catch (e) {
                console.error("Error fetching students:", e);
            }

            // Fetch Jobs (Placeholder)
            let jobs = [];
            try {
                const res = await fetch("http://localhost:8080/api/jobs/getAll");
                if (res.ok) {
                    const data = await res.json();
                    jobs = Array.isArray(data) ? data : [];
                } else {
                    // Silent fail for now as endpoint might not exist
                    console.warn("Failed to fetch jobs:", res.status);
                }
            } catch (e) {
                console.warn("Error fetching jobs:", e);
            }

            // Normalize Data
            const normalizedCandidates = candidates.map(item => ({
                ...item,
                category: "internship",
                id: item.id,
                name: item.candidateName,
                email: item.email,
                phone: item.mobileNumber,
                message: item.additionalDetails,
                qualification: item.qualification,
                yearOfPassing: item.yearOfPassing,
                courseInterest: item.courseInterested,
                resume: item.resumePath
            }));

            const normalizedStudents = students.map(item => ({
                ...item,
                category: "training",
                // Map API fields to UI fields
                id: item.id,
                name: item.contactPersonName,
                email: item.emailAddress,
                phone: item.mobileNumber,
                message: item.trainingNeeds,
                // Specific fields
                schoolName: item.schoolName,
                address: item.schoolAddress,
                studentCount: item.approxNoOfStudents,
                currentSoftware: item.currentSoftwareUsed
            }));

            const normalizedJobs = jobs.map(item => ({
                ...item,
                category: "jobs",
                id: item.id,
                name: item.fullName,
                email: item.email,
                phone: item.phoneNumber,
                message: item.message,
                position: item.role,
                resume: item.resumePath
            }));

            setData([...normalizedCandidates, ...normalizedStudents, ...normalizedJobs]);
        } catch (error) {
            console.error("Error in fetchData:", error);
            toast.error("Failed to load dashboard data");
        } finally {
            setLoading(false);
        }
    };

    const handleDownloadResume = async (id, name) => {
        try {
            const response = await fetch(
                `http://localhost:8080/api/candidate/resume/candidateId?id=${id}`,
                {
                    method: "GET",
                    headers: {
                        "Accept": "application/pdf"
                    }
                }
            );

            // Get raw response text
            const rawText = await response.clone().text();
            console.log("RAW RESPONSE TEXT:", rawText);

            const blob = await response.blob();
            console.log("Blob type:", blob.type);

            if (blob.type !== "application/pdf") {
                toast.error("Invalid PDF file from server");
                return;
            }

            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${name.replace(/\s+/g, "_")}_Resume.pdf`;
            a.click();
            window.URL.revokeObjectURL(url);

        } catch (error) {
            console.log(error);
            toast.error("Failed to download resume");
        }
    };

    const confirmDelete = (item) => {
        setItemToDelete(item);
        setIsDeleteModalOpen(true);
    };

    const handleDelete = async () => {
        if (!itemToDelete) return;

        const { id, category } = itemToDelete;
        let url = "";

        if (category === "internship") {
            url = `http://localhost:8080/api/candidate/deleteCandidate?id=${id}`;
        } else if (category === "training") {
            url = `http://localhost:8080/api/student/deleteStudent?id=${id}`;
        } else if (category === "jobs") {
            url = `http://localhost:8080/api/jobs/deleteApplication?id=${id}`;
        }

        try {
            const response = await fetch(url, { method: "DELETE" });
            if (response.ok) {
                toast.success("Record deleted successfully");
                fetchData(); // Refresh data
                setIsDeleteModalOpen(false);
                setItemToDelete(null);
            } else {
                throw new Error("Delete failed");
            }
        } catch (error) {
            console.error("Delete error:", error);
            toast.error("Failed to delete record");
        }
    };

    const filteredData = data.filter(item =>
        item.category === activeTab &&
        (item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.email?.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const exportToCSV = () => {
        if (filteredData.length === 0) {
            toast.warning("No data to export.");
            return;
        }

        let headers = [];
        if (activeTab === "internship") {
            headers = ["ID", "Name", "Email", "Phone", "Qualification", "Year", "Course", "Message"];
        } else if (activeTab === "training") {
            headers = ["ID", "Contact Person", "Email", "Phone", "School Name", "Address", "Students", "Software", "Message"];
        } else {
            headers = ["ID", "Name", "Email", "Phone", "Position", "Message"];
        }

        const csvContent = [
            headers.join(","),
            ...filteredData.map(item => {
                let row = [];
                if (activeTab === "internship") {
                    row = [item.id, item.name, item.email, item.phone, item.qualification, item.yearOfPassing, item.courseInterest, item.message];
                } else if (activeTab === "training") {
                    row = [item.id, item.name, item.email, item.phone, item.schoolName, item.address, item.studentCount, item.currentSoftware, item.message];
                } else {
                    row = [item.id, item.name, item.email, item.phone, item.position, item.message];
                }
                return row.map(cell => `"${String(cell || "").replace(/"/g, '""')}"`).join(",");
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
                <div className="bg-white rounded-xl shadow-sm p-1 mb-6 inline-flex flex-wrap gap-2">
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
                    <button
                        onClick={() => setActiveTab("jobs")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === "jobs"
                            ? "bg-orange-600 text-white shadow-md"
                            : "text-gray-600 hover:bg-gray-50"
                            }`}
                    >
                        <FaBriefcase /> Jobs
                        <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs ml-2">
                            {data.filter(i => i.category === "jobs").length}
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
                        {loading ? (
                            <div className="p-12 text-center text-gray-500">Loading data...</div>
                        ) : (
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
                                        <th className="px-6 py-4">Name</th>
                                        <th className="px-6 py-4">Contact</th>
                                        {activeTab === "internship" ? (
                                            <>
                                                <th className="px-6 py-4">Qualification</th>
                                                <th className="px-6 py-4">Course</th>
                                                <th className="px-6 py-4">Resume</th>
                                            </>
                                        ) : activeTab === "training" ? (
                                            <>
                                                <th className="px-6 py-4">School</th>
                                                <th className="px-6 py-4">Address</th>
                                                <th className="px-6 py-4">Details</th>
                                            </>
                                        ) : (
                                            <>
                                                <th className="px-6 py-4">Position</th>
                                                <th className="px-6 py-4">Resume</th>
                                            </>
                                        )}
                                        <th className="px-6 py-4">Message</th>
                                        <th className="px-6 py-4 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredData.length > 0 ? (
                                        filteredData.map((item) => (
                                            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
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
                                                        <td className="px-6 py-4">
                                                            <button
                                                                onClick={() => handleDownloadResume(item.id, item.name)}
                                                                className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 text-sm font-medium"
                                                                title="Download Resume"
                                                            >
                                                                <FaDownload /> Download
                                                            </button>
                                                        </td>
                                                    </>
                                                ) : activeTab === "training" ? (
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
                                                ) : (
                                                    <>
                                                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                                                            {item.position || "N/A"}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <button
                                                                onClick={() => handleDownloadResume(item.id, item.name)}
                                                                className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 text-sm font-medium"
                                                                title="Download Resume"
                                                            >
                                                                <FaDownload /> Download
                                                            </button>
                                                        </td>
                                                    </>
                                                )}
                                                <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate" title={item.message}>
                                                    {item.message || "-"}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <button
                                                        onClick={() => confirmDelete(item)}
                                                        className="text-red-500 hover:text-red-700 transition-colors p-2 rounded-full hover:bg-red-50"
                                                        title="Delete Record"
                                                    >
                                                        <FaTrash />
                                                    </button>
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
                        )}
                    </div>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            <DeleteConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => {
                    setIsDeleteModalOpen(false);
                    setItemToDelete(null);
                }}
                onConfirm={handleDelete}
                itemName={itemToDelete?.name || "this item"}
            />
        </div>
    );
};

export default AdminDashboard;
