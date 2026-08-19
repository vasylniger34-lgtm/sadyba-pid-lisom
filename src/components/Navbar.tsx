import React, { useState } from 'react';
import { Logo } from './Logo';
import { ShoppingBag, Phone, Lock, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  openCart: () => void;
  openAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  openCart,
  openAdmin
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Головна' },
    { id: 'rooms', label: 'Котедж & Номери' },
    { id: 'cafe', label: 'Кафе & Меню' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'contacts', label: 'Контакти' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full nav-clean transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="cursor-pointer transition-transform hover:opacity-90"
          >
            <Logo className="h-12" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative py-1 text-sm font-semibold transition-colors ${
                    isActive ? 'text-[#1C2A24]' : 'text-slate-500 hover:text-[#1C2A24]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            
            {/* Phone Button */}
            <a
              href="tel:0676791570"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-[#1C2A24] rounded-full text-xs font-bold transition-all border border-stone-200"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>067 679 1570</span>
            </a>

            {/* Shopping Cart Button */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 px-4 py-2 bg-[#1C2A24] hover:bg-[#283D34] text-white rounded-full font-bold text-xs shadow-sm transition-all active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Кошик</span>
              {cartCount > 0 && (
                <span className="bg-amber-500 text-[#1C2A24] font-black text-[11px] px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Admin Key */}
            <button
              onClick={openAdmin}
              className="p-2 text-slate-400 hover:text-[#1C2A24] rounded-full transition-colors"
              title="Адмін панель (Садиба1872)"
            >
              <Lock className="w-4 h-4" />
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1C2A24] rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-b border-stone-200 overflow-hidden px-4 py-4 space-y-2"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                  activeTab === item.id ? 'bg-stone-100 text-[#1C2A24] font-bold' : 'text-slate-600 hover:bg-stone-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-stone-100 space-y-1">
              <a href="tel:0676791570" className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-amber-700">
                <Phone className="w-3.5 h-3.5" /> 067-679-15-70 (Василь)
              </a>
              <a href="tel:0972464189" className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-amber-700">
                <Phone className="w-3.5 h-3.5" /> 097-246-41-89 (Ольга)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
