"use client";
import React, { useState } from "react";
import { inter400, inter600 } from "@/styles/fonts";
import Button from "./ui/Button";
import ShoppingBagIcon from "./icons/ShoppingBagIcon";
import GeneralCheckMarkIcon from "./icons/GeneralCheckMarkIcon";
import { ApiCourseModule, CartItem } from "@/types/courses";
import { useLocale } from "next-intl";

type SmallCourseCardProps = {
  course: ApiCourseModule;
  onHandleAddCard: (course: CartItem) => void;
  onHandleDeleteCard: (courseId: string) => void;
  cart: CartItem[];
  className?: string;
};

export default function SmallCourseCard({
  course,
  onHandleAddCard,
  onHandleDeleteCard,
  cart,
  className,
}: SmallCourseCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const locale = useLocale();

  const isInCart = cart.some((item) => item.id === course.id.toString());

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`flex flex-col gap-2 rounded-sm border px-6 py-5 transition-colors ${
        isInCart ? "border-2 border-[#E1FFD5]" : "border-[#F1F1F3]"
      } ${className ?? ""}`}
    >
      {/* Title + Button в один ряд */}
      <div className="flex items-center justify-between">
        <span
          className={`${inter600.className} ${
            isHovering ? "text-[#00AC8E]" : "text-[#2A354F]"
          } text-lg leading-snug`}
        >
          {course.title[locale] || Object.values(course.title)[0] || ""}
        </span>

        <Button
          className={`mt-[2px] ${isHovering ? "bg-[#ECFDE6]! font-semibold" : ""} ${
            isInCart ? "bg-[#ECFDE6]!" : ""
          } self-center whitespace-nowrap`}
          btnType="outline"
          size="large"
          content="icon"
          icon={isInCart ? <GeneralCheckMarkIcon /> : <ShoppingBagIcon />}
          onClick={() =>
            isInCart
              ? onHandleDeleteCard(course.id.toString())
              : onHandleAddCard({ ...course, type: "courseModule" })
          }
        />
      </div>

      {/* Price */}
      <span
        className={`${inter400.className} text-sm leading-snug text-[#2A354F]`}
      >
        {course.price} CHF
      </span>
    </div>
  );
}
