import React, { useState } from 'react';
import { Camera, Video, X, Maximize2, Play, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeMedia, setActiveMedia] = useState<{ url: string; type: 'image' | 'video'; title: string } | null>(null);

  // Sample categorized media gallery
  const galleryItems = [
    { id: '1', title: "Панорамний краєвид гір та сутінків Бакоти", category: 'exterior', type: 'image' as const, url: '/media/01_Exterior_Territory/IMG_3056.HEIC' },
    { id: '2', title: "Оренда Котеджу під сосновим лісом", category: 'exterior', type: 'image' as const, url: '/media/01_Exterior_Territory/IMG_3036.HEIC' },
    { id: '3', title: "Літня тераса та альтанка для відпочинку", category: 'exterior', type: 'image' as const, url: '/media/01_Exterior_Territory/IMG_0052.HEIC' },
    { id: '4', title: "Квітучий сад на подвір’ї садиби", category: 'exterior', type: 'image' as const, url: '/media/01_Exterior_Territory/IMG_0058.HEIC' },
    { id: '5', title: "Номер Стандарт з сосновим оздобленням", category: 'rooms', type: 'image' as const, url: '/media/02_Rooms_Interior/IMG_2666.HEIC' },
    { id: '6', title: "Чистий санвузол із феном та зручностями", category: 'rooms', type: 'image' as const, url: '/media/02_Rooms_Interior/IMG_2677.HEIC' },
    { id: '7', title: "М’яке підсвічування номерів увечері", category: 'rooms', type: 'image' as const, url: '/media/02_Rooms_Interior/IMG_2679.HEIC' },
    { id: '8', title: "Текстура соснового брусу в інтер’єрі", category: 'details', type: 'image' as const, url: '/media/03_Details_Decor/IMG_2660.HEIC' },
    { id: '9', title: "Деталі дерев’яного декору та карнизи", category: 'details', type: 'image' as const, url: '/media/03_Details_Decor/IMG_2697.HEIC' },
    { id: '10', title: "Відео-прогулянка територією садиби", category: 'video', type: 'video' as const, url: '/media/00_Videos/IMG_2922.MOV' },
    { id: '11', title: "Відео огляд літньої альтанки", category: 'video', type: 'video' as const, url: '/media/00_Videos/IMG_3035.MOV' },
    { id: '12', title: "Краєвиди Бакоти з тераси", category: 'exterior', type: 'image' as const, url: '/media/01_Exterior_Territory/IMG_3059.HEIC' },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-100 px-3.5 py-1.5 rounded-full">
          Фото & Відео Галерея
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-forest-950">
          Атмосфера Садиби під лісом
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Перегляньте фотографії номерів, території, лісу та альтанок. Відчуйте затишок Бакоти ще до вашого приїзду.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
        {[
          { id: 'all', label: 'Всі медіа' },
          { id: 'exterior', label: 'Територія & Природа' },
          { id: 'rooms', label: 'Номери & Інтер’єр' },
          { id: 'details', label: 'Деталі & Декор' },
          { id: 'video', label: 'Відео-огляди' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`px-5 py-2.5 rounded-2xl font-bold text-xs whitespace-nowrap transition-all ${
              activeCategory === tab.id
                ? 'bg-forest-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-wood-100 border border-wood-200'
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -4 }}
            onClick={() => setActiveMedia({ url: item.url, type: item.type, title: item.title })}
            className="group relative aspect-video rounded-3xl overflow-hidden bg-forest-950 shadow-md cursor-pointer border border-wood-200"
          >
            {/* Visual Cover Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-900/40 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity" />
            
            <div className="absolute inset-0 flex items-center justify-center z-20">
              {item.type === 'video' ? (
                <div className="w-14 h-14 bg-amber-500 text-forest-950 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              ) : (
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-5 h-5" />
                </div>
              )}
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-20 space-y-1">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                {item.type === 'video' ? 'Відео огляд' : 'Фото садиби'}
              </span>
              <p className="font-heading font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                {item.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Video Modal */}
      <AnimatePresence>
        {activeMedia && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-forest-950 rounded-3xl overflow-hidden shadow-2xl border border-forest-800 p-2"
            >
              <button
                onClick={() => setActiveMedia(null)}
                className="absolute top-4 right-4 z-30 p-2 bg-black/60 text-white rounded-full hover:bg-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="aspect-video w-full flex items-center justify-center bg-black rounded-2xl overflow-hidden">
                {activeMedia.type === 'video' ? (
                  <video controls autoPlay className="w-full h-full object-contain">
                    <source src={activeMedia.url} type="video/mp4" />
                    Ваш браузер не підтримує відео.
                  </video>
                ) : (
                  <div className="text-center p-8 space-y-4">
                    <Camera className="w-16 h-16 text-amber-400 mx-auto" />
                    <h3 className="font-heading text-2xl font-bold text-white">{activeMedia.title}</h3>
                    <p className="text-xs text-forest-200">Фото з архіву Садиби під лісом (Бакота)</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
