import React from 'react';

// --- Dummy Data ---
// Note: Using placehold.co URLs for dummy images. You can replace these later.
const higherOfficials = [
  {
    name: "Dr. Evelyn Reed",
    title: "Founder & CEO",
    bio: "Visionary leader focused on sustainable technology solutions and long-term strategic growth. Sets the bar for innovation.",
    image: "https://placehold.co/400x400/0E7490/FFFFFF?text=E.+Reed",
    primary: true,
  },
  {
    name: "Mr. Arthur Chen",
    title: "Co-Founder & CTO",
    bio: "Leads the engineering division, ensuring our technological infrastructure is robust, scalable, and future-proof.",
    image: "https://placehold.co/400x400/0891B2/FFFFFF?text=A.+Chen",
    primary: true,
  },
];

const operationalManager = [
  {
    name: "Ms. Chloe Davies",
    title: "Operational Manager",
    bio: "Drives efficiency and execution across all departmental operations, optimizing workflows for maximum productivity and quality.",
    image: "https://placehold.co/400x400/4F46E5/FFFFFF?text=C.+Davies",
  },
];

const seniorTeam = [
  {
    name: "Julian Vance",
    title: "Director of Marketing",
    bio: "Manages brand strategy and global campaigns.",
    image: "https://placehold.co/400x400/00E0A0/FFFFFF?text=J.+Vance",
    accent: "sky", // Sky Blue
  },
  {
    name: "Serena Khan",
    title: "Head of Product",
    bio: "Oversees product roadmap and user experience.",
    image: "https://placehold.co/400x400/D946EF/FFFFFF?text=S.+Khan",
    accent: "purple-pink", // Purple-Pink
  },
  {
    name: "Mark O'Connell",
    title: "Lead HR Strategist",
    bio: "Focuses on talent acquisition and corporate culture.",
    image: "https://placehold.co/400x400/059669/FFFFFF?text=M.+O'Connell",
    accent: "emerald-teal", // Emerald-Teal
  },
  {
    name: "Lila Rodriguez",
    title: "Senior Sales Director",
    bio: "Manages key accounts and partnership development.",
    image: "https://placehold.co/400x400/F97316/FFFFFF?text=L.+Rodriguez",
    accent: "orange-red", // Orange-Red
  },
  {
    name: "David Kim",
    title: "Financial Controller",
    bio: "Responsible for budgetary oversight and fiscal reporting.",
    image: "https://placehold.co/400x400/4B5563/FFFFFF?text=D.+Kim",
    accent: "sky",
  },
  {
    name: "Aisha Hassan",
    title: "Senior Legal Counsel",
    bio: "Ensures corporate compliance and manages risk.",
    image: "https://placehold.co/400x400/1F2937/FFFFFF?text=A.+Hassan",
    accent: "purple-pink",
  },
];

// --- Utility function for dynamic gradient accent based on member data ---
const getAccentClasses = (accent) => {
    switch (accent) {
        case 'sky':
            return 'from-sky-500 to-blue-500';
        case 'purple-pink':
            return 'from-purple-500 to-pink-500';
        case 'emerald-teal':
            return 'from-emerald-500 to-teal-500';
        case 'orange-red':
            return 'from-orange-500 to-red-500';
        default:
            // Main brand gradient for default/senior roles without a specific accent
            return 'from-blue-500 to-cyan-500';
    }
}

// --- Reusable Team Member Card Component ---
const MemberCard = ({ member, accentClass, isScrollingCard = false }) => (
    <div className={`bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] overflow-hidden ${isScrollingCard ? 'w-56 sm:w-64 flex-shrink-0 mx-4' : 'w-full'}`}>
        
        {/* Image Section - No background, centered */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mt-8 rounded-full overflow-hidden border-4 border-white shadow-lg">
             <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover object-center" 
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/4B5563/FFFFFF?text=Profile"; }}
            />
        </div>
        
        {/* Content Section */}
        <div className="p-6 text-center"> {/* Added text-center for better alignment with rounded image */}
            <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
            <p className={`text-sm font-semibold mb-3 ${member.primary ? 'text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-800 to-purple-800' : 'text-gray-600'}`}>
                {member.title}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
                {member.bio}
            </p>
        </div>
    </div>
);

// --- Main Leadership Component ---
const App = () => {

    // Split senior team for scrolling rows
    const midIndex = Math.ceil(seniorTeam.length / 2);
    const seniorTeamRow1 = seniorTeam.slice(0, midIndex);
    const seniorTeamRow2 = seniorTeam.slice(midIndex);

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-white py-16 px-4 sm:px-6 lg:px-8 font-['Inter']">
            {/* --- CSS for scrolling animation --- */}
            <style>
                {`
                    @keyframes scroll-left {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-100%); }
                    }
                    @keyframes scroll-right {
                      0% { transform: translateX(-100%); }
                      100% { transform: translateX(0); }
                    }
                    .scroll-container {
                      overflow: hidden;
                      white-space: nowrap;
                      width: 100%;
                      -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
                      mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
                    }
                    .scroll-content-left {
                      display: flex; /* Use flex instead of inline-block */
                      animation: scroll-left 40s linear infinite;
                    }
                    .scroll-content-right {
                      display: flex; /* Use flex instead of inline-block */
                      animation: scroll-right 40s linear infinite;
                    }
                    .scroll-container:hover .scroll-content-left,
                    .scroll-container:hover .scroll-content-right {
                      animation-play-state: paused;
                    }
                `}
            </style>

            <div className="max-w-7xl mx-auto">

                {/* --- Main Heading --- */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-800 to-purple-800">
                    Our Leadership
                </h1>

                {/* --- Tier 1: Founders & Higher Officials --- */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                        Founders
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        {higherOfficials.map((member, index) => (
                            <div key={index} className="w-full md:w-1/2 lg:w-1/3">
                                <MemberCard 
                                    member={member} 
                                    accentClass="from-blue-500 to-cyan-500" // Main Brand Gradient
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- Tier 2: Operational Manager --- */}
                <section className="mb-20 pt-10 border-t border-gray-200">
                    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                        Operational Management
                    </h2>
                    <div className="flex justify-center">
                         {/* Card is centered and takes up 2/3 width on small screens, 1/3 on large screens */}
                        {operationalManager.map((member, index) => (
                            <div key={index} className="w-full sm:w-2/3 lg:w-1/3">
                                <MemberCard 
                                    member={member} 
                                    accentClass="from-blue-500 to-cyan-500" // Main Brand Gradient
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- Tier 3: Senior Team --- */}
                <section className="py-4">
                    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                        Senior Team
                    </h2>
                    
                    {/* --- Row 1: Scroll Left to Right --- */}
                    <div className="scroll-container mb-8">
                        <div className="scroll-content-right">
                            {/* Render row 1 twice for continuous loop */}
                            {seniorTeamRow1.map((member, index) => (
                                <MemberCard 
                                    key={`r1-${index}`} 
                                    member={member} 
                                    accentClass={getAccentClasses(member.accent)}
                                    isScrollingCard={true}
                                />
                            ))}
                            {seniorTeamRow1.map((member, index) => (
                                <MemberCard 
                                    key={`r1-dup-${index}`} 
                                    member={member} 
                                    accentClass={getAccentClasses(member.accent)}
                                    isScrollingCard={true}
                                />
                            ))}
                        </div>
                    </div>

                    {/* --- Row 2: Scroll Right to Left --- */}
                    <div className="scroll-container">
                        <div className="scroll-content-left">
                            {/* Render row 2 twice for continuous loop */}
                            {seniorTeamRow2.map((member, index) => (
                                <MemberCard 
                                    key={`r2-${index}`} 
                                    member={member} 
                                    accentClass={getAccentClasses(member.accent)}
                                    isScrollingCard={true}
                                />
                            ))}
                            {seniorTeamRow2.map((member, index) => (
                                <MemberCard 
                                    key={`r2-dup-${index}`} 
                                    member={member} 
                                    accentClass={getAccentClasses(member.accent)}
                                    isScrollingCard={true}
                                />
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default App;


