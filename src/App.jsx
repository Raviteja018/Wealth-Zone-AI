import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Service";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import OurServices from "./components/OurServices";
import OurProducts from "./components/OurProducts";
import CallToAction from "./components/CallToAction";
import ContactUs from "./components/ContactUs";
import Careers from "./components/Careers";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./components/AboutUs";
import ApplyPage from "./components/ApplyPage";
import JobDetails from "./components/JobDetails";
import SplashModal from "./components/SplasModal";

function App() {
  return (
    <>
    <SplashModal  showOnce={true}/>
      <marquee className="bg-yellow-200 text-[#692315] px-4 py-2 text-lg font-medium mt-[-1px] mb-[-6px]">

        !!!---Oyster Technologies Company to be Established in 2006. .---!!!
        !!!--- Congratulations Oyster Technologies successfully completed 20
        years”.---!!! Oyster Technologies is one of the fastest growing and most
        successful Information Technology Consulting and Software development
        firms.
      </marquee>
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
              <CallToAction />
            </>
          }
        />
        <Route path="/services" element={<OurServices />} />
        <Route path="/products" element={<OurProducts />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/job-details" element={<JobDetails />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
