import { z } from "zod"

export const QueryCitySchema = z.object({
  countryId: z.string().min(1),
  stateId: z.string().min(1),
  search: z.string().optional(),
})
