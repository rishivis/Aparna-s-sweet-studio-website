import React from 'react';
import { motion } from 'motion/react';
import { SPECIALTIES } from '../data';

export default function SpecialtiesSection() {
  return (
    <section id="specialties" className="py-24 bg-brand-cream-dark relative overflow-hidden scroll-mt-16">
      {/* Soft abstract floating decoration */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-pink-container/20 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header content */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-brand-primary uppercase font-mono bg-white border border-brand-accent/40 rounded-full px-4 py-1.5 inline-block">
            Boutique Specialties
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary h-auto">
            Our Sweet Specialties
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
          <p className="text-brand-tertiary text-lg">
            Discover our curated collection of delights, from towering custom wedding cakes to fine Parisian-style macarons and bite-sized treats.
          </p>
        </div>

        {/* Categories Grid - 3 columns on lg, 2 on md, 1 on sm */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="specialties-grid">
          {SPECIALTIES.map((spec, index) => (
            <motion.div 
              key={spec.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-brand-cream-light rounded-xl overflow-hidden shadow-lg border border-brand-accent/30 group cursor-pointer"
              id={`specialty-card-${spec.id}`}
            >
              {/* Image box with overlay */}
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={spec.image} 
                  alt={spec.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 duration-500 ease-out transition"
                  id={`spec-img-${spec.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/80 via-transparent to-transparent opacity-40 group-hover:opacity-50 transition-opacity" />
                
                {/* Decorative border inside image */}
                <div className="absolute inset-4 border border-white/20 rounded-lg pointer-events-none group-hover:inset-3 duration-300 transition-all" />
              </div>

              {/* Text Area */}
              <div className="p-6 text-center space-y-2 bg-brand-cream-light relative z-20">
                <h3 className="text-xl font-serif font-bold text-brand-secondary group-hover:text-brand-primary transition-colors">
                  {spec.title}
                </h3>
                <p className="text-sm text-brand-tertiary/90 leading-relaxed font-sans font-normal">
                  {spec.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Benefits Row */}
        <div className="mt-20 pt-16 border-t border-brand-accent/40" id="benefits-highlight">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { icon: '🌱', label: 'Fresh Ingredients', sub: 'Local & Organic' },
              { icon: '🏠', label: 'Homemade Quality', sub: 'From the heart' },
              { icon: '✍️', label: 'Custom Designs', sub: '1-on-1 Consults' },
              { icon: '⏰', label: 'Timely Delivery', sub: 'Kanpur-wide' },
              { icon: '🧼', label: 'Hygienic Prep', sub: 'Meticulous Care' }
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col items-center space-y-2 group" id={`benefit-${i}`}>
                <div className="w-14 h-14 bg-brand-accent/40 border border-brand-accent rounded-full flex items-center justify-center text-2xl shadow-inner group-hover:bg-brand-pink-container/40 group-hover:scale-110 duration-300 transition">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-brand-secondary text-sm md:text-base leading-tight">{benefit.label}</h4>
                <p className="text-xs text-brand-tertiary/70 font-sans">{benefit.sub}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
