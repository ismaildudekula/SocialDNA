import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import Stats from './components/Stats';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dna-dark min-h-screen font-sans selection:bg-orange-500 selection:text-white text-dna-text">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <CaseStudies />
        <About />
        <LogoStrip />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;