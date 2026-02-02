import React from "react";
import { FaCarSide, FaClock, FaMoneyBillWave, FaHeadset } from "react-icons/fa";
import "./WhyChooseUs.scss";
import "aos/dist/aos.css";
import AOS from "aos";

const WhyChooseUs = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: <FaCarSide style={{ color: "#e63946" }} />,
      title: "Wide Range of Cars",
      desc: "From luxury sedans to budget-friendly options, we have a car for every need and budget.",
    },
    {
      icon: <FaClock style={{ color: "#2a9d8f" }} />,
      title: "Flexible Rental Periods",
      desc:
        "Whether you need a car for a day, week, or month, we’ve got flexible plans for you."
    },
    {
      icon: <FaMoneyBillWave style={{ color: "#f4a261" }} />,
      title: "Affordable Prices",
      desc: "Enjoy transparent pricing with no hidden fees — get the best value for your money.",
    },
  
     {
      icon: <FaHeadset style={{ color: "#457b9d" }} />,
      title: "24/7 Customer Support",
      desc:
        "Our friendly support team is available round-the-clock to assist you anytime."
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 data-aos="fade-up">Why Choose Us</h2>
        <p className="subtitle" data-aos="fade-up" data-aos-delay="100">
          We offer the best car rental experience tailored to your needs.
        </p>
        <div className="features">
          {features.map((item, index) => (
            <div
              className="feature-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
