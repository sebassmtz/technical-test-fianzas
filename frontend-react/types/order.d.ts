export interface Order {
  id: number;
  date_sale: string;
  is_delivered: boolean;
  price_delivery: string;
  price_total: string;
  deletedAt: null;
  orderProduct: OrderProduct[];
}

interface OrderProduct {
  id: number;
  quantity: number;
  comment: string;
  deletedAt: null;
  product: Product;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  availability: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
}
