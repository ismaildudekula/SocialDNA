import React, { useState, useEffect } from 'react';
import { Menu, X, Dna } from 'lucide-react';
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
        isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-white/50 backdrop-blur-sm py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-dna-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-200">
             <Dna className="w-6 h-6" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-display font-black text-dna-dark tracking-tight">
                SOCIAL DNA
            </span>
            <span className="text-[0.6rem] font-bold text-gray-400 tracking-widest uppercase">
                Digital Agency
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 bg-white/80 px-8 py-3 rounded-full border border-gray-100 shadow-sm">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-gray-600 hover:text-dna-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
            <a
                href="#contact"
                className="px-6 py-2.5 bg-dna-dark text-white rounded-full font-semibold text-sm hover:bg-dna-primary transition-colors shadow-lg"
            >
                Let's Collaborate
            </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-dna-dark p-2"
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
            className="lg:hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium text-gray-800 hover:text-dna-primary border-b border-gray-50 pb-2"
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