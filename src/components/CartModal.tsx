import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, Clock, User, Phone, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  telegramBotToken?: string;
  telegramChatId?: string;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  updateQuantity,
  clearCart,
  telegramBotToken = '',
  telegramChatId = ''
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupTime, setPickupTime] = useState('Якнайшвидше (~20-30 хв)');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.item.price * item.quantity,
    0
  );

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Будь ласка, вкажіть ваше ім’я.');
      return;
    }
    if (!phone.trim() || phone.length < 9) {
      setErrorMsg('Будь ласка, вкажіть коректний номер телефону.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Format Order Message for Telegram
    const itemsList = cartItems
      .map(
        (ci, idx) =>
          `${idx + 1}. *${ci.item.name}* x ${ci.quantity} = ${
            ci.item.price * ci.quantity
          } грн (${ci.item.unit || 'порція'})`
      )
      .join('\n');

    const orderText = 
`🔔 *НОВЕ ЗАМОВЛЕННЯ З КАФЕ (САМОВИВІЗ)* 🔔
----------------------------------
👤 *Замовник:* ${name}
📞 *Телефон:* ${phone}
⏰ *Час самовивозу:* ${pickupTime}
${comment ? `💬 *Коментар:* ${comment}\n` : ''}
🛍️ *СКЛАД ЗАМОВЛЕННЯ:*
${itemsList}

💰 *ЗАГАЛЬНА СУМА:* *${totalPrice} грн*
----------------------------------
📍 *Пункт видачі:* Кафе "Садиба під лісом", смт Стара Ушиця (Бакота)`;

    try {
      if (telegramBotToken && telegramChatId) {
        // Send via Telegram Bot API
        await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: orderText,
            parse_mode: 'Markdown'
          })
        });
      }

      // Trigger Confetti Effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      setIsSuccess(true);
      
      // Fallback redirect URL to open Telegram chat with formatted text if needed
      const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(
        'https://sadyba-pid-lisom.ua'
      )}&text=${encodeURIComponent(orderText)}`;

      // Save order in window for session
      const history = JSON.parse(localStorage.getItem('orders_history') || '[]');
      history.push({
        id: Date.now(),
        name,
        phone,
        items: cartItems,
        totalPrice,
        createdAt: new Date().toLocaleString('uk-UA')
      });
      localStorage.setItem('orders_history', JSON.stringify(history));

    } catch (err) {
      console.error('Error sending order:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFinish = () => {
    setIsSuccess(false);
    clearCart();
    setName('');
    setPhone('');
    setComment('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full max-w-lg bg-[#FAF7F2] h-full flex flex-col shadow-2xl overflow-hidden border-l border-wood-300"
        >
          {/* Header */}
          <div className="p-5 bg-forest-900 text-white flex items-center justify-between border-b border-forest-800">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white">Кошик замовлення</h2>
                <p className="text-xs text-forest-200">Кафе «Садиба під лісом» • Самовивіз</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-forest-300 hover:text-white rounded-lg hover:bg-forest-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {isSuccess ? (
              <div className="text-center py-10 space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-500/20 text-green-600 rounded-full flex items-center justify-center mx-auto"
                >
                  <CheckCircle2 className="w-12 h-12" />
                </motion.div>
                <h3 className="font-heading text-2xl font-bold text-forest-950">Замовлення прийнято!</h3>
                <p className="text-sm text-slate-600 max-w-xs mx-auto">
                  Дякуємо, <strong className="text-forest-900">{name}</strong>! Ваше замовлення сформовано та відправлено адміністратору на кухню.
                </p>

                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 text-xs space-y-1 text-left my-4">
                  <p className="font-bold flex items-center gap-1.5 text-sm">
                    <Clock className="w-4 h-4 text-amber-600" /> Самовивіз: {pickupTime}
                  </p>
                  <p>📍 Локація: Кафе «Садиба під лісом», смт Стара Ушиця (Бакота)</p>
                  <p>📞 Телефони для уточнення: 067-679-15-70 / 097-246-41-89</p>
                </div>

                <button
                  onClick={handleFinish}
                  className="w-full py-3.5 bg-forest-900 text-white font-bold rounded-xl shadow-lg hover:bg-forest-800 transition-all"
                >
                  Зрозуміло, закрити
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 bg-wood-200/50 text-wood-700 rounded-full flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="font-heading text-lg font-bold text-forest-950">Ваш кошик порожній</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Оберіть смачні домашні страви з нашого оцифрованого меню, щоб сформувати замовлення.
                </p>
              </div>
            ) : (
              <>
                {/* Notice: Self pickup only */}
                <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-900 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-sm text-amber-950">Зверніть увагу: Самовивіз!</span>
                    Замовлення готуються гарячими для видачі безпосередньо у Кафе «Садиба під лісом».
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-forest-900">Обрані страви:</h4>
                  {cartItems.map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="p-3.5 bg-white rounded-2xl border border-wood-200 shadow-sm flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h5 className="font-bold text-sm text-forest-950 truncate">{item.name}</h5>
                          {item.isFridayOnly && (
                            <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">
                              Пт
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 font-medium">
                          {item.price} грн / {item.unit || 'порція'}
                        </p>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center gap-2 bg-wood-100 p-1 rounded-xl border border-wood-200">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-white rounded-lg text-slate-700 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-bold text-xs w-5 text-center">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-white rounded-lg text-slate-700 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Item Total */}
                      <span className="font-bold text-sm text-forest-900 w-16 text-right">
                        {item.price * quantity} грн
                      </span>
                    </div>
                  ))}
                </div>

                {/* Order Form */}
                <form onSubmit={handleOrderSubmit} className="space-y-4 pt-4 border-t border-wood-200">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-forest-900">Дані замовника:</h4>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl font-medium border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Ваше ім’я *</label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Наприклад: Олександр"
                        className="w-full pl-9 pr-3 py-2.5 bg-white border border-wood-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Номер телефону *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+380 67 000 0000"
                        className="w-full pl-9 pr-3 py-2.5 bg-white border border-wood-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Час самовивозу</label>
                    <div className="relative">
                      <Clock className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <select
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-white border border-wood-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="Якнайшвидше (~20-30 хв)">Якнайшвидше (~20-30 хв)</option>
                        <option value="Через 45 хвилин">Через 45 хвилин</option>
                        <option value="Через 1 годину">Через 1 годину</option>
                        <option value="На конкретний час (уточнити в коментарі)">На конкретний час (уточнити в коментарі)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Коментар до замовлення</label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={2}
                        placeholder="Особливі побажання, алергії або час..."
                        className="w-full pl-9 pr-3 py-2 bg-white border border-wood-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                      />
                    </div>
                  </div>

                  {/* Total & Submit */}
                  <div className="pt-4 border-t border-wood-200 space-y-3">
                    <div className="flex items-center justify-between text-base font-bold text-forest-950">
                      <span>До сплати (самовивіз):</span>
                      <span className="text-xl text-amber-600">{totalPrice} грн</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-forest-950 font-extrabold rounded-xl shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all active:scale-98 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Відправка...' : 'Підтвердити та Замовити'}</span>
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
