import { z } from "zod";

export const QueryIslandSchema = z.object({
  countryId: z.string().min(1).openapi({ example: "102" }).optional(),
  search: z.string().optional(),
});
