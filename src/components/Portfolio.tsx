import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    { title: 'Aura Branding Design', category: 'Branding' },
    { title: 'AB & Snack Packaging', category: 'Packaging' },
    { title: 'Gradient Website Development', category: 'Development' },
    { title: 'Magazine Content Writing', category: 'Content' }
  ];

  // animation variants
  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 0.8
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
            Our Works Describe <span className="text-blue-600">Why We're the Best</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Dive into some of our finest work that blends creativity and performance.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              
              whileHover={{ scale: 1.03, rotate: 0.3 }}
              className="group bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Area with zoom */}
              <motion.div
                className="relative h-44 bg-gray-200 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-30 group-hover:opacity-50 transition duration-300 rounded-b-2xl" />
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute top-4 right-4 text-white text-xl"
                >
                  ✨
                </motion.div>
              </motion.div>

              {/* Text Content */}
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="text-center"
        >
          <button className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-2xl transition-all duration-300">
            <span>See all works</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
