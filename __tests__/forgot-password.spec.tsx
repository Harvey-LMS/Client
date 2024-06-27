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

test("input empty", () => {
  const { password, passwordConfirm, button } = setup();

  const passwordElement = password as HTMLInputElement;
  fireEvent.change(passwordElement, { target: { value: "" } });
  expect(passwordElement.value).toBe("");

  const passwordConfirmElement = passwordConfirm as HTMLInputElement;
  fireEvent.change(passwordConfirmElement, { target: { value: "" } });
  expect(passwordConfirmElement.value).toBe("");

  fireEvent.click(button);
  expect(
    screen.getByText("Vui lòng nhập đầy đủ thông tin")
  ).toBeInTheDocument();
});

test("password does not match with password confirm", async () => {
  const { password, passwordConfirm, button } = setup();

  const passwordElement = password as HTMLInputElement;
  fireEvent.change(passwordElement, { target: { value: "Aa@12345" } });
  expect(passwordElement.value).toBe("Aa@12345");

  const passwordConfirmElement = passwordConfirm as HTMLInputElement;
  fireEvent.change(passwordConfirmElement, { target: { value: "Aa@123123" } });
  expect(passwordConfirmElement.value).toBe("Aa@123123");

  fireEvent.click(button);
  await waitFor(() => {
    expect(
      screen.getByText("Mật khẩu xác nhận chưa khớp với mật khẩu mới")
    ).toBeInTheDocument();
  });
});

test("password matches with password confirm", async () => {
  const { password, passwordConfirm, button } = setup();

  const passwordElement = password as HTMLInputElement;
  fireEvent.change(passwordElement, { target: { value: "Aa@12345" } });
  expect(passwordElement.value).toBe("Aa@12345");

  const passwordConfirmElement = passwordConfirm as HTMLInputElement;
  fireEvent.change(passwordConfirmElement, { target: { value: "Aa@12345" } });
  expect(passwordConfirmElement.value).toBe("Aa@12345");

  fireEvent.click(button);
  await waitFor(() => {
    expect(screen.getByText("Đổi mật khẩu thành công")).toBeInTheDocument();
  });
});
