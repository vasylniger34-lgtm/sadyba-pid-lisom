import { MenuItem } from '../types';

export const INITIAL_MENU: MenuItem[] = [
  // І страви
  {
    id: 'm1',
    name: 'Бограч закарпатський',
    category: 'first',
    price: 200,
    unit: 'порція',
    description: 'Насичений м’ясний гуляш із наваристим бульйоном та паприкою. Готується традиційно у казані.',
    isFridayOnly: true,
    available: true
  },
  {
    id: 'm2',
    name: 'Солянка м’ясна',
    category: 'first',
    price: 140,
    unit: 'порція',
    description: 'Ароматний та густий суп із кількома видами м’яса, оливками та лимоном.',
    available: true
  },
  {
    id: 'm3',
    name: 'Борщ домашній',
    category: 'first',
    price: 85,
    unit: 'порція',
    description: 'Традиційний український борщ із бурячком, свіжим зеленню та домашньою сметаною.',
    available: true
  },

  // ІІ страви
  {
    id: 'm4',
    name: 'Бануш гуцульський',
    category: 'second',
    price: 150,
    unit: 'порція',
    description: 'Ніжна кукурудзяна каша на вершках із бринзою та смаженими шкварками.',
    available: true
  },
  {
    id: 'm5',
    name: 'Пельмені домашні',
    category: 'second',
    price: 120,
    unit: 'порція',
    description: 'Соковиті домашні пельмені з м’ясною начинкою та маслом.',
    available: true
  },
  {
    id: 'm6',
    name: 'Вареники з сиром',
    category: 'second',
    price: 100,
    unit: 'порція',
    description: 'Ніжні вареники з домашнім солодкуватим або солоним сиром.',
    available: true
  },
  {
    id: 'm7',
    name: 'Вареники з картоплею',
    category: 'second',
    price: 90,
    unit: 'порція',
    description: 'Гарячі вареники з запашним картопляним пюре та смаженою цибулькою.',
    available: true
  },
  {
    id: 'm8',
    name: 'Картопляне пюре',
    category: 'second',
    price: 65,
    unit: 'порція',
    description: 'Ніжне вершкове пюре зі свіжої картоплі.',
    available: true
  },
  {
    id: 'm9',
    name: 'Картопля по-селянськи',
    category: 'second',
    price: 100,
    unit: 'порція',
    description: 'Золотиста картопелька зі скибочками, запечена з часничком та чебрецем.',
    available: true
  },
  {
    id: 'm10',
    name: 'Піца фірмова',
    category: 'second',
    price: 350,
    unit: 'шт',
    description: 'Велика домашня піца з соковитим м’ясним асорті, томатами та розплавленим сиром.',
    available: true
  },
  {
    id: 'm11',
    name: 'Хачапурі з сиром',
    category: 'second',
    price: 220,
    unit: 'шт',
    description: 'Гарячий хачапурі з хрусткою скоринкою та тягучою сирною начинкою.',
    available: true
  },

  // Млинці & Сирники
  {
    id: 'm12',
    name: 'Млинці з м’ясом',
    category: 'pancakes',
    price: 110,
    unit: 'порція',
    description: 'Тоненькі домашні млинчики з соковитою м’ясною начинкою.',
    available: true
  },
  {
    id: 'm13',
    name: 'Млинці курка + гриби',
    category: 'pancakes',
    price: 110,
    unit: 'порція',
    description: 'Ніжні млинці з курячим філе та печерицями у вершковому соусі.',
    available: true
  },
  {
    id: 'm14',
    name: 'Бендерики',
    category: 'pancakes',
    price: 110,
    unit: 'порція',
    description: 'Хрусткі трикутники з м’ясним фаршем, обсмажені в яйці.',
    available: true
  },
  {
    id: 'm15',
    name: 'Млинці з бринзою',
    category: 'pancakes',
    price: 110,
    unit: 'порція',
    description: 'Солонуваті млинці із традиційною полонинською бринзою та зеленню.',
    available: true
  },
  {
    id: 'm16',
    name: 'Млинці сир + вишня',
    category: 'pancakes',
    price: 100,
    unit: 'порція',
    description: 'Солодкі млинчики з сирним кремом та ароматною вишнею.',
    available: true
  },
  {
    id: 'm17',
    name: 'Млинці банан + шоколад',
    category: 'pancakes',
    price: 100,
    unit: 'порція',
    description: 'Десертні млинці зі свіжим бананом та шоколадним топінгом.',
    available: true
  },
  {
    id: 'm18',
    name: 'Сирники домашні',
    category: 'pancakes',
    price: 100,
    unit: 'порція',
    description: 'Пухкі домашні сирники з домашнього сиру. Подаються зі сметаною або джемом.',
    image: '/images/dishes/сирники.jpg',
    available: true
  },

  // М'ясні та гарячі страви
  {
    id: 'm19',
    name: 'Відбивна свиняча',
    category: 'meat',
    price: 150,
    unit: 'шт',
    description: 'Соковита обсмажена відбивна зі свинини у хрусткому клярі.',
    available: true
  },
  {
    id: 'm20',
    name: 'Котлета куряча',
    category: 'meat',
    price: 80,
    unit: 'шт',
    description: 'Ніжна та соковита домашня куряча котлетка.',
    available: true
  },
  {
    id: 'm21',
    name: 'Котлета по-київськи',
    category: 'meat',
    price: 120,
    unit: 'шт',
    description: 'Класична котлета по-київськи з ароматним вершковим маслом та зеленню всередині.',
    available: true
  },
  {
    id: 'm22',
    name: 'Шакшука',
    category: 'meat',
    price: 180,
    unit: 'порція',
    description: 'Гаряча яєшня, запечена в ароматному томатно-перечному соусі зі спеціями.',
    available: true
  },
  {
    id: 'm23',
    name: 'Французький сніданок',
    category: 'meat',
    price: 150,
    unit: 'порція',
    description: 'Поживний сніданок із гарячими тостами, яйцем, шинкою та сиром.',
    available: true
  },
  {
    id: 'm24',
    name: 'Яєшня',
    category: 'meat',
    price: 60,
    unit: 'порція',
    description: 'Свіжоприготована яєшня з двох яєць.',
    available: true
  },
  {
    id: 'm25',
    name: 'Омлет',
    category: 'meat',
    price: 80,
    unit: 'порція',
    description: 'Ніжний та пухкий омлет на молоці.',
    available: true
  },

  // Фритюр
  {
    id: 'm26',
    name: 'Картопля фрі',
    category: 'fry',
    price: 75,
    unit: 'порція',
    description: 'Хрустка золотиста картопелька фрі.',
    available: true
  },
  {
    id: 'm27',
    name: 'Нагетси курячі',
    category: 'fry',
    price: 130,
    unit: 'порція',
    description: 'Соковиті шматочки курячого філе в хрусткій паніровці.',
    available: true
  },
  {
    id: 'm28',
    name: 'Сирні палички',
    category: 'fry',
    price: 150,
    unit: 'порція',
    description: 'Обсмажений сир у хрустких сухариках із тягучою начинкою.',
    available: true
  },

  // На замовлення (Гриль & Мангал)
  {
    id: 'm29',
    name: 'Шашлик зі свинини',
    category: 'to_order',
    price: 100,
    unit: '100г',
    description: 'Соковитий маринований шашлик, підсмажений на дровах.',
    available: true
  },
  {
    id: 'm30',
    name: 'Риба на грилі',
    category: 'to_order',
    price: 75,
    unit: '100г',
    description: 'Свіжа річкова або морська риба, запечена на вогні з лимоном.',
    available: true
  },
  {
    id: 'm31',
    name: 'Овочі гриль',
    category: 'to_order',
    price: 250,
    unit: 'порція',
    description: 'Асорті запечених на мангалі баклажанів, кабачків, перцю та печериць.',
    available: true
  },
  {
    id: 'm32',
    name: 'Стейк м’ясний',
    category: 'to_order',
    price: 100,
    unit: '100г',
    description: 'Ароматний стейк із соковитого м’яса на багатті.',
    available: true
  },
  {
    id: 'm33',
    name: 'Курка гриль',
    category: 'to_order',
    price: 350,
    unit: 'кг',
    description: 'Ціла курка гриль із золотистою скоринкою та спеціями.',
    available: true
  },

  // Салати
  {
    id: 'm34',
    name: 'Салат з буряка',
    category: 'salads',
    price: 50,
    unit: 'порція',
    description: 'Вітамінний салат з відварного бурячка та олії.',
    available: true
  },
  {
    id: 'm35',
    name: 'Салат зі свіжої капусти',
    category: 'salads',
    price: 50,
    unit: 'порція',
    description: 'Легкий та хрусткий салат зі свіжої капусти та зелені.',
    available: true
  },
  {
    id: 'm36',
    name: 'Салат Помідор + Огірок',
    category: 'salads',
    price: 80,
    unit: 'порція',
    description: 'Свіжі овочі з власного городу з запашною соняшниковою олією або сметаною.',
    available: true
  },

  // Соуси
  {
    id: 'm37',
    name: 'Соус Кетчуп',
    category: 'sauces',
    price: 25,
    unit: 'порція',
    available: true
  },
  {
    id: 'm38',
    name: 'Соус Тартар',
    category: 'sauces',
    price: 25,
    unit: 'порція',
    available: true
  },
  {
    id: 'm39',
    name: 'Соус Барбекю',
    category: 'sauces',
    price: 25,
    unit: 'порція',
    available: true
  },
  {
    id: 'm40',
    name: 'Соус Кисло-солодкий',
    category: 'sauces',
    price: 25,
    unit: 'порція',
    available: true
  },
  {
    id: 'm41',
    name: 'Соус Сирний',
    category: 'sauces',
    price: 25,
    unit: 'порція',
    available: true
  },
  {
    id: 'm42',
    name: 'Сметана домашня',
    category: 'sauces',
    price: 30,
    unit: 'порція',
    available: true
  },

  // Напої & Ласощі
  {
    id: 'm43',
    name: 'Еспресо',
    category: 'drinks',
    price: 50,
    unit: 'чашка',
    description: 'Міцна класична кава.',
    available: true
  },
  {
    id: 'm44',
    name: 'Американо',
    category: 'drinks',
    price: 50,
    unit: 'чашка',
    available: true
  },
  {
    id: 'm45',
    name: 'Капучино',
    category: 'drinks',
    price: 65,
    unit: 'чашка',
    description: 'Ароматна кава з густою молочною пінкою.',
    available: true
  },
  {
    id: 'm46',
    name: 'Лате',
    category: 'drinks',
    price: 80,
    unit: 'чашка',
    description: 'Ніжний кавово-молочний напій.',
    available: true
  },
  {
    id: 'm47',
    name: 'Айс лате',
    category: 'drinks',
    price: 120,
    unit: 'стакан',
    description: 'Освіжаюча холодна кава з льодом та молоком.',
    available: true
  },
  {
    id: 'm48',
    name: 'Кавовий коктейль Бамбл',
    category: 'drinks',
    price: 120,
    unit: 'стакан',
    description: 'Бадьорячий микс з еспресо, апельсинового соку та льоду.',
    available: true
  },
  {
    id: 'm49',
    name: 'Коктейль Мохіто',
    category: 'drinks',
    price: 120,
    unit: 'стакан',
    description: 'Прохолодний безалкогольний коктейль із м’ятою, лаймом та содовою.',
    available: true
  },
  {
    id: 'm50',
    name: 'Коктейль Блакитна лагуна',
    category: 'drinks',
    price: 120,
    unit: 'стакан',
    description: 'Яскравий освіжаючий літній коктейль.',
    available: true
  },
  {
    id: 'm51',
    name: 'Солодка вата',
    category: 'drinks',
    price: 100,
    unit: 'порція',
    description: 'Улюблені пухкі солодощі для дітей та дорослих.',
    available: true
  },
  {
    id: 'm52',
    name: 'Попкорн',
    category: 'drinks',
    price: 90,
    unit: 'порція',
    description: 'Свіжоприготований хрусткий попкорн.',
    available: true
  },
  {
    id: 'm53',
    name: 'Квас прохолодний',
    category: 'drinks',
    price: 40,
    unit: 'стакан',
    description: 'Натуральний освіжаючий хлібний квас.',
    available: true
  },
  {
    id: 'm54',
    name: 'Сітро',
    category: 'drinks',
    price: 35,
    unit: 'пляшка',
    description: 'Класичний газований лимонад.',
    available: true
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'Все меню', icon: 'Utensils' },
  { id: 'first', name: 'Перші страви', icon: 'Soup' },
  { id: 'second', name: 'Другі страви', icon: 'Beef' },
  { id: 'meat', name: 'М’ясне & Гаряче', icon: 'Drumstick' },
  { id: 'to_order', name: 'На замовлення (Гриль)', icon: 'Flame' },
  { id: 'pancakes', name: 'Млинці & Сирники', icon: 'CookingPot' },
  { id: 'fry', name: 'Фритюр', icon: 'Popcorn' },
  { id: 'salads', name: 'Салати', icon: 'Salad' },
  { id: 'sauces', name: 'Соуси', icon: 'Sparkles' },
  { id: 'drinks', name: 'Напої & Десерти', icon: 'Coffee' }
];
