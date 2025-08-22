import { EducationSectionIcons } from "@/types/education-section-icons";
import React from "react";

export default function LineEightItemsIcon({ type }: EducationSectionIcons) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="335"
      viewBox="0 0 33 381"
      fill="none"
    >
      <path
        d="M33 380.377C33 380.653 32.7761 380.877 32.5 380.877H10C4.47715 380.877 0 376.4 0 370.877V0.49999C0 0.223847 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5V369.877C1 375.4 5.47715 379.877 11 379.877H32.5C32.7761 379.877 33 380.101 33 380.377Z"
        fill={`${type === "default" ? "#DBFAD0" : "#FFF"}`}
      />
    </svg>
  );
}
