"use client";

import { inter400, inter600, inter700 } from "@/styles/fonts";
import React, { useState } from "react";
import Link from "next/link";
import Tag from "./ui/Tag";
import { useLocale } from "next-intl";
import { ApiCourse, CartItem } from "@/types/courses";

// Компонент іконки галочки для стану "Added"
const CheckMarkIcon = () => (
  <svg
    className="ml-2 h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M5 13l4 4L19 7"
      className="text-[#2A354F]"
    ></path>
  </svg>
);

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
  const locale = useLocale();

  const { price, modules, complexity } = course;
  const title = course.title[locale] || Object.values(course.title)[0] || "";
  const description = course.shortDescription?.[locale] || "";

  const [isHovering, setIsHovering] = useState(false);

  // Перевірка, чи курс вже у кошику
  const isInCart = cart.some((item) => item.id === course.id);

  const durationText =
    typeof course.duration === "object" && course.duration !== null
      ? course.duration[locale] || Object.values(course.duration)[0] || ""
      : course.duration || "";

  const handleCartAction = (e: React.MouseEvent) => {
    e.stopPropagation(); // ❌ блокує перехід
    e.preventDefault(); // ❌ блокує Link
    const itemToAdd: CartItem = { ...course, type: "course" };
    if (!isInCart) onHandleAddCard(itemToAdd);
    else onHandleDeleteCard(course.id);
  };

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`flex flex-col rounded-sm border bg-white px-10 pt-10 pb-5 shadow-sm transition-colors hover:shadow-md ${
        isInCart ? "border-2 border-[#10B981]" : "border-[#F1F1F3]"
      }`}
    >
      {/* Верхня частина */}
      <div className="mb-3 flex items-center justify-between gap-[50px]">
        <div className="flex-1">
          {/* Заголовок та опис ведуть на сторінку курсу */}
          <Link href={`/course`}>
            <h3
              className={`${inter700.className} mb-[10px] text-[23px] leading-[120%] ${
                isHovering ? "text-[#00AC8E]" : "text-[#2A354F]"
              }`}
            >
              {title}
            </h3>
          </Link>
          <p
            className={`${inter400.className} text-base leading-[120%] text-[#2A354F]`}
          >
            {description}
          </p>
        </div>

        {/* Ціна + кнопка */}
        <div className="flex items-center gap-4">
          <span
            className={`text-lg whitespace-nowrap uppercase ${inter600.className} leading-[120%] text-[#2A354F]`}
          >
            {price} CHF
          </span>

          <button
            onClick={handleCartAction}
            className={`flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-200 ease-in-out ${
              isInCart
                ? "border border-[#00AC8E] bg-[#E1FFD5] text-[#2A354F] hover:bg-[#D5F5C5]"
                : "border border-[#687083] bg-[#F7F7F7] text-[#2A354F] hover:bg-[#EDEDED]"
            }`}
          >
            {isInCart ? (
              <>
                Added <CheckMarkIcon />
              </>
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>
      </div>

      {/* Теги */}
      <div className="flex gap-[10px]">
        <Tag text={durationText} type="time" />
        <Tag text={complexity} type="complexity" />
      </div>

      {/* Модулі */}
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
