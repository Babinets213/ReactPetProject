"use client";

import Footer from "@/components/Footer";
import Header from "@/components/HeaderBlack";
import React from "react";
import Image from "next/image";

export default function LearningPage() {
  const listItemClasses =
    "flex items-center gap-4 py-2 px-1 hover:bg-gray-50 rounded-md transition-colors";
  const iconWrapperClasses =
    "flex h-7 w-7 items-center justify-center rounded-md text-white";

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

      {/* Main Content */}
      <main className="flex flex-1 gap-6 bg-gray-100 p-6 pt-[100px]">
        {/* Sidebar */}
        <aside className="space-y-3 rounded-xl bg-white p-4 shadow lg:col-span-3">
          <h2 className="flex items-center gap-3 border-b border-gray-100 pb-2 font-semibold text-gray-900">
            <div className={`${iconWrapperClasses} bg-gray-800`}>
              <Image
                src="/book_icon.png"
                alt="Book icon"
                width={44}
                height={44}
              />
            </div>
            Assessment Block
            <span className="ml-auto cursor-pointer text-gray-400">
              <Image
                src="/arrow_left.png"
                alt="Collapse icon"
                width={44}
                height={44}
              />
            </span>
          </h2>

          <nav className="space-y-1">
            {lessons.map((lesson, idx) => (
              <li key={idx} className={listItemClasses}>
                {lesson.completed ? (
                  <div className={`${iconWrapperClasses} bg-green-500`}>
                    {/* Використовуємо Image з заокругленням для Completed icon */}
                    <Image
                      src="/checkicon.png"
                      alt="Completed icon"
                      width={18} // Зменшуємо розмір для кращої інтеграції
                      height={18}
                      className="rounded-md" // Легке заокруглення кутів
                    />
                  </div>
                ) : (
                  <div
                    className={`${iconWrapperClasses} flex items-center justify-center bg-gray-100`}
                  >
                    {/* ЗМІНА ТУТ: Замінено text-gray-700 (темно-сірий) на text-gray-900 або просто на чорний колір 
                       для кращої відповідності скріншоту. 
                       Використовуємо text-[#2A354F] або text-gray-900. */}
                    <span className="text-sm font-semibold text-gray-900">
                      {idx + 1}
                    </span>
                  </div>
                )}

                <div className="flex flex-grow flex-col">
                  <span className="text-sm text-gray-800">{lesson.title}</span>
                  <span className="text-xs text-gray-500">
                    {lesson.duration}
                  </span>
                </div>

                {lesson.showDownload && (
                  <Image
                    src="/icn_download.png"
                    alt="Download icon"
                    width={44}
                    height={44}
                    className="ml-auto"
                  />
                )}
              </li>
            ))}

            {/* Test Button */}
            <li className={`${listItemClasses} mt-4`}>
              <Image
                src="/edit_icon.png"
                alt="Test icon"
                width={44}
                height={44}
              />
              <span className="flex-grow text-sm text-gray-800">Test</span>
            </li>

            {/* Certificate Button */}
            <li className={listItemClasses}>
              <Image
                src="/file_icon.png"
                alt="Certificate icon"
                width={44}
                height={44}
              />
              <span className="flex-grow text-sm text-gray-800">
                Certificate
              </span>
            </li>
          </nav>
        </aside>

        {/* Lesson Content */}
        <section className="flex flex-1 flex-col justify-between rounded-xl bg-white shadow">
          <div className="relative">
            <Image
              src="/coursepage_photo.png"
              alt="Lesson"
              width={1200}
              height={600}
              className="w-full rounded-t-xl object-cover"
            />
          </div>

          <div className="flex items-center justify-between border-t px-6 py-4 text-sm">
            <span className="text-gray-600">
              ← Previous: Verkehrswertschätzung
            </span>
            <div className="flex gap-2">
              <button className="rounded border px-3 py-1">1</button>
              <span>…</span>
              <button className="rounded border px-3 py-1">7</button>
            </div>
            <span className="text-blue-600">Next: Verkehrswertschätzung →</span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
