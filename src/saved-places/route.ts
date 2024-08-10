import { OpenAPIHono } from "@hono/zod-openapi";
import { authBearer, AuthBearerEnv } from "../middleware/auth-bearer";
import { SavedPlaceSchema } from "./schema";
import * as savedPlaceService from "./service";

const API_TAG = ["Saved Places"];

export const savedPlacesRoute = new OpenAPIHono<AuthBearerEnv>();

// CREATE NEW SAVED PLACE
savedPlacesRoute.openapi(
  {
    method: "post",
    path: "/",
    middleware: authBearer,
    description: "Save a favorite place",
    request: {
      body: {
        content: {
          "application/json": {
            schema: SavedPlaceSchema,
          },
        },
      },
    },
    security: [
      {
        AuthorizationBearer: [],
      },
    ],
    responses: {
      200: {
        description: "Successfully saved a place",
      },
    },
    tags: API_TAG,
  },
  async (c) => {
    const user = c.var.user;

    try {
      await savedPlaceService.addSavedPlace(await c.req.json(), user.id);

      return c.json({
        message: "Success",
      });
    } catch (error) {
      return c.json(
        {
          message: (error as Error).message,
        },
        400
      );
    }
  }
);

// GET ALL SAVED PLACES
savedPlacesRoute.openapi(
  {
    method: "get",
    path: "/",
    middleware: authBearer,
    description: "Get all saved places",
    security: [
      {
        AuthorizationBearer: [],
      },
    ],
    responses: {
      200: {
        description: "Successfully get saved places data",
      },
    },
    tags: API_TAG,
  },
  async (c) => {
    const user = c.var.user;

    try {
      const savedPlaces = await savedPlaceService.getAllSavedPlaces(user.id);

      return c.json({
        message: "Success",
        savedPlaces,
      });
    } catch (error) {
      return c.json(
        {
          message: (error as Error).message,
        },
        400
      );
    }
  }
);
