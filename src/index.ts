import { Hono } from "hono"
import { prisma } from "./lib/db"

const app = new Hono()

app.get("/", (c) => {
  return c.text("Hello Hono!")
})

app.get("/places", async (c) => {
  const places = await prisma.place.findMany()
  return c.json({
    message: "Successfully get all places",
    places,
  })
})

export default app
