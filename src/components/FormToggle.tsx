import { inter600 } from "@/styles/fonts";
import React from "react";

type FormToggleProps = {
  activeForm: "login" | "signup";
  onToggle: (form: "login" | "signup") => void;
};

export default function FormToggle({ activeForm, onToggle }: FormToggleProps) {
  return (
    <div
      className={`flex h-12 rounded-full ${inter600.className} bg-[#2A354F] p-1 text-lg leading-[120%]`}
    >
      <button
        onClick={() => onToggle("login")}
        className={`flex-1 rounded-full ${activeForm === "login" ? `bg-[#E1FFD5] text-[#2A354F]` : "text-white"} `}
      >
        Login
      </button>
      <button
        onClick={() => onToggle("signup")}
        className={`flex-1 rounded-full ${activeForm === "signup" ? `bg-[#E1FFD5] text-[#2A354F]` : "text-white"} `}
      >
        Sign Up
      </button>
    </div>
  );
}
