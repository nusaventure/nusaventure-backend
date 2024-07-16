import { z } from "zod";
import { QueryCitySchema } from "./schema";
import { prisma } from "../lib/db";

export async function getAll(query: z.infer<typeof QueryCitySchema>) {
  return await prisma.city.findMany({
    select: {
      id: true,
      name: true,
      imageUrl: true,
      latitude: true,
      longitude: true,
      zoom: true,
    },
    where: {
      countryId: query.countryId,
      stateId: query.stateId,
      name: {
        contains: query?.search,
        mode: "insensitive",
      },
    },
  });
}
