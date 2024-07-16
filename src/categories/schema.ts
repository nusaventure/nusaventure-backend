import { z } from "zod";

export const QueryCategorySchema = z.object({
  search: z.string().optional(),
});
