import { EducationSectionIcons } from "@/types/education-section-icons";
import React from "react";

export default function LineTenItemsIcon({ type }: EducationSectionIcons) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="392"
      viewBox="0 0 33 392"
      fill="none"
    >
      <path
        d="M33 391.473C33 391.749 32.7761 391.973 32.5 391.973H10C4.47715 391.973 0 387.496 0 381.973V0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5V380.973C1 386.496 5.47715 390.973 11 390.973H32.5C32.7761 390.973 33 391.197 33 391.473Z"
        fill={`${type === "default" ? "#DBFAD0" : "#FFF"}`}
      />
    </svg>
  );
}
