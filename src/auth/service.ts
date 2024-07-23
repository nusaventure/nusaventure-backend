import { z } from "zod";
import { RegisterSchema } from "./schema";
import { prisma } from "../lib/db";
import { hashPassword } from "../lib/password";

export async function register(body: z.infer<typeof RegisterSchema>) {
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        {
          username: body.username,
        },
        {
          email: body.email,
        },
      ]
    },
  });

  if (user) {
    if (user.username === body.username) {
      throw new Error("Username already exists");
    }

    throw new Error("Email already exists");
  }

  await prisma.user.create({
    data: {
      username: body.username,
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      password: {
        create: {
          hash: await hashPassword(body.password),
        },
      },
    },
  })

  return true
}
