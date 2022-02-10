import { ResponseResolver, RestContext, RestRequest } from "msw";
import { setupServer } from "msw/node";

export { rest } from "msw";

export const server = setupServer();
export const createResponse =
  (body: any, status = 200): ResponseResolver<RestRequest, RestContext> =>
  (_req, res, ctx) => {
    const responseTransformer = typeof body === "object" ? ctx.json : ctx.text;

    return res(ctx.status(status), responseTransformer(body));
  };

export const baseURL = (path: string): string =>
  `https://swapi.dev/api/${path.replace(/^\//, "")}`;

beforeAll(() => {
  server.listen({
    onUnhandledRequest: "error",
  });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
