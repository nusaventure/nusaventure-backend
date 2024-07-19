import { OpenAPIHono } from "@hono/zod-openapi";
import * as categoryService from "./service";
import { QueryCategorySchema } from "./schema";

const API_TAG = ["Categories"];

const categoryRoute = new OpenAPIHono();

// GET ALL CATEGORIES
categoryRoute.openapi(
  {
    method: "get",
    path: "/",
    description: "Get all categories",
    request: {
      query: QueryCategorySchema,
    },
    responses: {
      200: {
        description: "List of categories",
      },
    },
    tags: API_TAG,
  },
  async (c) => {
    const data = await categoryService.getAll(c.req.query());

    return c.json({
      message: "Success",
      data,
    });
  }
);

// GET FEATURED CATEGORY
categoryRoute.openapi(
  {
    method: "get",
    path: "/featured",
    description: "Featured categories",
    responses: {
      200: {
        description: "Featured categories",
      },
    },
    tags: API_TAG,
  },
  async (c) => {
    const data = await categoryService.getFeaturedCategory();

    return c.json({
      message: "Success",
      data,
    });
  }
);

export { categoryRoute };
