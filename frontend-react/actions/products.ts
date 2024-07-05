import { Product, AddProduct } from "@/types/product";

import axios from "@/actions/conf";
import Cookies from "js-cookie";

export const getAllProducts = async () => {
  const response = await axios.get<Product[]>("/product", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const addProduct = async (data: AddProduct) => {
  const response = await axios.post<Product>("/product", data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("access_token")}`,
    },
  });
  return response.data;
};

export const deleteProduct = async (id: number) => {
  const response = await axios.delete<Product>(`/product/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("access_token")}`,
    },
  });
  return response.data;
}
