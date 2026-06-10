import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Check, Box, Info } from 'lucide-react';
import { InquiryForm, CartItem } from '../types';

interface InquiryFormSectionProps {
  cartItems: CartItem[];
  prefilledType?: string;
  onClearCart: () => void;
}

export default function InquiryFormSection({ cartItems, prefilledType = 'Custom Cake', onClearCart }: InquiryFormSectionProps) {
  const [formData, setFormData] = useState<InquiryForm>({
    firstName: '',
    lastName: '',
    email: '',
    orderType: 'Custom Cake',
    theme: 'Floral',
    tiers: '1-Tier',
    dietary: 'Classic',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync pre-fill type from cart action
  useEffect(() => {
    if (cartItems.length > 0) {
      setFormData(prev => ({
        ...prev,
        orderType: 'Assorted Sweet Box'
      }));
    }
  }, [cartItems]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const orderDetails =
    cartItems.length > 0
      ? cartItems
          .map(
            (item) =>
              `${item.menuItem.name} x${item.quantity} (₹${item.menuItem.price * item.quantity})`
          )
          .join("\n")
      : "No items selected";

  const message = `
🍰 New Inquiry - Aparna's Sweet Studio

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}

Order Type: ${formData.orderType}
Theme: ${formData.theme}
Tiers: ${formData.tiers}
Dietary: ${formData.dietary}

Message:
${formData.message}

Selected Items:
${orderDetails}

Total: ₹${selectedBoxPrice}
`;

  const whatsappNumber = "919651532129";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");

  setSubmitted(true);
  onClearCart();
};

  // const handleFormSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
    
  //   // Simulate API Post request
  //   setTimeout(() => {
  //     setLoading(false);
  //     setSubmitted(true);
  //     onClearCart();
  //     // Reset form variables
  //     setFormData({
  //       firstName: '',
  //       lastName: '',
  //       email: '',
  //       orderType: 'Custom Cake',
  //       theme: 'Floral',
  //       tiers: '1-Tier',
  //       dietary: 'Classic',
  //       message: ''
  //     });
  //   }, 1800);
  // };

  const selectedBoxPrice = cartItems.reduce((sum, item) => sum + (item.menuItem.price * item.quantity), 0);

  return (
    <section id="contact" className="py-24 bg-brand-cream-light font-sans scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="get-in-touch-layout">
          
          {/* Left Column: Office Contacts & Location Maps */}
          <div className="lg:col-span-5 space-y-8" id="contacts-details">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-brand-primary uppercase font-mono block">We'd love to hear from you</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary h-auto leading-tight">
                Get in Touch
              </h2>
              <p className="text-brand-tertiary">
                Have a special occasion, corporate requirement, or local wedding coming up in Kanpur? We'd love to hear your ideas and bring your customized sweet vision to life.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 pr-4" id="address-block">
              <div className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-brand-accent/20 shadow-xs">
                <div className="w-10 h-10 bg-brand-cream-dark border border-brand-accent rounded-full flex items-center justify-center text-brand-primary shrink-0">
                  <MapPin className="w-5 h-5 shadow-sm" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-secondary">Studio Location</h4>
                  <p className="text-xs md:text-sm text-brand-tertiary">N377 Rajeev nagar Lal bangle, Kanpur, UP</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-brand-accent/20 shadow-xs">
                <div className="w-10 h-10 bg-brand-cream-dark border border-brand-accent rounded-full flex items-center justify-center text-brand-primary shrink-0">
                  <Mail className="w-5 h-5 shadow-sm" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-secondary">Email Us At</h4>
                  <p className="text-xs md:text-sm text-brand-tertiary font-mono">grishivishnoi681@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-brand-accent/20 shadow-xs">
                <div className="w-10 h-10 bg-brand-cream-dark border border-brand-accent rounded-full flex items-center justify-center text-brand-primary shrink-0">
                  <Phone className="w-5 h-5 shadow-sm" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-secondary">WhatsApp Text</h4>
                  <p className="text-xs md:text-sm text-brand-tertiary font-mono">+91 9651532129</p>
                </div>
              </div>
            </div>

            {/* Premium Handdrawn / Static Map Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-brand-accent bg-brand-cream-dark shadow-md p-6 flex flex-col justify-between space-y-4 aspect-[4/3] relative min-h-[250px]" id="map-canvas-location">
              {/* Soft decorative visual grid representing routes */}
              <div className="absolute inset-0 bg-[radial-gradient(#d3c3c2_1px,transparent_1px)] [background-size:16px_16px] opacity-35" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="space-y-1.5 text-left">
                  <span className="text-[10px] bg-brand-primary text-white px-2 py-0.5 rounded-md font-bold font-mono tracking-wider uppercase">Kanpur Studio Map</span>
                  <h3 className="font-serif text-lg font-bold text-brand-secondary">Rajeev Nagar Area</h3>
                  <p className="text-xs text-brand-tertiary leading-relaxed pr-6">Located in Lal Bangla district. High privacy home-studio. Pre-booked pickups only.</p>
                </div>

                <div className="border border-brand-accent/60 bg-white/90 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between shadow">
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-brand-secondary uppercase block font-mono">Lal Bangla Pickup</span>
                    <span className="text-xs text-brand-tertiary font-medium">Lal Bangla Bypass Rd.</span>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=N377+Rajeev+nagar+Lal+bangle+Kanpur" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-brand-secondary hover:bg-brand-primary text-white text-xs font-bold px-3.5 py-1.5 rounded-lg tracking-wider transition uppercase cursor-pointer"
                  >
                    Open Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Input Card */}
          <div className="lg:col-span-7" id="form-card-container">
            <div className="bg-white rounded-2xl border border-brand-accent/20 p-8 md:p-10 shadow-xl relative" id="inquiry-form-card">
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 space-y-6 flex flex-col items-center"
                    key="success"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full border border-green-200 flex items-center justify-center text-4xl text-green-600 animate-bounce">
                      ✓
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif font-bold text-brand-secondary">Thank You!</h3>
                      <p className="text-brand-tertiary text-sm md:text-base max-w-md mx-auto">
                        Your sweet inquiry has been logged in Aparna’s books. We will review details immediately and text your coordinates on WhatsApp within 2 hours.
                      </p>
                    </div>

                    <button 
                      onClick={() => setSubmitted(false)}
                      className="bg-brand-secondary hover:bg-brand-primary text-white font-bold text-xs tracking-widest uppercase px-6 py-3 rounded-full transition cursor-pointer shadow-sm border border-brand-accent/20"
                    >
                      Draft Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                    key="form"
                  >
                    <div className="border-b border-brand-cream-dark pb-4">
                      <h3 className="font-serif text-2xl font-bold text-brand-secondary">Send An Inquiry</h3>
                      <p className="text-xs text-brand-tertiary">Send your requested dessert combination or custom wedding guidelines to our bakers.</p>
                    </div>

                    {/* First & Last Name row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold tracking-wider text-brand-secondary uppercase font-mono block">First Name</label>
                        <input 
                          type="text" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Aparna" 
                          required
                          className="w-full px-4 py-3 rounded-lg border border-brand-accent text-sm text-brand-secondary focus:border-brand-primary focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold tracking-wider text-brand-secondary uppercase font-mono block">Last Name</label>
                        <input 
                          type="text" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Devi" 
                          required
                          className="w-full px-4 py-3 rounded-lg border border-brand-accent text-sm text-brand-secondary focus:border-brand-primary focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email address */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold tracking-wider text-brand-secondary uppercase font-mono block">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-brand-accent text-sm text-brand-secondary focus:border-brand-primary focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Dropdown for order type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold tracking-wider text-brand-secondary uppercase font-mono block">Order Type</label>
                      <select 
                        name="orderType"
                        value={formData.orderType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-brand-accent text-sm text-brand-secondary focus:border-brand-primary focus:outline-none bg-white transition-colors cursor-pointer"
                      >
                        <option value="Custom Cake">Premium Custom Celebration Cake</option>
                        <option value="Assorted Sweet Box">Cupcakes</option>
                        <option value="Holiday Macaron Array">Brownie</option>
                        {/* <option value="Corporate Catering"></option>
                        <option value="Other Sweet Desire"></option> */}
                      </select>
                    </div>

                    {/* Dynamic panel for Custom Cake requests */}
                    <AnimatePresence>
                      {formData.orderType === 'Custom Cake' && (
                        <motion.div 
                          className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl border border-brand-accent/30 bg-brand-cream-dark relative overflow-hidden"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold tracking-wider text-brand-secondary uppercase font-mono block">Theme Category</label>
                            <select 
                              name="theme" 
                              value={formData.theme}
                              onChange={handleChange}
                              className="w-full p-2 rounded-md bg-white border border-brand-accent/50 text-xs text-brand-secondary focus:outline-none cursor-pointer"
                            >
                              <option value="Floral">Floral Blooms</option>
                              <option value="Minimalist">Modern Minimalist</option>
                              <option value="Comic">Comic / Toons</option>
                              <option value="Rustic">Rustic Naked Sponges</option>
                            </select>
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] font-bold tracking-wider text-brand-secondary uppercase font-mono block">Sponges / Tiers</label>
                            <select 
                              name="tiers" 
                              value={formData.tiers}
                              onChange={handleChange}
                              className="w-full p-2 rounded-md bg-white border border-brand-accent/50 text-xs text-brand-secondary focus:outline-none cursor-pointer"
                            >
                              <option value="1-Tier">1-Tier Delight (Up to 1.5kg)</option>
                              <option value="2-Tier">2-Tier Splendor (2.5kg - 4kg)</option>
                              <option value="3-Tier">3-Tier Grandeur (5kg+)</option>
                              <option value="Half KG Cake">Half KG Cake (Up to 1/5kg)</option>
                            </select>
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] font-bold tracking-wider text-brand-secondary uppercase font-mono block">Dietary Options</label>
                            <select 
                              name="dietary" 
                              value={formData.dietary}
                              onChange={handleChange}
                              className="w-full p-2 rounded-md bg-white border border-brand-accent/50 text-xs text-brand-secondary focus:outline-none cursor-pointer"
                            >
                              <option value="Classic">Classic Dairy Sponges</option>
                              <option value="Eggless">100% Pure Eggless</option>
                              <option value="Gluten-Free">Organic Gluten-Free</option>
                            </select>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Integrated Cart Display Inside Form to show rich active links */}
                    {cartItems.length > 0 && (
                      <div className="p-4 bg-brand-pink-container/45 rounded-xl border border-brand-primary/20 space-y-3" id="attached-box-visualizer">
                        <div className="flex items-center space-x-2 text-brand-primary">
                          <Box className="w-4.5 h-4.5" />
                          <span className="text-xs font-bold tracking-wider uppercase font-mono">My Custom Box Attached ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                        </div>
                        <div className="text-xs text-brand-tertiary bg-white/95 p-3 rounded-lg border border-brand-accent/20 space-y-1.5 shadow-inner">
                          {cartItems.map((item) => (
                            <div key={item.menuItem.id} className="flex justify-between items-center font-sans font-medium text-brand-secondary">
                              <span>{item.menuItem.name} <span className="text-xs text-brand-primary font-mono font-bold">x{item.quantity}</span></span>
                              <span className="font-mono text-[11px]">₹{(item.menuItem.price * item.quantity).toFixed(2)}</span>
                            </div>
                          ))}
                          <div className="border-t border-brand-accent/30 pt-1.5 mt-1.5 flex justify-between font-bold text-brand-secondary text-[13px]">
                            <span>Estimated Sweets Total</span>
                            <span className="font-mono text-brand-primary">₹{selectedBoxPrice.toFixed(2)}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1.5 text-[10px] text-brand-primary" id="autofill-prompt">
                          <Info className="w-3.5 h-3.5" />
                          <span>These delicious choices will be automatically appended to your reservation inquiry!</span>
                        </div>
                      </div>
                    )}

                    {/* Message Details */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold tracking-wider text-brand-secondary uppercase font-mono block">Message / Design Whispers</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your sweet dream, specific frosting theme ideas, party color schemes, or specific pickup coordinates..." 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-brand-accent text-sm text-brand-secondary focus:border-brand-primary focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center space-x-2 bg-brand-secondary text-white hover:bg-brand-primary py-4 rounded-xl text-sm font-bold tracking-widest uppercase transition-all shadow-md hover:shadow-lg focus:outline-none disabled:opacity-50 cursor-pointer"
                      id="submit-inquiry-button"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Inquiry</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
