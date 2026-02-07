import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialData {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: TestimonialData[] = [
  {
    name: "Mrs Anita Fracis",
    role: "Proprietress",
    company: "Anita's Handcrafted Chocolates",
    content: "Social DNA, in a nutshell is simply the best place to go to for any and all solutions. The USP of Aditya and team is their professionalism along with personalised service. This translates into building long and lasting relationships based on trust. Aditya makes each client feel special. He takes time to understand their specific needs, provides the necessary initial hand holding and ensures that he and his team walk that extra mile to deliver unmatched service. He takes ownership and responsibility to the next level. Every step forward taken by a client brings a huge, delighted smile to his face. Aditya, you are an achiever and will continue to grow Social DNA from strength to strength and scale great heights. I wish only the best for you.",
    image: "https://socialdna.in/wp-content/uploads/2021/02/Anita.png"
  },
  {
    name: "Mr Vishal Kaushik",
    role: "Assistant Manager Facilities Management",
    company: "Jones Lang LaSalle",
    content: "Each member of their team has a different creative outlook. It’s unique and comes together nicely. They bring the capability and know-how of a big agency and the entrepreneurial spirit of a start-up. They've always been exceptionally helpful, easy to communicate with, and they offer a quick turnaround time. The company's willingness to engage at short notice and the frequency of their contact are both amazing. I wish them a fabulous time ahead...",
    image: "https://socialdna.in/wp-content/uploads/2021/02/Vishal_JLL.png"
  },
  {
    name: "Mr Nishikanth Nandiraju",
    role: "Deputy General Manager - IT",
    company: "Aurobindo Pharma",
    content: "Social DNA have been instrumental in getting 3 of my projects to life. They have been superb to understand concepts and trends very quickly that helps Corporates attain better value and results. They are extremely knowledgeable of the market trends that facilitate interesting discussions before decision making. A great team to work with and they add considerable value to the Company by bringing in great energy and thought process to the table",
    image: "https://socialdna.in/wp-content/themes/sdna/img/client3.png"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-dna-primary py-24 text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
             <div className="text-center mb-16">
                <h3 className="text-3xl font-display font-bold mb-2">Client Testimonials</h3>
                <div className="w-20 h-1 bg-white/30 mx-auto rounded-full"></div>
             </div>

             <div className="max-w-5xl mx-auto relative">
                {/* Navigation Buttons */}
                <button 
                  onClick={prev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden md:block"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                
                <button 
                  onClick={next}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden md:block"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* Content Card */}
                <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-[3rem] border border-white/20 min-h-[400px] flex flex-col items-center justify-center">
                  <AnimatePresence mode='wait'>
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center"
                    >
                      <Quote className="w-12 h-12 text-white/40 mb-8" />
                      
                      <p className="text-lg md:text-xl leading-relaxed text-center mb-10 italic max-w-3xl">
                          "{testimonials[currentIndex].content}"
                      </p>
                      
                      <div className="text-center flex flex-col items-center">
                          <div className="w-20 h-20 rounded-full border-4 border-white/20 overflow-hidden mb-4 shadow-lg">
                            <img 
                              src={testimonials[currentIndex].image} 
                              alt={testimonials[currentIndex].name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
                          <p className="text-sm opacity-90 mb-1">{testimonials[currentIndex].role}</p>
                          <p className="text-xs font-bold uppercase tracking-wider text-orange-200 mt-1">{testimonials[currentIndex].company}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Mobile Navigation Indicators */}
                <div className="flex justify-center gap-3 mt-8">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        idx === currentIndex ? 'bg-white w-8' : 'bg-white/30'
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
             </div>
        </div>
    </section>
  );
};

export default Testimonials;