import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimun 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required",
  }),
  address: z
    .string()
    .min(1, {
      message: "Address is required",
    })
    .optional(),
});

export const EditProductSchema = z.object({
  name: z.optional(z.string()),
  description: z.optional(z.string()),
  price: z.optional(z.number()),
  availability: z.optional(z.boolean()),
});
