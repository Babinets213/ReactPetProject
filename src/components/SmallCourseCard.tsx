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
};

export default function SmallCourseCard({
  course,
  onHandleAddCard,
  onHandleDeleteCard,
  cart,
}: SmallCourseCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const locale = useLocale();

  const isInCart = cart.some((item) => item.id === course.id.toString());

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`flex justify-between rounded-sm border ${isInCart ? "border-2 border-[#E1FFD5]" : "border-[#F1F1F3]"} px-10 py-5`}
      key={course.id}
    >
      <div className="flex flex-col">
        <span
          className={`${inter600.className} ${isHovering ? "text-[#00AC8E]" : "text-[#2A354F]"} text-lg leading-[120%]`}
        >
          {course.title[locale] || Object.values(course.title)[0] || ""}
        </span>
        <span
          className={`${inter400.className} text-sm leading-[120%] text-[#2A354F]`}
        >
          {course.price} CHF
        </span>
      </div>
      <div>
        <Button
          className={`${isHovering ? "bg-[#ECFDE6]! font-semibold" : ""} ${isInCart && "bg-[#ECFDE6]!"} whitespace-nowrap`}
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
    </div>
  );
}
