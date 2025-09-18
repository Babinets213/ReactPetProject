"use client";

import React, { useState } from "react";
import { inter400 } from "@/styles/fonts";
import clsx from "clsx";
import ChevronDownIcon from "./icons/ChevronDownIcon";

const languagesOptions = [
  { value: "en", label: "English" },
  { value: "de", label: "Deutsch" },
  { value: "fr", label: "Français" },
  { value: "pl", label: "Polski" },
];

interface LanguagesSelectProps {
  value?: string[];
  onChange?: (languages: string[]) => void;
}

export default function LanguagesSelect({
  value = [],
  onChange,
}: LanguagesSelectProps) {
  const [selected, setSelected] = useState(value.join(","));

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setSelected(newValue);
    if (onChange) {
      onChange(newValue ? [newValue] : []); // For now, supporting single selection
    }
  };

  return (
    <div
      className={clsx(
        "relative flex items-center rounded-sm border px-4 py-3",
        "border-[#C2C2C2] bg-white focus-within:border-[#2A354F] hover:border-[#2A354F]",
      )}
    >
      <select
        value={selected}
        onChange={handleChange}
        className={clsx(
          inter400.className,
          "w-full appearance-none bg-transparent outline-none",
          "text-base leading-[120%]",
          selected === "" ? "text-[#757575]" : "text-[#424242]",
        )}
      >
        <option value="" disabled>
          Choose a language
        </option>
        {languagesOptions.map((val) => (
          <option key={val.value} value={val.value}>
            {val.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon />
    </div>
  );
}
