import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, BarChart2, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
      {
          title: "Web Designing",
          icon: <Palette className="w-8 h-8" />,
          desc: "Create visually stunning and user-centric website designs that capture your brand essence.",
          image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
          title: "Web UI/UX",
          icon: <Code2 className="w-8 h-8" />,
          desc: "Seamless user experiences and intuitive interfaces that drive engagement and conversions.",
          image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          highlight: true
      },
      {
          title: "Data Analytics",
          icon: <BarChart2 className="w-8 h-8" />,
          desc: "Unlock the power of data to make informed decisions and optimize your digital strategies.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
  ];

  return (
    <section id="services" className="py-24 bg-dna-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
                <span className="text-dna-primary font-bold tracking-widest uppercase text-sm mb-2 block">Technology</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
                    Revolutionizing the brand <br/> with innovation
                </h2>
                <p className="text-gray-400 text-lg">
                    Build Your Footprint. Discover more services for digital transformation.
                </p>
            </div>
            <a href="#contact" className="hidden md:flex items-center gap-2 text-dna-primary font-bold border-b-2 border-dna-primary pb-1 hover:text-dna-accent hover:border-dna-accent transition-colors">
                View All Services <ArrowRight className="w-4 h-4" />
            </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
                <motion.div
                    key={idx}
                    whileHover={{ y: -10 }}
                    className="group relative overflow-hidden rounded-3xl h-[400px] border border-white/5"
                >
                    <img 
                        src={service.image} 
                        alt={service.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                        <div className="mb-4 text-dna-primary opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all origin-left">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                            {service.desc}
                        </p>
                        <div className="w-8 h-1 bg-dna-primary rounded-full"></div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;