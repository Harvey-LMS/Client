import "@testing-library/jest-dom";
import {
  screen,
  render,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import Page from "@/components/container/login";

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"), // If you need actual implementations from next/navigation
  useRouter: () => ({
    pathname: "/mock-path", // Mock pathname or any other property/method your component uses
    query: {}, // Mock query parameters if needed
    push: jest.fn(), // Mock push method if your component uses it
    // Add other properties or methods as needed by your component
  }),
  useSearchParams: () => jest.fn(),
}));

const setup = () => {
  const utils = render(<Page />);
  const username = screen.getByLabelText("username");
  const password = screen.getByLabelText("password");
  const button = screen.getByRole("button");
  return { username, password, button, ...utils };
};

describe("Login", () => {
  it("username is empty", async () => {
    const { username } = setup();
    fireEvent.change(username, { target: { value: "" } });
    fireEvent.blur(username);
    await waitFor(() => {
      expect(screen.queryAllByText("Username is required"));
    });
  });
  it("password is empty", async () => {
    const { password } = setup();
    fireEvent.change(password, { target: { value: "" } });
    fireEvent.blur(password);
    await waitFor(() => {
      expect(screen.queryAllByText("Password is required"));
    });
  });
});
