import { z } from "zod";

export const PlaceCitySchema = z.object({
  countryId: z.string().optional(),
  stateId: z.string().optional(),
  cityId: z.string().optional(),
  categoryId: z.string().optional(),
  search: z.string().optional(),
});

export const PlaceSlugSchema = z.object({
  slug: z.string().min(1).openapi({ example: "masjid-raya-al-jabbar" }),
});
