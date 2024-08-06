import { prisma } from "../lib/db";
import { QueryIslandSchema } from "./schema";
import { z } from "@hono/zod-openapi";

export const getAll = async (query: z.infer<typeof QueryIslandSchema>) => {
  return await prisma.island.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      latitude: true,
      longitude: true,
      imageUrl: true,
      zoom: true,
    },
    where: {
      countryId: query.countryId,
      name: {
        contains: query.search,
        mode: "insensitive",
      },
    },
    orderBy: {
      name: "asc",
    },
  });
};
