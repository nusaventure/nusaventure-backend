import { prisma } from "../lib/db"
import type { Context } from "hono"

export const getAll = async (c: Context) => {
  const places = await prisma.place.findMany()

  return c.json({
    message: "Successfully get all places.",
    places,
  })
}
