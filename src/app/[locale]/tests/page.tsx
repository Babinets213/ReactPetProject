"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function CourseTest() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const lessons = [
    "Der Hypothekarmarkt",
    "Verkehrswertschätzung",
    "Regulatorische Vorgaben",
    "Tragbarkeitberechnung",

    "Refinanzierungsgeschäft",
    "Neufinanzierungsgeschäft",
    "Unterlagen für Hypothekfinanzierung",
    "Plattform «Chamäleon - H»",
  ];

  const answers = [
    "Ca. 500 Millionen CHF",
    "Ca. 500 Milliarden CHF",
    "Ca. 1’200 Millionen CHF",
    "Ca. 1’200 Milliarden CHF",
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Header */}
      <Header />
      {/* Main content */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Sidebar with lessons */}
          <aside className="space-y-3 rounded-xl bg-white p-4 shadow lg:col-span-3">
            <h2 className="font-semibold text-gray-900">Assessment Block</h2>
            <nav>
              <ul className="space-y-2 text-sm">
                {lessons.map((title, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between rounded-md bg-gray-50 px-2 py-1"
                  >
                    <span className="text-gray-800">{title}</span>
                    <span className="text-green-500">✔</span>
                  </li>
                ))}
              </ul>
            </nav>
            <button className="mt-3 w-full rounded-md border border-yellow-500 bg-yellow-50 px-3 py-1 text-sm font-medium text-yellow-700 hover:bg-yellow-100">
              Test
            </button>
            <button className="w-full rounded-md border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:bg-gray-50">
              Certificate
            </button>
          </aside>
          {/* Question block */}
          <section className="relative rounded-xl bg-white p-6 shadow lg:col-span-9">
            <h1 className="mb-2 text-xl font-semibold text-gray-900">
              Hypotheken und Immobilienmarkt Schweiz
            </h1>
            <p className="mb-6 text-sm text-gray-500">1/31</p>
            <div className="relative">
              <p className="mb-4 font-medium text-gray-900">
                Wie gross ist das Marktvolumen des Hypothekarmarkts in der
                Schweiz (Stand ca. 2025)?
              </p>
              <p className="mb-4 text-sm text-gray-500">
                Single Choice Question
              </p>
              <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
                {answers.map((answer, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedAnswer(answer)}
                    className={`w-full rounded-md border px-4 py-2 text-left text-sm font-medium ${
                      selectedAnswer === answer
                        ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="mr-2 font-bold">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    {answer}
                  </button>
                ))}
              </div>
              {/* Timer circle - moved inside the main content area for better positioning */}
              <div className="absolute -top-4 -right-4 hidden h-16 w-16 items-center justify-center rounded-full border-2 border-teal-500 font-bold text-teal-600 lg:flex">
                20
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
