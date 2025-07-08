import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className="theme-bg pt-28 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-6xl font-bold theme-text leading-tight">
              T3 Shiva, Where{' '}
              <span className="theme-primary">TYPO3</span>{' '}
              Meets{' '}
              <span className="theme-primary">ReactJs</span>!
            </h1>

            <p className="text-xl theme-text-secondary leading-relaxed max-w-lg">
              T3 Shiva – the ultimate TYPO3 Headless Template crafted with ReactJS & NextJS. 
              Focused on modern design and lightning-fast performance.
            </p>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="inline-flex items-center space-x-2 theme-bg-primary hover:opacity-90 text-white px-8 py-4 theme-radius font-semibold transition-all duration-200 theme-shadow">
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right content - Browser mockup */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="theme-surface theme-radius overflow-hidden theme-shadow theme-border border">
                {/* Browser header */}
                <div className="theme-bg px-6 py-4 flex items-center space-x-3 theme-border border-b">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 theme-surface theme-radius px-4 py-2 text-sm theme-text-secondary theme-border border">
                    https://t3shiva.com
                  </div>
                </div>

                {/* Browser content */}
                <div className="theme-bg p-8">
                  <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="T3 Shiva Dashboard"
                    className="w-full h-56 object-cover theme-radius"
                  />
                </div>
              </div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 theme-bg-primary p-3 theme-radius theme-shadow"
              >
                <div className="w-6 h-6 theme-bg theme-radius flex items-center justify-center">
                  <span className="theme-primary font-bold text-sm">V</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-4 -left-4 theme-bg-secondary p-3 theme-radius theme-shadow"
              >
                <div className="w-6 h-6 theme-bg theme-radius flex items-center justify-center">
                  <span className="theme-secondary font-bold text-sm">⚛</span>
                </div>
              </motion.div>
            </div>

            {/* Background circle glow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] theme-bg-primary rounded-full blur-3xl -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
