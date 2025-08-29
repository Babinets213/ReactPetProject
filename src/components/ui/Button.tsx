import { inter400, inter600 } from "@/styles/fonts";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  to?: string;
  content: "text" | "icon" | "text_icon";
  btnType: "primary" | "outline" | "text_btn";
  size: "normal" | "large";
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

function Button({
  children,
  icon,
  iconPosition,
  disabled,
  to,
  btnType,
  type,
  size,
  content,
  className,
}: ButtonProps) {
  const base = `inline-flex justify-center items-center px-4 py-2 rounded-sm cursor-pointer transition-all duration-300`;

  const btnTypeStyles = {
    primary: `bg-[#2A354F] text-white disabled:bg-[#F5F5F5] disabled:text-[#C2C2C2] disabled:font-semibold hover:bg-[#A0F384] hover:text-[#2A354F] hover:font-semibold active:bg-[#96E57B] active:text-[#2A354F] active:font-semibold focus:font-semibold focus:bg-[#96E57B] focus:outline-none focus:ring focus:ring-offset-2 focus:ring-[#E1FFD5] focus:text-[#2A354F]`,
    outline: `bg-[#F4F5F6] border border-[#2A354F] text-[#2A354F] hover:bg-[#ECFDE6] hover:font-semibold active:bg-[#ECFDE6] active:font-semibold focus:font-semibold focus:outline-none focus:ring focus:ring-offset-2 focus:ring-[#E1FFD5] disabled:text-[#C2C2C2] disabled:border-[#F5F5F5] disabled:bg-[#F5F5F5]`,
    text_btn:
      "text-[#2A354F] hover:text-[#A0F384] active:text-[#96E57B] focus:font-semibold focus:outline-none focus:ring focus:ring-offset-2 focus:ring-[#E1FFD5] focus:text-[#96E57B] disabled:text-[#C2C2C2]",
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

  const combinedClassName = `${base} ${btnTypeStyles[btnType]} ${sizeStyles[size]} ${contentStyles[content]} ${className}`;

  if (to) {
    return (
      <Link className={combinedClassName} href={to}>
        {content === "icon" && icon}
        {content === "text" && children}
        {content === "text_icon" && iconPosition === "right" && (
          <>
            {children}
            {icon}
          </>
        )}
        {content === "text_icon" && iconPosition === "left" && (
          <>
            {icon}
            {children}
          </>
        )}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClassName} disabled={disabled}>
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
