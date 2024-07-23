import { OpenAPIHono } from "@hono/zod-openapi";
import * as countryService from "./service";
import { LoginSchema, RegisterSchema } from "./schema";
import { authBearer, AuthBearerEnv } from "../middleware/auth-bearer";

const API_TAG = ["Auth"];

const authRoute = new OpenAPIHono<AuthBearerEnv>();

// USER REGISTRATION
authRoute.openapi(
  {
    method: "post",
    path: "/register",
    description: "User registration",
    request: {
      body: {
        content: {
          "application/json": {
            schema: RegisterSchema,
          },
        },
      },
    },
    responses: {
      200: {
        description: "Successful registration",
      },
      400: {
        description: "Username or email already exists",
      },
    },
    tags: API_TAG,
  },
  async (c) => {
    try {
      await countryService.register(await c.req.json());

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

// USER LOGIN
authRoute.openapi(
  {
    method: "post",
    path: "/login",
    description: "Login user",
    request: {
      body: {
        content: {
          "application/json": {
            schema: LoginSchema,
          },
        },
      },
    },
    responses: {
      200: {
        description: "Login successful",
      },
      400: {
        description: "Username or password is incorrect",
      },
    },
    tags: API_TAG,
  },
  async (c) => {
    try {
      const token = await countryService.login(await c.req.json());

      return c.json({
        message: "Success",
        data: {
          token,
        },
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

// GET LOGGED IN USER
authRoute.openapi(
  {
    method: "get",
    path: "/me",
    middleware: authBearer,
    description: "Get logged in user",
    security: [
      {
        AuthorizationBearer: [],
      },
    ],
    responses: {
      200: {
        description: "User data",
      },
    },
    tags: API_TAG,
  },
  async (c) => {
    const user = c.var.user;

    return c.json({
      message: "Success",
      data: {
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  }
);

export { authRoute };
