"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/HeaderBlack";

// SVG-іконка галочки
const CheckIcon = ({ className = "h-5 w-5 text-white" }) => (
  <svg
    className={`ml-auto ${className}`}
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
    ></path>
  </svg>
);

export default function CourseTest() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const lessons = [
    { title: "Der Hypothekarmarkt", duration: "15 min", showDownload: true },
    { title: "Verkehrswertschätzung", duration: "5 min" },
    { title: "Regulatorische Vorgaben", duration: "2 min" },
    { title: "Tragbarkeitberechnung", duration: "11 min" },
    { title: "Refinanzierungsgeschäft", duration: "9 min" },
    { title: "Neufinanzierungsgeschäft", duration: "11 min" },
    { title: "Unterlagen für Hypothekfinanzierung", duration: "7 min" },
    { title: "Plattform «Chamäleon - H»", duration: "3 min" },
  ];

  const answers = [
    "Ca. 500 Millionen CHF",
    "Ca. 500 Milliarden CHF",
    "Ca. 1’200 Millionen CHF",
    "Ca. 1’200 Milliarden CHF",
  ];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const listItemClasses =
    "flex items-center gap-4 py-2 px-1 hover:bg-gray-50 rounded-md transition-colors";

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="mx-auto mt-24 w-full max-w-7xl flex-1 px-4 py-8 lg:px-8">
        <div className="grid grid-cols-[auto_1fr] gap-6">
          {/* Sidebar */}
          <aside
            className={`rounded-lg bg-white shadow transition-all duration-300 ${
              isCollapsed ? "w-[70px] p-2" : "w-[400px] p-4"
            }`}
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              {!isCollapsed && (
                <h2 className="mb- flex items-center gap-3 pl-[15px] font-semibold text-gray-900">
                  <Image
                    src="/book_icon.png"
                    alt="Book icon"
                    width={44}
                    height={44}
                    className="ml-[-8px]" // 🔑 посунути іконку вліво
                  />
                  Assessment Block
                </h2>
              )}

              {/* Кнопка згортання */}
              <button
                className="ml-auto cursor-pointer text-gray-400"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <Image
                  src={isCollapsed ? "/arrow_right.png" : "/arrow_left.png"}
                  alt="Collapse icon"
                  width={44}
                  height={44}
                />
              </button>
            </div>

            {/* Lessons */}
            <ul className="mt-3 space-y-1">
              {lessons.map((lesson, idx) => (
                <li key={idx} className={listItemClasses}>
                  <Image
                    src="/check1.png"
                    alt="Completed icon"
                    width={44}
                    height={44}
                  />

                  {!isCollapsed && (
                    <div className="flex flex-grow flex-col">
                      <div className="flex items-center gap-2 text-sm text-gray-800">
                        <span>{lesson.title}</span>
                        {lesson.showDownload && (
                          <Image
                            src="/icn_download.png"
                            alt="Download icon"
                            width={44}
                            height={44}
                            className="inline-block"
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
              <li className={`${listItemClasses} mt-4`}>
                <Image
                  src="/edit_icon.png"
                  alt="Test icon"
                  width={44}
                  height={44}
                />
                {!isCollapsed && (
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
                />
                {!isCollapsed && (
                  <span className="flex-grow text-sm text-gray-800">
                    Certificate
                  </span>
                )}
              </li>
            </ul>
          </aside>

          {/* Question Section */}
          <section className="relative max-h-[calc(100vh-250px)] overflow-hidden rounded-lg bg-white shadow">
            <div className="grid h-full grid-cols-1 lg:grid-cols-3">
              <div className="p-6 lg:col-span-2">
                <h1 className="mb-[45px] text-xl font-semibold text-gray-900">
                  Hypotheken und Immobilienmarkt Schweiz
                </h1>
                <p className="mb-2 text-sm text-gray-500">1/31</p>
                <p className="mb-4 font-medium text-gray-900">
                  Wie gross ist das Marktvolumen des Hypothekarmarkts in der
                  Schweiz (Stand ca. 2025)?
                </p>
                <p className="mb-4 text-sm text-gray-500">
                  Single Choice Question
                </p>

                <div className="space-y-3">
                  {answers.map((answer, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswerSelect(answer)}
                      className={`flex w-full items-center rounded-md border px-4 py-3 text-left text-sm font-medium transition-colors ${
                        selectedAnswer === answer
                          ? "border-green-600 bg-green-600 text-white"
                          : "border-gray-300 bg-gray-50 text-gray-900"
                      }`}
                    >
                      <span className="mr-3 font-normal">
                        {String.fromCharCode(65 + idx)} |
                      </span>
                      {answer}
                      {selectedAnswer === answer && <CheckIcon />}
                    </button>
                  ))}
                </div>

                {selectedAnswer && (
                  <button className="mt-6 w-full rounded-md border border-gray-800 bg-gray-800 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700">
                    Next Question
                  </button>
                )}
              </div>

              {/* Timer */}
              <div className="flex h-full items-center justify-center bg-teal-50 p-6 lg:col-span-1">
                <div className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-teal-500 text-5xl font-bold text-teal-600">
                  20
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
