export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  availability: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
}
