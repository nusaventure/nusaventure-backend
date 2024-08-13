import { OpenAPIHono } from "@hono/zod-openapi";
import { authBearer, AuthBearerEnv } from "../middleware/auth-bearer";
import { CreateSavedPlaceSchema, DeleteSavedPlaceSchema } from "./schema";
import * as savedPlaceService from "./service";
import { Prisma } from "@prisma/client";

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
            schema: CreateSavedPlaceSchema,
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
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          // Handle unique constraint violation

          return c.json(
            {
              message: "This place is already saved to your saved places",
            },
            400
          );
        }
      }
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
      const data = await savedPlaceService.getAllSavedPlaces(user.id);

      return c.json({
        message: "Success",
        data,
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

// DELETE SAVED PLACE
savedPlacesRoute.openapi(
  {
    method: "delete",
    path: "/{id}",
    request: {
      params: DeleteSavedPlaceSchema,
    },
    middleware: authBearer,
    description: "Delete a saved place",
    security: [
      {
        AuthorizationBearer: [],
      },
    ],
    responses: {
      200: {
        description: "Successfully deleted the saved place",
      },
    },
    tags: API_TAG,
  },
  async (c) => {
    const savedPlaceId = c.req.param("id")!;
    const user = c.var.user;

    try {
      await savedPlaceService.deleteSavedPlace(savedPlaceId, user.id);

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
