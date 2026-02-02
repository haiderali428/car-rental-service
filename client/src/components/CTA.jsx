import React from "react";
import { motion } from "framer-motion";
import "./CTA.scss";

const CTA = () => {
  return (
    <section className="cta-section">
      <motion.div
        className="cta-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Ready to Hit the Road?</h2>
        <p>
          Experience hassle-free car rentals with premium service and unbeatable rates.
          Book your dream car today and make every journey memorable.
        </p>
        <motion.button
          className="cta-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = "/cars"}
        >
          Browse Cars
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CTA;
