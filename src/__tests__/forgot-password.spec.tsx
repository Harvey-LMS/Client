import "@testing-library/jest-dom";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import Page from "@/app/(auth)/login/forgot-password/change-password/page";

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
  const password = screen.getByLabelText("password");
  const passwordConfirm = screen.getByLabelText("passwordConfirm");
  const button = screen.getByRole("button");
  return { password, passwordConfirm, button, ...utils };
};
describe("ForgotPassword", () => {
  it("password is empty", async () => {
    const { password } = setup();
    fireEvent.change(password, { target: { value: "" } });
    fireEvent.blur(password);
    await waitFor(() => {
      expect(screen.queryAllByText("Password is required"));
    });
  });
  it("password confirm is empty", async () => {
    const { passwordConfirm } = setup();
    fireEvent.change(passwordConfirm, { target: { value: "" } });
    fireEvent.blur(passwordConfirm);
    await waitFor(() => {
      expect(screen.queryAllByText("Password confirm is required"));
    });
  });
  it("The confirmed password does not match the new password", async () => {
    const { password, passwordConfirm, button } = setup();
    fireEvent.change(password, { target: { value: "12345@Aa" } });
    fireEvent.change(passwordConfirm, { target: { value: "12345@Aab" } });
    fireEvent.click(button);
    await waitFor(() => {
      expect(
        screen.getByText(
          "The confirmed password does not match the new password"
        )
      );
    });
  });
  it("The confirmed password match the new password", async () => {
    const { password, passwordConfirm, button } = setup();
    fireEvent.change(password, { target: { value: "12345@Aa" } });
    fireEvent.change(passwordConfirm, { target: { value: "12345@Aa" } });
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.getByText("Password change successfully"));
    });
  });
});
