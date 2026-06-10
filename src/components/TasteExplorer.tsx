import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Utensils, Heart, ArrowRight, RotateCcw, Box, Check } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';

interface TasteExplorerProps {
  onAddItem: (item: MenuItem) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function TasteExplorer({ onAddItem, isOpen, onClose }: TasteExplorerProps) {
  const [step, setStep] = useState(1);
  const [flavor, setFlavor] = useState('');
  const [occasion, setOccasion] = useState('');
  const [texture, setTexture] = useState('');
  const [recommendedItem, setRecommendedItem] = useState<MenuItem | null>(null);
  const [addedItemToBox, setAddedItemToBox] = useState(false);

  const handleNextStep = (val: string) => {
    if (step === 1) {
      setFlavor(val);
      setStep(2);
    } else if (step === 2) {
      setOccasion(val);
      setStep(3);
    } else if (step === 3) {
      setTexture(val);
      // Determine recommendation
      calculateRecommendation(flavor, occasion, val);
      setStep(4);
    }
  };

  const calculateRecommendation = (favFlav: string, event: string, textur: string) => {
    let chosen: MenuItem = MENU_ITEMS[0]; // default Signature Truffle Cake

    if (favFlav === 'rich-chocolate') {
      if (textur === 'chewy-fudgy') {
        // Sea Salt Brownies
        chosen = MENU_ITEMS.find(item => item.id === 'menu-3') || MENU_ITEMS[0];
      } else {
        // Signature Truffle
        chosen = MENU_ITEMS.find(item => item.id === 'menu-1') || MENU_ITEMS[0];
      }
    } else if (favFlav === 'creamy-velvety') {
      // Velvet Cloud Cupcakes
      chosen = MENU_ITEMS.find(item => item.id === 'menu-2') || MENU_ITEMS[0];
    } else {
      // Fruity tarts or standard cupcakes
      chosen = MENU_ITEMS.find(item => item.id === 'menu-2') || MENU_ITEMS[0];
    }
    
    setRecommendedItem(chosen);
  };

  const resetQuiz = () => {
    setStep(1);
    setFlavor('');
    setOccasion('');
    setTexture('');
    setRecommendedItem(null);
    setAddedItemToBox(false);
  };

  const handleAddChoice = () => {
    if (recommendedItem) {
      onAddItem(recommendedItem);
      setAddedItemToBox(true);
      setTimeout(() => {
        onClose();
        resetQuiz();
      }, 1500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          onClick={onClose}
          id="taste-explorer-overlay"
        >
          <motion.div 
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            className="bg-brand-cream-light border border-brand-accent/40 rounded-2xl max-w-xl w-full p-8 shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            id="taste-explorer-card"
          >
            {/* Background design elements */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-brand-pink-container/40 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-brand-accent/45 rounded-full blur-2xl pointer-events-none" />

            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-brand-secondary/60 hover:text-brand-primary p-1 rounded-full transition cursor-pointer font-bold font-sans"
              id="close-taste-finder"
            >
              ✕
            </button>

            {/* Quiz Content */}
            <div className="relative z-10 space-y-6">
              
              {/* Intro Head */}
              <div className="text-center space-y-2">
                <span className="text-xs font-bold tracking-widest text-brand-primary uppercase font-mono flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Aparna’s Taste Guide
                </span>
                <h3 className="text-2xl font-serif font-bold text-brand-secondary h-auto">
                  Find Your Perfect Dessert Match
                </h3>
              </div>

              {/* Progress Bar */}
              {step <= 3 && (
                <div className="w-full bg-brand-cream-dark h-1.5 rounded-full overflow-hidden" id="quiz-progress">
                  <div 
                    className="bg-brand-primary h-full transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              )}

              {/* Steps Animation */}
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h4 className="text-center text-lg font-serif font-bold text-brand-secondary">
                      1. Which flavor notes appeal to you most today?
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { id: 'rich-chocolate', label: 'Rich & Decadent Chocolate (70% Cocoa)', icon: '🍫' },
                        { id: 'creamy-velvety', label: 'Classic Crimson Red Velvet & Cream Cheese', icon: '🧁' },
                        { id: 'fresh-fruity', label: 'Delicate Sugared Vanilla & Fresh Berries', icon: '🍓' }
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => handleNextStep(opt.id)}
                          className="w-full text-left p-4 rounded-xl border border-brand-accent/40 bg-white hover:bg-brand-primary hover:text-white hover:border-brand-primary duration-200 transition flex items-center space-x-3 shadow-sm font-sans font-medium text-brand-secondary cursor-pointer"
                        >
                          <span className="text-xl">{opt.icon}</span>
                          <span className="flex-grow">{opt.label}</span>
                          <ArrowRight className="w-4 h-4 opacity-50" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h4 className="text-center text-lg font-serif font-bold text-brand-secondary">
                      2. What's the occasion for these sweets?
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { id: 'cozy-snack', label: 'A quiet afternoon coffee or study treat', icon: '☕' },
                        { id: 'family-celebration', label: 'An intimate family celebration or surprise gift', icon: '🎁' },
                        { id: 'grand-fest', label: 'A big, joyful corporate gather or birthday party', icon: '🥳' }
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => handleNextStep(opt.id)}
                          className="w-full text-left p-4 rounded-xl border border-brand-accent/40 bg-white hover:bg-brand-primary hover:text-white hover:border-brand-primary duration-200 transition flex items-center space-x-3 shadow-sm font-sans font-medium text-brand-secondary cursor-pointer"
                        >
                          <span className="text-xl">{opt.icon}</span>
                          <span className="flex-grow">{opt.label}</span>
                          <ArrowRight className="w-4 h-4 opacity-50" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div 
                    key="step-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h4 className="text-center text-lg font-serif font-bold text-brand-secondary">
                      3. Which texture speaks to your soul?
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { id: 'chewy-fudgy', label: 'Dense, rich, chewable and moist in every bite', icon: '🍩' },
                        { id: 'soft-fluffy', label: 'Ultra-soft, airy crumb that melts into your tongue', icon: '☁️' }
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => handleNextStep(opt.id)}
                          className="w-full text-left p-4 rounded-xl border border-brand-accent/40 bg-white hover:bg-brand-primary hover:text-white hover:border-brand-primary duration-200 transition flex items-center space-x-3 shadow-sm font-sans font-medium text-brand-secondary cursor-pointer"
                        >
                          <span className="text-xl">{opt.icon}</span>
                          <span className="flex-grow">{opt.label}</span>
                          <ArrowRight className="w-4 h-4 opacity-50" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 4 && recommendedItem && (
                  <motion.div 
                    key="recommendation"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6"
                  >
                    <div className="mx-auto w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center text-3xl">
                      🎉
                    </div>
                    
                    <div className="space-y-2">
                      <span className="text-[10px] bg-brand-primary text-white font-bold tracking-widest uppercase font-mono px-3 py-1 rounded-full">YOUR PERFECT MATCH</span>
                      <h4 className="text-2xl font-serif font-bold text-brand-secondary">
                        {recommendedItem.name}
                      </h4>
                      <p className="text-sm text-brand-tertiary">
                        {recommendedItem.description}
                      </p>
                    </div>

                    {/* Compact Product View */}
                    <div className="bg-white border border-brand-accent/30 rounded-xl p-4 flex items-center space-x-4 max-w-sm mx-auto shadow-sm">
                      <img 
                        src={recommendedItem.image} 
                        alt={recommendedItem.name} 
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="text-left flex-grow">
                        <span className="text-xs text-brand-tertiary/70 font-sans block">{recommendedItem.unit}</span>
                        <span className="font-bold text-brand-secondary font-mono">₹{recommendedItem.price.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Result buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                      <button
                        onClick={resetQuiz}
                        className="w-full sm:w-auto flex items-center justify-center space-x-1 px-4 py-2.5 rounded-full border border-brand-accent/60 hover:bg-brand-cream-dark text-xs font-bold text-brand-secondary uppercase tracking-widest transition cursor-pointer"
                        id="retry-quiz-button"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Try Again</span>
                      </button>

                      <button
                        onClick={handleAddChoice}
                        disabled={addedItemToBox}
                        className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-xs font-bold text-white uppercase tracking-widest transition shadow-md cursor-pointer ${addedItemToBox ? 'bg-green-600' : 'bg-brand-secondary hover:bg-brand-primary'}`}
                        id="add-match-button"
                      >
                        {addedItemToBox ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Added to Box!</span>
                          </>
                        ) : (
                          <>
                            <Box className="w-4 h-4" />
                            <span>Add Match to Box</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
