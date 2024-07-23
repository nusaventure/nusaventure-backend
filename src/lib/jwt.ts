import { sign } from "hono/jwt";

export async function createToken(userId: string) {
  return await sign(
    {
      sub: userId,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // Token expires in 24 hours
    },
    process.env.TOKEN_SECRET!
  );
}
