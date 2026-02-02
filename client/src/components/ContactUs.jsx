import React from "react";
import "./ContactUs.scss";
import bgImage from "../assets/Car pic.png";

const ContactUs = () => {
  return (
    <section
      className="contact-us"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="contact-us__overlay">
        <div className="contact-us__container">
          <h2 className="contact-us__title">Get in Touch</h2>
          <p className="contact-us__subtitle">
            Have questions or need assistance? Fill out the form below and we’ll get back to you shortly.
          </p>

          <form className="contact-us__form">
            <div className="contact-us__row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>

            <div className="contact-us__row">
              <input type="tel" placeholder="Your Phone Number" required />
              <input type="text" placeholder="Subject" required />
            </div>

            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit" className="contact-us__button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
