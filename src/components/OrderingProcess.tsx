import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Calendar, Gift } from 'lucide-react';

export default function OrderingProcess() {
  const steps = [
    {
      num: '1',
      title: 'Choose',
      desc: 'Select your favorites from our curated menu of signature tarts, fudged brownies, and macarons, or browse our specialty catalogue.',
      icon: <Award className="w-6 h-6 text-brand-primary" />
    },
    {
      num: '2',
      title: 'Customize',
      desc: 'Tell us about your celebratory theme, sponge flavors, tier preference, dietary requirements, and exact party headcount.',
      icon: <CheckCircle2 className="w-6 h-6 text-brand-primary" />
    },
    {
      num: '3',
      title: 'Confirm',
      desc: 'We finalize design blueprints, coordinate delivery details, and lock down reservation booking for your preferred date and time.',
      icon: <Calendar className="w-6 h-6 text-brand-primary" />
    },
    {
      num: '4',
      title: 'Enjoy',
      desc: 'Receive your freshly baked box of hand-decorated sweet happiness right at your doorstep, baked just hours prior.',
      icon: <Gift className="w-6 h-6 text-brand-primary" />
    }
  ];

  return (
    <section className="py-24 bg-[#fffaf5] text-brand-secondary border-t border-b border-brand-accent/20 font-sans">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-brand-primary uppercase font-mono block">Seamless Road Map</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold h-auto">
            Simple Ordering Process
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10" id="process-steps">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="relative p-6 bg-white border border-brand-accent/20 rounded-xl shadow-sm text-center flex flex-col items-center space-y-4 group hover:shadow-md duration-300 transition"
              id={`step-${step.num}`}
            >
              {/* Number tag */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-brand-secondary text-white rounded-full flex items-center justify-center font-serif text-lg font-bold border-4 border-[#fffaf5] group-hover:bg-brand-primary duration-300 transition shadow">
                {step.num}
              </div>

              {/* Icon Container */}
              <div className="w-14 h-14 bg-brand-cream-dark border border-brand-accent/30 rounded-full flex items-center justify-center mt-3 shadow-inner group-hover:scale-110 duration-300 transition">
                {step.icon}
              </div>

              {/* Title & Desc */}
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-brand-secondary group-hover:text-brand-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-brand-tertiary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
