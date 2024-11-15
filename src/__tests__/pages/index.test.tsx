import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../../pages";

jest.mock('next/link', () => {
  return ({ children, href }: any) => {
    return <a data-testid="explore" href={href}>{children}</a>;
  };
});

describe("Home Component", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders a heading", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Welcome to Git Repos");
  });

  it("renders an Explore link", () => {
    const link = screen.getByRole("link", { name: /Explore/i });
    expect(link).toHaveAttribute("href", "/repos");
  });
});
