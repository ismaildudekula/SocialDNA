import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const navItems: NavItem[] = [
  { label: 'Best Digital Marketing Agency', href: '#' },
  { label: 'Know Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dna-dark/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <img 
            src="https://socialdna.in/wp-content/uploads/2021/04/logo-w-new.png" 
            alt="Social DNA" 
            className="h-12 w-auto object-contain brightness-100" // Ensuring visibility on dark
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-gray-300 hover:text-dna-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
            <a
                href="#contact"
                className="px-6 py-2.5 bg-dna-primary text-white rounded-full font-semibold text-sm hover:bg-dna-accent transition-colors shadow-lg shadow-orange-900/20"
            >
                Let's Collaborate
            </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dna-light border-t border-white/10 absolute top-full left-0 right-0 shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium text-gray-200 hover:text-dna-primary border-b border-white/5 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;