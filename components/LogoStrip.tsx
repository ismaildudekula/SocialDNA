import React from 'react';

const LogoStrip: React.FC = () => {
  return (
    <section className="bg-dna-light py-12 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-8">Our Growth Partners</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60">
          {[1, 2, 3, 4].map((i) => (
             <div key={i} className="flex items-center gap-2 text-gray-500 font-bold text-xl grayscale hover:grayscale-0 hover:text-white transition-all cursor-pointer">
                <div className="w-10 h-10 bg-white/10 rounded-full"></div>
                <span>Client {i}</span>
             </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-8">
            <button className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-gray-500 hover:text-white transition-colors">Previous</button>
            <button className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-gray-500 hover:text-white transition-colors">Next</button>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;