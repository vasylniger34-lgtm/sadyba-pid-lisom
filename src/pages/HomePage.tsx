import React from 'react';
import { motion } from 'framer-motion';
import { Home, Coffee, Trees, MapPin, Phone, ChevronRight, Flame, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { ROOMS_DATA } from '../data/roomsData';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  openBooking: (room: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab, openBooking }) => {
  return (
    <div className="space-y-16 pb-16 bg-[#FAF8F5]">
      
      {/* Minimalist Hero Section */}
      <section className="pt-12 pb-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-bold uppercase tracking-wider"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Курорт Бакота • смт Стара Ушиця</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C2A24] leading-tight"
            >
              Відпочинок у серці <br />
              <span className="text-amber-600">соснового гаю та Бакоти</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Туристичний комплекс «Садиба під лісом» — затишні дерев’яні номери для проживання та кафе з домашньою українською кухнею.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={() => setActiveTab('rooms')}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#1C2A24] hover:bg-[#283D34] text-white font-bold rounded-2xl shadow-sm flex items-center justify-center gap-2 text-sm transition-all"
              >
                <Home className="w-4 h-4 text-amber-400" />
                <span>Забронювати номер</span>
              </button>

              <button
                onClick={() => setActiveTab('cafe')}
                className="w-full sm:w-auto px-7 py-3.5 bg-amber-500 hover:bg-amber-600 text-[#1C2A24] font-extrabold rounded-2xl shadow-sm flex items-center justify-center gap-2 text-sm transition-all"
              >
                <Coffee className="w-4 h-4" />
                <span>Переглянути Меню Кафе</span>
              </button>
            </motion.div>

            {/* Friday Special Teaser */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
                <Flame className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Щоп'ятниці у нашому Кафе — фірмовий <strong>Бограч у казані (200 грн)</strong>!</span>
              </div>
            </div>
          </div>

          {/* Right: Visual Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="card-clean rounded-3xl overflow-hidden p-3 shadow-sm">
              <div className="aspect-[4/3] rounded-2xl bg-stone-200 overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('/media/01_Exterior_Territory/IMG_3036.HEIC')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2A24]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">Садиба під лісом</span>
                  <p className="font-heading font-bold text-lg text-white">Затишок, сосни та спокій Бакоти</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2 in 1 Concept Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Концепція 2 в 1</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1C2A24]">
            Проживання & Домашня Кухня
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            Все для комфортного відпочинку в одному місці
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Cottage */}
          <div className="card-clean rounded-3xl p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-50 text-[#1C2A24] rounded-2xl flex items-center justify-center">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Проживання</span>
                <h3 className="font-heading text-2xl font-bold text-[#1C2A24] mt-1">
                  Дерев’яні номери біля лісу
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Затишні екологічні номери із соснового зрубу. Варіанти від 2 осіб до оренди всього котеджу (до 10-12 осіб).
              </p>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-700" /> Сауна та карпатський чан</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-700" /> Альтанки та мангали</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-700" /> Парковка та Wi-Fi</li>
              </ul>
            </div>

            <button
              onClick={() => setActiveTab('rooms')}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#1C2A24] hover:text-amber-700 transition-colors pt-4 border-t border-stone-100"
            >
              <span>Переглянути номери та ціни</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Cafe */}
          <div className="card-clean rounded-3xl p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-amber-50 text-amber-800 rounded-2xl flex items-center justify-center">
                <Coffee className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Харчування</span>
                <h3 className="font-heading text-2xl font-bold text-[#1C2A24] mt-1">
                  Домашнє Кафе (Самовивіз)
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Українська кухня з оцифрованим меню: Бануш, вареники, пельмені, піца, шашлик на мангалі, млинці та напої.
              </p>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2 text-amber-800 font-bold"><Flame className="w-4 h-4 text-amber-600" /> Фірмовий Бограч по п'ятницях!</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-700" /> Поділ меню на 9 зручних розділів</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-700" /> Відправка замовлення в Telegram</li>
              </ul>
            </div>

            <button
              onClick={() => setActiveTab('cafe')}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#1C2A24] hover:text-amber-700 transition-colors pt-4 border-t border-stone-100"
            >
              <span>Перейти до Розділів Меню</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* Rooms Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Проживання</span>
            <h2 className="font-heading text-3xl font-bold text-[#1C2A24] mt-1">
              Наші варіанти номерів
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('rooms')}
            className="inline-flex items-center gap-1 font-bold text-xs text-amber-700 hover:text-amber-800"
          >
            <span>Всі номери</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ROOMS_DATA.map((room) => (
            <div key={room.id} className="card-clean rounded-3xl p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">
                  {room.capacity}
                </span>
                <h3 className="font-heading text-lg font-bold text-[#1C2A24] pt-1">{room.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{room.description}</p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-sm font-bold text-[#1C2A24]">{room.pricePerNight}</span>
                <button
                  onClick={() => openBooking(room)}
                  className="px-3.5 py-2 bg-[#1C2A24] hover:bg-[#283D34] text-white font-bold rounded-xl text-xs transition-colors"
                >
                  Забронювати
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Owners Phone Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-clean rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-amber-200">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Прямий зв'язок</span>
            <h2 className="font-heading text-2xl font-bold text-[#1C2A24]">Маєте запитання до господарів?</h2>
            <p className="text-slate-500 text-xs">
              Телефонуйте у будь-який час для уточнення деталей заїзду або харчування.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="tel:0676791570"
              className="px-5 py-3 bg-[#1C2A24] hover:bg-[#283D34] text-white font-bold rounded-2xl text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" /> 067-679-15-70 (Василь)
            </a>
            <a
              href="tel:0972464189"
              className="px-5 py-3 bg-stone-100 hover:bg-stone-200 text-[#1C2A24] font-bold rounded-2xl text-xs flex items-center justify-center gap-2 border border-stone-200"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" /> 097-246-41-89 (Ольга)
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
