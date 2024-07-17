import { z } from "zod";
import { QueryCountrySchema } from "./schema";
import { prisma } from "../lib/db";

export async function getAll(query?: z.infer<typeof QueryCountrySchema>) {
  return await prisma.country.findMany({
    select: {
      id: true,
      name: true,
      imageUrl: true,
      latitude: true,
      longitude: true,
      zoom: true,
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
