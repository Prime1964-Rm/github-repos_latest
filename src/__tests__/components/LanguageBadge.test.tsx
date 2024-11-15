import React from "react";
import { render, screen } from "@testing-library/react";
import LanguageBadge from "@/components/LanguageBadge";
import { LanguageColors } from "@/enums/LanguageColors";

describe("LanguageBadge component", () => {
  it("renders the language name", () => {
    render(<LanguageBadge language="JavaScript" />);
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
  });

  it("applies the correct background color for the language", () => {
    render(<LanguageBadge language="JavaScript" />);
    const colorDot = screen.getByRole("presentation");
    expect(colorDot).toHaveStyle({
      backgroundColor: LanguageColors["JavaScript"],
    });
  });
});
