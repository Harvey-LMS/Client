import {fireEvent, render, screen, waitFor} from "@testing-library/react"
import Page from "../src/app/(auth)/register/page"
import "@testing-library/jest-dom";

import { act } from '@testing-library/react';

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
  const username = screen.getByLabelText("Tên đăng nhập");
  return { username, ...utils };
};


describe("Page", () => {
  it("renders a heading", async () => {
    const { username } = setup();
    fireEvent.click(username);
    fireEvent.change(username, { target: { value: "" } });
    fireEvent.blur(username);
    expect(await screen.findByText("Tên đăng nhập không được để trống")).toBeInTheDocument();
  })

  it("username available", async () => {
    const { username } = setup();
    await act (async () => {
      fireEvent.change(username, { target: { value: "lon922" } });
      fireEvent.blur(username);
      const fe = await fetch("https://66656af6d122c2868e409b34.mockapi.io/user")
    }
  )
    await waitFor (
      () => {
      expect(screen.getByText("Tên đăng nhập đã tồn tại")).toBeInTheDocument();
    }
  )
  }

)

  it("username Complete", async () => {
    const { username } = setup();
    await act(async () => {
      fireEvent.change(username, { target: { value: "asdasdasdas" } });
      fireEvent.blur(username);
    }
    )
    await waitFor(
      () => {
        expect(screen.queryAllByText("Tên đăng nhập đã tồn tại")).toHaveLength(0);
        expect(screen.queryAllByText("Tên đăng nhập không được để trống")).toHaveLength(0);
      }
    )
  }
)

  it("username Complete 2", async () => {
    const { username } = setup();
    await act(async () => {
      fireEvent.change(username, { target: { value: "PhungMinhMinh" } });
      fireEvent.blur(username);
    }
    )
    await waitFor(
      () => {
        expect(screen.queryAllByText("Tên đăng nhập đã tồn tại")).toHaveLength(0);
        expect(screen.queryAllByText("Tên đăng nhập không được để trống")).toHaveLength(0);
      }
    )
  }
  )
}
)