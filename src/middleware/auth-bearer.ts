import { createMiddleware } from "hono/factory";
import { TokenPayload, validateToken } from "../lib/jwt";
import { prisma } from "../lib/db";

export type AuthBearerEnv = {
  Variables: {
    user: {
      id: string;
      username: string;
      email: string;
      firstName: string;
      lastName: string;
      createdAt: Date;
      updatedAt: Date;
    };
  };
};

export const authBearer = createMiddleware<AuthBearerEnv>(async (c, next) => {
  const authHeader = c.req.header("Authorization");

  if (!authHeader) {
    return c.json({ message: "Unauthorized" }, 401);
  }

  const token = authHeader.split(" ")[1];

  const decodedToken = (await validateToken(token)) as TokenPayload;

  if (!token || !decodedToken) {
    return c.json({ message: "Unauthorized" }, 401);
  }

  const user = await prisma.user.findUnique({
    where: { id: decodedToken.sub },
  });

  if (!user) {
    return c.json({ message: "Unauthorized" }, 401);
  }

  c.set("user", user);

  await next();
});