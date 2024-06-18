import "@testing-library/jest-dom";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
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

test("input empty - 1", async () => {
  const { username, password, button } = setup();

  const usernameElement = username as HTMLInputElement;
  fireEvent.change(usernameElement, { target: { value: "username 1" } });
  expect(usernameElement.value).toBe("username 1");

  const passwordElement = password as HTMLInputElement;
  fireEvent.change(passwordElement, { target: { value: "password" } });
  expect(passwordElement.value).toBe("password");

  fireEvent.click(button);
  await waitFor(() => {
    expect(
      screen.getByText("Please check your username and password")
    ).toBeInTheDocument();
  });
});
