import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Stethoscope, Coffee, ShoppingBag } from 'lucide-react';
import { CaseStudy } from '../types';

const studies: CaseStudy[] = [
  {
    client: 'Real Estate',
    category: 'Real Estate',
    metric: '330+ Leads',
    description: 'Want to know how we successful achieved 330+ leads?',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    client: 'Healthcare',
    category: 'Healthcare',
    metric: '8x Revenue',
    description: 'Looking for an integrated marketing strategy that could get you 8x revenue?',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd8189718c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    client: 'F&B',
    category: 'Food & Beverage',
    metric: '5% Engagement',
    description: 'Want to achieve engagement rates above the industry standards of 5% engagement?',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    client: 'Retail',
    category: 'Retail',
    metric: 'Max ROAS',
    description: 'What strategy can get you maximum conversion & ROAS?',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

const icons = [Home, Stethoscope, Coffee, ShoppingBag];

const CaseStudies: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dna-dark mb-4">
            Case Studies
          </h2>
          <p className="text-gray-500 mt-4 text-lg">Real results. Measurable growth.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {studies.map((study, index) => {
            const Icon = icons[index % icons.length];
            return (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
                >
                <div className="h-48 overflow-hidden relative">
                    <img
                        src={study.image}
                        alt={study.client}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white p-2 rounded-full text-dna-primary shadow-md">
                        <Icon className="w-5 h-5" />
                    </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">{study.category}</span>
                        <h3 className="text-xl font-bold text-dna-dark mb-3">{study.client}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            {study.description}
                        </p>
                    </div>
                    <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                         <div>
                            <p className="text-xs text-gray-400">Achieved</p>
                            <p className="font-bold text-dna-primary">{study.metric}</p>
                         </div>
                         <ArrowRight className="w-5 h-5 text-gray-300" />
                    </div>
                </div>
                </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;