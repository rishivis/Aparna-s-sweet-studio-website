import React from 'react';
import { motion } from 'motion/react';
import { Plus, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';

interface TreatsSectionProps {
  onAddItem: (item: MenuItem) => void;
  cartCount: number;
  openCart: () => void;
}

export default function TreatsSection({ onAddItem, cartCount, openCart }: TreatsSectionProps) {
  return (
    <section id="menu" className="py-24 bg-brand-cream-light scroll-mt-16 font-sans">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-bold tracking-widest text-brand-primary uppercase font-mono block">Delicious Favorites</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary h-auto leading-tight">
              Most Loved Treats
            </h2>
            <p className="text-brand-tertiary">
              Indulge in Kanpur's crowd favorites, freshly baked on order using double-refined cocoa, fresh Madagascar vanilla bean, and seasonal farm toppings.
            </p>
          </div>

          {/* Floater for Box Customization */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openCart}
            className="flex items-center space-x-3 bg-brand-secondary text-white px-6 py-3 rounded-full shadow-lg hover:bg-brand-primary duration-300 transition shrink-0 border border-brand-accent/20 cursor-pointer self-start md:self-end"
            id="open-box-button"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold font-mono animate-bounce border border-brand-cream-light">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="font-bold text-sm tracking-widest uppercase">My Custom Box</span>
          </motion.button>
        </div>

        {/* Treats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="treats-grid">
          {MENU_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-xl shadow-md border border-brand-accent/20 overflow-hidden flex flex-col group"
              id={`treat-card-${item.id}`}
            >
              {/* Product Image */}
              <div className="aspect-square relative overflow-hidden bg-brand-cream-dark">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 duration-700 transition"
                  id={`item-img-${item.id}`}
                />
                
                {/* Category tag */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-brand-accent/30 shadow-sm">
                  <span className="text-[10px] font-bold tracking-widest text-brand-secondary uppercase font-mono">{item.category}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow text-center justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-brand-secondary group-hover:text-brand-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-brand-tertiary/80 leading-relaxed font-sans line-clamp-2 h-10">
                    {item.description}
                  </p>
                </div>
                
                {/* Price and Add button */}
                <div className="mt-6 pt-4 border-t border-brand-cream-dark flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-xs text-brand-tertiary/60 block font-mono">Price ({item.unit})</span>
                    <span className="text-lg font-bold text-brand-secondary font-mono">₹{item.price.toFixed(2)}</span>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onAddItem(item)}
                    className="flex items-center space-x-1.5 bg-brand-cream-dark border border-brand-accent/60 hover:border-brand-primary hover:bg-brand-primary hover:text-white px-4 py-2 rounded-full text-sm font-bold text-brand-secondary tracking-wider duration-300 transition cursor-pointer"
                    id={`add-btn-${item.id}`}
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add to Box</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
