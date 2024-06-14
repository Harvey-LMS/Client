import {
  render,
  screen,
} from "@testing-library/react";
import Page from "@/components/container/test";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByText("adu");

    expect(heading).toBeInTheDocument();
  });
});

