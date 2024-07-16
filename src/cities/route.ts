import { OpenAPIHono, z } from "@hono/zod-openapi";
import { QueryCitySchema } from "./schema";
import * as cityService from "./service";

const API_TAG = ["Cities"];

export const citiesRoute = new OpenAPIHono();

// GET ALL CITIES
citiesRoute.openapi(
  {
    method: "get",
    path: "/",
    description: "Get all cities",
    request: {
      query: QueryCitySchema,
    },
    responses: {
      200: {
        description: "List of cities",
      },
    },
    tags: API_TAG,
  },
  async (c) => {
    const data = await cityService.getAll(
      c.req.query() as z.infer<typeof QueryCitySchema>
    );

    return c.json({
      message: "Successfully get the cities data",
      data,
    });
  }
);
