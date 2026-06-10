import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, BookOpen, Clock, Heart } from 'lucide-react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data';

export default function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-brand-cream-dark scroll-mt-16 font-sans">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-brand-primary uppercase font-mono bg-white border border-brand-accent/40 rounded-full px-4 py-1.5 inline-block">
            Captured Celebrations
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary h-auto">
            Our Gallery
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
          <p className="text-brand-tertiary text-lg">
            A glimpse into the joy and beautiful milestones we’ve had the humble honor of sweetening.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="gallery-grid">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-xl shadow-md border border-brand-accent/20 overflow-hidden flex flex-col cursor-pointer group hover:shadow-xl transition-shadow duration-300"
              id={`gallery-item-${item.id}`}
            >
              {/* Image Box */}
              <div className="aspect-[3/4] relative overflow-hidden bg-brand-cream-dark">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 duration-700 transition"
                  id={`gallery-img-${item.id}`}
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-brand-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300 transition-opacity">
                  <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-full flex items-center space-x-2 text-brand-secondary select-none shadow">
                    <Eye className="w-4 h-4 text-brand-primary" />
                    <span className="font-bold text-xs tracking-wider uppercase font-sans">Read Cake Story</span>
                  </div>
                </div>
              </div>

              {/* Minimalist Footing details as shown in mockup */}
              <div className="p-5 text-center bg-white space-y-1">
                <h3 className="text-lg font-serif font-bold text-brand-secondary">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-tertiary/75 font-sans h-8 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Lightbox for Cake Stories */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-6"
              onClick={() => setSelectedItem(null)}
              id="gallery-lightbox"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25 }}
                className="bg-brand-cream-light border border-brand-accent rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative grid grid-cols-1 md:grid-cols-12"
                onClick={(e) => e.stopPropagation()}
                id="lightbox-card"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 bg-black/65 text-white hover:bg-brand-primary hover:text-white p-2 rounded-full transition cursor-pointer"
                  id="close-lightbox"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left side: Image */}
                <div className="md:col-span-6 relative aspect-square md:aspect-auto md:min-h-[450px]">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-none" />
                  <div className="absolute bottom-6 left-6 text-white space-y-1">
                    <span className="text-[10px] bg-brand-primary text-white font-bold tracking-widest uppercase font-mono px-3 py-1 rounded-full">STUDIO SPECIALTY</span>
                    <h3 className="text-2xl font-serif font-bold leading-tight">{selectedItem.title}</h3>
                  </div>
                </div>

                {/* Right side: Detailed Story */}
                <div className="md:col-span-6 p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-brand-primary">
                      <BookOpen className="w-5 h-5" />
                      <span className="text-xs font-bold tracking-widest uppercase font-mono font-bold">Behind The Creation</span>
                    </div>

                    <h4 className="text-xl font-serif font-bold text-brand-secondary">
                      {selectedItem.description}
                    </h4>

                    <hr className="border-brand-accent/45" />

                    <p className="text-brand-tertiary leading-relaxed font-sans text-sm md:text-base">
                      {selectedItem.story}
                    </p>
                  </div>

                  {/* Highlights section inside story */}
                  <div className="bg-brand-cream-dark p-4 rounded-lg border border-brand-accent/30 space-y-2">
                    <div className="flex items-center space-x-2 text-xs font-semibold text-brand-secondary">
                      <Clock className="w-4 h-4 text-brand-primary" />
                      <span>Prep Period: 48 Hours Minimum Notice</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-brand-secondary">
                      <Heart className="w-4 h-4 text-brand-primary" />
                      <span>Eggless & Custom Flavors Available On Request</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
