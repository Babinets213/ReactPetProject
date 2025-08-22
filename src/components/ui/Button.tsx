import { inter400, inter600 } from "@/styles/fonts";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  type: "primary" | "outline";
  size: "normal" | "large";
  className?: string;
};

function Button({ children, disabled, type, size, className }: ButtonProps) {
  const base = `px-4 py-2 rounded-sm cursor-pointer transition-all duration-300`;
  const typeStyles = {
    primary: `bg-[#2A354F] text-white disabled:bg-[#F5F5F5] disabled:text-[#C2C2C2] disabled:font-semibold hover:bg-[#A0F384] hover:text-[#2A354F] hover:font-semibold active:bg-[#96E57B] active:text-[#2A354F] active:font-semibold focus:font-semibold focus:bg-[#96E57B] focus:outline-none focus:ring focus:ring-offset-2 focus:ring-[#E1FFD5] focus:text-[#2A354F]`,
    outline: `bg-[#F4F5F6] border border-[#2A354F] text-[#2A354F] hover:bg-[#ECFDE6] hover:font-semibold active:bg-[#ECFDE6] active:font-semibold focus:font-semibold focus:outline-none focus:ring focus:ring-offset-2 focus:ring-[#E1FFD5] disabled:text-[#C2C2C2] disabled:border-[#F5F5F5] disabled:bg-[#F5F5F5]`,
  };

  const sizeStyles = {
    normal: `text-base ${inter400.className}`,
    large: `text-lg ${inter600.className}`,
  };

  const combinedClassName = `${base} ${typeStyles[type]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={combinedClassName} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
