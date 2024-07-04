"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";

import axios from "@/actions/conf";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const { email, name, password, lastName, address } = values;
  try {
    const response = await axios.post(
      "/auth/register",
      {
        name,
        lastName,
        email,
        password,
        address,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return { success: "Usuario creado con exito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error creating account. Please try again.",
    };
  }
};
