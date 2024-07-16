import { z } from "@hono/zod-openapi";
import { prisma } from "../lib/db";
import { PlaceCitySchema } from "./schema";

const placeResponseData = {
  id: true,
  title: true,
  slug: true,
  description: true,
  imageUrl: true,
  latitude: true,
  longitude: true,
  zoom: true,
  address: true,
  country: {
    select: {
      id: true,
      name: true,
    },
  },
  state: {
    select: {
      id: true,
      name: true,
    },
  },
  city: {
    select: {
      id: true,
      name: true,
    },
  },
  category: {
    select: {
      id: true,
      name: true,
    },
  },
};

export async function getAll(query: z.infer<typeof PlaceCitySchema>) {
  return await prisma.place.findMany({
    select: placeResponseData,
    where: {
      countryId: query.countryId,
      stateId: query.stateId,
      cityId: query.cityId,
      categoryId: query.categoryId,
      title: {
        contains: query.search,
        mode: "insensitive",
      },
      country: {
        name: {
          contains: query.search,
          mode: "insensitive",
        },
      },
      state: {
        name: {
          contains: query.search,
          mode: "insensitive",
        },
      },
      city: {
        name: {
          contains: query.search,
          mode: "insensitive",
        },
      },
    },
  });
}

export async function getDetailPlaceBySlug(slug: string | undefined) {
  return await prisma.place.findUnique({
    where: { slug },
    select: {
      ...placeResponseData,
      images: {
        select: {
          url: true,
          title: true,
          description: true,
        },
      },
    },
  });
}
