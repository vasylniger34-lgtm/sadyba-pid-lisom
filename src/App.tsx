import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartModal } from './components/CartModal';
import { AdminModal } from './components/AdminModal';
import { BookingModal } from './components/BookingModal';

import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { CafePage } from './pages/CafePage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactsPage } from './pages/ContactsPage';

import { INITIAL_MENU } from './data/initialMenu';
import { MenuItem, CartItem, Room } from './types';

export function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  // Menu Items state (persisted in localStorage)
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    const saved = localStorage.getItem('sadyba_menu');
    return saved ? JSON.parse(saved) : INITIAL_MENU;
  });

  useEffect(() => {
    localStorage.setItem('sadyba_menu', JSON.stringify(menuItems));
  }, [menuItems]);

  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('sadyba_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('sadyba_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [bookingRoom, setBookingRoom] = useState<Room | null>(null);

  // Telegram Bot Settings (persisted)
  const [telegramBotToken, setTelegramBotToken] = useState<string>(() => {
    return localStorage.getItem('sadyba_tg_token') || '';
  });
  const [telegramChatId, setTelegramChatId] = useState<string>(() => {
    return localStorage.getItem('sadyba_tg_chat') || '';
  });

  useEffect(() => {
    localStorage.setItem('sadyba_tg_token', telegramBotToken);
  }, [telegramBotToken]);

  useEffect(() => {
    localStorage.setItem('sadyba_tg_chat', telegramChatId);
  }, [telegramChatId]);

  // Cart Operations
  const addToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(ci => ci.item.id === item.id);
      if (existing) {
        return prev.map(ci =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(ci => {
          if (ci.item.id === id) {
            const newQ = ci.quantity + delta;
            return newQ > 0 ? { ...ci, quantity: newQ } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, ci) => sum + ci.quantity, 0);

  const openBooking = (room: Room) => {
    setBookingRoom(room);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-800 selection:bg-amber-500 selection:text-white">
      {/* Animated Site Preloader */}
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}

      {/* Sticky Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartCount}
        openCart={() => setIsCartOpen(true)}
        openAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Page View Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage setActiveTab={setActiveTab} openBooking={openBooking} />
        )}
        {activeTab === 'rooms' && (
          <RoomsPage openBooking={openBooking} />
        )}
        {activeTab === 'cafe' && (
          <CafePage
            menuItems={menuItems}
            addToCart={addToCart}
            openCart={() => setIsCartOpen(true)}
            cartCount={cartCount}
          />
        )}
        {activeTab === 'gallery' && <GalleryPage />}
        {activeTab === 'contacts' && <ContactsPage />}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} openAdmin={() => setIsAdminOpen(true)} />

      {/* Interactive Cart Drawer */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
        telegramBotToken={telegramBotToken}
        telegramChatId={telegramChatId}
      />

      {/* Protected Admin Panel Modal (Password: Садиба1872) */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        menuItems={menuItems}
        setMenuItems={setMenuItems}
        telegramBotToken={telegramBotToken}
        setTelegramBotToken={setTelegramBotToken}
        telegramChatId={telegramChatId}
        setTelegramChatId={setTelegramChatId}
      />

      {/* Room Booking Modal */}
      <BookingModal
        isOpen={!!bookingRoom}
        onClose={() => setBookingRoom(null)}
        selectedRoom={bookingRoom}
      />
    </div>
  );
}
