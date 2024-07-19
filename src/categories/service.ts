import { z } from "zod";
import { QueryCategorySchema } from "./schema";
import { prisma } from "../lib/db";

export async function getAll(query?: z.infer<typeof QueryCategorySchema>) {
  return await prisma.category.findMany({
    select: {
      id: true,
      slug: true,
      name: true,
      isFeatured: true,
      position: true,
    },
    where: {
      name: {
        contains: query?.search,
        mode: "insensitive",
      },
    },
    orderBy: {
      name: "asc",
    },
  });
}

export async function getFeaturedCategory() {
  return await prisma.category.findMany({
    select: {
      id: true,
      slug: true,
      name: true,
      isFeatured: true,
      position: true,
    },
    where: {
      isFeatured: true,
    },
    orderBy: {
      position: "asc",
    },
  });
}
