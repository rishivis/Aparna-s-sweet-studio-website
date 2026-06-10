/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ShoppingBag, Menu, X, ArrowRight, Heart, HeartCrack } from 'lucide-react';
import AboutSection from './components/AboutSection';
import SpecialtiesSection from './components/SpecialtiesSection';
import TreatsSection from './components/TreatsSection';
import GallerySection from './components/GallerySection';
import OrderingProcess from './components/OrderingProcess';
import Testimonials from './components/Testimonials';
import InquiryFormSection from './components/InquiryFormSection';
import Footer from './components/Footer';
import TasteExplorer from './components/TasteExplorer';
import BoxDrawer from './components/BoxDrawer';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isTasteGuideOpen, setIsTasteGuideOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cart Handlers
  const handleAddItemToBox = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.menuItem.id === item.id);
      if (existing) {
        return prev.map(i => i.menuItem.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { menuItem: item, quantity: 1 }];
    });
    // Open cart drawer so they see the item float in!
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, qty: number) => {
    setCartItems(prev => prev.map(item => item.menuItem.id === id ? { ...item, quantity: qty } : item));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.menuItem.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSelectInquiry = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-brand-cream-light text-brand-tertiary flex flex-col font-sans selection:bg-brand-accent selection:text-brand-secondary scroll-smooth overflow-x-hidden">
      
      {/* 1. Header Navigation */}
      <header className="sticky top-0 bg-brand-cream-light/95 backdrop-blur-md shadow-sm border-b border-brand-accent/20 z-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🎂</span>
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-brand-secondary">
              Aparna's Sweet Studio
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-brand-secondary uppercase tracking-widest font-sans">
            <a href="#about" className="hover:text-brand-primary transition">About</a>
            <a href="#specialties" className="hover:text-brand-primary transition">Specialties</a>
            <a href="#gallery" className="hover:text-brand-primary transition">Gallery</a>
            <a href="#contact" className="hover:text-brand-primary transition">Contact</a>
          </nav>

          {/* Action buttons (Bespoke Cart & Inquiry scroll) */}
          <div className="flex items-center space-x-4">
            
            {/* Custom box drawer toggle button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-brand-cream-dark border border-brand-accent/40 text-brand-secondary hover:text-brand-primary hover:border-brand-primary duration-300 transition cursor-pointer"
              id="top-cart-trigger"
              title="View my custom sweet box"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-primary text-white text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-bold font-mono border border-brand-cream-light shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Solid Order action */}
            <a 
              href="#menu" 
              className="hidden sm:inline-block bg-brand-secondary hover:bg-brand-primary text-white font-bold text-xs tracking-widest uppercase px-5 py-2.5 rounded-full transition border border-brand-accent/20 shadow-xs"
              id="top-order-action"
            >
              Order Now
            </a>

            {/* Mobile Hamburger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-brand-secondary focus:outline-none cursor-pointer"
              id="mobile-menu-trigger"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-cream-light/98 border-b border-brand-accent/30"
              id="mobile-navigation-panel"
            >
              <div className="px-6 py-4 flex flex-col space-y-4 font-sans font-bold text-sm tracking-widest uppercase text-brand-secondary">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-primary py-1 border-b border-brand-cream-dark">About</a>
                <a href="#specialties" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-primary py-1 border-b border-brand-cream-dark">Specialties</a>
                <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-primary py-1 border-b border-brand-cream-dark">Gallery</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-primary py-1 border-b border-brand-cream-dark">Contact</a>
                <a 
                  href="#menu" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="bg-brand-secondary hover:bg-brand-primary text-white px-5 py-3 rounded-full text-center transition"
                >
                  Order Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-20 px-6 font-sans overflow-hidden bg-brand-cream-dark" id="hero">
        
        {/* Background Image with elegant soft cover overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=1920&q=80" 
            alt="Artisanal bakery table" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover select-none"
          />
          {/* Subtle warm, editorial vignetted color overlay */}
          <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-brand-cream-light/95 via-brand-cream-light/65 to-brand-cream-light/45" />
          <div className="absolute inset-y-0 left-0 right-0 bg-radial-gradient(ellipse_at_center,transparent_35%,#fbf9f5_100%) opacity-90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 text-center md:text-left grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="md:col-span-8 space-y-6"
            id="hero-left-col"
          >
            {/* Ambient Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 px-4 py-1.5 rounded-full md:self-start">
              <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-brand-primary uppercase font-mono">Bespoke Confectionery Kanpur</span>
            </div>

            {/* Display Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight text-brand-secondary leading-none">
              Handcrafted Cakes <br />Made with Love
            </h1>

            {/* Sub-text */}
            <p className="text-brand-tertiary text-lg md:text-xl max-w-xl leading-relaxed">
              Experience the magic of artisanal baking. Every sweet treat is created in our home studio with premium ingredients and a touch of gold.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4" id="hero-actions">
              <a 
                href="#menu" 
                className="w-full sm:w-auto bg-brand-secondary hover:bg-brand-primary text-white font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition shadow-lg text-center border border-brand-accent/20 cursor-pointer"
                id="hero-order-now"
              >
                Order Now
              </a>

              <button 
                onClick={() => setIsTasteGuideOpen(true)}
                className="w-full sm:w-auto bg-white/80 backdrop-blur-xs border border-brand-accent/60 hover:bg-brand-primary hover:text-white hover:border-brand-primary text-brand-secondary font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition shadow-sm text-center cursor-pointer"
                id="hero-find-match"
              >
                View Menu / Taste Guide
              </button>
            </div>
          </motion.div>

          {/* Right Column: Floating Luxury Badge/Visual Accent */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden md:flex md:col-span-4 justify-center"
            id="hero-right-col"
          >
            <div className="relative w-64 h-64 border border-brand-accent/50 rounded-full flex items-center justify-center p-8 bg-brand-cream-light/30 backdrop-blur-sm shadow-inner group">
              <div className="absolute -inset-2 rounded-full border border-dashed border-brand-primary/30 animate-spin [animation-duration:40s]" />
              <div className="text-center space-y-2">
                <span className="text-3xl filter drop-shadow">⭐️</span>
                <h4 className="font-serif text-lg font-bold text-brand-secondary">Kanpur’s Finest</h4>
                <p className="text-[10px] text-brand-tertiary font-mono tracking-wider uppercase">100% Pure Buttercream Sponges</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Specialties & Values Section */}
      <SpecialtiesSection />

      {/* 5. Products Treats Selector Section */}
      <TreatsSection 
        onAddItem={handleAddItemToBox} 
        cartCount={cartCount} 
        openCart={() => setIsCartOpen(true)}
      />

      {/* 5.5 Visual Callout for the Personal Consult Quiz */}
      <section className="py-16 bg-brand-pink-container/45 border-t border-b border-brand-primary/10 relative overflow-hidden font-sans">
        {/* Sparkly decorations */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 text-2xl opacity-20 filter blur-xs">🍰</div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2 text-2xl opacity-20 filter blur-xs">🍇</div>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold text-brand-secondary h-auto">
              Not sure which dessert matches your event?
            </h3>
            <p className="text-brand-tertiary text-sm md:text-base">
              Try our interactive Sweet Finder matchmaker quiz to receive a custom recommendation based on your favorite flavors.
            </p>
          </div>

          <button 
            onClick={() => setIsTasteGuideOpen(true)}
            className="flex items-center space-x-2 bg-brand-primary hover:bg-brand-secondary text-white font-bold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full transition shadow-md cursor-pointer"
            id="callout-quiz-trigger"
          >
            <Sparkles className="w-4 h-4 fill-white" />
            <span>Launch Taste Guide</span>
          </button>
        </div>
      </section>

      {/* 6. Milestone Gallery */}
      <GallerySection />

      {/* 7. Milestone Process Timeline */}
      <OrderingProcess />

      {/* 8. Testimonials Review Container */}
      <Testimonials />

      {/* 9. Contact Inquiry / Maps Node */}
      <InquiryFormSection 
        cartItems={cartItems} 
        onClearCart={handleClearCart} 
        prefilledType="Custom Cake"
      />

      {/* 10. Footer Block */}
      <Footer />

      {/* Sliding Bespoke Cart Drawer Widget */}
      <BoxDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onSelectInquiry={handleSelectInquiry}
      />

      {/* Interactive Taste Guide Explorer Dialog Widget */}
      <TasteExplorer 
        isOpen={isTasteGuideOpen} 
        onClose={() => setIsTasteGuideOpen(false)} 
        onAddItem={handleAddItemToBox}
      />

    </div>
  );
}

