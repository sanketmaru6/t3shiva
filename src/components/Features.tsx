import React from 'react';
import { motion } from 'framer-motion';

const featureList = [
  {
    title: 'Latest React 18.x+',
    description: 'We are using the latest React 18.x+ with concurrent features for an awesome development experience.',
    icon: '⚛',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600',
  },
  {
    title: 'Built-In Components',
    description: 'We have provided a lot of ready built-in components so it will be easy for customers.',
    icon: '🔧',
    bgColor: 'bg-red-100',
    textColor: 'text-red-600',
  },
];

const Features = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-16"
        >
          Because It Is Unique, Swift And Modern!
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {featureList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                <span className={`${feature.textColor} text-2xl`}>{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
