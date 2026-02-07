import React from 'react';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden grid lg:grid-cols-2">
          
          {/* Info Side */}
          <div className="bg-dna-dark text-white p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-dna-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
                <h2 className="text-4xl font-display font-bold mb-6">LET’S COLLABORATE</h2>
                <p className="text-gray-400 text-lg mb-12">
                  Get industry leading digital solutions for your ambitious business.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-xl text-dna-primary shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Visit Us</h4>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Social DNA, 6-3-1089 A-3/1, Gulmohar Avenue, Rajbhavan Road, Somajiguda, Hyderabad, India – 500082.
                      </p>
                      <a href="#" className="text-dna-primary text-xs font-bold mt-2 inline-block hover:underline">See on Maps</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-xl text-dna-primary shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Call Us</h4>
                      <p className="text-gray-400 text-sm">+91-98495 61567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-xl text-dna-primary shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Email Us</h4>
                      <p className="text-gray-400 text-sm">aditya@socialdna.in</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-xl text-dna-primary shrink-0">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Website</h4>
                      <p className="text-gray-400 text-sm">www.socialdna.in</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 lg:p-16 bg-white">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">How can I help you?</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Name *</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-dna-primary focus:ring-1 focus:ring-orange-200 transition-all"
                  placeholder="Name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-dna-primary focus:ring-1 focus:ring-orange-200 transition-all"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject *</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-dna-primary focus:ring-1 focus:ring-orange-200 transition-all"
                  placeholder="Subject"
                />
              </div>
              
              <button 
                type="button"
                className="w-full bg-dna-primary text-white py-4 rounded-xl font-bold hover:bg-dna-accent shadow-lg shadow-orange-200 transition-all flex items-center justify-center space-x-2"
              >
                <span>Submit</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;