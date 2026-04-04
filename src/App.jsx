import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Brands from './sections/Brands';
import Features from './sections/Features';
import Products from './sections/Products';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Brands />
        <Features />
        <Products />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      {/* Professional Floating WhatsApp pill button */}
      <motion.a
        href="https://wa.me/919993004008?text=Hi! I have an inquiry about your products."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed', bottom: '40px', right: '40px',
          backgroundColor: '#25D366', color: 'white',
          padding: '12px 24px', borderRadius: '100px',
          display: 'flex', alignItems: 'center', gap: '8px',
          boxShadow: '0 10px 40px rgba(37, 211, 102, 0.5)',
          zIndex: 9999, textDecoration: 'none',
          border: '2px solid rgba(255,255,255,0.3)',
          whiteSpace: 'nowrap',
          fontSize: '1rem', fontWeight: 800
        }}
      >
        <Phone size={22} fill="currentColor" />
        <span>Chat</span>
      </motion.a>
    </div>
  );
}

export default App;
