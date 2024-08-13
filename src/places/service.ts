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
  categories: {
    select: {
      id: true,
      slug: true,
      name: true,
    },
  },
  island: {
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
        {
          categories: {
            some: {
              name: {
                contains: query.search,
                mode: "insensitive",
              },
            },
          },
        },
        {
          island: {
            name: {
              contains: query.search,
              mode: "insensitive",
            },
            slug: {
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

export async function getDetailPlaceBySlug(slug: string, userId?: string) {
  const place = await prisma.place.findUnique({
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

  if (!place) {
    return null;
  }

  const savedPlace = userId
    ? await prisma.savedPlace.findFirst({
        select: {
          id: true,
        },
        where: {
          placeId: place.id,
          userId,
        },
      })
    : null;

  return {
    ...place,
    savedPlaceId: savedPlace?.id,
  };
}

export async function getFeaturedPlaces() {
  return await prisma.place.findMany({
    where: {
      isFeatured: true,
    },
    select: {
      ...placeResponseData,
      city: {
        select: {
          id: true,
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
