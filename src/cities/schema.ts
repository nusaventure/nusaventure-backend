import { z } from "zod";

export const QueryCitySchema = z.object({
  countryId: z.string().min(1).openapi({ example: "102" }),
  stateId: z.string().min(1).openapi({ example: "1829" }),
  search: z.string().optional(),
});
