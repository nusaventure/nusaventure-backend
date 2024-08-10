import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import { cors } from "hono/cors";
import { authRoute } from "./auth/route";
import { categoryRoute } from "./categories/route";
import { citiesRoute } from "./cities/route";
import { countryRoute } from "./countries/route";
import { islandRoute } from "./islands/route";
import { placeRoute } from "./places/route";
import { savedPlacesRoute } from "./saved-places/route";
import { stateRoute } from "./states/route";
import { WelcomePage } from "./welcome";

const app = new OpenAPIHono({ strict: false });

// CORS
app.use(
  "/*",
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") ?? [],
  })
);

// OPEN API
app.doc31("/api-spec", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Nusaventure REST API",
    description:
      "Nusaventure helps you discover captivating tourist destinations and culinary delights in Nusantara.\n\nNusaventure, short for Nusantara Adventure, is a platform that inspires exploration of various legendary tourist spots, delicious culinary varieties, interesting activities and events, understanding the ecosystem and communities, and more.",
  },
});

// SECURITY SCHEMES
app.openAPIRegistry.registerComponent(
  "securitySchemes",
  "AuthorizationBearer",
  {
    type: "http",
    scheme: "bearer",
    bearerFormat: "JWT",
  }
);

// SWAGGER UI
app.get("/ui", swaggerUI({ url: "/api-spec" }));

// ROUTES
app.route("/places", placeRoute);
app.route("/countries", countryRoute);
app.route("/states", stateRoute);
app.route("/cities", citiesRoute);
app.route("/categories", categoryRoute);
app.route("/islands", islandRoute);
app.route("/auth", authRoute);
app.route("/saved-places", savedPlacesRoute);

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
);

console.info(`Database URL: ${process.env.DATABASE_URL}`);

export default app;
