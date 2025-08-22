import { EducationSectionIcons } from "@/types/education-section-icons";
import React from "react";

export default function LineSixItemsIcon({ type }: EducationSectionIcons) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="270"
      viewBox="0 0 33 270"
      fill="none"
    >
      <path
        d="M33 233.644C33 233.92 32.7761 234.144 32.5 234.144H10C4.47715 234.144 0 229.666 0 224.144V0.500003C0 0.223861 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5V223.144C1 228.666 5.47715 233.144 11 233.144H32.5C32.7761 233.144 33 233.367 33 233.644Z"
        fill={`${type === "default" ? "#DBFAD0" : "#FFF"}`}
      />
    </svg>
  );
}
