import { z } from "zod";
import { LoginSchema, RegisterSchema } from "./schema";
import { prisma } from "../lib/db";
import { hashPassword, verifyPassword } from "../lib/password";
import { createToken } from "../lib/jwt";

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
      ],
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
  });

  return true;
}

export async function login(body: z.infer<typeof LoginSchema>) {
  const user = await prisma.user.findUnique({
    where: { username: body.username },
    include: { password: true },
  });

  if (!user || !user.password) {
    throw new Error("Username or password is incorrect");
  }

  if (!(await verifyPassword(user.password.hash, body.password))) {
    throw new Error("Username or password is incorrect");
  }

  return await createToken(user.id);
}
