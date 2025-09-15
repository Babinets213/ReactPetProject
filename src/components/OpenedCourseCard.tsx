"use client";

import { inter400, inter600, inter700 } from "@/styles/fonts";
import React, { useState } from "react";
import Button from "./ui/Button";
import Tag from "./ui/Tag";
import GeneralCheckMarkIcon from "./icons/GeneralCheckMarkIcon";
import { useTranslations } from "next-intl";
import { CartItem, Course } from "@/types/courses";

type OpenedCourseCardProps = {
  course: Course;
  cart: CartItem[];
  onHandleAddCard: (course: Course) => void;
  onHandleDeleteCard: (courseId: number) => void;
};

export default function OpenedCourseCard({
  course,
  cart,
  onHandleAddCard,
  onHandleDeleteCard,
}: OpenedCourseCardProps) {
  const t = useTranslations("AllCoursesPage");

  const { title, description, price, categories, tags } = course;

  const [isHovering, setIsHovering] = useState(false);

  const isInCart = cart.some((item) => item.id === course.id);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`flex flex-col rounded-sm border ${isInCart ? "border-2 border-[#E1FFD5]" : "border-[#F1F1F3]"} px-10 pt-10 pb-5`}
    >
      {/* Title and description */}
      <div className="mb-3 flex items-center gap-[50px]">
        <div>
          <h3
            className={`${inter700.className} mb-[10px] text-[23px] leading-[120%] ${isHovering ? "text-[#00AC8E]" : "text-[#2A354F]"}`}
          >
            {title}
          </h3>
          <p
            className={`${inter400.className} text-base leading-[120%] text-[#2A354F]`}
          >
            {description}
          </p>
        </div>

        <span
          className={`text-lg whitespace-nowrap uppercase ${inter600.className} leading-[120%] text-[#2A354F]`}
        >
          {price} chf
        </span>

        <Button
          className={`${isHovering || isInCart ? "bg-[#ECFDE6]! font-semibold" : ""} whitespace-nowrap`}
          size="large"
          content={isInCart ? "text_icon" : "text"}
          icon={<GeneralCheckMarkIcon />}
          btnType="outline"
          onClick={() => {
            if (!isInCart) {
              onHandleAddCard(course);
            } else {
              onHandleDeleteCard(course.id);
            }
          }}
        >
          {isInCart ? t("course.btnText.after") : t("course.btnText.before")}
        </Button>
      </div>

      {/* Tag Container */}
      <div className="flex gap-[10px]">
        <Tag text={tags[0]} type="time" />
        <Tag text={tags[1]} type="complexity" />
      </div>

      {/* Category Button Container */}
      <div className="flex flex-wrap gap-3 py-3">
        {categories.map((category, i) => (
          <div key={i} className="rounded-sm bg-[#F3F3F3] px-3 py-2">
            <span
              className={`${inter400.className} leading-[120%] text-[#2A354F]`}
            >
              {category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
