import React from 'react';
import { motion } from 'framer-motion';
import { Home, Coffee, Trees, MapPin, Phone, Sparkles, Star, ChevronRight, Flame, ArrowRight, ShieldCheck, Waves } from 'lucide-react';
import { ROOMS_DATA } from '../data/roomsData';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  openBooking: (room: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab, openBooking }) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-forest-950 text-white overflow-hidden py-20 px-4">
        {/* Ambient Overlay & Forest Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-forest-800/60 via-forest-950/90 to-forest-950 z-10" />
        
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 transform filter blur-[2px]"
          style={{ backgroundImage: `url('/media/01_Exterior_Territory/IMG_3036.HEIC')` }}
        />

        <div className="relative z-20 max-w-5xl mx-auto text-center space-y-8">
          
          {/* Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-800/80 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-glow"
          >
            <Trees className="w-4 h-4 text-amber-400" />
            <span>Курорт Бакота • смт Стара Ушиця</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight"
          >
            Відпочинок у серці <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              карпатського лісу та Дністра
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-forest-100 text-base sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Комплекс «Садиба під лісом» — 2 в 1: затишні дерев’яні номери біля соснового гаю та кафе з справжньою домашньою кухнею.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => setActiveTab('rooms')}
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-forest-950 font-extrabold rounded-2xl shadow-xl shadow-amber-500/25 flex items-center justify-center gap-3 transition-all transform hover:scale-105 active:scale-95"
            >
              <Home className="w-5 h-5" />
              <span>Забронювати номери</span>
            </button>

            <button
              onClick={() => setActiveTab('cafe')}
              className="w-full sm:w-auto px-8 py-4 bg-forest-800/80 hover:bg-forest-700 text-white font-bold rounded-2xl border border-forest-600 backdrop-blur-md shadow-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 active:scale-95"
            >
              <Coffee className="w-5 h-5 text-amber-400" />
              <span>Меню Кафе (Замовлення)</span>
            </button>
          </motion.div>

          {/* Friday Bograch Alert Teaser */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-3 p-3 px-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold backdrop-blur-md"
          >
            <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
            <span>Щоп'ятниці у нашому Кафе — справжній козацький <strong>Бограч у казані (200 грн)</strong>!</span>
          </motion.div>

        </div>
      </section>

      {/* 2 in 1 Concept Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-100 px-3.5 py-1 rounded-full">
            Унікальний формат 2 в 1
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-forest-950">
            Все для ідеального відпочинку на Бакоті
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base">
            У нас ви отримаєте не лише затишний ночівлю під шум сосен, а й смачні гарячі сніданки, обіди та вечері з власної кухні.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Cottage & Rooms */}
          <motion.div
            whileHover={{ y: -6 }}
            className="p-8 bg-white rounded-3xl border border-wood-200 shadow-warm flex flex-col justify-between space-y-6 relative overflow-hidden group"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 bg-forest-100 text-forest-800 rounded-2xl flex items-center justify-center shadow-inner">
                <Home className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">01. Оренда номери & котедж</span>
              <h3 className="font-heading text-2xl font-bold text-forest-950">
                Затишні дерев'яні номери з ароматом хвої
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Номери з екологічного соснового зрубу для відпочинку парами або родинами. Можливість оренди окремого номеру (2-4 місця) або всього котеджу (до 10-12 осіб).
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2">✓ Ортопедичні двоспальні ліжка та свіжа білизна</li>
                <li className="flex items-center gap-2">✓ Карпатська сауна та гарячий чан на території</li>
                <li className="flex items-center gap-2">✓ Власна мангальна зона та альтанки під лісом</li>
              </ul>
            </div>

            <button
              onClick={() => setActiveTab('rooms')}
              className="inline-flex items-center gap-2 text-forest-900 font-extrabold text-sm hover:text-amber-600 transition-colors pt-4 border-t border-slate-100"
            >
              <span>Обрати номер та забронювати</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Card 2: Cafe */}
          <motion.div
            whileHover={{ y: -6 }}
            className="p-8 bg-forest-950 text-white rounded-3xl border border-forest-800 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden group"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center">
                <Coffee className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">02. Домашнє Кафе & Оцифроване меню</span>
              <h3 className="font-heading text-2xl font-bold text-white">
                Домашня кухня з душею та можливістю онлайн-замовлення
              </h3>
              <p className="text-forest-200 text-sm leading-relaxed">
                Бануш, пельмені, вареники з сиром та картоплею, шашлик на мангалі, піца, млинці та прохолодні напої. Зробіть замовлення на веб-сайті та заберіть гарячим!
              </p>
              <ul className="space-y-2 text-xs font-semibold text-forest-200">
                <li className="flex items-center gap-2 text-amber-300">★ Фірмовий Бограч щоп'ятниці у казані!</li>
                <li className="flex items-center gap-2">✓ Швидке оформлення замовлення (Самовивіз)</li>
                <li className="flex items-center gap-2">✓ Відправка сповіщення прямо у Telegram</li>
              </ul>
            </div>

            <button
              onClick={() => setActiveTab('cafe')}
              className="inline-flex items-center gap-2 text-amber-400 font-extrabold text-sm hover:text-amber-300 transition-colors pt-4 border-t border-forest-800"
            >
              <span>Відкрити Меню Кафе та зробити замовлення</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* Featured Rooms Teaser */}
      <section className="bg-wood-100/60 py-16 border-y border-wood-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-forest-700">Проживання</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-950 mt-1">
                Наші номери для проживання
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('rooms')}
              className="inline-flex items-center gap-2 font-bold text-sm text-forest-900 hover:text-amber-600 transition-colors"
            >
              <span>Дивитися всі пропозиції</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROOMS_DATA.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-3xl border border-wood-200 overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div className="p-6 space-y-3">
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">
                    {room.capacity}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-forest-950">{room.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{room.description}</p>
                  
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-sm font-black text-forest-900">{room.pricePerNight}</span>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => openBooking(room)}
                    className="w-full py-2.5 bg-forest-900 hover:bg-forest-800 text-white font-bold rounded-xl text-xs transition-colors"
                  >
                    Забронювати номер
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Quick Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-forest-900 to-forest-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-forest-800">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Прямий зв’язок із господарями</span>
            <h2 className="font-heading text-3xl font-bold">Бажаєте уточнити деталі заїзду?</h2>
            <p className="text-forest-200 text-sm max-w-md">
              Телефонуйте власникам садиби у будь-який зручний час для вас.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="tel:0676791570"
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-forest-950 font-extrabold rounded-2xl shadow-lg flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" /> 067-679-15-70 (Василь)
            </a>
            <a
              href="tel:0972464189"
              className="px-6 py-3.5 bg-forest-800 hover:bg-forest-700 text-white font-bold rounded-2xl border border-forest-600 flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" /> 097-246-41-89 (Ольга)
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
