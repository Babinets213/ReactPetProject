import { inter400 } from "@/styles/fonts";
import React from "react";
import UserIcon from "../icons/courses/UserIcon";
import TimerIcon from "../icons/courses/TimerIcon";

type SubContainer = {
  type: "time" | "complexity";
  text: string;
};

export default function Tag({ type, text }: SubContainer) {
  if (!type) return null;

  if (type === "time") {
    return (
      <div className="flex gap-[10px] rounded-lg border border-[#F1F1F3] px-4 py-[10px]">
        <TimerIcon />
        <span
          className={`${inter400.className} text-lg leading-[120%] text-[#2A354F]`}
        >
          {text}
        </span>
      </div>
    );
  }

  if (type === "complexity") {
    return (
      <div className="flex gap-[10px] rounded-lg border border-[#F1F1F3] px-4 py-[10px]">
        <UserIcon />
        <span
          className={`${inter400.className} text-lg leading-[120%] text-[#2A354F]`}
        >
          {text}
        </span>
      </div>
    );
  }
}
