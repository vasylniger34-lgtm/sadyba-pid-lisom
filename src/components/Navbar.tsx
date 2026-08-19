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
    <header className="sticky top-0 z-40 w-full glass-panel shadow-sm border-b border-wood-200/60 transition-all duration-300">
      {/* Top Banner Notice */}
      <div className="bg-forest-900 text-forest-100 text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <MapPin className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
        <span>Бакота, смт Стара Ушиця • Замовлення їжі в Кафе — <strong>Самовивіз</strong></span>
        <span className="hidden md:inline-block text-forest-400">•</span>
        <a href="tel:0676791570" className="hidden md:inline-flex items-center gap-1 text-amber-300 hover:text-white transition-colors">
          <Phone className="w-3 h-3" /> 067-679-15-70
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="cursor-pointer transition-transform hover:scale-105"
          >
            <Logo className="h-14" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-wood-100/70 p-1.5 rounded-full border border-wood-200">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                    isActive ? 'text-white' : 'text-forest-900 hover:text-forest-700'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-forest-900 rounded-full shadow-md"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions (Phone, Cart, Admin) */}
          <div className="flex items-center gap-3">
            
            {/* Direct Phone Call Button */}
            <a
              href="tel:0676791570"
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 bg-amber-500/10 text-amber-800 hover:bg-amber-500 hover:text-white rounded-full text-xs font-bold transition-all border border-amber-500/30"
              title="Зателефонувати власникам"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>067 679 1570</span>
            </a>

            {/* Shopping Cart Button */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-forest-800 to-forest-900 text-white rounded-full font-semibold text-sm shadow-md hover:shadow-lg hover:from-forest-700 hover:to-forest-800 transition-all active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Кошик</span>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  key={cartCount}
                  className="bg-amber-500 text-forest-950 font-black text-xs px-2 py-0.5 rounded-full shadow-sm"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            {/* Admin Entrance Trigger */}
            <button
              onClick={openAdmin}
              className="p-2 text-forest-700 hover:text-amber-600 hover:bg-wood-200/50 rounded-full transition-colors"
              title="Адмін панель кафе (Садиба1872)"
            >
              <Lock className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-forest-900 rounded-lg hover:bg-wood-200/60"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-forest-950 text-white border-b border-forest-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-colors flex items-center justify-between ${
                    activeTab === item.id ? 'bg-forest-800 text-amber-400 font-bold' : 'text-forest-100 hover:bg-forest-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeTab === item.id && <span className="w-2 h-2 rounded-full bg-amber-400" />}
                </button>
              ))}

              <div className="pt-4 border-t border-forest-800 space-y-2">
                <p className="text-xs font-semibold text-forest-300 uppercase tracking-wider px-4">Телефони для зв'язку:</p>
                <a href="tel:0676791570" className="flex items-center gap-3 px-4 py-2.5 bg-forest-900 rounded-xl text-amber-300 font-semibold text-sm">
                  <Phone className="w-4 h-4" /> 067-679-15-70 (Василь)
                </a>
                <a href="tel:0972464189" className="flex items-center gap-3 px-4 py-2.5 bg-forest-900 rounded-xl text-amber-300 font-semibold text-sm">
                  <Phone className="w-4 h-4" /> 097-246-41-89 (Ольга)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
