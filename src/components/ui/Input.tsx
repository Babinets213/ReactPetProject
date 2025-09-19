"use client";

import { inter400, inter600 } from "@/styles/fonts";
import React, { ChangeEvent, ReactNode, useRef, useState } from "react";
import clsx from "clsx";
import SuccessIcon from "../icons/input-icons/SuccessIcon";
import ErrorIcon from "../icons/input-icons/ErrorIcon";
import EyeIcon from "../icons/input-icons/EyeIcon";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import CalendarIcon from "../icons/profile/CalendarIcon";

type InputProps = {
  id?: string;
  error?: FieldError | undefined;
  success?: boolean;
  labelText?: string;
  icon?: boolean;
  iconComponent?: ReactNode;
  placeholder: string;
  value?: string;
  inputType: "text" | "password" | "date";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
  isTextarea?: boolean;
  className?: string;
  disabled?: boolean;
};

export default function Input({
  id,
  error,
  success = false,
  labelText,
  inputType = "text",
  icon,
  iconComponent,
  placeholder,
  value,
  onChange,
  register,
  isTextarea,
  className,
  disabled = false,
}: InputProps) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const getBorderColor = function () {
    if (error?.message) return "border-[#F75555] focus-within:border-[#F75555]";
    if (success) return "border-[#27AE60] focus-within:border-[#27AE60]";
    return "border-[#C2C2C2]";
  };

  const getHoverBorderColor = function () {
    if (error?.message) return "hover:border-[#F75555]";
    if (success) return "hover:border-[#27AE60]";
    return "hover:border-[#2A354F]";
  };

  const openDatePicker = () => {
    if (inputRef.current && inputRef.current.showPicker) {
      inputRef.current.showPicker();
    } else if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const renderIcon = function () {
    if (!icon) return null;

    if (success) return <SuccessIcon />;
    if (error) return <ErrorIcon />;
    if (iconComponent) return <>{iconComponent}</>;
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

    if (inputType === "date") {
      return (
        <span className="text-[#687083]">
          <CalendarIcon />
        </span>
      );
    }

    return null;
  };

  const splitLabel = labelText?.split("*") ?? [];
  const [labelMain, labelRest] = splitLabel;

  return (
    <div className="flex flex-col gap-1">
      {labelText && (
        <label
          className={`${inter600.className} text-base leading-[120%] text-[#424242]`}
        >
          {labelMain}
          {labelRest !== undefined && <span className="text-[#F75555]">*</span>}
        </label>
      )}
      <div
        className={clsx(
          "relative flex items-center rounded-sm border px-4 py-3",
          getBorderColor(),
          getHoverBorderColor(),
          "focus-within:border-[#2A354F]",
          isTextarea ? "items-start" : "items-center",
          disabled && "bg-gray-100 opacity-60",
          className,
        )}
      >
        {isTextarea ? (
          <textarea
            id={id}
            ref={textareaRef}
            {...register}
            placeholder={placeholder}
            rows={4}
            disabled={disabled}
            className={clsx(
              inter400.className,
              "max-h-[57px] w-full resize-none outline-none placeholder:text-base placeholder:leading-[120%] placeholder:text-[#757575]",
              getHoverBorderColor(),
              disabled && "cursor-not-allowed bg-gray-100",
            )}
          />
        ) : (
          <input
            id={id}
            ref={inputRef}
            value={value}
            onChange={onChange}
            disabled={disabled}
            type={
              inputType === "password"
                ? isShowPassword
                  ? "text"
                  : "password"
                : inputType
            }
            {...register}
            className={clsx(
              inter400.className,
              "w-full outline-none placeholder:text-base placeholder:leading-[120%] placeholder:text-[#757575]",
              icon && "pr-10",
              getHoverBorderColor(),
              disabled && "cursor-not-allowed bg-gray-100",
              inputType === "date" && "custom-date-input appearance-none",
            )}
            placeholder={inputType !== "date" ? placeholder : undefined}
          />
        )}

        {icon && (
          <>
            {inputType === "date" ? (
              <button
                type="button"
                onClick={openDatePicker}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-[#687083] focus:outline-none"
                aria-label="Open calendar"
              >
                <CalendarIcon />
              </button>
            ) : (
              renderIcon()
            )}
          </>
        )}
      </div>
      {error && "message" in error && (
        <span
          className={`${inter400.className} text-base leading-[120%] text-[#F75555]`}
        >
          {error.message}
        </span>
      )}
    </div>
  );
}
