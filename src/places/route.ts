import { OpenAPIHono, z } from "@hono/zod-openapi";
import * as placeService from "./service";
import { PlaceCitySchema, PlaceSlugSchema } from "./schema";
import {
  allowGuestBearer,
  AllowGuestBearerEnv,
} from "../middleware/auth-bearer";

const API_TAG = ["Places"];

export const placeRoute = new OpenAPIHono<AllowGuestBearerEnv>()
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
      );

      return c.json({
        message: "Successfully get the places data",
        data,
      });
    }
  )

  // GET FEATURED PLACES
  .openapi(
    {
      method: "get",
      path: "/featured",
      description: "Get all featured places",
      responses: {
        200: {
          description: "List of featured places",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const data = await placeService.getFeaturedPlaces();

      return c.json({
        message: "Successfully get the featured places",
        data,
      });
    }
  )

  // GET TOP STATS
  .openapi(
    {
      method: "get",
      path: "/top-stats",
      description: "Get statistics of favorite places",
      responses: {
        200: {
          description: "Statistics of favorite places",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const data = await placeService.getTopStats();

      return c.json({
        message: "Success",
        data,
      });
    }
  )

  // GET PLACE BY SLUG
  .openapi(
    {
      method: "get",
      path: "/{slug}",
      middleware: allowGuestBearer,
      request: {
        params: PlaceSlugSchema,
      },
      description: "Get detail place by slug",
      responses: {
        200: {
          description: "Successfully get place details",
        },
        404: {
          description: "Place not found",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const slug = c.req.param("slug")!;
      const user = c.var.user;

      const data = await placeService.getDetailPlaceBySlug(slug, user?.id);

      if (!data) {
        return c.json({ message: "Place not found" }, 404);
      }

      return c.json({
        message: "Susscessfully get detail place",
        data,
      });
    }
  );
