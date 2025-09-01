"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OpenedCourseCard from "@/components/OpenedCourseCard";
import Button from "@/components/ui/Button";
import { inter400, inter600, inter700 } from "@/styles/fonts";
import React, { useState } from "react";

export type Course = {
  title: string;
  description: string;
  price: number;
  categories: string[];
  tags: string[];
};

const courses: Course[] = [
  {
    title: "Assessment Block",
    description: `Provides a focused overview of the mortgage market, including
    property valuation, regulatory requirements, and affordability
    calculations. It also covers refinancing and new financing
    processes, along with access to the "Chamäleon - H" platform and
    necessary documentation.`,
    price: 499,
    categories: [
      "Der Hypothekarmarkt",
      "Verkehrswertschätzung",
      "Regulatorische Vorgaben",
      "Tragbarkeitsberechnung",
      "Refinanzierungsgeschäft",
      "Neufinanzierungsgeschäft",
      "Unterlagen für Hypothekarfinanzierung",
      "Plattform «Chamäleon - H»",
    ],
    tags: ["4 Weeks", "Beginner"],
  },
  {
    title: "Professional Block",
    description: `Offer in-depth knowledge on specialized real estate topics such as investment properties, multi-family houses, renovations, and financing. Additional subjects include land acquisition, pledging, pension funds, and key elements of purchase agreements.`,
    price: 345,
    categories: [
      "Renditeliegenschaften",
      "Mehrfamilienhaus",
      "Verpfändung & Vorsorgeguthaben",
      "Kreditverträge & Produktvereinbarung",
      "Bauland",
      "Eigenmietwert & Grundstückgewinnsteuer",
    ],
    tags: ["3 Weeks", "Advanced"],
  },
  {
    title: "Expert Block",
    description: `Offers advanced knowledge in property valuation, building rights, and commercial real estate financing. It covers mortgage models, loan structuring, legal frameworks, and tax implications such as usufruct, debt certificates, and property gains tax.`,
    price: 534,
    categories: [
      "Hypothekarmodelle & Strukturierung Hypothek",
      "Baurecht",
      "Büro & Gewerbe",
      "Schuldbriefe",
      "Reservations- und Kaufvertrag",
      "Renovationen & Umbau",
      "Wohnrecht & Nutzniessung",
      "Eigenleistungen",
    ],
    tags: ["4 Weeks", "Advanced"],
  },
];

export default function Courses() {
  const [cart, setCart] = useState<Course[]>([]);

  const handleAddCard = function (course: Course) {
    setCart((prevCart) => {
      if (prevCart.some((item) => item.title === course.title)) return prevCart;
      return [...prevCart, course];
    });
  };

  const totalCartPrice = cart.reduce((red, cur) => red + cur.price, 0);

  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="mt-22 sm:px-5 lg:px-10 2xl:px-60">
        <h2
          className={`${inter700.className} mb-8 text-[28px] leading-[120%] text-[#2A354F]`}
        >
          Available Courses
        </h2>

        <div className="flex flex-col gap-6">
          {/* Courses */}
          {courses.map((course, i) => (
            <OpenedCourseCard
              onHandleAddCard={handleAddCard}
              key={i}
              course={course}
              cart={cart}
            />
          ))}
        </div>
      </main>

      {cart.length > 0 && (
        <div className="flex items-center justify-between border-t border-t-[#F1F1F3] sm:px-5 lg:px-10 2xl:px-60">
          <p
            className={`${inter700.className} text-[23px] leading-[120%] text-[#2A354F]`}
          >
            You have selected {cart.length} courses
          </p>

          <div className="flex items-center">
            <div className="mr-7 flex w-50 flex-col items-start justify-center py-4">
              <span
                className={`${inter400.className} max-w-[380px] items-center self-stretch text-base leading-[120%] text-[#687083]`}
              >
                Total
              </span>
              <span
                className={`${inter600.className} text-lg leading-[120%] text-[#2A354F]`}
              >
                {totalCartPrice}.00 CHF
              </span>
            </div>
            <Button content="text" btnType="primary" size="normal">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
