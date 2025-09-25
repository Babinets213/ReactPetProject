"use client";

import { inter400, inter600, inter700 } from "@/styles/fonts";
import React, { useState } from "react";
// import Button from "./ui/Button";
import Tag from "./ui/Tag";
// import GeneralCheckMarkIcon from "./icons/GeneralCheckMarkIcon";
import { useLocale } from "next-intl";
import { ApiCourse, CartItem } from "@/types/courses";

type OpenedCourseCardProps = {
  course: ApiCourse;
  cart: CartItem[];
  onHandleAddCard: (course: CartItem) => void;
  onHandleDeleteCard: (courseId: string) => void;
};

export default function OpenedCourseCard({
  course,
  cart,
  onHandleAddCard,
  onHandleDeleteCard,
}: Omit<OpenedCourseCardProps, "locale">) {
  // const t = useTranslations("AllCoursesPage");
  const locale = useLocale();

  const { price, modules, complexity } = course;

  const title = course.title[locale] || Object.values(course.title)[0] || "";
  const description = course.shortDescription?.[locale] || "";

  const [isHovering, setIsHovering] = useState(false);

  const isInCart = cart.some((item) => item.id === course.id);

  const durationText =
    typeof course.duration === "object" && course.duration !== null
      ? course.duration[locale] || Object.values(course.duration)[0] || ""
      : course.duration || "";

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
        <span
          onClick={() => {
            if (!isInCart) {
              onHandleAddCard({ ...course, type: "course" });
            } else {
              onHandleDeleteCard(course.id);
            }
          }}
        >
          Buy
        </span>
        {/* 
        // TODO: fix button error
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
        </Button> */}
      </div>

      {/* Tag Container */}
      <div className="flex gap-[10px]">
        <Tag text={durationText} type="time" />
        <Tag text={complexity} type="complexity" />
      </div>

      {/* Category Button Container */}
      <div className="flex flex-wrap gap-3 py-3">
        {modules.map((module, i) => (
          <div key={i} className="rounded-sm bg-[#F3F3F3] px-3 py-2">
            <span
              className={`${inter400.className} leading-[120%] text-[#2A354F]`}
            >
              {module.title[locale] || Object.values(module.title)[0] || ""}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
