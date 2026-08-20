import React, { useState } from 'react';
import { Camera, Video, X, Maximize2, Sparkles, Home, Coffee, Trees } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeMedia, setActiveMedia] = useState<{ url: string; title: string; categoryName: string } | null>(null);

  // Comprehensive gallery dataset from user-sorted photos
  const galleryItems = [
    // Rooms & Interior
    { id: 'r1', title: 'Номер Стандарт (Кімната 1)', category: 'rooms', categoryName: 'Номери', url: '/images/rooms/room1/IMG_2724.jpg' },
    { id: 'r2', title: 'Затишне ліжко з соснового зрубу', category: 'rooms', categoryName: 'Номери', url: '/images/rooms/room1/IMG_2730.jpg' },
    { id: 'r3', title: 'Номер Сімейний Комфорт (Номер 2)', category: 'rooms', categoryName: 'Номери', url: '/images/rooms/room2/ліжка.jpg' },
    { id: 'r4', title: 'Спальні місця у сімейному номері', category: 'rooms', categoryName: 'Номери', url: '/images/rooms/room2/IMG_3048.jpg' },
    { id: 'r5', title: 'Два двоспальні ліжка у котеджі', category: 'rooms', categoryName: 'Номери', url: '/images/rooms/interior/два_ліжка.jpg' },
    { id: 'r6', title: 'Обладнана кухня садиби', category: 'rooms', categoryName: 'Номери & Кухня', url: '/images/rooms/kitchen/кухня.jpg' },
    { id: 'r7', title: 'Раковина та кухонний гарнітур', category: 'rooms', categoryName: 'Номери & Кухня', url: '/images/rooms/kitchen/раковина_на_кухні.jpg' },
    { id: 'r8', title: 'Власна душова кабіна', category: 'rooms', categoryName: 'Номери', url: '/images/rooms/interior/душ.jpg' },
    { id: 'r9', title: 'Санвузол та туалет у номері', category: 'rooms', categoryName: 'Номери', url: '/images/rooms/interior/туалет.jpg' },
    { id: 'r10', title: 'Шафа для одягу в кімнаті', category: 'rooms', categoryName: 'Номери', url: '/images/rooms/interior/шафа_в_кімнаті.jpg' },

    // Cafe & Dishes
    { id: 'c1', title: 'Домашні пухкі сирники зі сметаною', category: 'cafe', categoryName: 'Кафе & Страви', url: '/images/dishes/сирники.jpg' },
    { id: 'c2', title: 'Вечірнє затишне Кафе садиби', category: 'cafe', categoryName: 'Кафе & Страви', url: '/images/territory/вечірнє_кафе.jpg' },
    { id: 'c3', title: 'Кафе зсередини у вечірній час', category: 'cafe', categoryName: 'Кафе & Страви', url: '/images/territory/вечірнє_кафе_зсередини.jpg' },
    { id: 'c4', title: 'Столики кафе під лісом', category: 'cafe', categoryName: 'Кафе & Страви', url: '/images/territory/столики_кафе.jpg' },
    { id: 'c5', title: 'Стіл на балконі з видом на краєвиди Бакоти', category: 'cafe', categoryName: 'Кафе & Страви', url: '/images/territory/стіл_на_балконі_з_видом_на_краєвиди.jpg' },
    { id: 'c6', title: 'Вечірня атмосфера в кафе', category: 'cafe', categoryName: 'Кафе & Страви', url: '/images/territory/вечір_в_кафе.jpg' },
    { id: 'c7', title: 'Оцифроване меню кафе на дошці', category: 'cafe', categoryName: 'Кафе & Страви', url: '/images/territory/меню_кафе.jpg' },
    { id: 'c8', title: 'Фірмовий постер садиби під лісом', category: 'cafe', categoryName: 'Кафе & Страви', url: '/images/territory/постер_садиба_під_лісом_в_кафе.jpg' },

    // Territory & Bakota Scenery
    { id: 't1', title: 'Панорама Бакотської затоки та гір', category: 'territory', categoryName: 'Територія & Бакота', url: '/images/territory/краєвид.jpg' },
    { id: 't2', title: 'Гірський краєвид над Дністром', category: 'territory', categoryName: 'Територія & Бакота', url: '/images/territory/краєвид2.jpg' },
    { id: 't3', title: 'Панорамний вид з тераси садиби', category: 'territory', categoryName: 'Територія & Бакота', url: '/images/territory/краєвид3.jpg' },
    { id: 't4', title: 'Квітуча територія з рожами та квітами', category: 'territory', categoryName: 'Територія & Бакота', url: '/images/territory/територія_з_квітами.jpg' },
    { id: 't5', title: 'Квіти біля альтанок під лісом', category: 'territory', categoryName: 'Територія & Бакота', url: '/images/territory/квітки.jpg' },
    { id: 't6', title: 'Захід сонця над Бакотською затокою', category: 'territory', categoryName: 'Територія & Бакота', url: '/images/bakota/bakota_sunset_view.jpg' },
    { id: 't7', title: 'Затишний стіл на балконі', category: 'territory', categoryName: 'Територія & Бакота', url: '/images/territory/стіл_на_балконі_з_краєвидом.jpg' },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#FAF8F5]">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1 rounded-full">
          Офіційна Фотогалерея
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#1C2A24]">
          Атмосфера Садиби під лісом
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Переглядайте відсортовані фото номерів, кухні, кафе, сирників та мальовничих краєвидів Бакоти. Натисніть на фото для повноекранного перегляду.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
        {[
          { id: 'all', label: 'Всі фото' },
          { id: 'rooms', label: 'Номери & Інтер’єр' },
          { id: 'cafe', label: 'Кафе & Страви' },
          { id: 'territory', label: 'Територія & Краєвиди' },
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
            onClick={() => setActiveMedia({ url: item.url, title: item.title, categoryName: item.categoryName })}
            className="card-clean rounded-3xl overflow-hidden cursor-pointer group shadow-sm flex flex-col justify-between"
          >
            <div className="aspect-[4/3] bg-stone-200 relative overflow-hidden">
              <img 
                src={item.url} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute bottom-3 left-3 right-3 text-white z-10 flex items-center justify-between">
                <div className="truncate">
                  <span className="block text-[10px] font-bold text-amber-400 uppercase tracking-wider">{item.categoryName}</span>
                  <span className="text-xs font-bold font-heading truncate block">{item.title}</span>
                </div>
                <div className="p-1.5 bg-white/20 backdrop-blur-md rounded-full text-white shrink-0 ml-2">
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
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{activeMedia.categoryName}</span>
                <h3 className="font-heading text-lg font-bold">{activeMedia.title}</h3>
                <p className="text-xs text-stone-400">Садиба під лісом • Стара Ушиця (Бакота)</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
