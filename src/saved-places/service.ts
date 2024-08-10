import { z } from "@hono/zod-openapi";
import { SavedPlaceSchema } from "./schema";
import { prisma } from "../lib/db";

export const addSavedPlace = async (
  body: z.infer<typeof SavedPlaceSchema>,
  userId: string
) => {
  return await prisma.savedPlace.create({
    data: {
      userId,
      placeId: body.placeId,
    },
  });
};
