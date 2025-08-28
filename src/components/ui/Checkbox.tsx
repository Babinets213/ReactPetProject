import React from "react";
import clsx from "clsx";

type CheckboxStatus = "active" | "inactive" | "indeterminate";

type StatusStyles = {
  [key in CheckboxStatus]: {
    disabled: string;
    enabled: string;
  };
};

const statusStyles: StatusStyles = {
  inactive: {
    disabled: "bg-white border-[#C2C2C2] opacity-60",
    enabled: "opacity-100 border-[#C2C2C2] hover:border-[#96E57B]",
  },
  active: {
    disabled: "bg-[#9E9E9E] border-[#9E9E9E]",
    enabled:
      "bg-[#A0F384] border-[#A0F384] hover:bg-[#96E57B] hover:border-[#96E57B]",
  },
  indeterminate: {
    disabled: "bg-[#9E9E9E] border-[#9E9E9E]",
    enabled:
      "bg-white border-[#C2C2C2] hover:bg-[#96E57B] hover:border-[#96E57B]",
  },
};

type CheckboxProps = {
  status: CheckboxStatus;
  onChange: () => void;
  disabled?: boolean;
  label?: string;
  showLabel?: boolean;
};

export default function Checkbox({
  status,
  disabled,
  onChange,
  label,
  showLabel,
}: CheckboxProps) {
  const isChecked = status === "active";
  const isIndeterminate = status === "indeterminate";
  const isInactive = status === "inactive";

  const focusRingColor = clsx({
    "peer-focus-visible:ring-[#E1FFD5] peer-focus-visible:border-[#96E57B]":
      isInactive,
    "peer-focus-visible:ring-[#96E57B] peer-focus-visible:border-[#2A354F] peer-focus-visible:bg-[#2A354F] ":
      isChecked,
    "peer-focus-visible:ring-[#C2C2C2]": isIndeterminate,
  });

  const baseFocus = "peer-focus-visible:outline-none peer-focus-visible:ring-2";
  return (
    <label className={`inline-flex items-center gap-2 select-none`}>
      <input
        type="checkbox"
        className="peer sr-only"
        checked={isChecked}
        onChange={disabled ? undefined : onChange}
        disabled={disabled}
      />

      <span
        className={clsx(
          "flex h-5 w-5 items-center justify-center rounded border transition-colors duration-150",
          baseFocus,
          !disabled && focusRingColor,
          disabled
            ? statusStyles[status].disabled
            : statusStyles[status].enabled,
        )}
      >
        {status === "active" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M16.6663 5L7.49967 14.1667L3.33301 10"
              stroke="white"
              strokeLinecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}

        {status === "indeterminate" && (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6">
              <rect width="20" height="20" rx="4" fill="#9E9E9E" />
              <path
                d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z"
                stroke="white"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        )}
      </span>
      {showLabel && (
        <span className="text-sm leading-[120%] text-[#2A354F] select-text">
          {label}
        </span>
      )}
    </label>
  );
}
