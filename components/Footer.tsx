import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Dna } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0 max-w-sm">
             <a href="#" className="flex items-center space-x-2 mb-4 group">
                <div className="w-8 h-8 bg-dna-dark rounded-lg flex items-center justify-center text-white">
                    <Dna className="w-5 h-5" />
                </div>
                <div className="flex flex-col leading-none">
                    <span className="text-xl font-display font-black text-dna-dark tracking-tight">
                        SOCIAL DNA
                    </span>
                </div>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
                Where digital meets biological. We ensure we are committed to our clients and deliver measured results.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
             <div>
                <h4 className="font-bold text-dna-dark mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-500">
                    <li><a href="#" className="hover:text-dna-primary">Best Digital Marketing Agency</a></li>
                    <li><a href="#" className="hover:text-dna-primary">Know Us</a></li>
                    <li><a href="#" className="hover:text-dna-primary">Case Studies</a></li>
                </ul>
             </div>
             <div>
                <h4 className="font-bold text-dna-dark mb-4">Services</h4>
                <ul className="space-y-2 text-gray-500">
                    <li><a href="#" className="hover:text-dna-primary">Web Designing</a></li>
                    <li><a href="#" className="hover:text-dna-primary">Web UI/UX</a></li>
                    <li><a href="#" className="hover:text-dna-primary">Data Analytics</a></li>
                </ul>
             </div>
             <div className="col-span-2 md:col-span-1">
                <h4 className="font-bold text-dna-dark mb-4">Contact</h4>
                <p className="text-gray-500 mb-2">aditya@socialdna.in</p>
                <p className="text-gray-500">+91-98495 61567</p>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} Social DNA. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-dna-primary transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="hover:text-dna-primary transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hover:text-dna-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="hover:text-dna-primary transition-colors"><Instagram className="w-4 h-4" /></a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;