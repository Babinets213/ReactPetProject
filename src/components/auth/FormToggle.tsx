import { inter600 } from "@/styles/fonts";
import { useTranslations } from "next-intl";
import React from "react";

type FormToggleProps = {
  activeForm: "login" | "signup" | "forgot";
  onToggle: (form: "login" | "signup" | "forgot") => void;
};

export default function FormToggle({ activeForm, onToggle }: FormToggleProps) {
  const t = useTranslations("AuthPage");

  return (
    <div
      className={`flex h-12 rounded-full ${inter600.className} bg-[#2A354F] p-1 text-lg leading-[120%]`}
    >
      <button
        onClick={() => onToggle("login")}
        className={`flex-1 rounded-full ${activeForm === "login" ? `bg-[#E1FFD5] text-[#2A354F]` : "text-white"} `}
      >
        {t("login.label")}
      </button>
      <button
        onClick={() => onToggle("signup")}
        className={`flex-1 rounded-full ${activeForm === "signup" ? `bg-[#E1FFD5] text-[#2A354F]` : "text-white"} `}
      >
        {t("signup.label")}
      </button>
    </div>
  );
}
