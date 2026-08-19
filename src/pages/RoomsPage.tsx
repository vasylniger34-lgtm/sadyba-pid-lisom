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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 bg-[#FAF8F5]">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1 rounded-full">
          Проживання у Бакоті
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#1C2A24]">
          Котедж та Номери біля Лісу
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Номери з натурального соснового зрубу. Насолоджуйтесь свіжим карпатсько-дністровським повітрям, тишею та затишком.
        </p>
      </div>

      {/* Capacity & Amenities Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="card-clean p-4 rounded-2xl text-center space-y-1">
          <div className="w-10 h-10 bg-amber-100 text-amber-800 rounded-xl flex items-center justify-center mx-auto mb-1.5">
            <Users className="w-5 h-5" />
          </div>
          <span className="block font-bold text-sm text-[#1C2A24]">від 2 до 12 осіб</span>
          <span className="text-[11px] text-slate-500">Місткість варіантів</span>
        </div>

        <div className="card-clean p-4 rounded-2xl text-center space-y-1">
          <div className="w-10 h-10 bg-emerald-50 text-emerald-800 rounded-xl flex items-center justify-center mx-auto mb-1.5">
            <Flame className="w-5 h-5" />
          </div>
          <span className="block font-bold text-sm text-[#1C2A24]">Сауна & Чан</span>
          <span className="text-[11px] text-slate-500">Відпочинок на території</span>
        </div>

        <div className="card-clean p-4 rounded-2xl text-center space-y-1">
          <div className="w-10 h-10 bg-amber-100 text-amber-800 rounded-xl flex items-center justify-center mx-auto mb-1.5">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="block font-bold text-sm text-[#1C2A24]">Альтанки & Мангал</span>
          <span className="text-[11px] text-slate-500">Зона BBQ під лісом</span>
        </div>

        <div className="card-clean p-4 rounded-2xl text-center space-y-1">
          <div className="w-10 h-10 bg-emerald-50 text-emerald-800 rounded-xl flex items-center justify-center mx-auto mb-1.5">
            <Wifi className="w-5 h-5" />
          </div>
          <span className="block font-bold text-sm text-[#1C2A24]">Wi-Fi & Парковка</span>
          <span className="text-[11px] text-slate-500">Безкоштовний доступ</span>
        </div>
      </div>

      {/* Rooms Showcase List */}
      <div className="space-y-10">
        {ROOMS_DATA.map((room) => (
          <div
            key={room.id}
            className="card-clean p-6 sm:p-8 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left: Info */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-amber-100 text-amber-900 font-bold text-xs rounded-full">
                  {room.capacity}
                </span>
                <span className="px-3 py-1 bg-stone-100 text-[#1C2A24] font-bold text-xs rounded-full border border-stone-200">
                  {room.pricePerNight}
                </span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1C2A24]">
                {room.name}
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                {room.description}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">Зручності:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                  {room.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-stone-100">
                <button
                  onClick={() => openBooking(room)}
                  className="px-6 py-3 bg-[#1C2A24] hover:bg-[#283D34] text-white font-bold rounded-2xl text-xs flex items-center gap-2 transition-all shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Забронювати номер</span>
                </button>

                <a
                  href="tel:0676791570"
                  className="px-4 py-3 bg-stone-100 hover:bg-stone-200 text-[#1C2A24] font-bold rounded-2xl text-xs flex items-center gap-2 border border-stone-200"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>067-679-15-70</span>
                </a>
              </div>
            </div>

            {/* Right: Room Photos Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3">
              <div className="col-span-2 h-56 rounded-2xl overflow-hidden bg-stone-200 shadow-sm border border-stone-200">
                <img 
                  src={room.images[0]} 
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="h-32 rounded-2xl overflow-hidden bg-stone-200 shadow-sm border border-stone-200">
                <img 
                  src={room.images[1]} 
                  alt={`${room.name} деталі`}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="h-32 rounded-2xl overflow-hidden bg-stone-200 shadow-sm border border-stone-200">
                <img 
                  src={room.images[2]} 
                  alt={`${room.name} санвузол`}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
