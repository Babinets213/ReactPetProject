import { inter400 } from "@/styles/fonts";

type DropdownItemProps = {
  children: React.ReactNode;
  onClick: () => void;
  hasBorder?: boolean;
  locale?: string;
};

export default function DropdownItem({
  children,
  onClick,
  hasBorder = false,
}: DropdownItemProps) {
  return (
    <button
      role="menuitem"
      tabIndex={0}
      onClick={onClick}
      className={`flex h-10 cursor-pointer flex-col items-start justify-center self-stretch px-3 ${
        hasBorder ? "border-y border-[#E9ECEF]" : ""
      }`}
    >
      <span
        className={`${inter400.className} block w-full overflow-hidden text-start text-[16px] leading-[120%] text-ellipsis whitespace-nowrap text-[#2A354F]`}
      >
        {children}
      </span>
    </button>
  );
}
