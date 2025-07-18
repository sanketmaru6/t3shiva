import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="cta-title"
        >
          Ready To Launch Your Next Project?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="cta-description"
        >
          With lots of unique blocks and components, you can easily build a beautiful page without touching code. Launch your next TYPO3 Headless website today.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="cta-button"
        >
          Get Started
        </motion.button>
      </div>

      {/* Inline CSS */}
      <style>{`
        .cta-section {
          background: linear-gradient(to right, #ebf4ff, #ffffff, #f3e8ff);
          padding: 6rem 1.5rem;
          text-align: center;
        }

        .cta-container {
          max-width: 64rem;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .cta-title {
          font-size: 2.25rem;
          line-height: 1.2;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 1024px) {
          .cta-title {
            font-size: 3rem;
          }
        }

        .cta-description {
          font-size: 1.125rem;
          color: #4a5568;
          margin-bottom: 2.5rem;
          max-width: 40rem;
          margin-left: auto;
          margin-right: auto;
        }

        @media (min-width: 1024px) {
          .cta-description {
            font-size: 1.25rem;
          }
        }

        .cta-button {
          background-color: #2563eb;
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 0.75rem;
          font-size: 1.125rem;
          font-weight: 600;
          box-shadow: 0 10px 15px rgba(37, 99, 235, 0.2);
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
        }

        .cta-button:hover {
          background-color: #1e40af;
          box-shadow: 0 15px 25px rgba(37, 99, 235, 0.25);
        }

        .cta-button:active {
          transform: scale(0.95);
        }
      `}</style>
    </section>
  );
};

export default CTA;
