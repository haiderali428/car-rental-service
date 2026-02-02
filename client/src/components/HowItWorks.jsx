import React from "react";
import { FaCar, FaCalendarCheck, FaCreditCard, FaKey } from "react-icons/fa";
import "./HowItWorks.scss";
import "aos/dist/aos.css";
import AOS from "aos";

const HowItWorks = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const steps = [
    {
      icon: <FaCar />,
      title: "Browse Cars",
      description: "Explore our wide range of vehicles for every journey.",
      color: "#ff4d4d",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Select & Book",
      description: "Pick your car and choose your booking dates easily.",
      color: "#00b894",
    },
    {
      icon: <FaCreditCard />,
      title: "Confirm & Pay",
      description: "Secure your booking with our safe online payment.",
      color: "#0984e3",
    },
    {
      icon: <FaKey />,
      title: "Pick Up & Drive",
      description: "Get the keys and enjoy your smooth ride.",
      color: "#f39c12",
    },
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 data-aos="fade-up">How It Works</h2>

        <p className="intro-text" data-aos="fade-up" data-aos-delay="100">
          Renting your dream car has never been easier. Follow these simple
          steps to book your perfect ride with us and get on the road in no
          time. Whether it's for business, leisure, or adventure — we’ve got
          you covered.
        </p>

        <div className="steps">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="icon" style={{ color: step.color }}>
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <span className="step-number">{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
