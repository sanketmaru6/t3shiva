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
    <footer className={`${isMinimal ? 'theme-surface theme-text' : 'custom-footer'}`}>
      <div className="footer-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`footer-grid ${isExtended ? 'footer-grid-extended' : isMinimal ? 'footer-grid-minimal' : 'footer-grid-default'}`}
        >
          {/* Company Info */}
          <motion.div variants={fadeUp}>
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <span className="footer-logo-text">T3</span>
              </div>
              <span className="footer-brand">T3shiva</span>
            </div>
            <div className={`footer-address ${isMinimal ? 'theme-text-secondary' : 'footer-text-light'}`}>
              <p>301, Victoria Heights, Victoria Park Road,</p>
              <p>Bhavnagar - 364002, Gujarat - INDIA.</p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} custom={1}>
            <h4 className={`footer-heading ${isMinimal ? 'theme-text' : 'text-white'}`}>Contact us</h4>
            <div className={`footer-contact ${isMinimal ? 'theme-text-secondary' : 'footer-text-light'}`}>
              <p>contact@t3planet.com</p>
              <p>+ 91 9898818919</p>
              <p>+ 49 212 73879993</p>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div variants={fadeUp} custom={2}>
            <h4 className={`footer-heading ${isMinimal ? 'theme-text' : 'text-white'}`}>Follow Us</h4>
            <div className="footer-socials">
              {[Twitter, Facebook, Linkedin, Play, Instagram].map((Icon, idx) => (
                <Icon
                  key={idx}
                  className={`footer-icon ${
                    isMinimal ? 'theme-text-secondary hover-theme-text' : 'text-gray-400 hover-white'
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
                <h4 className="footer-heading text-white">Quick Links</h4>
                <div className="footer-links">
                  {['About Us', 'Services', 'Portfolio', 'Blog'].map((link, idx) => (
                    <p key={idx} className="footer-link">
                      {link}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div variants={fadeUp} custom={4}>
                <h4 className="footer-heading text-white">Newsletter</h4>
                <p className="footer-news-desc">Subscribe to get updates</p>
                <div className="footer-newsletter">
                  <input type="email" placeholder="Your email" className="footer-input" />
                  <button className="footer-subscribe">Subscribe</button>
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
          className={`footer-bottom ${isMinimal ? 'theme-border theme-text-secondary' : 'footer-border'}`}
        >
          <p>© {new Date().getFullYear()}, All Rights Reserved. Made by T3Planet with ❤️</p>

          {/* Feedback Button */}
          <motion.button
            className="feedback-button"
            onClick={() => (window.location.href = '/feedback')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Give Feedback
          </motion.button>
        </motion.div>
      </div>

     
      <style>{`
        .custom-footer {
          background-color: #111827;
          color: white;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 4rem 1.5rem;
        }

        .footer-grid {
          display: grid;
          gap: 3rem;
        }

        .footer-grid-default {
          grid-template-columns: repeat(4, 1fr);
        }

        .footer-grid-minimal {
          grid-template-columns: repeat(2, 1fr);
        }

        .footer-grid-extended {
          grid-template-columns: repeat(5, 1fr);
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .footer-logo-icon {
          width: 2rem;
          height: 2rem;
          background-color: #2563eb;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-logo-text {
          color: white;
          font-weight: bold;
          font-size: 0.875rem;
        }

        .footer-brand {
          font-size: 1.25rem;
          font-weight: bold;
        }

        .footer-address p {
          margin-bottom: 0.25rem;
        }

        .footer-heading {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .footer-contact p {
          margin-bottom: 0.5rem;
        }

        .footer-socials {
          display: flex;
          gap: 1rem;
        }

        .footer-icon {
          width: 1.25rem;
          height: 1.25rem;
          cursor: pointer;
          transition: transform 0.3s;
        }

        .footer-icon:hover {
          transform: scale(1.1);
        }

        .hover-theme-text:hover {
          color: #2563eb;
        }

        .hover-white:hover {
          color: white;
        }

        .footer-links p {
          color: #9ca3af;
          cursor: pointer;
          transition: color 0.2s;
        }

        .footer-links p:hover {
          color: white;
        }

        .footer-news-desc {
          color: #9ca3af;
          margin-bottom: 1rem;
        }

        .footer-newsletter {
          display: flex;
        }

        .footer-input {
          flex: 1;
          padding: 0.5rem 1rem;
          background-color: #1f2937;
          color: white;
          border: 1px solid #374151;
          border-radius: 0.5rem 0 0 0.5rem;
          outline: none;
        }

        .footer-subscribe {
          background-color: #2563eb;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0 0.5rem 0.5rem 0;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .footer-subscribe:hover {
          opacity: 0.9;
        }

        .footer-bottom {
          border-top: 1px solid #1f2937;
          margin-top: 3rem;
          padding-top: 2rem;
          text-align: center;
          color: #9ca3af;
          position: relative;
        }

        .feedback-button {
          margin-top: 1rem;
          background-color: #2563eb;
          color: white;
          border: none;
          padding: 0.6rem 1.25rem;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .feedback-button:hover {
          background-color: #1e40af;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
