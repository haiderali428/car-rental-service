import React, { useState } from "react";
import "./FAQ.scss";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What documents do I need to rent a car?",
      answer:
        "You will need a valid driving license, a national ID or passport, and a valid payment method (credit or debit card)."
    },
    {
      question: "Is there a mileage limit?",
      answer:
        "Most of our cars come with unlimited mileage. However, some premium vehicles have mileage restrictions. Please check the car details."
    },
    {
    question: "How can I rent a car from your website?",
    answer:
      "Simply browse our available cars, select the one you like, and follow the booking process. You'll receive a confirmation once your booking is approved.",
  },
   {
    question: "Is fuel included?",
    answer: "Fuel is not included. You must return the car with the same fuel level as at pick-up."
  },
    {
      question: "Do you offer insurance?",
      answer:
        "Yes, all our cars include basic insurance. You can upgrade to full coverage for added protection."
    },
    {
      question: "Can I return the car to a different location?",
      answer:
        "Yes, we offer one-way rentals between select locations for an additional fee."
    },
    {
      question: "What happens if I return the car late?",
      answer:
        "Late returns may incur additional hourly charges. Please contact us if you expect to be late."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Find answers to the most common questions about our car rental service.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`icon ${activeIndex === index ? "rotate" : ""}`}
                />
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
