// src/pages/Home.jsx
import React from "react";
import './Home.scss';
import HeroSection from "../components/HeroSection";
import FeaturedCars from '../components/FeaturedCars/FeaturedCars';
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedCars/>
      <WhyChooseUs/>
      <Testimonials/>
      <HowItWorks/>
      <FAQ/>
      <CTA/>
    </>
  );
};

export default Home;
