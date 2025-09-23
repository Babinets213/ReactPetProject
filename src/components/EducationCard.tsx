"use client";

import React, { useState } from "react";
import EducationIcon from "./icons/EducationIcon";
import { inter400, poppins700 } from "@/styles/fonts";
import Button from "./ui/Button";
import { lineIcons } from "./icons";
import { useRouter } from "@/i18n/navigation";

type EducationCard = {
  title: string;
  description: string;
  buttonText: string;
  items: string[];
};

export default function EducationCard({
  title,
  description,
  buttonText,
  items,
}: EducationCard) {
  const [isHovering, setIsHovering] = useState(false);
  const router = useRouter();
  let LineIcon;

  switch (items.length) {
    case 6:
      LineIcon = lineIcons.lineSixItems;
      break;
    case 8:
      LineIcon = lineIcons.lineEightItems;
      break;
    case 10:
      LineIcon = lineIcons.lineTenItems;
      break;
  }

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`${isHovering ? "bg-education-hover shadow-[0_0_0_4px_white]" : "bg-white shadow-none"} flex flex-col justify-center rounded-sm transition-all duration-300`}
    >
      <div
        className={`flex items-center gap-6 border-b ${isHovering ? "border-white" : "border-[#DBFAD0]"} px-12 py-8`}
      >
        <EducationIcon type={isHovering ? "hover" : "default"} />
        <h3
          className={`text-[34px] leading-[120%] text-[#2A354F] ${poppins700.className}`}
        >
          {title.split(" ")[0]}
          <br />
          {title.split(" ").slice(1).join(" ")}
        </h3>
      </div>

      <div className="relative mt-[25px] ml-12 h-full">
        <div className="absolute -top-[25px] bottom-0 left-0">
          {LineIcon && <LineIcon type={isHovering ? "hover" : "default"} />}
        </div>

        <ul className="space-y-2 pr-16">
          {items.map((item, i) => (
            <li key={i} className="relative flex items-center pl-6">
              {i !== items.length - 1 && (
                <div
                  className={`absolute top-1/2 left-0 h-px w-8 -translate-y-1/2 ${isHovering ? "bg-white" : "bg-[#DBFAD0]"}`}
                ></div>
              )}
              <span
                className={`z-1 inline-block rounded-[10px] ${isHovering ? "bg-white" : "bg-[#ECFDE6]"} px-[14px] py-[6px] text-base leading-[120%] font-semibold text-[#2A354F]`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6 pt-7 pb-10 text-center lg:px-10 xl:px-18 2xl:px-22">
        <span
          className={`${inter400.className} text-sm/[150%] text-[#2A354F] opacity-87`}
        >
          {description}
        </span>
        <div>
          <Button
            className={isHovering ? "bg-[#ECFDE6]! font-semibold" : ""}
            btnType="outline"
            size="large"
            content="text"
            onClick={() => router.push("/course")}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
