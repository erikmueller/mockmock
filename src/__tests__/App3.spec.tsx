import App from "../App3";
import { server, rest } from "../testing/server";
import renderWithProvider from "../testing/renderWithProvider";

server.use(
  rest.get("https://swapi.dev/api/people/1", (req, res, ctx) =>
    res(ctx.json({ name: "Han" }))
  )
);

it("renders with data", async () => {
  const { debug, findByText } = renderWithProvider(<App />);
  await findByText(/Name: Han/);
});
