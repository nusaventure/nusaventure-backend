import { OpenAPIHono, z } from "@hono/zod-openapi"
import * as placeService from "./service"
import { PlaceCitySchema } from "./schema"

const API_TAG = ["Places"]

export const placeRoute = new OpenAPIHono()
  // GET ALL PLACES
  .openapi(
    {
      method: "get",
      path: "/",
      description: "Get all places",
      request: {
        query: PlaceCitySchema,
      },
      responses: {
        200: {
          description: "List of places",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const data = await placeService.getAll(
        c.req.query() as z.infer<typeof PlaceCitySchema>
      )

      return c.json({
        message: "Successfully get the places data",
        data,
      })
    }
  )
