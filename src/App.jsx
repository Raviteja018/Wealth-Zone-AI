import React, { useState } from "react";
// Force rebuild
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
import PerformanceOptimization from "./pages/services/PerformanceOptimization";
import GraphicDesign from "./pages/services/GraphicDesign";
import WebsiteMaintenance from "./pages/services/WebsiteMaintenance";
import CMS from "./pages/services/CMS";
import AIAgents from "./pages/services/AIAgents";
import BPOServices from "./pages/services/BPOServices";
import CustomerSupport from "./pages/services/CustomerSupport";
import MarketingServices from "./pages/services/MarketingServices";
import Leadership from "./components/Leadership";
import Team from "./components/Team";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";

// Import Data Analytics sub-services
import BusinessIntelligence from "./pages/services/data-analytics/BusinessIntelligence";
import PredictiveAnalytics from "./pages/services/data-analytics/PredictiveAnalytics";
import DataVisualization from "./pages/services/data-analytics/DataVisualization";
import BigDataSolutions from "./pages/services/data-analytics/BigDataSolutions";

// Import Software Development sub-services
import EnterpriseSolutions from "./pages/services/software-development/EnterpriseSolutions";
import UIUXDesign from "./pages/services/software-development/UIUXDesign";

// Import IT Consulting sub-services
import TechnologyStrategy from "./pages/services/it-consulting/TechnologyStrategy";
import DigitalTransformation from "./pages/services/it-consulting/DigitalTransformation";
import ITInfrastructure from "./pages/services/it-consulting/ITInfrastructure";
import SecurityCompliance from "./pages/services/it-consulting/SecurityCompliance";

// Import Cloud Services sub-services
import CloudMigration from "./pages/services/cloud-services/CloudMigration";
import CloudArchitecture from "./pages/services/cloud-services/CloudArchitecture";
import CloudSecurity from "./pages/services/cloud-services/CloudSecurity";
import CloudManagement from "./pages/services/cloud-services/CloudManagement";

// Import Software Testing sub-services
import ManualTesting from "./pages/services/software-testing/ManualTesting";
import AutomatedTesting from "./pages/services/software-testing/AutomatedTesting";
import PerformanceTesting from "./pages/services/software-testing/PerformanceTesting";
import SecurityTesting from "./pages/services/software-testing/SecurityTesting";

// Import AI Agents sub-services
import ChatbotsAndVirtualAssistants from "./pages/services/ai-agents/ChatbotsAndVirtualAssistants";
import ProcessAutomationAgents from "./pages/services/ai-agents/ProcessAutomationAgents";
import DataAnalysisAgents from "./pages/services/ai-agents/DataAnalysisAgents";
import CustomAIAgentDevelopment from "./pages/services/ai-agents/CustomAIAgentDevelopment";

// Import Marketing Services sub-services
import DigitalAdvertising from "./pages/services/marketing-services/DigitalAdvertising";
import SEOContentMarketing from "./pages/services/marketing-services/SEOContentMarketing";
import SocialMediaManagement from "./pages/services/marketing-services/SocialMediaManagement";
import EmailMarketing from "./pages/services/marketing-services/EmailMarketing";

// Import BPO Services sub-services
import CustomerSupportBPO from "./pages/services/bpo-services/CustomerSupportBPO";
import BackOfficeProcessing from "./pages/services/bpo-services/BackOfficeProcessing";
import TechnicalSupport from "./pages/services/bpo-services/TechnicalSupport";
import SalesLeadGeneration from "./pages/services/bpo-services/SalesLeadGeneration";
import MedicalCoding from "./pages/services/bpo-services/MedicalCoding";
import ContentModeration from "./pages/services/bpo-services/ContentModeration";
import GoogleMapping from "./pages/services/bpo-services/GoogleMapping";

// Import Customer Support sub-services
import MultiChannelSupport from "./pages/services/customer-support/MultiChannelSupport";
import Availability247 from "./pages/services/customer-support/Availability247";
import AIPoweredTicketing from "./pages/services/customer-support/AIPoweredTicketing";
import PersonalizedService from "./pages/services/customer-support/PersonalizedService";

// Import Medical Coding sub-features
import ICD10Coding from "./pages/services/bpo-services/medical-coding/ICD10Coding";
import CPTCoding from "./pages/services/bpo-services/medical-coding/CPTCoding";
import ComplianceAuditing from "./pages/services/bpo-services/medical-coding/ComplianceAuditing";
import RevenueCycle from "./pages/services/bpo-services/medical-coding/RevenueCycle";

// Import Content Moderation sub-features
import ContentReview from "./pages/services/bpo-services/content-moderation/ContentReview";
import AIModeration from "./pages/services/bpo-services/content-moderation/AIModeration";
import PolicyDevelopment from "./pages/services/bpo-services/content-moderation/PolicyDevelopment";
import RealTimeMonitoring from "./pages/services/bpo-services/content-moderation/RealTimeMonitoring";

// Import Google Mapping sub-features
import CustomMaps from "./pages/services/bpo-services/google-mapping/CustomMaps";
import LocationServices from "./pages/services/bpo-services/google-mapping/LocationServices";
import GISIntegration from "./pages/services/bpo-services/google-mapping/GISIntegration";
import DataVisualizationMapping from "./pages/services/bpo-services/google-mapping/DataVisualizationMapping";


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
        <Route path="/services/data-analytics/predictive-analytics" element={<PredictiveAnalytics />} />
        <Route path="/services/data-analytics/data-visualization" element={<DataVisualization />} />
        <Route path="/services/data-analytics/big-data-solutions" element={<BigDataSolutions />} />

        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/software-development/enterprise-solutions" element={<EnterpriseSolutions />} />
        <Route path="/services/software-development/ui-ux-design" element={<UIUXDesign />} />

        <Route path="/services/it-consulting" element={<ITConsulting />} />
        <Route path="/services/it-consulting/technology-strategy" element={<TechnologyStrategy />} />
        <Route path="/services/it-consulting/digital-transformation" element={<DigitalTransformation />} />
        <Route path="/services/it-consulting/it-infrastructure" element={<ITInfrastructure />} />
        <Route path="/services/it-consulting/security-compliance" element={<SecurityCompliance />} />

        <Route path="/services/software-testing/manual-testing" element={<ManualTesting />} />
        <Route path="/services/software-testing/automated-testing" element={<AutomatedTesting />} />
        <Route path="/services/software-testing/performance-testing" element={<PerformanceTesting />} />
        <Route path="/services/software-testing/security-testing" element={<SecurityTesting />} />

        <Route path="/services/ai-agents" element={<AIAgents />} />
        <Route path="/services/ai-agents/chatbots-and-virtual-assistants" element={<ChatbotsAndVirtualAssistants />} />
        <Route path="/services/ai-agents/process-automation-agents" element={<ProcessAutomationAgents />} />
        <Route path="/services/ai-agents/data-analysis-agents" element={<DataAnalysisAgents />} />
        <Route path="/services/ai-agents/custom-ai-agent-development" element={<CustomAIAgentDevelopment />} />

        <Route path="/services/bpo-services" element={<BPOServices />} />
        <Route path="/services/bpo-services/customer-support-bpo" element={<CustomerSupportBPO />} />
        <Route path="/services/bpo-services/back-office-processing" element={<BackOfficeProcessing />} />
        <Route path="/services/bpo-services/technical-support" element={<TechnicalSupport />} />
        <Route path="/services/bpo-services/sales-lead-generation" element={<SalesLeadGeneration />} />
        <Route path="/services/bpo-services/medical-coding" element={<MedicalCoding />} />
        <Route path="/services/bpo-services/content-moderation" element={<ContentModeration />} />
        <Route path="/services/bpo-services/google-mapping" element={<GoogleMapping />} />

        {/* Medical Coding Sub-features */}
        <Route path="/services/bpo-services/medical-coding/icd-10-coding" element={<ICD10Coding />} />
        <Route path="/services/bpo-services/medical-coding/cpt-coding" element={<CPTCoding />} />
        <Route path="/services/bpo-services/medical-coding/compliance-auditing" element={<ComplianceAuditing />} />
        <Route path="/services/bpo-services/medical-coding/revenue-cycle" element={<RevenueCycle />} />

        {/* Content Moderation Sub-features */}
        <Route path="/services/bpo-services/content-moderation/content-review" element={<ContentReview />} />
        <Route path="/services/bpo-services/content-moderation/ai-moderation" element={<AIModeration />} />
        <Route path="/services/bpo-services/content-moderation/policy-development" element={<PolicyDevelopment />} />
        <Route path="/services/bpo-services/content-moderation/real-time-monitoring" element={<RealTimeMonitoring />} />

        {/* Google Mapping Sub-features */}
        <Route path="/services/bpo-services/google-mapping/custom-maps" element={<CustomMaps />} />
        <Route path="/services/bpo-services/google-mapping/location-services" element={<LocationServices />} />
        <Route path="/services/bpo-services/google-mapping/gis-integration" element={<GISIntegration />} />
        <Route path="/services/bpo-services/google-mapping/data-visualization" element={<DataVisualizationMapping />} />

        <Route path="/services/customer-support" element={<CustomerSupport />} />
        <Route path="/services/customer-support/multi-channel-support" element={<MultiChannelSupport />} />
        <Route path="/services/customer-support/24-7-availability" element={<Availability247 />} />
        <Route path="/services/customer-support/ai-powered-ticketing" element={<AIPoweredTicketing />} />
        <Route path="/services/customer-support/personalized-service" element={<PersonalizedService />} />

        <Route path="/services/marketing-services" element={<MarketingServices />} />
        <Route path="/services/marketing-services/digital-advertising" element={<DigitalAdvertising />} />
        <Route path="/services/marketing-services/seo-content-marketing" element={<SEOContentMarketing />} />
        <Route path="/services/marketing-services/social-media-management" element={<SocialMediaManagement />} />
        <Route path="/services/marketing-services/email-marketing" element={<EmailMarketing />} />

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