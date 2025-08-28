"use client";

import { inter400, inter600 } from "@/styles/fonts";
import React, { ChangeEvent, useState } from "react";
import clsx from "clsx";
import SuccessIcon from "../icons/input-icons/SuccessIcon";
import ErrorIcon from "../icons/input-icons/ErrorIcon";
import EyeIcon from "../icons/input-icons/EyeIcon";

type InputProps = {
  error?: boolean;
  success?: boolean;
  labelText?: string;
  icon?: boolean;
  placeholder: string;
  value: string;
  inputType: "text" | "password";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  error = false,
  success = false,
  labelText,
  inputType = "text",
  icon,
  placeholder,
  value,
  onChange,
}: InputProps) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const getBorderColor = function () {
    if (error) return "border-[#F75555]";
    if (success) return "border-[#27AE60]";
    return "border-[#C2C2C2]";
  };

  const getHoverBorderColor = function () {
    if (error) return "hover:border-[#F75555]";
    if (success) return "hover:border-[#27AE60]";
    return "hover:border-[#2A354F]";
  };

  const renderIcon = function () {
    if (!icon) return null;

    if (success) return <SuccessIcon />;
    if (error) return <ErrorIcon />;
    if (inputType === "password") {
      return (
        <button
          type="button"
          onClick={() => setIsShowPassword(!isShowPassword)}
          className="flex items-center focus:outline-none"
          aria-label={isShowPassword ? "Hide password" : "Show password"}
        >
          <EyeIcon />
        </button>
      );
    }
  };

  return (
    <div className="flex flex-col gap-1">
      {labelText && (
        <label
          className={`${inter600.className} text-base leading-[120%] text-[#424242]`}
        >
          {labelText}
        </label>
      )}
      <div
        className={clsx(
          "flex items-center rounded-sm border px-4 py-3",
          getBorderColor(),
          getHoverBorderColor(),
          "focus-within:border-[#2A354F]",
        )}
      >
        <input
          value={value}
          onChange={onChange}
          type={
            inputType === "password"
              ? isShowPassword
                ? "text"
                : "password"
              : "text"
          }
          className={clsx(
            inter400.className,
            "w-full outline-none placeholder:text-base placeholder:leading-[120%] placeholder:text-[#757575]",
            icon && "pr-4",
            getHoverBorderColor(),
          )}
          placeholder={placeholder}
        />
        {icon && <span>{renderIcon()}</span>}
      </div>
    </div>
  );
}
