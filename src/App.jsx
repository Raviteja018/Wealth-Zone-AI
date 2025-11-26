import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Service";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import OurServices from "./pages/Services";
import OurProducts from "./components/OurProducts";
import CallToAction from "./components/CallToAction";
import ContactUs from "./components/ContactUs";
import Careers from "./components/Careers";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./components/AboutUs";
import JobDetails from "./components/JobDetails";
import SplashModal from "./components/SplasModal";
import OurStaffing from "./components/OurStaffing";
import RequestEmployee from "./components/RequestEmployee";
import DirectStaffing from "./components/DirectStaffing";
import TempToHireStaffing from "./components/TempToHireStaffing";
import ContractualStaffing from "./components/ContractualStaffing";
import Collaborations from "./components/Collaborations";
import ExpandingBranches from "./components/ExpandingBranches";

// Import service components
import DataAnalytics from "./pages/services/DataAnalytics";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import ITConsulting from "./pages/services/ITConsulting";
import CloudServices from "./pages/services/CloudServices";
import SoftwareTesting from "./pages/services/SoftwareTesting";
import AIAgents from "./pages/services/AIAgents";
import BPOServices from "./pages/services/BPOServices";
import CustomerSupport from "./pages/services/CustomerSupport";
import MarketingServices from "./pages/services/MarketingServices";
import MedicalCoding from "./pages/services/MedicalCoding";
import ContentModeration from "./pages/services/ContentModeration";
import GoogleMapping from "./pages/services/GoogleMapping";
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileApps from "./pages/services/MobileApps";
import Ecommerce from "./pages/services/Ecommerce";
import GraphicDesign from "./pages/services/GraphicDesign";
import WebsiteMaintenance from "./pages/services/WebsiteMaintenance";
import CMS from "./pages/services/CMS";
import PerformanceOptimization from "./pages/services/PerformanceOptimization";
import Leadership from "./components/Leadership";
import Team from "./components/Team";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";

// Import Data Analytics sub-services
import BusinessIntelligence from "./pages/services/data-analytics/BusinessIntelligence";


function App() {
  const location = useLocation();
  const hideFooterPaths = ['/about'];
  const shouldShowFooter = !hideFooterPaths.includes(location.pathname);

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhyChooseUs />
              <Services />
              <ExpandingBranches />
              <Collaborations />
              <CallToAction />
            </>
          }
        />
        <Route path="/services" element={<OurServices />} />
        <Route path="/services/data-analytics" element={<DataAnalytics />} />
        <Route path="/services/data-analytics/business-intelligence" element={<BusinessIntelligence />} />
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/it-consulting" element={<ITConsulting />} />
        <Route path="/services/cloud-services" element={<CloudServices />} />
        <Route path="/services/software-testing" element={<SoftwareTesting />} />
        <Route path="/services/ai-agents" element={<AIAgents />} />
        <Route path="/services/bpo-services" element={<BPOServices />} />
        <Route path="/services/customer-support" element={<CustomerSupport />} />
        <Route path="/services/marketing-services" element={<MarketingServices />} />
        <Route path="/services/medical-coding" element={<MedicalCoding />} />
        <Route path="/services/content-moderation" element={<ContentModeration />} />
        <Route path="/services/google-mapping" element={<GoogleMapping />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/mobile-apps" element={<MobileApps />} />
        <Route path="/services/ecommerce" element={<Ecommerce />} />
        <Route path="/services/graphic-design" element={<GraphicDesign />} />
        <Route path="/services/website-maintenance" element={<WebsiteMaintenance />} />
        <Route path="/services/cms" element={<CMS />} />
        <Route path="/services/performance-optimization" element={<PerformanceOptimization />} />
        <Route path="/request-employee" element={<RequestEmployee />} />
        <Route path="/direct-staffing" element={<DirectStaffing />} />
        <Route path="/contractual-staffing" element={<ContractualStaffing />} />
        <Route path="/temp-to-hire-staffing" element={<TempToHireStaffing />} />
        <Route path="/staffing" element={<OurStaffing />} />
        <Route path="/products" element={<OurProducts />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/job-details" element={<JobDetails />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </>
  );
}

export default App;