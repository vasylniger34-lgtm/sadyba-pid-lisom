import React, { useState } from 'react';
import { MenuItem, CategoryId } from '../types';
import { CATEGORIES } from '../data/initialMenu';
import { Search, ShoppingBag, Plus, Flame, AlertCircle, Check, Sparkles, Filter, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CafePageProps {
  menuItems: MenuItem[];
  addToCart: (item: MenuItem) => void;
  openCart: () => void;
  cartCount: number;
}

export const CafePage: React.FC<CafePageProps> = ({
  menuItems,
  addToCart,
  openCart,
  cartCount
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleAdd = (item: MenuItem) => {
    addToCart(item);
    setAddedItemIds(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds(prev => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Banner */}
      <div className="relative p-8 sm:p-12 bg-forest-950 text-white rounded-3xl overflow-hidden shadow-2xl border border-forest-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent opacity-80" />
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Кафе «Садиба під лісом» • Домашня кухня</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
            Оцифроване меню з можливістю замовлення
          </h1>

          <p className="text-forest-200 text-sm sm:text-base leading-relaxed">
            Справжні українські страви з натуральних інгредієнтів. Оформлюйте замовлення онлайн та забирайте гарячими!
          </p>

          {/* Self Pickup Highlight Notice */}
          <div className="p-3.5 bg-amber-500/15 border border-amber-500/40 rounded-2xl text-amber-200 text-xs flex items-center gap-3 max-w-xl">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <strong>Увага: Самовивіз!</strong> Усі замовлення готуються свіжими для видачі у Кафе садиби (смт Стара Ушиця).
            </div>
          </div>
        </div>
      </div>

      {/* Friday Bograch Special Alert Card */}
      <div className="p-5 bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/40 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 bg-amber-500 text-forest-950 rounded-2xl flex items-center justify-center font-bold shadow-md shrink-0">
            <Flame className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-heading text-lg font-bold text-forest-950">Фірмовий Закарпатський Бограч</h3>
              <span className="bg-amber-500 text-forest-950 font-black text-[10px] uppercase px-2 py-0.5 rounded-full">
                Лише по п'ятницям!
              </span>
            </div>
            <p className="text-xs text-slate-600">
              Вариться традиційно в казані на відкритому вогні зі 3 видів м'яса та паприкою. Ціна: <strong>200 грн / порція</strong>.
            </p>
          </div>
        </div>
        
        <button
          onClick={() => {
            const bograch = menuItems.find(i => i.isFridayOnly);
            if (bograch) handleAdd(bograch);
          }}
          className="w-full sm:w-auto px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-forest-950 font-extrabold text-xs rounded-xl shadow-md transition-all shrink-0"
        >
          + Замовити Бограч
        </button>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="space-y-4">
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Шукати страву (наприклад: Бануш, Піца, Вареники, Капучіно)..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-wood-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
          />
        </div>

        {/* Categories Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl font-bold text-xs whitespace-nowrap transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-forest-900 text-white shadow-md scale-105'
                    : 'bg-white text-slate-700 hover:bg-wood-100 border border-wood-200'
                }`}
              >
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const isJustAdded = addedItemIds[item.id];
          return (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-5 bg-white rounded-3xl border shadow-sm flex flex-col justify-between space-y-4 transition-all hover:shadow-md ${
                !item.available ? 'opacity-50 border-slate-200' : 'border-wood-200'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-lg font-bold text-forest-950 leading-snug">
                    {item.name}
                  </h3>
                  
                  {item.isFridayOnly && (
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-extrabold text-[10px] rounded-md shrink-0 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> Лише Пт
                    </span>
                  )}
                </div>

                {item.description && (
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>

              {/* Price & Add to Cart */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-lg font-black text-forest-900">{item.price} грн</span>
                  <span className="text-[11px] text-slate-400 font-medium ml-1">/ {item.unit || 'порція'}</span>
                </div>

                <button
                  onClick={() => handleAdd(item)}
                  disabled={!item.available}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 shadow-sm active:scale-95 ${
                    isJustAdded
                      ? 'bg-green-600 text-white'
                      : item.available
                      ? 'bg-forest-900 hover:bg-forest-800 text-white'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {isJustAdded ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Додано!
                    </>
                  ) : item.available ? (
                    <>
                      <Plus className="w-3.5 h-3.5 text-amber-400" /> Додати
                    </>
                  ) : (
                    'Немає'
                  )}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating Cart Launcher Button */}
      {cartCount > 0 && (
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onClick={openCart}
          className="fixed bottom-6 right-6 z-30 px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-forest-950 font-black text-sm rounded-full shadow-2xl shadow-amber-500/40 flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 border-2 border-white"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Переглянути замовлення ({cartCount})</span>
        </motion.button>
      )}

    </div>
  );
};
