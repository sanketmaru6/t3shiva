import React from 'react';
import { Palette, Layers, Building } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const Services = () => {
  const { theme } = useTheme();

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Pleasant Design",
      description: "Simply the best and elegant themes that you can use for your next landing page with modern aesthetics.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "React Hooks Data",
      description: "Thanks to our awesome hooks that you can use them easily in a clean and efficient way.",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Built In Components",
      description: "We have provided a lot of ready built-in components so it will be easy for customers.",
    }
  ];

  return (
    <section className="theme-surface py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold theme-text mb-4 leading-snug">
            We Provide Great Services<br />Based On Your Needs
          </h2>
          <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
            Crafted with performance, beauty, and simplicity in mind.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group theme-bg theme-radius p-8 theme-shadow theme-border border hover:scale-[1.025] transition-all duration-300 ease-in-out"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-tr from-theme-primary/10 to-transparent theme-radius flex items-center justify-center mb-6">
                <div className="theme-primary group-hover:scale-110 transition-transform duration-300 ease-out">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold theme-text mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="theme-text-secondary text-[15px] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
