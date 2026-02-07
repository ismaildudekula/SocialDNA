import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-dna-dark min-h-[90vh] flex items-center">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-dna-primary/10 to-transparent pointer-events-none" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-dna-primary text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-dna-primary animate-pulse"></span>
                <span>Top Rated Agency</span>
             </div>
            <h1 className="text-5xl lg:text-7xl font-display font-black leading-[1.1] text-white">
              Best <br />
              <span className="text-dna-primary relative inline-block">
                Digital Marketing
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-orange-900/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> <br />
              Agency
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
             <h3 className="text-xl font-bold text-gray-200 flex items-center gap-2">
                Know Us
                <div className="h-px w-12 bg-dna-primary"></div>
             </h3>
             <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                There is a reason why 90% of our clients have been with us for over 6 years because we ensure we are committed to our clients. We’re in the business of delivering measured results and we go above and beyond to achieve our goals.
             </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#about"
              className="px-8 py-4 bg-dna-primary text-white font-bold rounded-full hover:bg-dna-accent transition-all shadow-lg shadow-orange-900/30 flex items-center gap-2"
            >
              Read More
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 text-gray-300 font-bold rounded-full border-2 border-white/10 hover:border-white/30 hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <PlayCircle className="w-5 h-5" />
              <span>Watch Story</span>
            </a>
          </motion.div>
        </div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
           <div className="relative z-10">
             {/* Main Image */}
             <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto w-full max-w-lg border border-white/10">
                <img 
                   src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                   alt="Digital Marketing Team" 
                   className="w-full h-[600px] object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dna-dark via-dna-dark/50 to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="font-display font-bold text-2xl mb-2">Social DNA</p>
                    <p className="opacity-80 text-sm text-gray-300">Changing the marketing industry by making a difference.</p>
                </div>
             </div>

             {/* Badge */}
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-8 -right-4 md:-right-8 bg-dna-surface p-4 rounded-2xl shadow-xl border border-white/10 max-w-[180px] text-center backdrop-blur-md"
             >
                 <div className="w-12 h-12 bg-dna-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-2 shadow-lg shadow-orange-900/50">
                    5x
                 </div>
                 <p className="text-xs font-bold text-gray-200">Revenue Acquired</p>
                 <p className="text-[10px] text-gray-400">for marketing spends</p>
             </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;