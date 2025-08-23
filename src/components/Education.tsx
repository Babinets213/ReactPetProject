import React from "react";
import Button from "./ui/Button";
import EducationCard from "./EducationCard";
import { LeftGradient, RightGradient } from "./ui/BackgroundGradients";

const educationBlocks = [
  {
    title: "Assessment Block",
    buttonText: "Start Assessment",
    description:
      "Gain a solid foundation: regulations, valuation, documentation. Required to unlock further modules.",
    items: [
      "Der Hypothekarmarkt",
      "Regulatorische Vorgaben",
      "Verkehrswertschätzung",
      "Refinanzierungsgeschäft",
      "Tragbarkeitsberechnung",
      "Neufinanzierungsgeschäft",
      "Unterlagen für Hypothekarfinanzierung",
      "Plattform «Chamäleon – H»",
    ],
  },
  {
    title: "Professional Block",
    buttonText: "Start Professional",
    description:
      "Complex scenarios, multi-property strategy, and real client cases — for expert-level brokers.",
    items: [
      "Renditeliegenschaften",
      "Mehrfamilienhaus",
      "Verpfändung & Vorsorgeguthaben",
      "Kreditverträge & Produktvereinbarung",
      "Bauland",
      "Eigenmietwert & Grundstückgewinnsteuer",
    ],
  },
  {
    title: `Expert Block`,
    buttonText: "Start Expert",
    description:
      "Pick specific modules to deepen your expertise. Pay only for what you need.",
    items: [
      "Eigenleistungen",
      "Baurecht",
      "Büro & Gewerbe",
      "Schuldbriefe",
      "Reservations- und Kaufvertrag",
      "Schuldbriefe",
      "Reservations- und Kaufvertrag",
      "Renovationen & Umbau",
      "Wohnrecht & Nutzniessung",
      "Hypothekarmodelle & Strukturierung Hypothek",
    ],
  },
];

export default function Education() {
  return (
    <section className="pb-65">
      <div className="mb-[5.375rem] flex flex-col items-center gap-4">
        <span className="text-2xl leading-[120%] tracking-[0.48px] text-[rgba(42,53,79,0.7)]">
          Education
        </span>
        <h2 className="text-[56px] leading-[120%] font-bold text-[#2A354F]">
          Learning Paths for Every Level
        </h2>
        <Button type="primary" size="large">
          All Courses
        </Button>
      </div>

      <div className="relative grid sm:grid-cols-2 sm:gap-3 md:gap-5 lg:grid-cols-3 2xl:gap-[1.875rem]">
        {educationBlocks.map((block, index) => (
          <EducationCard
            key={index}
            title={block.title}
            buttonText={block.buttonText}
            description={block.description}
            items={block.items}
          />
        ))}

        <LeftGradient />
        <RightGradient />
      </div>
    </section>
  );
}
