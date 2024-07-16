import { z } from "zod";

export const PlaceCitySchema = z.object({
  countryId: z.string().min(1).openapi({ example: "102" }),
  stateId: z.string().min(1).openapi({ example: "1825" }),
  cityId: z.string().min(1).openapi({ example: "56731" }),
  categoryId: z.string().min(1).openapi({ example: "mosque" }),
  search: z.string().optional(),
});

export const PlaceSlugSchema = z.object({
  slug: z.string().min(1).openapi({ example: "masjid-raya-al-jabbar" }),
});
