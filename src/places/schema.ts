import { z } from "zod"

export const PlaceCitySchema = z.object({
  countryId: z.string().min(1),
  stateId: z.string().min(1),
  cityId: z.string().min(1),
  categoryId: z.string().min(1),
  search: z.string().optional(),
})
