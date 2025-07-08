import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-purple-50 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6"
        >
          Ready To Launch Your Next Project?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-lg lg:text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
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
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-md transition-all duration-300"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default CTA;
