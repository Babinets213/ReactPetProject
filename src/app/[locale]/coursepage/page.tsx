"use client";

import React, { useState } from "react";
import Image from "next/image";

import Footer from "@/components/Footer";
import Header from "@/components/HeaderBlack";

// Фірмові кольори
const BRAND_GREEN = "#00AC8E";
const BRAND_DARK_BLUE = "#333D55"; // Темно-синій для активних кнопок та тексту
const GREY_BG_BORDER = "#F4F5F6"; // З вашого стилю: var(--Grey-BG, #F4F5F6)

export default function LearningPage() {
  const [collapsed, setCollapsed] = useState(false);

  // ЗМІНА ТУТ: Зменшено py-6 на py-2, щоб зменшити вертикальні відступи між елементами.
  const listItemClasses =
    "flex items-center gap-3 py-2 px-1 rounded-md transition-colors hover:bg-[rgba(0,172,142,0.1)] cursor-pointer";

  // ЗМІНА ТУТ: h-11 w-11 відповідає розміру 44px
  const iconWrapperClasses =
    "flex h-11 w-11 items-center justify-center rounded-md text-white flex-shrink-0";

  const lessons = [
    {
      id: 1,
      title: "Der Hypothekarmarkt",
      duration: "15 min",
      completed: true,
      showDownload: true,
    },
    {
      id: 2,
      title: "Verkehrswertschätzung",
      duration: "5 min",
      completed: false,
    },
    {
      id: 3,
      title: "Regulatorische Vorgaben",
      duration: "2 min",
      completed: false,
    },
    {
      id: 4,
      title: "Trag­barkeits­berechnung",
      duration: "11 min",
      completed: false,
    },
    {
      id: 5,
      title: "Refinanzierungsgeschäft",
      duration: "9 min",
      completed: false,
    },
    {
      id: 6,
      title: "Neufinanzierungsgeschäft",
      duration: "11 min",
      completed: false,
    },
    {
      id: 7,
      title: "Unterlagen für Hypothek­ar­finanzierung",
      duration: "7 min",
      completed: false,
    },
    {
      id: 8,
      title: "Plattform «Chamäleon – H»",
      duration: "3 min",
      completed: false,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main Content: Збільшений верхній (pt-[120px]) та нижній відступ (pb-12) */}
      <main className="flex flex-1 gap-6 bg-gray-100 px-6 pt-[120px] pb-12">
        {/* Sidebar */}
        <aside
          className={`bg-white transition-all duration-300 ${
            collapsed ? "w-[80px] p-2" : "w-[400px] p-4" // Зменшено padding при згортанні
          }`}
          style={{
            borderRadius: "4px",
            boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.12)",
            height: "602px", // ФІКСОВАНА ВИСОТА
            overflowY: "auto", // Додано прокрутку
            flexShrink: 0, // Запобігає стисненню
          }}
        >
          {/* Header Section */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            {!collapsed && (
              // Змінив ml-[-8px] на ml-[-4px] для кращого центрування і додав ms-[-4px]
              <h2 className="flex items-center gap-2 font-semibold text-gray-900">
                <Image
                  src="/book_icon.png"
                  alt="Book icon"
                  width={44}
                  height={44}
                  className="ml-[5px] flex-shrink-0"
                />
                <span className="-ml-[4px]">Assessment Block</span>
              </h2>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              // Змінив ml-auto на ml-0 коли не collapsed, і додав mr-[-4px]
              className={`flex-shrink-0 cursor-pointer text-gray-400 ${!collapsed ? "ml-auto" : "ml-0"}`}
            >
              <Image
                src={collapsed ? "/arrow_right.png" : "/arrow_left.png"}
                alt="Collapse icon"
                width={44}
                height={44}
              />
            </button>
          </div>

          {/* Lessons List */}
          <nav className="mt-3 space-y-1">
            {lessons.map((lesson, idx) => (
              <li key={idx} className={listItemClasses}>
                {lesson.completed ? (
                  // Зображення для completed
                  <Image
                    src="/check1.png"
                    alt="Completed icon"
                    width={44} // Фіксований розмір 44px
                    height={44}
                    className="flex-shrink-0"
                  />
                ) : (
                  // Номер уроку (використовує iconWrapperClasses)
                  <div className={`${iconWrapperClasses} bg-gray-100`}>
                    <span className="text-base font-semibold text-gray-900">
                      {idx + 1}
                    </span>
                  </div>
                )}
                {!collapsed && (
                  <div className="flex flex-grow flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-800">
                        {lesson.title}
                      </span>
                      {lesson.showDownload && (
                        <Image
                          src="/icn_download.png"
                          alt="Download icon"
                          width={20}
                          height={20}
                          className="mt-[2px] inline-block flex-shrink-0"
                        />
                      )}
                    </div>
                    <span className="text-xs text-gray-500">
                      {lesson.duration}
                    </span>
                  </div>
                )}
              </li>
            ))}

            {/* Test Button */}
            <li className={listItemClasses}>
              <Image
                src="/edit_icon.png"
                alt="Test icon"
                width={44}
                height={44}
                className="flex-shrink-0"
              />
              {!collapsed && (
                <span className="flex-grow text-sm text-gray-800">Test</span>
              )}
            </li>

            {/* Certificate Button */}
            <li className={listItemClasses}>
              <Image
                src="/file_icon.png"
                alt="Certificate icon"
                width={44}
                height={44}
                className="flex-shrink-0"
              />
              {!collapsed && (
                <span className="flex-grow text-sm text-gray-800">
                  Certificate
                </span>
              )}
            </li>
          </nav>
        </aside>

        {/* Lesson Content: БЕЗ ТІНІ, ПРОЗОРИЙ ФУТЕР, ФІКСОВАНА ВИСОТА 602px */}
        <section
          className="flex flex-1 flex-col justify-between overflow-hidden"
          style={{
            maxWidth: "1070.222px",
            height: "602px", // ФІКСОВАНА ВИСОТА
            aspectRatio: "1070.22 / 602.00",
            flexShrink: 0,
            borderRadius: "4px",
            border: `1px solid ${GREY_BG_BORDER}`, // Залишаємо рамку
          }}
        >
          {/* Контейнер для контенту/відео, який має білий фон */}
          <div className="relative flex-grow bg-white">
            <Image
              src="/coursepage_photo.png"
              alt="Lesson"
              layout="fill"
              objectFit="cover"
              className="w-full rounded-t-sm"
            />
          </div>

          {/* Pagination/Navigation Footer: Прозорий фон */}
          <div className="flex items-center justify-between border-t border-gray-300 bg-transparent px-6 py-4 text-sm">
            {/* Previous button */}
            <button className="flex items-center text-gray-900">
              <svg
                className="mr-1 h-4 w-4"
                style={{ color: BRAND_DARK_BLUE }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              Previous:{" "}
              <span style={{ color: BRAND_GREEN }} className="ml-1 font-medium">
                Verkehrswertschätzung
              </span>
            </button>

            {/* Pagination numbers */}
            <div className="flex items-center gap-2">
              {/* "Prev" - Темний текст */}
              <span className="px-1 font-medium text-gray-900">Prev</span>

              {/* Active Page (1) - Dark Blue Background, WHITE Text */}
              <button
                className="px-4 py-2 font-medium text-white"
                style={{
                  backgroundColor: BRAND_DARK_BLUE,
                  borderRadius: "12px",
                }}
              >
                1
              </button>

              {/* Dots */}
              <span className="px-2 text-gray-600">…</span>

              {/* Last Page (7) - White Background, Dark Text, Light Border */}
              <button
                className="border border-gray-200 bg-white px-4 py-2 font-medium text-gray-900"
                style={{
                  borderRadius: "12px",
                }}
              >
                7
              </button>

              {/* "Next" - Темний текст */}
              <span className="px-1 font-medium text-gray-900">Next</span>
            </div>

            {/* Next button */}
            <button className="flex items-center text-gray-900">
              Next:{" "}
              <span style={{ color: BRAND_GREEN }} className="mx-1 font-medium">
                Verkehrswertschätzung
              </span>
              <svg
                className="ml-1 h-4 w-4"
                style={{ color: BRAND_DARK_BLUE }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
