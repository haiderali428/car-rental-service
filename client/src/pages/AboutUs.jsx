import React, { useEffect, useState } from "react";
import "./AboutUs.scss";
import { motion } from "framer-motion";
import { FaCar, FaSmile, FaRegClock } from "react-icons/fa";
import founderImg from "../assets/WhatsApp Image 2025-07-18 at 3.36.44 AM.jpeg";

const Counter = ({ icon: Icon, end, label, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.ceil(end / 100);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="counter-card">
      <Icon style={{ color }} className="counter-icon" />
      <h2>{count}+</h2>
      <p>{label}</p>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* About Company */}
      <motion.section
        className="about-company"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1>About Our Company</h1>
        <p>
          At Premium Rent-a-Car, we pride ourselves on delivering world-class car rental
          services tailored to your needs. Our fleet features the latest models, ensuring
          comfort, safety, and style for every journey. With years of expertise, we’ve built
          lasting relationships with thousands of satisfied customers across Scotland and
          beyond.
        </p>
      </motion.section>

      {/* Counters */}
      <motion.section
        className="counters"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Counter icon={FaCar} end={250} label="Cars" color="#ff6b6b" />
        <Counter icon={FaSmile} end={200} label="Happy Customers" color="#1d65d1ff" />
        <Counter icon={FaRegClock} end={10} label="Years in Business" color="#54a0ff" />
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="mission-vision"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="card mission">
          <h2>Our Mission</h2>
          <p>
            To provide premium car rental experiences that combine quality, affordability,
            and customer satisfaction — ensuring every trip is memorable.
          </p>
        </div>
        <div className="card vision">
          <h2>Our Vision</h2>
          <p>
            To be Scotland’s most trusted and innovative car rental company, known for
            excellence, sustainability, and customer-first service.
          </p>
        </div>
      </motion.section>

      {/* Founder Section */}
      <motion.section
        className="founder"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src={founderImg} alt="Founder" />
        <div className="founder-details">
          <h2>John Smith</h2>
          <h4>Founder & CEO</h4>
          <p>
            John Smith founded Premium Rent-a-Car with a vision to make luxury car rentals
            accessible to everyone. With over 15 years in the industry, John’s leadership has
            been the driving force behind our success and reputation for excellence.
          </p>
        </div>
      </motion.section>

      {/* Google Map */}
      <motion.section
        className="map"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22458.821617642393!2d-4.2576309!3d55.8642373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488815562d2d0e6b%3A0x59f6b6b4f993c3f5!2sGlasgow%2C%20Scotland!5e0!3m2!1sen!2suk!4v1691234567890"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.section>
    </div>
  );
};

export default AboutUs;
