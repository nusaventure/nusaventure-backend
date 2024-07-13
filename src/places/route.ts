import { OpenAPIHono } from "@hono/zod-openapi"
import * as placeService from "./service"

const API_TAG = ["Places"]

export const placeRoute = new OpenAPIHono()
  // GET ALL PUBLISHER
  .openapi(
    {
      method: "get",
      path: "/",
      description: "Get all places",
      responses: {
        200: {
          description: "List of places",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      return await placeService.getAll(c)
    }
  )
