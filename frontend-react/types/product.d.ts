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

export interface AddProduct {
  name: string;
  description?: string | null;
  price: number;
  availability: boolean;
}

export interface EditProduct {
  name?: string;
  description?: string | null;
  price?: number;
  availability?: boolean;
}