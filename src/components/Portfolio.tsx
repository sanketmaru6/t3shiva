import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: "Aura Branding Design",
      category: "Branding"
    },
    {
      title: "AB & Snack Packaging",
      category: "Packaging"
    },
    {
      title: "Gradient Website Development",
      category: "Development"
    },
    {
      title: "Magazine Content Writing",
      category: "Content"
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Works Describe Why We Are The Best In The Business
          </h2>
          <p className="text-gray-500 text-lg">
            A glimpse into our finest projects
          </p>
        </motion.div>

        {/* Portfolio Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Placeholder Thumbnail */}
              <div className="h-32 bg-gradient-to-tr from-gray-200 to-gray-300 rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300 shadow-inner"></div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.category}</p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-center"
        >
          <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200">
            <span>See all works</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
