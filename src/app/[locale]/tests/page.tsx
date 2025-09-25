"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/HeaderBlack";

export default function CourseTest() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const lessons = [
    {
      title: "Der Hypothekarmarkt",
      duration: "15 min",
      isCompleted: true,
      showDownload: true,
    },
    {
      title: "Verkehrswertschätzung",
      duration: "5 min",
      isCompleted: true,
      showDownload: false,
    },
    {
      title: "Regulatorische Vorgaben",
      duration: "2 min",
      isCompleted: true,
      showDownload: false,
    },
    {
      title: "Tragbarkeitberechnung",
      duration: "11 min",
      isCompleted: true,
      showDownload: false,
    },
    {
      title: "Refinanzierungsgeschäft",
      duration: "9 min",
      isCompleted: true,
      showDownload: false,
    },
    {
      title: "Neufinanzierungsgeschäft",
      duration: "11 min",
      isCompleted: true,
      showDownload: false,
    },
    {
      title: "Unterlagen für Hypothekfinanzierung",
      duration: "7 min",
      isCompleted: true,
      showDownload: false,
    },
    {
      title: "Plattform «Chamäleon - H»",
      duration: "3 min",
      isCompleted: true,
      showDownload: false,
    },
  ];

  const answers = [
    "Ca. 500 Millionen CHF",
    "Ca. 500 Milliarden CHF",
    "Ca. 1’200 Millionen CHF",
    "Ca. 1’200 Milliarden CHF",
  ];

  const listItemClasses =
    "flex items-center gap-4 py-2 px-1 hover:bg-gray-50 rounded-md transition-colors";
  const iconWrapperClasses =
    "flex h-7 w-7 items-center justify-center rounded-md text-white";

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="mx-auto mt-24 w-full max-w-7xl flex-1 px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="space-y-3 rounded-xl bg-white p-4 shadow lg:col-span-3">
            <h2 className="flex items-center gap-3 border-b border-gray-100 pb-2 font-semibold text-gray-900">
              <div className={`${iconWrapperClasses} bg-gray-800`}>
                <Image
                  src="/book_icon.png"
                  alt="Book icon"
                  width={46}
                  height={46}
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
                  <div className={`${iconWrapperClasses} bg-green-500`}>
                    <Image
                      src="/check.png"
                      alt="Completed icon"
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className="flex flex-grow flex-col">
                    <span className="text-sm text-gray-800">
                      {lesson.title}
                    </span>
                    <span className="text-xs text-gray-500">
                      {lesson.duration}
                    </span>
                  </div>
                  {lesson.showDownload && (
                    <Image
                      src="/icn_download.png"
                      alt="Download icon"
                      width={46}
                      height={46}
                      className="ml-auto"
                    />
                  )}
                </li>
              ))}

              <li className={`${listItemClasses} mt-4`}>
                <Image
                  src="/edit_icon.png"
                  alt="Test icon"
                  width={46}
                  height={46}
                />
                <span className="flex-grow text-sm text-gray-800">Test</span>
              </li>

              <li className={listItemClasses}>
                <Image
                  src="/file_icon.png"
                  alt="Certificate icon"
                  width={46}
                  height={46}
                />
                <span className="flex-grow text-sm text-gray-800">
                  Certificate
                </span>
              </li>
            </nav>
          </aside>

          {/* Question Section */}
          <section className="relative max-h-[calc(100vh-250px)] overflow-hidden rounded-xl bg-white shadow lg:col-span-9">
            <div className="grid h-full grid-cols-1 lg:grid-cols-3">
              <div className="p-6 lg:col-span-2">
                <h1 className="mb-2 text-xl font-semibold text-gray-900">
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
                      className={`w-full rounded-md border px-4 py-3 text-left text-sm font-medium transition-colors ${
                        selectedAnswer === answer
                          ? "border-green-600 bg-green-600 text-white"
                          : "border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span className="mr-3 font-bold">
                        {String.fromCharCode(65 + idx)} |
                      </span>
                      {answer}
                    </button>
                  ))}
                </div>

                {selectedAnswer && (
                  <button className="mt-6 w-full rounded-md border border-gray-800 bg-gray-800 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700">
                    Next Question
                  </button>
                )}
              </div>

              <div className="flex h-full items-center justify-center bg-teal-50 p-6 lg:col-span-1">
                <div className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-teal-500 text-5xl font-bold text-teal-600">
                  20
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
