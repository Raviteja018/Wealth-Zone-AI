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

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhyChooseUs />
              <Services />
              <CallToAction/>
            </>
          }
        />
        <Route path="/services" element={<OurServices/>}/>
        <Route path="/products" element={<OurProducts/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
