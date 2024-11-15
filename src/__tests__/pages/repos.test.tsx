import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../../pages/repos";
import Repos from "../../pages/repos";

jest.mock('next/link', () => {
  return ({ children, href }: any) => {
    return <a data-testid="explore" href={href}>{children}</a>;
  };
});

describe("Repo Page", () => {
  beforeEach(() => {
    render(<Repos />);
  });

  it("renders a heading", () => {
    const heading = screen.getByTestId("repos");
    expect(heading).toBeInTheDocument()
  });


});
