import React from 'react';

// Components
import SwiperComponent from '../Components/SwiperComponent';
import BannerImagesOnly from '../Components/BannerImagesOnly';
import WhyChooseUs from '../Components/WhyChooseUs';
import WhatWeDo from '../Components/services';
import Footer from '../Components/Footer';
// Sections / Pages
import About from './About';
import ParallaxHero from './ParallaxHero1';
import BlogSection from '../Components/blog2';
import ModelsSection from '../Components/HireUs2';
import MeetTheTeam from './Team';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div className="bg-white">
      <SwiperComponent />
      <About />
      <ModelsSection />
      <WhyChooseUs />
      <BannerImagesOnly/>
      <WhatWeDo />
      <ParallaxHero />
      <MeetTheTeam />
      <BlogSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
