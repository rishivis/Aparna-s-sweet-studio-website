import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface BoxDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onSelectInquiry: () => void;
}

export default function BoxDrawer({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem, 
  onSelectInquiry 
}: BoxDrawerProps) {
  
  const totalPrice = items.reduce((sum, item) => sum + (item.menuItem.price * item.quantity), 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-xs"
            id="drawer-backdrop"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 max-w-md w-full bg-brand-cream-light border-l border-brand-accent/40 z-50 shadow-2xl flex flex-col h-full font-sans"
            id="drawer-panel"
          >
            {/* Header */}
            <div className="p-6 border-b border-brand-accent/30 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <ShoppingBag className="w-5 h-5 text-brand-primary" />
                <h3 className="font-serif text-xl font-bold text-brand-secondary">My Custom Box</h3>
              </div>
              <button 
                onClick={onClose} 
                className="text-brand-secondary hover:text-brand-primary p-1 rounded-full cursor-pointer transition font-bold"
                id="close-drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content list */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20" id="empty-tray-notice">
                  <div className="w-16 h-16 bg-brand-accent/30 border border-brand-accent rounded-full flex items-center justify-center text-3xl">
                    🍰
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-brand-secondary">Your sweet box is empty</h4>
                    <p className="text-xs text-brand-tertiary">Select some delectable signature desserts from our menu below to compile your box.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4" id="drawer-items">
                  {items.map((item) => (
                    <div 
                      key={item.menuItem.id} 
                      className="bg-white p-4 rounded-xl border border-brand-accent/20 shadow-sm flex space-x-4 items-center group relative overflow-hidden"
                      id={`drawer-item-${item.menuItem.id}`}
                    >
                      <img 
                        src={item.menuItem.image} 
                        alt={item.menuItem.name} 
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-grow space-y-1">
                        <h4 className="font-serif font-bold text-brand-secondary leading-tight">{item.menuItem.name}</h4>
                        <p className="text-xs text-brand-tertiary/65 font-mono">₹{item.menuItem.price.toFixed(2)} / {item.menuItem.unit}</p>
                        
                        <div className="flex items-center space-x-2 pt-1.5">
                          <button 
                            onClick={() => onUpdateQuantity(item.menuItem.id, Math.max(1, item.quantity - 1))}
                            className="w-6 h-6 rounded-full bg-brand-cream-dark flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary text-brand-secondary transition text-xs font-bold cursor-pointer"
                            id={`minus-${item.menuItem.id}`}
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-mono text-sm font-bold text-brand-secondary w-6 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full bg-brand-cream-dark flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary text-brand-secondary transition text-xs font-bold cursor-pointer"
                            id={`plus-${item.menuItem.id}`}
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button 
                        onClick={() => onRemoveItem(item.menuItem.id)}
                        className="text-brand-tertiary/40 hover:text-red-500 duration-200 transition p-1.5 cursor-pointer"
                        id={`remove-${item.menuItem.id}`}
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Summary */}
            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-brand-accent/30 space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-sm text-brand-tertiary">
                    <span>Total Assorted Items</span>
                    <span className="font-bold text-brand-secondary">{totalItems}</span>
                  </div>
                  <div className="flex justify-between items-center text-md pt-1">
                    <span className="font-serif font-bold text-brand-secondary">Estimated Total</span>
                    <span className="font-mono text-lg font-bold text-brand-primary">₹{totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onSelectInquiry();
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-brand-secondary text-white hover:bg-brand-primary py-3.5 rounded-full text-sm font-bold tracking-widest uppercase transition duration-300 shadow-md cursor-pointer border border-brand-accent/20"
                  id="checkout-box-button"
                >
                  <span>Build Custom Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-center text-brand-tertiary/75 font-sans leading-normal">
                  All cakes are handmade individually. This custom order list will be annexed to your inquiry consult request below.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
