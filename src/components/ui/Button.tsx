import { inter400, inter600 } from "@/styles/fonts";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  type: "primary" | "outline";
  size: "normal" | "large";
};

function Button({ children, disabled, type, size }: ButtonProps) {
  const base = `px-4 py-2 rounded-sm`;

  const typeStyles = {
    primary: `bg-[#2A354F] text-white`,
    outline: "",
  };

  const sizeStyles = {
    normal: `text-base ${inter400.className}`,
    large: `text-lg ${inter600.className}`,
  };

  const combinedClassName = `${base} ${typeStyles[type]} ${sizeStyles[size]}`;

  return (
    <button className={combinedClassName} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
