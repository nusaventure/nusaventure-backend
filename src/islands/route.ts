import { OpenAPIHono } from "@hono/zod-openapi";
import { QueryIslandSchema } from "./schema";
import * as islandService from "./service";

const API_TAG = ["Islands"];

const islandRoute = new OpenAPIHono();

// GET ALL ISLANDS
islandRoute.openapi(
  {
    method: "get",
    path: "/",
    description: "Get all islands",
    request: {
      query: QueryIslandSchema,
    },
    responses: {
      200: {
        description: "List of islands",
      },
    },
    tags: API_TAG,
  },
  async (c) => {
    const data = await islandService.getAll(c.req.query());

    return c.json({
      message: "Successfully get the islands data",
      data,
    });
  }
);

export { islandRoute };
