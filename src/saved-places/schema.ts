import { z } from "@hono/zod-openapi";

export const SavedPlaceSchema = z.object({
  placeId: z.string().min(1),
});
