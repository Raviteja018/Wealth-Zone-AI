import Delivery from "../assets/Projects/delivery.jpg";
import Examination from "../assets/Projects/examination.jpg";
import HRM from "../assets/Projects/HRM.jpg";
import ai from "../assets/Projects/ai.jpg";
import cyber from "../assets/Projects/cyber.png";

export const slugify = (str) =>
  String(str)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export const projects = [
  {
    name: "Bonjour – Food Delivery App",
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
    name: "OTRAS – Online Examination Platform",
    shortDescription:
      "A government-grade online exam system built for scale and security.",
    description:
      "OTRAS is a robust examination platform designed for educational institutions and government agencies. It supports various question types, automated grading, and advanced anti-cheating mechanisms. The system ensures data integrity and provides detailed analytics for performance evaluation. OTRAS can handle thousands of concurrent users with minimal latency, making it ideal for large-scale examinations.",
    features: [
      "AI-powered proctoring",
      "Multi-format question support",
      "Real-time analytics dashboard",
      "Secure browser lockdown",
      "Automated result processing",
    ],
    technologies: ["React","Java", "Spring Boot", "PostgreSQL", "Docker"],
    image: Examination,
  },
  {
    name: "HRM Portal",
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
    name: "STEM – AI Education Initiative",
    shortDescription:
      "Empowering young minds with AI and technology education.",
    description:
      "The STEM initiative is a comprehensive educational platform that introduces students to artificial intelligence, robotics, and programming through interactive lessons and hands-on projects. Our curriculum is designed by industry experts and educators to make complex concepts accessible and engaging for students of all ages. The platform includes virtual labs, coding exercises, and project-based learning modules.",
    features: [
      "Interactive coding environment",
      "Project-based learning modules",
      "Virtual robotics simulation",
      "Progress tracking and assessments",
      "Educator dashboard",
    ],
    technologies: ["React", "Python", "TensorFlow", "Firebase"],
    image: ai,
  },
  {
    name: "Cyber-Security Training Platform",
    shortDescription:
      "Hands-on cybersecurity training with real-world scenarios.",
    description:
      "Our Cybersecurity Training Platform provides immersive, hands-on learning experiences for security professionals and enthusiasts. The platform offers virtual labs, capture-the-flag challenges, and real-world attack simulations. Participants can practice penetration testing, network defense, and incident response in a safe, controlled environment. The curriculum is regularly updated to address emerging threats and security trends.",
    features: [
      "Virtual cybersecurity labs",
      "Real-world attack simulations",
      "Progress tracking and certification",
      "Interactive learning modules",
      "Community challenges and competitions",
    ],
    technologies: ["React", "Python", "Docker", "Kubernetes"],
    image: cyber,
  },
].map((p) => ({ ...p, slug: slugify(p.name) }));
