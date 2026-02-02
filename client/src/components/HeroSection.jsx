import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="hero__content">
          <h1 className="hero__title">Drive in Style, Rent with Ease</h1>
          <p className="hero__subtitle">Explore our top-class cars for your next journey</p>
          <Link to="/cars" className="hero__button">
            Explore Cars
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
