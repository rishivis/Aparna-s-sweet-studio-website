import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-cream-light font-sans">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-brand-primary uppercase font-mono block">Kind Words of Praise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary h-auto">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-xl border border-brand-accent/20 p-8 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md duration-300 transition"
              id={`testimonial-card-${review.id}`}
            >
              {/* Star Rating & Rich Quote */}
              <div className="space-y-4">
                <div className="flex items-center space-x-1" id={`stars-review-${review.id}`}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-brand-tertiary italic leading-relaxed text-sm md:text-base">
                  {review.text}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-brand-cream-dark">
                <h4 className="font-serif font-bold text-brand-secondary text-base">
                  — {review.name}
                </h4>
                <span className="text-xs text-brand-tertiary/70 font-mono tracking-wider uppercase block mt-0.5">
                  {review.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
