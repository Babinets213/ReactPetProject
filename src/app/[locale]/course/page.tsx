"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CertificateIcon from "@/components/icons/aboutCourse/CertificateIcon";
import FileIcon from "@/components/icons/aboutCourse/FileIcon";
import LevelIcon from "@/components/icons/aboutCourse/LevelIcon";
import QuestionIcon from "@/components/icons/aboutCourse/QuestionIcon";
import TimeIcon from "@/components/icons/aboutCourse/TimeIcon";
import TopicsAccordion from "@/components/TopicsAccordion";
import Button from "@/components/ui/Button";
import { inter400, inter700 } from "@/styles/fonts";
import { useTranslations } from "next-intl";
import React from "react";

export default function CoursePage() {
  const t = useTranslations("AboutCoursePage");

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="relative mt-[82px] flex items-center justify-between bg-[#00AC8E] py-8 sm:px-5 lg:px-10 2xl:px-60">
        <h2
          className={`${inter700.className} text-[35px] leading-[120%] text-white`}
        >
          {t("header.title")}
        </h2>
        <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-6">
          <div className="flex items-center gap-2">
            <TimeIcon />
            <span
              className={`${inter400.className} text-base leading-[120%] text-white`}
            >
              {t("header.time")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <LevelIcon />
            <span
              className={`${inter400.className} text-base leading-[120%] text-white`}
            >
              {t("header.level")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FileIcon />
            <span
              className={`${inter400.className} text-base leading-[120%] text-white`}
            >
              {t("header.lessons")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <QuestionIcon />
            <span
              className={`${inter400.className} text-base leading-[120%] text-white`}
            >
              {t("header.test")}
            </span>
          </div>
        </div>
        <Button content="text" size="large" btnType="primary">
          {t("header.btnText")}
        </Button>
      </div>

      <main className="mt-9 sm:px-5 lg:px-10 2xl:px-60">
        <section className="mb-12">
          <h3
            className={`mb-4 ${inter700.className} text-[28px] leading-[120%] text-[#2A354F]`}
          >
            {t("descriptionTitle")}
          </h3>
          <p
            className={`${inter400.className} text-lg leading-[120%] text-[#2A354F]`}
          >
            Dieses Modul vermittelt das Basis Wissen über die wichtigsten
            Aspekte und Abläufe der Hypothekarfinanzierung in der Schweiz. Die
            Teilnehmenden erhalten einen fundierten Einblick in den
            Hypothekarmarkt sowie die regulatorischen Rahmenbedingungen, die das
            Geschäft prägen. Neben der Verkehrswertschätzung von Liegenschaften
            wird das Handling von Refinanzierungs- und
            Neufinanzierungsgeschäften praxisnah behandelt.
            <br /> <br />
            Ein Schwerpunkt liegt auf der korrekten Tragbarkeitsberechnung als
            Grundlage für die Kreditprüfung. Zudem werden die relevanten
            Unterlagen für eine vollständige Hypothekarfinanzierung besprochen.
            Das Modul schließt mit einer Einführung in die Plattform Chamäleon -
            H ab, die als wichtiges Werkzeug für die Abwicklung von
            Hypothekaranfragen dient.
          </p>
        </section>

        <section className="mb-12">
          <h3
            className={`mb-4 ${inter700.className} text-[28px] leading-[120%] text-[#2A354F]`}
          >
            Lernziel
          </h3>
          <p
            className={`${inter400.className} text-lg leading-[120%] text-[#2A354F]`}
          >
            Die Teilnehmenden sind befähigt, Hypothekarfinanzierungen
            ganzheitlich zu verstehen und kompetent zu begleiten. Sie können die
            wichtigsten Marktmechanismen, regulatorischen Anforderungen und
            Bewertungsverfahren anwenden sowie Refinanzierungs- und
            Neufinanzierungsgeschäfte sicher abwickeln. Die praktische Anwendung
            der Plattform Chamäleon - H rundet das Modul ab.
          </p>
        </section>

        <section className="mb-9">
          <h3
            className={`mb-6 ${inter700.className} text-[28px] leading-[120%] text-[#2A354F]`}
          >
            Shareable certificate
          </h3>

          <div className="flex gap-7">
            <CertificateIcon />

            <ul className="mt-4 list-inside list-disc">
              <li className={`${inter400.className} text-lg leading-[220%]`}>
                Präsentieren Sie es in Ihrem LinkedIn-Profil unter dem
                Abschnitt‚ Lizenzen und Zertifikate.
              </li>
              <li className={`${inter400.className} text-lg leading-[220%]`}>
                Laden Sie es als PDF herunter oder drucken Sie es aus, um es mit
                anderen zu teilen.
              </li>
              <li className={`${inter400.className} text-lg leading-[220%]`}>
                Teilen Sie es als Bild online, um Ihre Kompetenz zu zeigen.
              </li>
            </ul>
          </div>
        </section>

        <TopicsAccordion />
      </main>

      <Footer />
    </div>
  );
}
