import React from 'react';

const LogoStrip: React.FC = () => {
  return (
    <section className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-8">Our Growth Partners</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60">
          {[1, 2, 3, 4].map((i) => (
             <div key={i} className="flex items-center gap-2 text-gray-400 font-bold text-xl grayscale hover:grayscale-0 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <span>Client {i}</span>
             </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-8">
            <button className="p-2 rounded-full border border-gray-200 hover:bg-orange-50 text-gray-400 hover:text-orange-500 transition-colors">Previous</button>
            <button className="p-2 rounded-full border border-gray-200 hover:bg-orange-50 text-gray-400 hover:text-orange-500 transition-colors">Next</button>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;