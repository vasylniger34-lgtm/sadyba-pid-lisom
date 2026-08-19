import React, { useState } from 'react';
import { Room } from '../types';
import { X, Calendar, User, Phone, CheckCircle2, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoom: Room | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedRoom
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guestsCount, setGuestsCount] = useState('2 особи');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !selectedRoom) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });

    setIsSuccess(true);

    const bookingText = 
`🏡 *ЗАЯВКА НА БРОНЮВАННЯ НОМЕРУ / КОТЕЖУ*
---------------------------------------
🏨 *Об'єкт:* ${selectedRoom.name}
👤 *Гість:* ${name}
📞 *Телефон:* ${phone}
📅 *Дати:* з ${checkIn || 'не вказано'} по ${checkOut || 'не вказано'}
👥 *Кількість гостей:* ${guestsCount}
${notes ? `💬 *Побажання:* ${notes}\n` : ''}
📍 *Садиба під лісом (Бакота, Стара Ушиця)*`;

    // Open direct Telegram sharing URL
    window.open(`https://t.me/share/url?url=${encodeURIComponent('https://sadyba-pid-lisom.ua')}&text=${encodeURIComponent(bookingText)}`, '_blank');
  };

  const handleClose = () => {
    setIsSuccess(false);
    setName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-sm p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-lg bg-[#FAF7F2] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-wood-300"
      >
        {/* Header */}
        <div className="p-5 bg-forest-900 text-white flex items-center justify-between border-b border-forest-800">
          <div>
            <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">Бронювання відпочинку</span>
            <h3 className="font-heading text-lg font-bold">{selectedRoom.name}</h3>
          </div>
          <button onClick={handleClose} className="p-1.5 text-forest-300 hover:text-white rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[80vh] space-y-4">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-heading text-xl font-bold text-forest-950">Заявку відправлено!</h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Дякуємо, {name}! Наш менеджер зателефонує вам найближчим часом для підтвердження броні.
              </p>
              <div className="p-3 bg-wood-100 rounded-2xl text-xs text-forest-900 font-medium">
                Прямий зв'язок з власниками: <strong>067-679-15-70</strong>
              </div>
              <button
                onClick={handleClose}
                className="w-full py-3 bg-forest-900 text-white font-bold rounded-xl"
              >
                Закрити
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 bg-wood-100 rounded-2xl border border-wood-200 text-xs text-forest-900 space-y-1">
                <p className="font-bold">{selectedRoom.capacity} • {selectedRoom.pricePerNight}</p>
                <p className="text-slate-600 text-[11px]">{selectedRoom.description}</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Ваше ім’я *</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Іван"
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-wood-300 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Телефон *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+380 67 000 0000"
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-wood-300 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Заїзд</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={e => setCheckIn(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-wood-300 rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Виїзд</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={e => setCheckOut(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-wood-300 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Кількість гостей</label>
                <select
                  value={guestsCount}
                  onChange={e => setGuestsCount(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-wood-300 rounded-xl text-sm"
                >
                  <option value="1 особа">1 особа</option>
                  <option value="2 особи">2 особи</option>
                  <option value="3 особи">3 особи</option>
                  <option value="4 особи">4 особи</option>
                  <option value="Всий котедж (до 10-12 осіб)">Всий котедж (до 10-12 осіб)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Побажання чи запитання</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="Наприклад: сауна, чан, трансфер..."
                  className="w-full p-3 bg-white border border-wood-300 rounded-xl text-xs resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-forest-950 font-extrabold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Надіслати заявку на бронювання</span>
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};
