import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
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

// setup for Page test Input Element
const setup = () => {
  render(<Page />);
  const input = screen.getByLabelText("username");
  const inputPassword = screen.getByLabelText("password");
  const button = screen.getByRole("button");
  return { input, inputPassword, button };
};

// // case 1: input username and password are empty
// test("input username and password are empty", async () => {
//   const { input, inputPassword, button } = setup();
//   const inputElement = input as HTMLInputElement;
//   fireEvent.change(inputElement, { target: { value: "" } });
//   expect(inputElement.value).toBe("");

//   const inputPasswordElement = inputPassword as HTMLInputElement;
//   fireEvent.change(inputPasswordElement, { target: { value: "" } });
//   expect(inputPasswordElement.value).toBe("");

//   // Check button click event show error empty
// });
