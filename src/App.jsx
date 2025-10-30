import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Service";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
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

 
function App() {
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
              <Collaborations />
              <CallToAction />
            </>
          }
        />
        <Route path="/services" element={<OurServices />} />
        <Route path="/services/data-analytics" element={<DataAnalytics />} />
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/it-consulting" element={<ITConsulting />} />
        <Route path="/services/cloud-services" element={<CloudServices />} />
        <Route path="/services/software-testing" element={<SoftwareTesting />} />
        <Route path="/services/ai-agents" element={<AIAgents />} />
        <Route path="/services/bpo-services" element={<BPOServices />} />
        <Route path="/services/customer-support" element={<CustomerSupport />} />
        <Route path="/services/marketing-services" element={<MarketingServices />} />
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
      </Routes>
      <Footer />
    </>
  );
}
 
export default App;