import { swaggerUI } from "@hono/swagger-ui"
import { OpenAPIHono } from "@hono/zod-openapi"
import { placeRoute } from "./places/route"

const app = new OpenAPIHono()

app.get("/", (c) => {
  return c.text("Hello Hono!")
})

// OPEN API
app.doc31("/docs", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Nusaventure REST API",
    description:
      "Nusaventure helps you discover captivating tourist destinations and culinary delights in Nusantara.\n\nNusaventure, short for Nusantara Adventure, is a platform that inspires exploration of various legendary tourist spots, delicious culinary varieties, interesting activities and events, understanding the ecosystem and communities, and more.",
  },
})

// SWAGGER UI
app.get("/ui", swaggerUI({ url: "/docs" }))

// ROUTES
app.route("/places", placeRoute)

export default app
