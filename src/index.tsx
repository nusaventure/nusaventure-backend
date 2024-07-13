import { swaggerUI } from "@hono/swagger-ui"
import { OpenAPIHono } from "@hono/zod-openapi"
import { cors } from "hono/cors"
import { placeRoute } from "./places/route"
import { WelcomePage } from "./welcome"

const app = new OpenAPIHono({ strict: false })

// CORS
app.use(
  "/*",
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") ?? [],
  })
)

// OPEN API
app.doc31("/api-spec", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Nusaventure REST API",
    description:
      "Nusaventure helps you discover captivating tourist destinations and culinary delights in Nusantara.\n\nNusaventure, short for Nusantara Adventure, is a platform that inspires exploration of various legendary tourist spots, delicious culinary varieties, interesting activities and events, understanding the ecosystem and communities, and more.",
  },
})

// SWAGGER UI
app.get("/api", swaggerUI({ url: "/api-spec" }))

// ROUTES
app.route("/places", placeRoute)

// WELCOME PAGE
app.get("/", (c) =>
  c.html(
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to Nusaventure REST API</title>
        <meta
          name="description"
          content="Nusaventure helps you discover captivating tourist destinations and culinary delights in Nusantara."
        />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <WelcomePage />
      </body>
    </html>
  )
)

export default app
