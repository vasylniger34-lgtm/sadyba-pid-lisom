import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, Mail, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-100 px-3.5 py-1.5 rounded-full">
          Контакти & Локація
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-forest-950">
          Як нас знайти та зв'язатися
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Садиба під лісом розташована у смт Стара Ушиця поруч із Бакотською затокою. Зв'яжіться з власниками для бронювання або замовлення їжі.
        </p>
      </div>

      {/* Grid: Phone Cards & Hours */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Phone 1 */}
        <div className="p-6 bg-white rounded-3xl border border-wood-200 shadow-sm space-y-3">
          <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center">
            <Phone className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Основний номер</span>
          <h3 className="font-heading text-2xl font-bold text-forest-950">067 679 1570</h3>
          <p className="text-xs text-slate-500">Василь (Бронювання номерів & Організація)</p>
          <a
            href="tel:0676791570"
            className="inline-flex items-center justify-center w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-forest-950 font-bold rounded-xl text-xs transition-colors"
          >
            Зателефонувати зараз
          </a>
        </div>

        {/* Phone 2 */}
        <div className="p-6 bg-white rounded-3xl border border-wood-200 shadow-sm space-y-3">
          <div className="w-12 h-12 bg-forest-100 text-forest-800 rounded-2xl flex items-center justify-center">
            <Phone className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Прийом замовлень</span>
          <h3 className="font-heading text-2xl font-bold text-forest-950">097 246 4189</h3>
          <p className="text-xs text-slate-500">Ольга (Замовлення їжі в Кафе & Супровід)</p>
          <a
            href="tel:0972464189"
            className="inline-flex items-center justify-center w-full py-2.5 bg-forest-900 hover:bg-forest-800 text-white font-bold rounded-xl text-xs transition-colors"
          >
            Зателефонувати в Кафе
          </a>
        </div>

        {/* Hours */}
        <div className="p-6 bg-forest-950 text-white rounded-3xl border border-forest-800 shadow-sm space-y-3">
          <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-forest-300 uppercase tracking-wider">Графік роботи</span>
          <h3 className="font-heading text-xl font-bold text-white">Щодня з 08:00 до 22:00</h3>
          <div className="text-xs text-forest-200 space-y-1">
            <p>• Заїзд у номери: з 14:00</p>
            <p>• Виїзд з номерів: до 12:00</p>
            <p>• Кафе (Самовивіз): 09:00 - 21:00</p>
          </div>
        </div>

      </div>

      {/* Google Maps Links & Navigation Guide */}
      <div className="p-8 bg-white rounded-3xl border border-wood-200 shadow-warm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider">
              <Navigation className="w-4 h-4" /> Навігація в Бакоту
            </div>
            <h2 className="font-heading text-2xl font-bold text-forest-950">
              Локація у Google Maps
            </h2>
            <p className="text-xs text-slate-500">
              смт Стара Ушиця, Хмельницька область, затишна локація у лісі біля Дністровської затоки Бакоти.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://maps.app.goo.gl/izgV28qmrVmpB8Fi9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-forest-900 hover:bg-forest-800 text-white font-bold rounded-2xl text-xs flex items-center gap-2 transition-all shadow-md"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Відкрити у Картах #1</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://maps.app.goo.gl/jpAPC4prHgGYvLiGA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-amber-500 hover:bg-amber-600 text-forest-950 font-extrabold rounded-2xl text-xs flex items-center gap-2 transition-all shadow-md"
            >
              <MapPin className="w-4 h-4" />
              <span>Відкрити у Картах #2</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Embedded Map Frame Container */}
        <div className="w-full h-80 rounded-2xl overflow-hidden bg-wood-200 border border-wood-300 relative shadow-inner">
          <iframe
            title="Sadyba pid lisom Bakota Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42000!2d27.0667!3d48.5999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473305f8841a0b3f%3A0x6b2b512c1b5a5a0!2sStara%20Ushytsya%2C%20Khmelnytskyi%20Oblast!5e0!3m2!1sen!2sua!4v1700000000000!5m2!1sen!2sua"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </div>
  );
};
