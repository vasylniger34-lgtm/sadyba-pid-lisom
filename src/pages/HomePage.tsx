import React from 'react';
import { motion } from 'framer-motion';
import { Home, Coffee, Trees, MapPin, Phone, Sparkles, Star, ChevronRight, Flame, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { ROOMS_DATA } from '../data/roomsData';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  openBooking: (room: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab, openBooking }) => {
  return (
    <div className="space-y-16 pb-16 bg-[#FAF6F0]">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#1C3026] text-white overflow-hidden py-20 px-4">
        {/* Ambient Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2D5A43]/60 via-[#1C3026]/90 to-[#1C3026] z-10" />
        
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 filter blur-[2px]"
          style={{ backgroundImage: `url('/media/01_Exterior_Territory/IMG_3036.HEIC')` }}
        />

        <div className="relative z-20 max-w-5xl mx-auto text-center space-y-8">
          
          {/* Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/40 shadow-sm"
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
            Затишний відпочинок біля <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              соснового гаю та Бакотської затоки
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-emerald-100 text-base sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Еко-комплекс «Садиба під лісом» — дерев'яні номери для проживання та затишне Кафе з справжньою українською домашньою кухнею.
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
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-[#1C3026] font-extrabold rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 active:scale-95"
            >
              <Home className="w-5 h-5" />
              <span>Переглянути та Забронювати номери</span>
            </button>

            <button
              onClick={() => setActiveTab('cafe')}
              className="w-full sm:w-auto px-8 py-4 bg-[#2A4839] hover:bg-[#345846] text-white font-bold rounded-2xl border border-emerald-600/50 shadow-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 active:scale-95"
            >
              <Coffee className="w-5 h-5 text-amber-400" />
              <span>Оцифроване меню Кафе</span>
            </button>
          </motion.div>

          {/* Friday Bograch Alert Teaser */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-3 p-3 px-5 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold backdrop-blur-md"
          >
            <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
            <span>Щоп'ятниці у нашому Кафе — фірмовий <strong>Бограч у казані (200 грн)</strong>!</span>
          </motion.div>

        </div>
      </section>

      {/* 2 in 1 Concept Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1.5 rounded-full">
            Концепція 2 в 1
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#1C3026]">
            Все для комфортного відпочинку в Бакоті
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base">
            Поєднуйте тихий відпочинок серед природи з домашнім харчуванням без зайвих турбот.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Cottage & Rooms */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-8 bg-white rounded-3xl border border-[#EFE5D5] shadow-sm flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-[#1C3026] rounded-2xl flex items-center justify-center">
                <Home className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">01. Оренда номерів & котеджу</span>
              <h3 className="font-heading text-2xl font-bold text-[#1C3026]">
                Дерев'яні номери з ароматом хвої
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Екологічні номери для відпочинку парами або всією родиною. Окремі номери (на 2-4 місця) або оренда котеджу повністю (до 10-12 осіб).
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2">✓ Ортопедичні двоспальні ліжка та свіжа білизна</li>
                <li className="flex items-center gap-2">✓ Сауна та чан на території садиби</li>
                <li className="flex items-center gap-2">✓ Альтанки з мангалами під лісом</li>
              </ul>
            </div>

            <button
              onClick={() => setActiveTab('rooms')}
              className="inline-flex items-center gap-2 text-[#1C3026] font-extrabold text-sm hover:text-amber-600 transition-colors pt-4 border-t border-[#EFE5D5]"
            >
              <span>Дивитися номери та ціни</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Card 2: Cafe */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-8 bg-white rounded-3xl border border-[#EFE5D5] shadow-sm flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center">
                <Coffee className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">02. Домашнє Кафе</span>
              <h3 className="font-heading text-2xl font-bold text-[#1C3026]">
                Домашня кухня & Онлайн-замовлення
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Бануш, вареники з сиром та картоплею, соковиті котлети, пельмені, піца, млинці та прохолодні коктейлі. Оформлюйте замовлення на самовивіз!
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2 text-amber-800 font-bold">★ Бограч щоп'ятниці у казані!</li>
                <li className="flex items-center gap-2">✓ Повний список 54 оцифрованих страв</li>
                <li className="flex items-center gap-2">✓ Зручний кошик та сповіщення в Telegram</li>
              </ul>
            </div>

            <button
              onClick={() => setActiveTab('cafe')}
              className="inline-flex items-center gap-2 text-[#1C3026] font-extrabold text-sm hover:text-amber-600 transition-colors pt-4 border-t border-[#EFE5D5]"
            >
              <span>Відкрити Розділи Меню</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* Rooms Overview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Варіанти проживання</span>
              <h2 className="font-heading text-3xl font-bold text-[#1C3026] mt-1">
                Наші затишні номери
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('rooms')}
              className="inline-flex items-center gap-2 font-bold text-sm text-[#1C3026] hover:text-amber-700 transition-colors"
            >
              <span>Всі деталі номерів</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROOMS_DATA.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-3xl border border-[#EFE5D5] overflow-hidden shadow-sm flex flex-col justify-between p-6 space-y-4"
              >
                <div className="space-y-2">
                  <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                    {room.capacity}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[#1C3026] pt-1">{room.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{room.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-black text-[#1C3026]">{room.pricePerNight}</span>
                  <button
                    onClick={() => openBooking(room)}
                    className="px-4 py-2 bg-[#1C3026] hover:bg-[#2A4839] text-white font-bold rounded-xl text-xs transition-colors"
                  >
                    Забронювати
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owners Direct Phone Contacts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C3026] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-emerald-900">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Прямий зв'язок з власниками</span>
            <h2 className="font-heading text-3xl font-bold text-white">Маєте запитання або бажаєте забронювати?</h2>
            <p className="text-emerald-100 text-sm max-w-md">
              Телефонуйте нам прямо зараз — з радістю відповімо на всі ваші питання!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="tel:0676791570"
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-[#1C3026] font-extrabold rounded-2xl shadow-md flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" /> 067-679-15-70 (Василь)
            </a>
            <a
              href="tel:0972464189"
              className="px-6 py-3.5 bg-[#2A4839] hover:bg-[#345846] text-white font-bold rounded-2xl border border-emerald-700 flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" /> 097-246-41-89 (Ольга)
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
