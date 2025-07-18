import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import MoveGym from './components/MoveGym';
import Feedback from './components/Feedback';

// Home Page Components
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import About from './components/About';
import Statistics from './components/Statistics';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import TestimonialFull from './components/TestimonialFull';
import CTA from './components/CTA';

// Home Layout
const Home = () => (
  <>
    <Hero />
    <Services />
    <Testimonial />
    <About />
    <Statistics />
    <Features />
    <Portfolio />
    <TestimonialFull />
    <CTA />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/move-gym" element={<MoveGym />} />
            <Route path="/feedback" element={<Feedback />} /> {/* ✅ Add Feedback Route */}
          </Routes>
          <Footer />
          <ThemeToggle />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
