import { z } from "zod";

export const QueryCountrySchema = z.object({
  search: z.string().optional(),
});
