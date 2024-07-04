import { User } from "@/types/users";

import axios from "@/actions/conf";

export const getAllUsers = async () => {
  const response = await axios.get<User[]>("/users", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
