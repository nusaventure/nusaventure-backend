import { sign, verify } from "hono/jwt";

export type TokenPayload = {
  sub: string;
  exp: number;
};

export async function createToken(userId: string) {
  const payload: TokenPayload = {
    sub: userId,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // Token expires in 24 hours
  };

  return await sign(payload, process.env.TOKEN_SECRET!);
}

export async function validateToken(token: string) {
  try {
    return await verify(token, process.env.TOKEN_SECRET!);
  } catch (error) {
    return null;
  }
}
