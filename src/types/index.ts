export type CategoryId = 
  | 'first'
  | 'second'
  | 'pancakes'
  | 'salads'
  | 'meat'
  | 'fry'
  | 'to_order'
  | 'sauces'
  | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryId;
  price: number;
  unit?: string; // e.g. "порція", "100г", "кг"
  description?: string;
  isFridayOnly?: boolean;
  available: boolean;
  image?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  comment?: string;
}

export interface OrderDetails {
  customerName: string;
  phone: string;
  pickupTime: string;
  comment?: string;
}

export interface Room {
  id: string;
  name: string;
  capacity: string;
  pricePerNight: string;
  description: string;
  features: string[];
  images: string[];
}
