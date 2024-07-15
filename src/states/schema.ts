import { z } from "zod";

export const QueryStateSchema = z.object({
  countryId: z.string().min(1),
  search: z.string().optional(),
});
