import App from "../App1";
import { vi } from "vitest";
import renderWithProvider from "../testing/renderWithProvider";

vi.mock("../api/client", () => {
  const mockRequest = vi.fn(() => ({
    data: { name: "Han" },
  }));

  return {
    instance: {
      get: mockRequest,
    },
  };
});

it("renders with data", async () => {
  const { findByText } = renderWithProvider(<App />);

  await findByText(/Name: Han/);
});
