import { z } from "zod";

export const RegisterSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be at most 20 characters long")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain alphanumeric characters and underscores"
    )
    .toLowerCase()
    .openapi({ example: "johndoe" }),
  email: z.string().email().openapi({ example: "johndoe@mail.com" }),
  password: z.string().min(6).openapi({ example: "my53cuREpA55w0RD" }),
  firstName: z.string().openapi({ example: "John" }),
  lastName: z.string().openapi({ example: "Doe" }),
});

export const LoginSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be at most 20 characters long")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain alphanumeric characters and underscores"
    )
    .toLowerCase()
    .openapi({ example: "johndoe" }),
  password: z.string().min(6).openapi({ example: "my53cuREpA55w0RD" }),
});
