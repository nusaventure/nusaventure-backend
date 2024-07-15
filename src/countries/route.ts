import { OpenAPIHono } from "@hono/zod-openapi";
import * as countryService from "./service";
import { QueryCountrySchema } from "./schema";

const API_TAG = ["Countries"];

const countryRoute = new OpenAPIHono();

// GET ALL COUNTRIES
countryRoute.openapi(
  {
    method: "get",
    path: "/",
    description: "Get all countries",
    request: {
      query: QueryCountrySchema,
    },
    responses: {
      200: {
        description: "List of countries",
      },
    },
    tags: API_TAG,
  },
  async (c) => {
    const data = await countryService.getAll(c.req.query());

    return c.json({
      message: "Success",
      data,
    });
  }
);

export { countryRoute };
