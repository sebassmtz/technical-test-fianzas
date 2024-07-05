import { Order } from "@/types/order";

import axios from "@/actions/conf";

export const getAllOrders = async () => {
  const response = await axios.get<Order[]>("/order", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
