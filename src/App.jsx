import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import PortfolioDetail from "./Pages/PortfolioDetail";
import AboutSection from "./Pages/About";
import MeetTheTeam from "./Pages/Team";
import Testimonials from "./Pages/Testimonials";
import ModelsSection from "./Pages/HireUs";
import BlogSection from "./Pages/blog";
import Form from "./Pages/Form";

import WhyChooseUs from "./Components/WhyChooseUs";
import WhatWeDo from "./Components/services";
import BannerImagesOnly from "./Components/BannerImagesOnly";
import CorporateGallery from "./Components/Corporate";
import FamilyGallery from "./Components/Family";
import ProductGallery from "./Components/Products";
import FashionGallery from "./Components/Fashion";
import WeddingGallery from "./Components/Weddings";
import OutdoorGallery from "./Components/Outdoor";
import Makeup from "./Components/Hiremakeup";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:category" element={<PortfolioDetail />} />
        <Route path="/hiremodels" element={<ModelsSection />} />
        <Route path="/Hiremakeup" element={<Makeup />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/whychooseus" element={<WhyChooseUs />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/BannerImagesOnly" element={<BannerImagesOnly />} />
        <Route path="/team" element={<MeetTheTeam />} />
        <Route path="/testimonial" element={<Testimonials />} />
        
        <Route path="/form" element={<Form />} />

        <Route path="/corporate" element={<CorporateGallery />} />
        <Route path="/family" element={<FamilyGallery />} />
        <Route path="/products" element={<ProductGallery />} />
        <Route path="/fashion" element={<FashionGallery />} />
        <Route path="/weddings" element={<WeddingGallery />} />
        <Route path="/outdoor" element={<OutdoorGallery />} />
       
        {[...Array(15).keys()].map((_, index) => (
          <Route key={index} path={`/${index + 1}`} element={<Home />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
