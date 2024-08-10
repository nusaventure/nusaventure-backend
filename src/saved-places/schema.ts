import { z } from "@hono/zod-openapi";

export const CreateSavedPlaceSchema = z.object({
  placeId: z.string().min(1),
});

export const DeleteSavedPlaceSchema = z.object({
  id: z.string().min(1),
});
