import React from 'react';
import { Logo } from './Logo';
import { Phone, MapPin, Clock, ExternalLink, Heart, Coffee, Home, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, openAdmin }) => {
  return (
    <footer className="bg-forest-950 text-forest-100 border-t border-forest-800">
      {/* Top Footer Callout */}
      <div className="bg-forest-900 border-b border-forest-800 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-heading text-2xl font-bold text-white">Плануєте відпочинок у Бакоті?</h3>
            <p className="text-forest-200 text-sm">
              Забронюйте затишний номер або замовте смачний обід у Кафе вже зараз!
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => { setActiveTab('rooms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-forest-950 font-bold rounded-full shadow-lg transition-all"
            >
              Переглянути номери
            </button>
            <button
              onClick={() => { setActiveTab('cafe'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-6 py-3 bg-forest-800 hover:bg-forest-700 text-white font-bold rounded-full border border-forest-600 transition-all"
            >
              Замовити в Кафе (Самовивіз)
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Col 1: Brand */}
        <div className="space-y-4">
          <Logo variant="dark" className="h-16" />
          <p className="text-xs text-forest-300 leading-relaxed">
            Туристичний комплекс «Садиба під лісом» у смт Стара Ушиця біля каньйону Бакоти. Оренда номери, сауна, чан та затишне домашнє кафе.
          </p>
          <div className="pt-2 text-xs text-amber-400 font-semibold flex items-center gap-1.5">
            <MapPin className="w-4 h-4" /> смт Стара Ушиця, курорт Бакота
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-lg text-white">Навігація</h4>
          <ul className="space-y-2 text-xs text-forest-200">
            <li>
              <button onClick={() => { setActiveTab('home'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">
                Головна сторінка
              </button>
            </li>
            <li>
              <button onClick={() => { setActiveTab('rooms'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">
                Котедж та Номери
              </button>
            </li>
            <li>
              <button onClick={() => { setActiveTab('cafe'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">
                Кафе & Оцифроване меню
              </button>
            </li>
            <li>
              <button onClick={() => { setActiveTab('gallery'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">
                Галерея фото та відео
              </button>
            </li>
            <li>
              <button onClick={() => { setActiveTab('contacts'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">
                Контакти та Карта
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Contacts */}
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-lg text-white">Контакти власників</h4>
          <div className="space-y-2.5 text-xs text-forest-200">
            <a href="tel:0676791570" className="flex items-center gap-2.5 p-2 rounded-xl bg-forest-900 border border-forest-800 hover:border-amber-500/50 transition-all">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="block font-bold text-white text-sm">067 679 1570</span>
                <span className="text-[10px] text-forest-400">Василь (Бронювання & Кафе)</span>
              </div>
            </a>
            <a href="tel:0972464189" className="flex items-center gap-2.5 p-2 rounded-xl bg-forest-900 border border-forest-800 hover:border-amber-500/50 transition-all">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="block font-bold text-white text-sm">097 246 4189</span>
                <span className="text-[10px] text-forest-400">Ольга (Прийом замовлень)</span>
              </div>
            </a>
          </div>
        </div>

        {/* Col 4: Google Maps & Hours */}
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-lg text-white">Локація на карті</h4>
          <p className="text-xs text-forest-300">Прямі посилання на Google Карти:</p>
          <div className="space-y-2 text-xs">
            <a
              href="https://maps.app.goo.gl/izgV28qmrVmpB8Fi9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 bg-forest-900 rounded-xl border border-forest-800 hover:text-amber-300 transition-colors"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" /> Точка Google Maps #1
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://maps.app.goo.gl/jpAPC4prHgGYvLiGA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 bg-forest-900 rounded-xl border border-forest-800 hover:text-amber-300 transition-colors"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" /> Точка Google Maps #2
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Legal / Credits */}
      <div className="border-t border-forest-900 py-6 px-4 text-center text-xs text-forest-400 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-3">
        <p>© 2026 Садиба під лісом. Усі права захищено. Курорт Бакота, Стара Ушиця.</p>
        <button
          onClick={openAdmin}
          className="flex items-center gap-1.5 text-forest-400 hover:text-amber-400 text-[11px] transition-colors"
        >
          <ShieldCheck className="w-3.5 h-3.5" /> Панель адміністратора (Садиба1872)
        </button>
      </div>
    </footer>
  );
};
