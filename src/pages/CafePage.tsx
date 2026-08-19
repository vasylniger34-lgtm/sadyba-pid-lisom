import React, { useState } from 'react';
import { MenuItem, CategoryId } from '../types';
import { CATEGORIES } from '../data/initialMenu';
import { Search, ShoppingBag, Plus, Flame, AlertCircle, Check, Sparkles, Utensils, Soup, Beef, Drumstick, CookingPot, Popcorn, Salad, Coffee, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const handleAdd = (item: MenuItem) => {
    addToCart(item);
    setAddedItemIds(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds(prev => ({ ...prev, [item.id]: false }));
    }, 1000);
  };

  // Define structured sections with icons and headers
  const SECTIONS: { id: CategoryId; title: string; subtitle: string; icon: any }[] = [
    { id: 'first', title: 'I. Перші страви', subtitle: 'Наваристі традиційні юшки та гарячі супи', icon: Soup },
    { id: 'second', title: 'II. Другі страви', subtitle: 'Бануш, пельмені, вареники, картопелька та піца', icon: Beef },
    { id: 'meat', title: 'М’ясні та гарячі страви', subtitle: 'Відбивні, котлети по-київськи, шакшука та сніданки', icon: Drumstick },
    { id: 'to_order', title: 'Страви на замовлення (Гріль & Мангал)', subtitle: 'Шашлик, риба, стейк та курка гріль на дровах', icon: Flame },
    { id: 'pancakes', title: 'Млинці & Сирники', subtitle: 'Ніжні домашні млинчики з різними начинками та сирники', icon: CookingPot },
    { id: 'fry', title: 'Фритюр', subtitle: 'Хрустка картопля фрі, нагетси та сирні палички', icon: Popcorn },
    { id: 'salads', title: 'Салати', subtitle: 'Свіжі овочі з власного городу та легкі салати', icon: Salad },
    { id: 'sauces', title: 'Соуси та доповнення', subtitle: 'Ароматні фірмові соуси та домашня сметанка', icon: Sparkles },
    { id: 'drinks', title: 'Напої & Літні ласощі', subtitle: 'Ароматна кава, айс-латте, коктейлі, квас, вата та попкорн', icon: Coffee },
  ];

  const filteredSections = SECTIONS.filter(
    sec => selectedCategory === 'all' || selectedCategory === sec.id
  );

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Hero Banner */}
        <div className="p-8 sm:p-12 bg-gradient-to-r from-[#1C3026] via-[#2A4839] to-[#1C3026] text-white rounded-3xl shadow-xl relative overflow-hidden border border-[#3A5C4B]">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
              <Utensils className="w-3.5 h-3.5" />
              <span>Кафе «Садиба під лісом» • Домашня кухня</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Оцифроване меню з замовленням
            </h1>

            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Обирайте смачні домашні страви, сформуйте кошик та отримуйте замовлення гарячим!
            </p>

            {/* Self Pickup Notice */}
            <div className="p-3.5 bg-amber-500/20 border border-amber-500/40 rounded-2xl text-amber-200 text-xs flex items-center gap-3 max-w-xl">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <strong className="text-white block">Виключно Самовивіз!</strong> 
                Замовлення видаються безпосередньо в Кафе садиби (смт Стара Ушиця).
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Section Navigation Bar */}
        <div className="sticky top-20 z-30 bg-[#FAF6F0]/95 backdrop-blur-md py-3 border-y border-[#EFE5D5] -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full font-bold text-xs whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#1C3026] text-amber-400 shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-[#F3EBE0] border border-[#EFE5D5]'
              }`}
            >
              Всі розділи меню
            </button>
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setSelectedCategory(sec.id)}
                className={`px-4 py-2 rounded-full font-bold text-xs whitespace-nowrap transition-all ${
                  selectedCategory === sec.id
                    ? 'bg-[#1C3026] text-amber-400 shadow-md scale-105'
                    : 'bg-white text-slate-700 hover:bg-[#F3EBE0] border border-[#EFE5D5]'
                }`}
              >
                {sec.title}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-md">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Шукати страву (наприклад: Бограч, Бануш, Шашлик, Латте)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#EFE5D5] rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
            />
          </div>
        </div>

        {/* Menu Sections Render */}
        <div className="space-y-12">
          {filteredSections.map((sec) => {
            const SectionIcon = sec.icon;
            const items = menuItems.filter((item) => {
              const matchesCat = item.category === sec.id;
              const matchesQuery = !searchQuery || 
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
              return matchesCat && matchesQuery;
            });

            if (items.length === 0) return null;

            return (
              <div key={sec.id} id={sec.id} className="space-y-6 pt-4 border-t border-[#EFE5D5] first:border-t-0">
                {/* Section Header */}
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#1C3026] text-amber-400 rounded-2xl shadow-md">
                    <SectionIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1C3026]">
                      {sec.title}
                    </h2>
                    <p className="text-xs text-slate-500">{sec.subtitle}</p>
                  </div>
                </div>

                {/* Items Grid for this Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item) => {
                    const isJustAdded = addedItemIds[item.id];
                    const isFridaySpecial = item.isFridayOnly;

                    return (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-6 rounded-3xl border flex flex-col justify-between space-y-4 transition-all ${
                          isFridaySpecial
                            ? 'bg-gradient-to-b from-amber-500/10 to-white border-amber-500/50 shadow-md ring-2 ring-amber-500/30'
                            : 'bg-white border-[#EFE5D5] shadow-sm hover:shadow-md'
                        }`}
                      >
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-heading text-lg font-bold text-[#1C3026]">
                              {item.name}
                            </h3>
                            {isFridaySpecial && (
                              <span className="px-2.5 py-1 bg-amber-500 text-forest-950 font-black text-[10px] uppercase rounded-full shadow-sm flex items-center gap-1 shrink-0">
                                <Flame className="w-3 h-3" /> Лише Пт
                              </span>
                            )}
                          </div>

                          {item.description && (
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>

                        {/* Price & Action */}
                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                          <div>
                            <span className="text-xl font-black text-[#1C3026]">{item.price} грн</span>
                            <span className="text-[11px] text-slate-400 ml-1">/ {item.unit || 'порція'}</span>
                          </div>

                          <button
                            onClick={() => handleAdd(item)}
                            disabled={!item.available}
                            className={`px-4 py-2.5 rounded-xl font-extrabold text-xs transition-all flex items-center gap-1.5 shadow-md active:scale-95 ${
                              isJustAdded
                                ? 'bg-green-700 text-white'
                                : item.available
                                ? 'bg-amber-500 hover:bg-amber-600 text-[#1C3026]'
                                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                            }`}
                          >
                            {isJustAdded ? (
                              <>
                                <Check className="w-4 h-4" /> Додано!
                              </>
                            ) : item.available ? (
                              <>
                                <Plus className="w-4 h-4" /> Додати
                              </>
                            ) : (
                              'Стоп-лист'
                            )}
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Cart Launcher Button */}
        {cartCount > 0 && (
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={openCart}
            className="fixed bottom-6 right-6 z-40 px-6 py-4 bg-amber-500 hover:bg-amber-600 text-[#1C3026] font-black text-sm rounded-full shadow-2xl flex items-center gap-3 border-2 border-white transition-transform hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Відкрити замовлення ({cartCount})</span>
          </motion.button>
        )}

      </div>
    </div>
  );
};
