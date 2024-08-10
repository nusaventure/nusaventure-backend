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

export const getAllSavedPlaces = async (userId: string) => {
  return await prisma.savedPlace.findMany({
    where: {
      userId,
    },
    select: {
      place: {
        select: {
          title: true,
          slug: true,
          description: true,
          address: true,
          imageUrl: true,
          latitude: true,
          longitude: true,
          categories: {
            select: {
              name: true,
              slug: true,
            },
          },
        },
      },
      id: true,
    },
  });
};
