import React, { useState } from 'react';
import { MenuItem } from '../types';
import { Lock, X, Plus, Edit2, Check, Trash2, Key, Settings, ShieldCheck, RefreshCw, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  telegramBotToken: string;
  setTelegramBotToken: (token: string) => void;
  telegramChatId: string;
  setTelegramChatId: (id: string) => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  menuItems,
  setMenuItems,
  telegramBotToken,
  setTelegramBotToken,
  telegramChatId,
  setTelegramChatId
}) => {
  const [passwordInput, setPasswordInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [activeTab, setActiveTab] = useState<'menu' | 'settings' | 'orders'>('menu');
  const [editingId, setEditingId] = useState<string | null>(null);

  // New Dish Form State
  const [newName, setNewName] = useState('');
  const [newCategory, setNewCategory] = useState<any>('first');
  const [newPrice, setNewPrice] = useState(100);
  const [newUnit, setNewUnit] = useState('порція');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'Садиба1872') {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Некоректний пароль доступу. Спробуйте ще раз.');
    }
  };

  const handleToggleAvailable = (id: string) => {
    setMenuItems(prev =>
      prev.map(item => (item.id === id ? { ...item, available: !item.available } : item))
    );
  };

  const handleToggleFriday = (id: string) => {
    setMenuItems(prev =>
      prev.map(item => (item.id === id ? { ...item, isFridayOnly: !item.isFridayOnly } : item))
    );
  };

  const handlePriceChange = (id: string, newP: number) => {
    setMenuItems(prev =>
      prev.map(item => (item.id === id ? { ...item, price: newP } : item))
    );
  };

  const handleDeleteItem = (id: string) => {
    if (confirm('Ви дійсно бажаєте видалити цю страву з меню?')) {
      setMenuItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleAddDish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const newItem: MenuItem = {
      id: `custom-${Date.now()}`,
      name: newName,
      category: newCategory,
      price: newPrice,
      unit: newUnit,
      available: true
    };

    setMenuItems(prev => [newItem, ...prev]);
    setNewName('');
    setNewPrice(100);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-wood-300"
      >
        {/* Header */}
        <div className="p-5 bg-forest-950 text-white flex items-center justify-between border-b border-forest-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold">Адмін-панель Кафе</h2>
              <p className="text-xs text-forest-300">Садиба під лісом • Редагування меню та бота</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-forest-300 hover:text-white rounded-lg hover:bg-forest-900"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        {!isAuthenticated ? (
          /* Password Authentication Modal Form */
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto my-auto space-y-6">
            <div className="w-16 h-16 bg-amber-500/10 text-amber-600 rounded-full flex items-center justify-center mx-auto">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-forest-950">Доступ захищено</h3>
              <p className="text-xs text-slate-500 mt-1">
                Введіть адмін-пароль для редагування меню та налаштувань замовлень.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-700 text-xs font-semibold rounded-xl border border-red-200">
                  {errorMsg}
                </div>
              )}
              <div className="relative">
                <Key className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="password"
                  value={passwordInput}
                  onChange={e => setPasswordInput(e.target.value)}
                  placeholder="Введіть пароль..."
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-forest-900 hover:bg-forest-800 text-white font-bold rounded-xl shadow-lg transition-all"
              >
                Увійти в панель
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div className="flex-1 flex flex-col min-h-0">
            {/* Nav Tabs */}
            <div className="flex items-center gap-2 p-3 bg-slate-100 border-b border-slate-200">
              <button
                onClick={() => setActiveTab('menu')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'menu'
                    ? 'bg-forest-900 text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                Редагування Меню ({menuItems.length})
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'settings'
                    ? 'bg-forest-900 text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                Telegram Бот
              </button>
            </div>

            {/* Tab Views */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {activeTab === 'menu' && (
                <>
                  {/* Add New Dish */}
                  <form onSubmit={handleAddDish} className="p-4 bg-wood-50 rounded-2xl border border-wood-200 space-y-3">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-forest-950 flex items-center gap-1.5">
                      <Plus className="w-4 h-4 text-amber-600" /> Додати нову страву в меню
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                      <input
                        type="text"
                        placeholder="Назва страви"
                        value={newName}
                        onChange={e => setNewName(e.target.value)}
                        className="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs"
                      />
                      <select
                        value={newCategory}
                        onChange={e => setNewCategory(e.target.value as any)}
                        className="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs"
                      >
                        <option value="first">Перші страви</option>
                        <option value="second">Другі страви</option>
                        <option value="meat">М’ясне & Гаряче</option>
                        <option value="to_order">На замовлення (Гріль)</option>
                        <option value="pancakes">Млинці & Сирники</option>
                        <option value="fry">Фритюр</option>
                        <option value="salads">Салати</option>
                        <option value="sauces">Соуси</option>
                        <option value="drinks">Напої & Десерти</option>
                      </select>
                      <input
                        type="number"
                        placeholder="Ціна (грн)"
                        value={newPrice}
                        onChange={e => setNewPrice(Number(e.target.value))}
                        className="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs"
                      />
                      <button
                        type="submit"
                        className="py-2 bg-amber-500 hover:bg-amber-600 text-forest-950 font-bold rounded-xl text-xs shadow transition-colors"
                      >
                        + Додати страву
                      </button>
                    </div>
                  </form>

                  {/* Menu Items Table */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">Управління стравами:</h4>
                    <div className="space-y-2">
                      {menuItems.map(item => (
                        <div
                          key={item.id}
                          className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 text-xs transition-all ${
                            item.available
                              ? 'bg-white border-slate-200'
                              : 'bg-red-50/60 border-red-200 opacity-60'
                          }`}
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm text-forest-950">{item.name}</span>
                              {item.isFridayOnly && (
                                <span className="px-1.5 py-0.5 bg-amber-100 text-amber-800 font-bold rounded text-[10px]">
                                  П'ятниця
                                </span>
                              )}
                            </div>
                            <span className="text-slate-500">{item.unit || 'порція'}</span>
                          </div>

                          {/* Editable Price */}
                          <div className="flex items-center gap-1">
                            <span className="font-semibold text-slate-600">Ціна:</span>
                            <input
                              type="number"
                              value={item.price}
                              onChange={e => handlePriceChange(item.id, Number(e.target.value))}
                              className="w-16 px-2 py-1 bg-slate-100 border border-slate-300 rounded-lg text-center font-bold text-xs"
                            />
                            <span className="font-bold text-slate-700">грн</span>
                          </div>

                          {/* Friday Only Toggle */}
                          <button
                            onClick={() => handleToggleFriday(item.id)}
                            className={`px-2.5 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1 ${
                              item.isFridayOnly
                                ? 'bg-amber-500 text-forest-950'
                                : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                            }`}
                            title="Лише по п'ятницях (наприклад Бограч)"
                          >
                            <Flame className="w-3.5 h-3.5" />
                            <span>Пт</span>
                          </button>

                          {/* Stop List / Availability Toggle */}
                          <button
                            onClick={() => handleToggleAvailable(item.id)}
                            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                              item.available
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-200 text-red-800'
                            }`}
                          >
                            {item.available ? 'В наявності' : 'Стоп-лист'}
                          </button>

                          {/* Delete Item */}
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'settings' && (
                <div className="space-y-4 max-w-lg">
                  <h4 className="font-bold text-sm text-forest-950">Налаштування відправки в Telegram Бот:</h4>
                  <p className="text-xs text-slate-500">
                    Вкажіть токен Telegram бота та ID чату власників для автоматичного отримання сповіщень про нові замовлення.
                  </p>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Bot Token</label>
                    <input
                      type="text"
                      value={telegramBotToken}
                      onChange={e => setTelegramBotToken(e.target.value)}
                      placeholder="123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ"
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Chat ID</label>
                    <input
                      type="text"
                      value={telegramChatId}
                      onChange={e => setTelegramChatId(e.target.value)}
                      placeholder="-100123456789 або ID менеджера"
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono"
                    />
                  </div>

                  <div className="p-3 bg-blue-50 text-blue-800 text-xs rounded-xl border border-blue-200">
                    💡 Примітка: якщо поля порожні, при замовленні створюється пряме повідомлення із замовленням у Telegram.
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
