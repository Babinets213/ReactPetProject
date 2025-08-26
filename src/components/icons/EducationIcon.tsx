import { EducationSectionIcons } from "@/types/education-section-icons";
import React from "react";

export default function EducationIcon({ type }: EducationSectionIcons) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
    >
      <circle
        cx="27"
        cy="27"
        r="27"
        fill={type === "hover" ? "white" : "#A0F384"}
        fillOpacity={type === "hover" ? "0.38" : "0.2"}
      />
      <path
        d="M19.5 38C17.0147 38 15 35.9853 15 33.5C15 31.0147 17.0147 29 19.5 29H25.5C27.9853 29 30 31.0147 30 33.5C30 35.9853 27.9853 38 25.5 38H19.5Z"
        fill="url(#paint0_linear_292_616)"
      />
      <path
        d="M19.5 27C17.0147 27 15 24.9853 15 22.5C15 20.0147 17.0147 18 19.5 18C21.9853 18 24 20.0147 24 22.5C24 24.9853 21.9853 27 19.5 27Z"
        fill="url(#paint1_linear_292_616)"
      />
      <path
        d="M30.5 27C28.0147 27 26 24.9853 26 22.5C26 20.0147 28.0147 18 30.5 18L34.5 18C36.9853 18 39 20.0147 39 22.5C39 24.9853 36.9853 27 34.5 27H30.5Z"
        fill="url(#paint2_linear_292_616)"
      />
      <path
        d="M35 38C32.7909 38 31 36.2091 31 34L31 33C31 30.7909 32.7909 29 35 29C37.2091 29 39 30.7909 39 33L39 34C39 36.2091 37.2091 38 35 38Z"
        fill="url(#paint3_linear_292_616)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_292_616"
          x1="6.5"
          y1="9"
          x2="39"
          y2="33.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#02C56A" />
          <stop offset="1" stopColor="#008CB4" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_292_616"
          x1="6.5"
          y1="9"
          x2="39"
          y2="33.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#02C56A" />
          <stop offset="1" stopColor="#008CB4" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_292_616"
          x1="6.5"
          y1="9"
          x2="39"
          y2="33.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#02C56A" />
          <stop offset="1" stopColor="#008CB4" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_292_616"
          x1="6.5"
          y1="9"
          x2="39"
          y2="33.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#02C56A" />
          <stop offset="1" stopColor="#008CB4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
