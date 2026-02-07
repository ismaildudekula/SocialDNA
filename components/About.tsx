import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
       <div className="container mx-auto px-6">
         <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-gray-200 flex-grow"></div>
            <h2 className="text-3xl font-display font-black text-gray-200 uppercase tracking-widest">PR NEWS</h2>
            <div className="h-px bg-gray-200 flex-grow"></div>
         </div>
         
         <div className="grid lg:grid-cols-3 gap-12">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 p-8 rounded-3xl hover:bg-orange-50 transition-colors group"
            >
                <h3 className="text-xl font-bold mb-4 text-dna-dark">Catalyst of Transformation</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                    Over the years, Social DNA, by virtue of its commitment to deliver value to its clients, has not just earned a formidable reputation in the industry but has been rewarded with a whole lot of recognition. Social DNA is changing the marketing industry by making a difference. They go above and beyond their role of a solutions provider to be the catalyst of digital transformation, delivering measurable results.
                </p>
                <a href="#" className="text-dna-primary font-bold text-sm hover:underline">Read more &gt;&gt;</a>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 p-8 rounded-3xl hover:bg-orange-50 transition-colors group"
            >
                <h3 className="text-xl font-bold mb-4 text-dna-dark">Revolutionary Innovations</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                    If you make the mistake of looking back too much, you aren’t focused enough on the road in front of you’ the journey of building Social DNA is the embodiment of this. At Social DNA, we strive for revolutionary innovations that disrupt the marketing industry. The major challenge in the digital marketing world is fourfold.
                </p>
                <a href="#" className="text-dna-primary font-bold text-sm hover:underline">Read more &gt;&gt;</a>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-50 p-8 rounded-3xl hover:bg-orange-50 transition-colors group"
            >
                <h3 className="text-xl font-bold mb-4 text-dna-dark">360-degree Approach</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                    Social DNA is one among the few performance based marketing agencies in the country offering a 360-degree approach covering all facets of digital marketing. This enthusiastic and proactive company prides in its synergized team and highly commemorates it's ROI based marketing strategies that excel in delivering SMART (Specific, Measurable, Attainable, Relevant & Time-bound) results.
                </p>
                <a href="#" className="text-dna-primary font-bold text-sm hover:underline">Read more &gt;&gt;</a>
            </motion.div>
         </div>
       </div>
    </section>
  );
};

export default About;