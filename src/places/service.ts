import { z } from "@hono/zod-openapi";
import { Prisma } from "@prisma/client";
import { prisma } from "../lib/db";
import { PlaceCitySchema } from "./schema";

const placeResponseData: Prisma.PlaceSelect = {
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
  categories: {
    select: {
      id: true,
      slug: true,
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
      // categories: query.categoryId,
      OR: [
        {
          title: {
            contains: query.search,
            mode: "insensitive",
          },
        },
        {
          country: {
            name: {
              contains: query.search,
              mode: "insensitive",
            },
          },
        },
        {
          state: {
            name: {
              contains: query.search,
              mode: "insensitive",
            },
          },
        },
        {
          city: {
            name: {
              contains: query.search,
              mode: "insensitive",
            },
          },
        },
      ],
    },
    orderBy: {
      title: "asc",
    },
  });
}

export async function getDetailPlaceBySlug(slug: string) {
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

export async function getFeaturedPlaces() {
  return await prisma.place.findMany({
    where: {
      isFeatured: true,
    },
    select: {
      id: true,
      title: true,
      slug: true,
      imageUrl: true,
      position: true,
      city: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      position: "asc",
    },
  });
}

export async function getTopStats() {
  const [islands, cities, places] = await Promise.all([
    prisma.island.count(),
    prisma.city.count(),
    prisma.place.count(),
  ]);

  return {
    islands,
    cities,
    places,
  };
}
