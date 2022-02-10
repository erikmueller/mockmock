import App from "../App2";
import { vi } from "vitest";
import renderWithProvider from "../testing/renderWithProvider";

global.fetch = vi.fn(async () => ({
  status: 200,
  json: async () => ({
    name: "Han",
  }),
}));

it("renders with data", async () => {
  const { findByText } = renderWithProvider(<App />);

  await findByText(/Name: Han/);
});
