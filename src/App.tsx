import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import About from './components/About';
import Statistics from './components/Statistics';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import TestimonialFull from './components/TestimonialFull';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <Testimonial />
        <About />
        <Statistics />
        <Features />
        <Portfolio />
        <TestimonialFull />
        <CTA />
        <Footer />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;