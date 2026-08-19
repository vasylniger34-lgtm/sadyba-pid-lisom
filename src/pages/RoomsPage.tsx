import React from 'react';
import { ROOMS_DATA } from '../data/roomsData';
import { Room } from '../types';
import { Home, Users, CheckCircle, Wifi, Flame, Sparkles, Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface RoomsPageProps {
  openBooking: (room: Room) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({ openBooking }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-100 px-3.5 py-1.5 rounded-full">
          Проживання у Бакоті
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-forest-950">
          Котедж та Затишні Номери біля Лісу
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Всі номери виконані з естетичного соснового зрубу. Насолоджуйтесь свіжим карпатсько-дністровським повітрям, тишею та затишком.
        </p>
      </div>

      {/* Capacity & Amenities Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-2xl border border-wood-200 text-center space-y-1 shadow-sm">
          <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mx-auto mb-2">
            <Users className="w-5 h-5" />
          </div>
          <span className="block font-bold text-sm text-forest-950">від 2 до 12 осіб</span>
          <span className="text-[11px] text-slate-500">Місткість номерів</span>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-wood-200 text-center space-y-1 shadow-sm">
          <div className="w-10 h-10 bg-forest-100 text-forest-700 rounded-xl flex items-center justify-center mx-auto mb-2">
            <Flame className="w-5 h-5" />
          </div>
          <span className="block font-bold text-sm text-forest-950">Сауна & Карпатський Чан</span>
          <span className="text-[11px] text-slate-500">Оздоровчий відпочинок</span>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-wood-200 text-center space-y-1 shadow-sm">
          <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mx-auto mb-2">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="block font-bold text-sm text-forest-950">Альтанки & Мангали</span>
          <span className="text-[11px] text-slate-500">Зона BBQ у дворі</span>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-wood-200 text-center space-y-1 shadow-sm">
          <div className="w-10 h-10 bg-forest-100 text-forest-700 rounded-xl flex items-center justify-center mx-auto mb-2">
            <Wifi className="w-5 h-5" />
          </div>
          <span className="block font-bold text-sm text-forest-950">Wi-Fi & Парковка</span>
          <span className="text-[11px] text-slate-500">Комфортна інфраструктура</span>
        </div>
      </div>

      {/* Rooms Showcase List */}
      <div className="space-y-10">
        {ROOMS_DATA.map((room, idx) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-6 sm:p-8 bg-white rounded-3xl border border-wood-200 shadow-warm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Left: Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-full">
                  {room.capacity}
                </span>
                <span className="px-3 py-1 bg-forest-100 text-forest-800 font-bold text-xs rounded-full">
                  {room.pricePerNight}
                </span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest-950">
                {room.name}
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                {room.description}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-forest-900">Зручності у номері:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {room.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-forest-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openBooking(room)}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-forest-950 font-bold rounded-2xl shadow-md transition-all flex items-center gap-2 text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Забронювати цей номер</span>
                </button>

                <a
                  href="tel:0676791570"
                  className="px-5 py-3 bg-wood-100 hover:bg-wood-200 text-forest-900 font-bold rounded-2xl text-xs transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>067-679-15-70</span>
                </a>
              </div>
            </div>

            {/* Right: Visual Image Card */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-forest-900 text-white p-6 aspect-video flex flex-col justify-end shadow-inner border border-forest-800">
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-900/60 to-transparent z-10" />
              <div className="relative z-20 space-y-1">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">Садиба під лісом</span>
                <p className="font-heading text-lg font-bold text-white">{room.name}</p>
                <p className="text-xs text-forest-200">Екологічне соснове оздоблення • Бакота</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};
