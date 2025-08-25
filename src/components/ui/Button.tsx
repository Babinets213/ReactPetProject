import { inter400, inter600 } from "@/styles/fonts";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  content: "text" | "icon" | "text_icon";
  type: "primary" | "outline" | "text_btn";
  size: "normal" | "large";
  className?: string;
};

function Button({
  children,
  icon,
  disabled,
  type,
  size,
  content,
  className,
}: ButtonProps) {
  const base = `inline-flex justify-center items-center px-4 py-2 rounded-sm cursor-pointer transition-all duration-300`;

  const typeStyles = {
    primary: `bg-[#2A354F] text-white disabled:bg-[#F5F5F5] disabled:text-[#C2C2C2] disabled:font-semibold hover:bg-[#A0F384] hover:text-[#2A354F] hover:font-semibold active:bg-[#96E57B] active:text-[#2A354F] active:font-semibold focus:font-semibold focus:bg-[#96E57B] focus:outline-none focus:ring focus:ring-offset-2 focus:ring-[#E1FFD5] focus:text-[#2A354F]`,
    outline: `bg-[#F4F5F6] border border-[#2A354F] text-[#2A354F] hover:bg-[#ECFDE6] hover:font-semibold active:bg-[#ECFDE6] active:font-semibold focus:font-semibold focus:outline-none focus:ring focus:ring-offset-2 focus:ring-[#E1FFD5] disabled:text-[#C2C2C2] disabled:border-[#F5F5F5] disabled:bg-[#F5F5F5]`,
    text_btn: "",
  };

  const sizeStyles = {
    normal: `text-base ${inter400.className}`,
    large: `text-lg ${inter600.className}`,
  };

  const contentStyles = {
    text_icon: `gap-[4px]`,
    text: "",
    icon: "",
  };

  const combinedClassName = `${base} ${typeStyles[type]} ${sizeStyles[size]} ${contentStyles[content]} ${className}`;

  return (
    <button className={combinedClassName} disabled={disabled}>
      {content === "icon" && icon}
      {content === "text" && children}
      {content === "text_icon" && (
        <>
          {children}
          {icon}
        </>
      )}
    </button>
  );
}

export default Button;
