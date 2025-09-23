"use client";
import { inter400 } from "@/styles/fonts";
import React, { useState } from "react";
import ArrowDownIcon from "./icons/aboutCourse/ArrowDownIcon";

const topics = [
  {
    title: "Der Hypothekarmarkt",
    content:
      "Der Hypothekarmarkt ist der Finanzmarkt für Immobilienkredite. Hier vergeben Banken und andere Finanzinstitute Hypotheken zur Finanzierung von Wohn- und Gewerbeimmobilien. Er spielt eine zentrale Rolle im Immobiliensektor und wird stark von Zinssätzen und wirtschaftlichen Entwicklungen beeinflusst.",
  },
  {
    title: "Regulatorische Vorgaben",
    content:
      "Der Hypothekarmarkt ist der Finanzmarkt für Immobilienkredite. Hier vergeben Banken und andere Finanzinstitute Hypotheken zur Finanzierung von Wohn- und Gewerbeimmobilien. Er spielt eine zentrale Rolle im Immobiliensektor und wird stark von Zinssätzen und wirtschaftlichen Entwicklungen beeinflusst.",
  },
  {
    title: "Verkehrswertschätzung",
    content:
      "Der Hypothekarmarkt ist der Finanzmarkt für Immobilienkredite. Hier vergeben Banken und andere Finanzinstitute Hypotheken zur Finanzierung von Wohn- und Gewerbeimmobilien. Er spielt eine zentrale Rolle im Immobiliensektor und wird stark von Zinssätzen und wirtschaftlichen Entwicklungen beeinflusst.",
  },
  {
    title: "Refinanzierungsgeschäft",
    content:
      "Der Hypothekarmarkt ist der Finanzmarkt für Immobilienkredite. Hier vergeben Banken und andere Finanzinstitute Hypotheken zur Finanzierung von Wohn- und Gewerbeimmobilien. Er spielt eine zentrale Rolle im Immobiliensektor und wird stark von Zinssätzen und wirtschaftlichen Entwicklungen beeinflusst.",
  },
  {
    title: "Tragbarkeitsberechnung",
    content:
      "Der Hypothekarmarkt ist der Finanzmarkt für Immobilienkredite. Hier vergeben Banken und andere Finanzinstitute Hypotheken zur Finanzierung von Wohn- und Gewerbeimmobilien. Er spielt eine zentrale Rolle im Immobiliensektor und wird stark von Zinssätzen und wirtschaftlichen Entwicklungen beeinflusst.",
  },
  {
    title: "Neufinanzierungsgeschäft",
    content:
      "Der Hypothekarmarkt ist der Finanzmarkt für Immobilienkredite. Hier vergeben Banken und andere Finanzinstitute Hypotheken zur Finanzierung von Wohn- und Gewerbeimmobilien. Er spielt eine zentrale Rolle im Immobiliensektor und wird stark von Zinssätzen und wirtschaftlichen Entwicklungen beeinflusst.",
  },
  {
    title: "Unterlagen für Hypothekarfinanzierung",
    content:
      "Der Hypothekarmarkt ist der Finanzmarkt für Immobilienkredite. Hier vergeben Banken und andere Finanzinstitute Hypotheken zur Finanzierung von Wohn- und Gewerbeimmobilien. Er spielt eine zentrale Rolle im Immobiliensektor und wird stark von Zinssätzen und wirtschaftlichen Entwicklungen beeinflusst.",
  },
  {
    title: "Plattform «Chamäleon – H»",
    content:
      "Der Hypothekarmarkt ist der Finanzmarkt für Immobilienkredite. Hier vergeben Banken und andere Finanzinstitute Hypotheken zur Finanzierung von Wohn- und Gewerbeimmobilien. Er spielt eine zentrale Rolle im Immobiliensektor und wird stark von Zinssätzen und wirtschaftlichen Entwicklungen beeinflusst.",
  },
];

export default function TopicsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = function (index: number) {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="mb-15">
      <ul className="rounded-lg border border-[#E0E0E0] bg-white">
        {topics.map((topic, index) => (
          <li
            key={index}
            className={`${index !== topics.length - 1 ? "border-b border-b-[#E0E0E0]" : ""} `}
          >
            <button
              className="flex w-full items-center justify-between px-6 py-[18px] text-left"
              onClick={() => toggle(index)}
            >
              <span
                className={`${inter400.className} text-lg leading-[120%] ${index === openIndex ? "text-[#00AC8E]" : "text-[#4F4F4F]"}`}
              >
                {topic.title}
              </span>
              <ArrowDownIcon
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                color={openIndex === index ? "#00AC8E" : "#4F4F4F"}
              />
            </button>

            {openIndex === index && (
              <div className="border-t border-t-[#E0E0E0] px-6 py-[18px]">
                <span
                  className={`${inter400.className} text-lg leading-[120%] text-[#4F4F4F]`}
                >
                  {topic.content}
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
