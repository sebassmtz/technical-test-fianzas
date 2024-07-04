import { Product } from "@/types/product";

import axios from "@/actions/conf";

export const getAllProducts = async () => {
  const response = await axios.get<Product[]>("/product", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
