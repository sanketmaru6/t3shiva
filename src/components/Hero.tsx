import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section
      className="theme-bg relative overflow-hidden pt-28 pb-20"
      style={{ minHeight: '100vh' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <h1
              className="text-5xl lg:text-6xl font-bold theme-text leading-tight"
              style={{ lineHeight: '1.2' }}
            >
              T3 Shiva, Where{' '}
              <span className="theme-primary">TYPO3</span>{' '}
              Meets{' '}
              <span className="theme-primary">ReactJs</span>!
            </h1>

            <p
              className="text-xl theme-text-secondary max-w-lg"
              style={{ lineHeight: '1.7' }}
            >
              T3 Shiva – the ultimate TYPO3 Headless Template crafted with ReactJS & NextJS.
              Focused on modern design and lightning-fast performance.
            </p>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                className="inline-flex items-center justify-center theme-bg-primary hover:opacity-90 text-white px-8 py-4 theme-radius font-semibold transition-all duration-200 theme-shadow"
                style={{ fontSize: '1rem', letterSpacing: '0.3px' }}
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5 ml-2" />
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
            <div className="relative z-10 theme-shadow theme-radius overflow-hidden border theme-border">
              {/* Browser Header */}
              <div className="flex items-center space-x-3 px-6 py-4 border-b theme-border theme-bg">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 px-4 py-2 text-sm theme-text-secondary theme-bg theme-radius border theme-border">
                  https://t3shiva.com
                </div>
              </div>

              {/* Mockup content */}
              <div className="p-8 theme-bg">
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="T3 Shiva Dashboard"
                  className="w-full h-56 object-cover theme-radius"
                  style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
                />
              </div>
            </div>

            {/* Floating Icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 theme-bg-primary p-3 theme-radius theme-shadow"
              style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            >
              <div className="w-6 h-6 theme-bg theme-radius flex items-center justify-center">
                <span className="theme-primary font-bold text-sm">V</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-4 -left-4 theme-bg-secondary p-3 theme-radius theme-shadow"
              style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            >
              <div className="w-6 h-6 theme-bg theme-radius flex items-center justify-center">
                <span className="theme-secondary font-bold text-sm">⚛</span>
              </div>
            </motion.div>

            {/* Background Glow Circle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.12 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl -z-10"
              style={{
                width: '400px',
                height: '400px',
                background: 'var(--color-primary, #4F46E5)',
                filter: 'blur(120px)',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
