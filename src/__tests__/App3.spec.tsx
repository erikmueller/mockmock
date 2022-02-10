import App from "../App3";
import { server, rest, baseURL, createResponse } from "../testing/server";
import renderWithProvider from "../testing/renderWithProvider";

server.use(rest.get(baseURL("/people/1"), createResponse({ name: "Han" })));

it("renders with data", async () => {
  const { findByText } = renderWithProvider(<App />);

  await findByText(/Name: Han/);
});
