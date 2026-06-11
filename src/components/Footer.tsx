import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import logo from "../../assets/aparnas-logo.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-secondary text-brand-cream-light py-16 font-sans">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        
        {/* Brand identity */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Aparna's Sweet Studio"
              className="h-8 w-auto"
            />
            <span className="font-serif text-2xl font-bold tracking-tight text-brand-cream-light">
              Aparna's Sweet Studio
            </span>
          </div>
          <p className="text-brand-cream-light/85 text-sm max-w-sm leading-relaxed">
            Artisanal baking for life’s sweetest moments. Crafted from scratch in our home studio with premium farm-fresh ingredients and a touch of golden magic.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#fdd5be] font-mono">Boutique Menu</h4>
          <ul className="space-y-2 text-sm text-brand-cream-dark/90">
            <li><a href="#about" className="hover:text-[#fdd5be] transition">Our Story</a></li>
            <li><a href="#specialties" className="hover:text-[#fdd5be] transition">Specialties & Tarts</a></li>
            <li><a href="#menu" className="hover:text-[#fdd5be] transition">Most Loved Treats</a></li>
            <li><a href="#gallery" className="hover:text-[#fdd5be] transition">Milestones Gallery</a></li>
          </ul>
        </div>

        {/* Business details */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#fdd5be] font-mono">Business Info</h4>
          <ul className="space-y-1.5 text-sm text-brand-cream-dark/90">
            <li><strong>Studio Hours:</strong> 10:00 AM – 11:00 PM (IST)</li>
            <li><strong>Notice:</strong> 24 hours minimum for customized orders.</li>
            <li><strong>Studio Spot:</strong> N377 Rajeev nagar Lal bangle, Kanpur</li>
          </ul>

          {/* Social icons */}
          <div className="flex items-center space-x-4 pt-3">

            <a

              href="https://www.instagram.com/treatsbyaparna?igsh=MW42YTkwNHg0YTZpdw=="

              target="_blank"

              rel="noopener noreferrer"

              className="text-brand-cream-light hover:text-pink-300 transition"

            >

             <FaInstagram size={24} />

            </a>



            <a

              href="https://wa.me/919651532129"

              target="_blank"

              rel="noopener noreferrer"

              className="text-brand-cream-light hover:text-green-400 transition"

            >

             <FaWhatsapp size={24} />

            </a>

          </div>
          {/* <div className="flex items-center space-x-4 pt-3">
            {['Instagram', 'Pinterest', 'Facebook'].map((social) => (
              <a 
                href={`#${social.toLowerCase()}`}
                key={social}
                className="text-xs font-mono tracking-widest text-brand-cream-light hover:text-[#fdd5be] uppercase bg-white/10 px-3 py-1.5 rounded-md hover:bg-white/15 transition"
              >
                {social}
              </a>
            ))}
          </div> */}
        </div>

      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-cream-dark/70 gap-4">
        <span>© 2026 Aparna's Sweet Studio. All rights reserved.</span>
        <div className="flex items-center space-x-1.5">
          <span>Crafted with</span>
          <Heart className="w-3 h-3 text-red-400 fill-red-400" />
          <span>locally in Kanpur, India.</span>
        </div>
      </div>
    </footer>
  );
}
