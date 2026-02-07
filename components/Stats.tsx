import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Stats: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-dna-light text-white relative overflow-hidden border-y border-white/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="p-6"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-dna-primary mb-6">
                <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Top Rated</h3>
            <p className="text-gray-400">Advertising agency of Hyderabad</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-dna-primary mb-6">
                <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="text-5xl font-display font-black mb-2 text-white">500</h3>
            <p className="text-gray-400">Projects delivered</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6"
          >
             <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-dna-primary mb-6">
                <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-5xl font-display font-black mb-2 text-white">5X</h3>
            <p className="text-gray-400">Revenue acquired for the marketing spends</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Stats;