import "@testing-library/jest-dom";
import { screen, render, fireEvent, waitFor, RenderResult } from "@testing-library/react";
import Page from "../src/app/(auth)/login/page";
import { act } from '@testing-library/react';

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: () => ({
    pathname: "/mock-path",
    query: {},
    push: jest.fn(),
  }),
  useSearchParams: () => jest.fn(),
}));

const setup = () => {
  const utils = render(<Page />);
  const username = screen.getByLabelText("username");
  const password = screen.getByLabelText("password");
  const button = screen.getByText("Login");
  
  return { username, password, button, ...utils };
};

describe("Page", () => {
  it("input empty - 1", async () => {
    const { username, password, button} = setup();

    fireEvent.change(username, { target: { value: "username 1" } });
    fireEvent.change(password, { target: { value: "password" } });

    fireEvent.click(button);


    waitFor(() => {
      const sc = screen.getAllByText("Please check your username and password");
      console.log (sc);
      expect(screen.getAllByText("Please check your username and password")).toHaveLength(0);
    })

  });

  it("input empty - 2", async () => {
    const { username, password, button } = setup();

    act(() => {
      fireEvent.change(username, { target: { value: "username 1" } });
      fireEvent.change(password, { target: { value: "password 1" } });

    });

    act(() => {
      fireEvent.click(button);
    });

  waitFor(() => {
    const sc = screen.getAllByText("Please check your username and password");
    console.log (sc);
    expect(screen.getAllByText("Please check your username and password")).toHaveLength(1);
  })
  });
});