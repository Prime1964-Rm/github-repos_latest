import { LanguageColors } from "@/enums/LanguageColors";
import React from "react";

interface LanguageBadgeProps {
  language: keyof typeof LanguageColors;
}

const LanguageBadge: React.FC<LanguageBadgeProps> = ({ language }) => {
  return (
    <span className="flex border-2 w-fit my-2 text-sm p-2 border-[#3d444d] rounded-lg items-center">
      <div
        role="presentation"
        style={{ backgroundColor: LanguageColors[language] }}
        className="w-4 h-4 rounded-full"
      ></div>
      <span className="ml-2">{language}</span>
    </span>
  );
};

export default LanguageBadge;
