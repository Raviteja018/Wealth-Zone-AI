import Delivery from "../assets/Projects/delivery.jpg";
import Examination from "../assets/Projects/examination.jpg";
import HRM from "../assets/Projects/HRM.jpg";
import ai from "../assets/Projects/ai.jpg";
import cyber from "../assets/Projects/cyber.png";
import DigitalMarketing from "../assets/Projects/DigitalMarketing.jpg";

export const slugify = (str) =>
  String(str)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export const projects = [
  {
    name: "Bonjour – Food Delivery App (Paris & London)",
    shortDescription:
      "A sleek and modern food delivery platform inspired by the charm of Paris.",
    description:
      "Bonjour is a comprehensive food delivery solution that brings the authentic taste of Paris to your doorstep. Our platform features real-time order tracking, secure payment integration, and a user-friendly interface that makes ordering your favorite French delicacies effortless. With features like scheduled deliveries, favorite restaurants, and personalized recommendations, Bonjour offers a seamless dining experience.",
    features: [
      "Real-time order tracking",
      "Secure payment gateway integration",
      "Personalized restaurant recommendations",
      "Scheduled deliveries",
      "Loyalty program integration",
    ],
    technologies: ["React Native", "Java", "MySql", "AWS"],
    image: Delivery,
  },
  {
    name: "OTRAS – One Time Registration Application System",
    shortDescription:
      "A unified applicant registration platform for government exams and recruitment.",
    description:
      "OTRAS is a centralized registration and application management system developed for government recruitment boards and examination authorities. It allows candidates to register once and reuse their verified profile for multiple applications, eliminating repetitive data entry. The system supports dynamic multi-step forms, document uploads, and automated verification workflows. With role-based dashboards, secure authentication, and real-time status tracking, OTRAS streamlines end-to-end applicant management and ensures transparency, scalability, and efficiency across large-scale recruitment processes.",
    features: [
      "Single-time registration for multiple applications",
      "Dynamic multi-step applicant forms",
      "Document upload and verification system",
      "Real-time application tracking and notifications",
      "Role-based admin and reviewer dashboards",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: Examination,
  },

  {
    name: "HRM Portal & Service Provider",
    shortDescription:
      "Comprehensive HR management system for modern organizations.",
    description:
      "Our HRM Portal is an all-in-one human resource management solution that streamlines HR processes from recruitment to retirement. The platform offers modules for attendance management, payroll processing, performance reviews, and employee self-service. With its intuitive interface and powerful reporting tools, organizations can make data-driven HR decisions and improve workforce productivity.",
    features: [
      "Employee self-service portal",
      "Automated payroll processing",
      "Performance management system",
      "Leave and attendance tracking",
      "Compliance management",
    ],
    technologies: ["React", "Python", "Django", "MySQL", "Redis"],
    image: HRM,
  },
{
  name: "WZG AI – STEM & Robotics Education",
  shortDescription:
    "Turning students into creators: hands-on STEM, Robotics and AI aligned with NEP 2020.",
  description:
    "WZG AI transforms traditional schooling by integrating STEM, Robotics and AI into everyday learning. Our curriculum — co-developed by educators and engineers — gives students hands-on experience through real projects, coding, and engineering activities that spark curiosity, build critical thinking, and develop future-ready skills. Aligned to NEP 2020, WZG AI supports classroom adoption, teacher upskilling, and measurable student outcomes through project portfolios and certification.",
  features: [
    "NEP 2020 aligned curriculum designed by educators & engineers",
    "Hands-on robotics kits and engineering projects",
    "Project-based coding and AI exercises",
    "Teacher training & deployment playbooks",
    "Progress tracking, portfolios, and certification",
    "Parent & educator dashboards for visibility",
  ],
  technologies: ["React", "Python", "TensorFlow", "Firebase", "Arduino/Raspberry Pi"],
  image: ai,
  implementationStages: [
    {
      stage: "Stage 1 — Planning & Customization",
      summary:
        "Assess school needs, map curriculum to local standards, customize modules and select hardware kits. Deliver a tailored rollout plan and teacher training schedule."
    },
    {
      stage: "Stage 2 — Deployment",
      summary:
        "Install software, distribute kits, run teacher onboarding workshops, and configure dashboards and assessment tools for the school."
    },
    {
      stage: "Stage 3 — Execution",
      summary:
        "Deliver classroom lessons and hands-on labs, guide project work, monitor progress, and provide ongoing mentor and tech support."
    },
    {
      stage: "Stage 4 — Showcase & Certification",
      summary:
        "Students present projects in showcases, receive competency certificates, and schools receive outcome reports to demonstrate impact."
    }
  ]
},
  {
    name: "Cyber-Security Operations",
    shortDescription:
      "Advanced SOC platform for real-time threat detection and incident response.",
    description:
      "Our Cyber-Security Operations Platform is designed to empower Security Operations Centers (SOC) with real-time visibility, proactive threat detection, and efficient incident response. The system integrates threat intelligence, log analysis, and automated alerting to help security teams identify, investigate, and mitigate cyber threats effectively. It supports SIEM capabilities, behavioral analytics, and continuous monitoring to strengthen organizational defense against evolving cyberattacks.",
    features: [
      "Real-time threat monitoring and alerting",
      "Centralized log management and SIEM integration",
      "Automated incident response workflows",
      "Threat intelligence and behavioral analytics",
      "Customizable dashboards for SOC analysts",
    ],
    technologies: ["React", "Node.js", "Elasticsearch", "Kibana", "Docker"],
    image: cyber,
  },
  {
  name: "Digital Marketing & Growth Services",
  shortDescription: "End-to-end digital marketing solutions tailored for high-growth sectors.",
  description:
    "We provide targeted digital marketing solutions designed to increase visibility, generate leads, and convert audiences into loyal customers. Our team crafts data-driven strategies across multiple platforms — ensuring every campaign delivers measurable business growth. Whether it's hospitals seeking patient engagement, real estate firms selling properties, or jewelry brands building trust and desire, we tailor campaigns to the psychology and purchase journey of each industry.",
  features: [
    "Industry-specific marketing strategies",
    "Social media branding & management",
    "Google & Meta Ads campaign execution",
    "SEO & content-driven lead generation",
    "Reputation and review management",
    "Landing page & funnel optimization"
  ],
  industriesServed: [
    "Hospitals & Healthcare",
    "Real Estate & Construction",
    "Jewellery & Luxury Retail",
    "Educational Institutions",
    "Restaurants & Food Chains",
    "Fitness & Wellness Centers"
  ],
  technologies: ["React", "Next.js", "Node.js", "Google Ads", "Meta Suite", "Analytics Tools"],
  image: DigitalMarketing,
}

].map((p) => ({ ...p, slug: slugify(p.name) }));
