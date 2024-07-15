import { z } from "zod";
import { QueryCategorySchema } from "./schema";
import { prisma } from "../lib/db";

export async function getAll(query?: z.infer<typeof QueryCategorySchema>) {
  return await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      places: true,
    },
    where: {
      name: {
        contains: query?.search,
        mode: "insensitive",
      },
    },
  });
}
