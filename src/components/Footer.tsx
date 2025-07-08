import React from 'react';
import { Twitter, Facebook, Linkedin, Play, Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const Footer = () => {
  const { theme } = useTheme();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const isMinimal = theme.footerStyle === 'minimal';
  const isExtended = theme.footerStyle === 'extended';

  return (
    <footer className={`${isMinimal ? 'theme-surface theme-text' : 'bg-gray-900 text-white'}`}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid ${isExtended ? 'lg:grid-cols-5' : isMinimal ? 'lg:grid-cols-2' : 'lg:grid-cols-4'} gap-12`}
        >
          {/* Company Info */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 theme-bg-primary theme-radius flex items-center justify-center">
                <span className="text-white font-bold text-sm">T3</span>
              </div>
              <span className="text-xl font-bold">T3shiva</span>
            </div>
            <div className={`space-y-2 ${isMinimal ? 'theme-text-secondary' : 'text-gray-400'} mb-6`}>
              <p>301, Victoria Heights, Victoria Park Road,</p>
              <p>Bhavnagar - 364002, Gujarat - INDIA.</p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} custom={1}>
            <h4 className={`font-semibold text-lg mb-6 ${isMinimal ? 'theme-text' : 'text-white'}`}>Contact us</h4>
            <div className={`space-y-3 ${isMinimal ? 'theme-text-secondary' : 'text-gray-400'}`}>
              <p>contact@t3planet.com</p>
              <p>+ 91 9898818919</p>
              <p>+ 49 212 73879993</p>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div variants={fadeUp} custom={2}>
            <h4 className={`font-semibold text-lg mb-6 ${isMinimal ? 'theme-text' : 'text-white'}`}>Follow Us</h4>
            <div className="flex space-x-4">
              {[Twitter, Facebook, Linkedin, Play, Instagram].map((Icon, idx) => (
                <Icon
                  key={idx}
                  className={`w-5 h-5 cursor-pointer transition-all duration-300 hover:scale-110 ${
                    isMinimal
                      ? 'theme-text-secondary hover:theme-text'
                      : 'text-gray-400 hover:text-white'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Extended footer content */}
          {isExtended && (
            <>
              {/* Quick Links */}
              <motion.div variants={fadeUp} custom={3}>
                <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
                <div className="space-y-3 text-gray-400">
                  {['About Us', 'Services', 'Portfolio', 'Blog'].map((link, idx) => (
                    <p
                      key={idx}
                      className="hover:text-white cursor-pointer transition-colors duration-200"
                    >
                      {link}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div variants={fadeUp} custom={4}>
                <h4 className="text-white font-semibold text-lg mb-6">Newsletter</h4>
                <p className="text-gray-400 mb-4">Subscribe to get updates</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="theme-bg-primary px-4 py-2 rounded-r-lg text-white hover:opacity-90 transition-opacity duration-200">
                    Subscribe
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className={`border-t mt-12 pt-8 text-center ${
            isMinimal ? 'theme-border theme-text-secondary' : 'border-gray-800 text-gray-400'
          }`}
        >
          <p>
            © {new Date().getFullYear()}, All Rights Reserved. Made by T3Planet with ❤️
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
