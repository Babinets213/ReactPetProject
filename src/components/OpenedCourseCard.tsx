"use client";

import { inter400, inter600, inter700 } from "@/styles/fonts";
import React, { useState } from "react";
// import Button from "./ui/Button"; // Компонент Button тут не використовується
import Tag from "./ui/Tag";
// import GeneralCheckMarkIcon from "./icons/GeneralCheckMarkIcon";
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
      className="text-[#2A354F]" // Колір галочки (темний, як текст)
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
  // const t = useTranslations("AllCoursesPage");
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

  // Обробник натискання кнопки
  const handleCartAction = () => {
    const itemToAdd: CartItem = {
      ...course,
      type: "course",
      // ... інші необхідні поля
    };

    if (!isInCart) {
      // Додати до кошика
      onHandleAddCard(itemToAdd);
    } else {
      // Видалити з кошика (якщо це бажана поведінка для кнопки "Added")
      onHandleDeleteCard(course.id);
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`flex flex-col rounded-sm border ${isInCart ? "border-2 border-[#E1FFD5]" : "border-[#F1F1F3]"} px-10 pt-10 pb-5`}
    >
      {/* Title and description */}
      <div className="mb-3 flex items-center justify-between gap-[50px]">
        <div className="flex-1">
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

        {/* Price and Button Container */}
        <div className="flex items-center gap-4">
          {/* Ціна */}
          <span
            className={`text-lg whitespace-nowrap uppercase ${inter600.className} leading-[120%] text-[#2A354F]`}
          >
            {price} CHF
          </span>

          {/* Кнопка "Add to Cart" / "Added" */}
          <button
            onClick={handleCartAction}
            // Tailwind класи для стилю
            className={`flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-200 ease-in-out ${
              isInCart
                ? "border border-[#00AC8E] bg-[#E1FFD5] text-[#2A354F] hover:bg-[#D5F5C5]" // Стиль "Added" (зелений)
                : "border border-[#687083] bg-[#F7F7F7] text-[#2A354F] hover:bg-[#EDEDED]" // Стиль "Add to Cart" (сірий)
            } `}
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
