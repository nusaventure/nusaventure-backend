import { OpenAPIHono } from "@hono/zod-openapi";
import * as stateService from "./service";
import { QueryStateSchema } from "./schema";
import { z } from "zod";

const API_TAG = ["States"];

const stateRoute = new OpenAPIHono();

// GET ALL STATES
stateRoute.openapi(
  {
    method: "get",
    path: "/",
    description: "Get all states",
    request: {
      query: QueryStateSchema,
    },
    responses: {
      200: {
        description: "List of states",
      },
    },
    tags: API_TAG,
  },
  async (c) => {
    const data = await stateService.getAll(
      c.req.query() as z.infer<typeof QueryStateSchema>
    );

    return c.json({
      message: "Success",
      data,
    });
  }
);

export { stateRoute };
