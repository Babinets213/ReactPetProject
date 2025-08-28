import React from "react";

type CheckMarkIconProps = {
  color?: string;
  isSuccess: boolean;
  isUntouched?: boolean;
};

export default function CheckMarkIcon({
  color,
  isSuccess,
  isUntouched = false,
}: CheckMarkIconProps) {
  if (isUntouched) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
      >
        <path
          d="M13.3337 4.5L6.00033 11.8333L2.66699 8.5"
          stroke="#8B8B8B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (isSuccess) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
      >
        <path
          d="M13.3337 4.5L6.00033 11.8333L2.66699 8.5"
          stroke={color || "#27AE60"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M12 4.5L4 12.5"
        stroke="#F75555"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4.5L12 12.5"
        stroke="#F75555"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
