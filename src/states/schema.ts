import { z } from "zod";

export const QueryStateSchema = z.object({
  countryId: z.string().min(1).openapi({ example: "102" }),
  search: z.string().optional(),
});
