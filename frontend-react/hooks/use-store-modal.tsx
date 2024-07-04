import { Product } from "@/types/product";
import { create } from "zustand";

interface EditModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}
export const useStoreEditModal = create<EditModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

interface EditProductStore {
  productStore: Product;
  setProductStore: (product: Product) => void;
}

export const useStoreEditProduct = create<EditProductStore>((set) => ({
  productStore: {
    id: 0,
    name: "",
    description: "",
    price: 0,
    availability: false,
    createdAt: "",
    updatedAt: "",
    deletedAt: "",
  },
  setProductStore: (product: Product) => set({ productStore: product }),
}));
