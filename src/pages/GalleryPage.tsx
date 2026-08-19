import React, { useState } from 'react';
import { Camera, Video, X, Maximize2, Play, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeMedia, setActiveMedia] = useState<{ url: string; type: 'image' | 'video'; title: string } | null>(null);

  // Gallery dataset with real web images & videos
  const galleryItems = [
    { id: '1', title: 'Захід сонця над Бакотською затокою', category: 'exterior', type: 'image' as const, url: '/images/bakota/bakota_sunset.jpg' },
    { id: '2', title: 'Панорама гірського каньйону Бакоти', category: 'exterior', type: 'image' as const, url: '/images/bakota/bakota_mountains.jpg' },
    { id: '3', title: 'Літня тераса та альтанка під соснами', category: 'exterior', type: 'image' as const, url: '/images/exterior/terrace.jpg' },
    { id: '4', title: 'Квітучий сад на подвір’ї садиби', category: 'exterior', type: 'image' as const, url: '/images/exterior/garden.jpg' },
    { id: '5', title: 'Сосновий ліс та відкрите небо', category: 'exterior', type: 'image' as const, url: '/images/exterior/forest_sky.jpg' },
    { id: '6', title: 'Номер Стандарт з сосновим зрубом', category: 'rooms', type: 'image' as const, url: '/images/rooms/room_standard.jpg' },
    { id: '7', title: 'Власний санвузол із феном та зручностями', category: 'rooms', type: 'image' as const, url: '/images/rooms/bathroom.jpg' },
    { id: '8', title: 'М’яке підсвічування номеру увечері', category: 'rooms', type: 'image' as const, url: '/images/rooms/room_lighting.jpg' },
    { id: '9', title: 'Номер Сімейний Комфорт', category: 'rooms', type: 'image' as const, url: '/images/rooms/room_comfort.jpg' },
    { id: '10', title: 'Затишна атмосфера спальної кімнати', category: 'rooms', type: 'image' as const, url: '/images/rooms/room_cozy.jpg' },
    { id: '11', title: 'Білосніжна постільна білизна', category: 'rooms', type: 'image' as const, url: '/images/rooms/room_details.jpg' },
    { id: '12', title: 'Панорамний краєвид з балкону', category: 'exterior', type: 'image' as const, url: '/images/bakota/bakota_panorama.jpg' },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#FAF8F5]">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1 rounded-full">
          Фото & Медіа Галерея
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#1C2A24]">
          Атмосфера Садиби під лісом
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Яскраві краєвиди Бакоти, номери, альтанки та подвір'я. Натисніть на фото для повноформатного перегляду.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
        {[
          { id: 'all', label: 'Всі фото' },
          { id: 'exterior', label: 'Бакота & Територія' },
          { id: 'rooms', label: 'Номери & Інтер’єр' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`px-5 py-2 rounded-full font-bold text-xs whitespace-nowrap transition-all ${
              activeCategory === tab.id
                ? 'bg-[#1C2A24] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -4 }}
            onClick={() => setActiveMedia({ url: item.url, type: item.type, title: item.title })}
            className="card-clean rounded-3xl overflow-hidden cursor-pointer group shadow-sm flex flex-col justify-between"
          >
            <div className="aspect-[4/3] bg-stone-200 relative overflow-hidden">
              <img 
                src={item.url} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              <div className="absolute bottom-3 left-3 right-3 text-white z-10 flex items-center justify-between">
                <span className="text-xs font-bold font-heading truncate">{item.title}</span>
                <div className="p-1.5 bg-white/20 backdrop-blur-md rounded-full text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeMedia && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-[#1C2A24] rounded-3xl overflow-hidden shadow-2xl border border-stone-800 p-3"
            >
              <button
                onClick={() => setActiveMedia(null)}
                className="absolute top-4 right-4 z-30 p-2 bg-black/60 text-white rounded-full hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] w-full flex items-center justify-center bg-black rounded-2xl overflow-hidden">
                <img 
                  src={activeMedia.url} 
                  alt={activeMedia.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-4 text-center text-white space-y-1">
                <h3 className="font-heading text-lg font-bold">{activeMedia.title}</h3>
                <p className="text-xs text-stone-400">Садиба під лісом • Бакота</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
