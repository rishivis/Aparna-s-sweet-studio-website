import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-brand-cream-light font-sans scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
            id="about-image-wrapper"
          >
            {/* Soft decorative shadow/border decoration */}
            <div className="absolute -inset-4 bg-brand-accent/30 rounded-2xl -rotate-2 blur-sm z-0" />
            
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-brand-accent/40 bg-white z-10 aspect-[4/5]">
              <img 
                src="https://raw.githubusercontent.com/rishivis/image/main/chefaparna.png" 
                alt="Aparna decorating an artisanal cake" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 duration-700 transition"
                id="about-chef-image"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm shadow px-4 py-2 rounded-lg border border-brand-accent/20 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
                <span className="text-xs font-semibold text-brand-secondary tracking-widest font-mono">BAKED WITH PASSION</span>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
            id="about-content"
          >
            <div className="space-y-2">
              <span className="text-sm font-bold tracking-widest text-brand-primary uppercase font-mono block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary leading-tight">
                From a Home Kitchen to Your Celebrations
              </h2>
            </div>

            <p className="text-brand-tertiary text-lg leading-relaxed">
              Aparna's Sweet Studio began with a simple passion for creating smiles through sugar and flour. 
              What started as a weekend hobby in a cozy home kitchen has blossomed into a destination for 
              boutique confectionery, crafting unforgettable sensory moments for Kanpur's happiest parties.
            </p>

            <p className="text-brand-tertiary/90 text-md leading-relaxed">
              Every delicate detail is painted by hand, every chocolate is melted with precision, and every 
              loaf rises under the close supervision of our artisanal confectioners.
            </p>

            {/* Check Features */}
            <div className="space-y-3 pt-2" id="about-features-list">
              {[
                { title: '100% Organic, Fresh Ingredients', desc: 'No artificial preservatives, mock creams, or hydrogenated oils.' },
                { title: 'Personalized Design Consultations', desc: 'Working 1-on-1 to craft a bespoke centerpiece matching your theme perfectly.' },
                { title: 'Small-batch Artisanal Craftsmanship', desc: 'Freshness prioritized. We restrict our weekly orders to maintain meticulous quality.' }
              ].map((feature, i) => (
                <div key={i} className="flex items-start space-x-3 group" id={`feature-item-${i}`}>
                  <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-brand-primary text-white shrink-0 group-hover:scale-110 transition shadow">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-secondary leading-snug">{feature.title}</h4>
                    <p className="text-sm text-brand-tertiary/80">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
