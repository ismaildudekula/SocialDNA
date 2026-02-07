import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-dna-primary py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
             <div className="text-center mb-12">
                <h3 className="text-3xl font-display font-bold mb-2">Client Testimonials</h3>
                <div className="w-20 h-1 bg-white/30 mx-auto rounded-full"></div>
             </div>

             <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-[3rem] border border-white/20">
                <Quote className="w-12 h-12 text-white/40 mb-6 mx-auto" />
                <p className="text-lg md:text-xl leading-relaxed text-center mb-8 italic">
                    "Social DNA, in a nutshell is simply the best place to go to for any and all solutions. The USP of Aditya and team is their professionalism along with personalised service. This translates into building long and lasting relationships based on trust. Aditya makes each client feel special. He takes time to understand their specific needs, provides the necessary initial hand holding and ensures that he and his team walk that extra mile to deliver unmatched service. He takes ownership and responsibility to the next level. Every step forward taken by a client brings a huge, delighted smile to his face. Aditya, you are an achiever and will continue to grow Social DNA from strength to strength and scale great heights. I wish only the best for you."
                </p>
                
                <div className="text-center">
                    <h4 className="font-bold text-xl">Mrs Anita Fracis</h4>
                    <p className="text-sm opacity-90 mb-1">Proprietress</p>
                    <p className="text-xs font-bold uppercase tracking-wider text-orange-200">Anita's Handcrafted Chocolates</p>
                </div>
             </div>
        </div>
    </section>
  );
};

export default Testimonials;