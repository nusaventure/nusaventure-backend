import { z } from "zod";
import { QueryStateSchema } from "./schema";
import { prisma } from "../lib/db";

export async function getAll(query: z.infer<typeof QueryStateSchema>) {
  return await prisma.state.findMany({
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
