"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrashIcon from "@/components/icons/cart/TrashIcon";
import Button from "@/components/ui/Button";
import { inter400, inter600, inter700 } from "@/styles/fonts";
import Image from "next/image";

const CourseItem = ({ title, price }: { title: string; price: number }) => {
  return (
    <div className="flex items-center justify-between border-b border-[#D5E4E9] py-4">
      <span
        className={`${inter600.className} text-lg leading-[120%] text-[#2A354F]`}
      >
        {title}
      </span>
      <div className="flex items-center gap-9">
        <span
          className={`${inter400.className} text-base leading-[120%] text-[#2A354F]`}
        >
          {price} CHF
        </span>
        <Button
          icon={<TrashIcon />}
          content="icon"
          btnType="text_btn"
          size="normal"
        />
      </div>
    </div>
  );
};

export default function Cart() {
  const [paymentMethod, setPaymentMethod] = useState("");

  const t = {
    header: { title: "Shopping Cart" },
    coursesCount: "5 Courses in Cart",
    continueShopping: "Continue Shopping",
    summaryTitle: "Summary",
    subtotal: "Subtotal",
    tax: "TAX",
    total: "TOTAL",
    checkoutBtn: "Go to Checkout",
    checkoutNote: "You won't be charged yet",
  };

  const courses = [
    { title: "Assessment Block", price: 499 },
    { title: "Strukturierung der Hypothek", price: 69 },
    { title: "Grundstückgewinnsteuer", price: 69 },
    { title: "Wohnrecht", price: 69 },
    { title: "Renditeliegenschaften", price: 49 },
  ];

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* 👇 Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Blur_Gradient.png"
          alt="Background"
          fill
          priority
          className="object-cover object-top opacity-90"
        />
        {/* нижня половина — білий фон */}
        <div className="absolute bottom-0 h-1/2 w-full bg-white" />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow pt-8 pb-16 sm:px-5 lg:px-10 2xl:px-60">
        <h2
          className={`${inter700.className} mb-11 text-[28px] leading-[120%] text-[#2A354F]`}
        >
          {t.header.title}
        </h2>

        <p
          className={`${inter400.className} mb-6 text-lg leading-[120%] text-[#2A354F]`}
        >
          {t.coursesCount}
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* LEFT SIDE */}
          <div className="md:col-span-2">
            <div className="mb-4">
              {courses.map((course, index) => (
                <CourseItem
                  key={index}
                  title={course.title}
                  price={course.price}
                />
              ))}
            </div>
            <Button
              className="ml-auto"
              content="text"
              btnType="outline"
              size="normal"
            >
              {t.continueShopping}
            </Button>
          </div>

          {/* RIGHT SIDE */}
          <div className="rounded-lg border border-[#D5E4E9] bg-white/90 p-6 shadow-sm backdrop-blur-md md:col-span-1">
            <h3
              className={`${inter600.className} mb-4 border-b border-[#D5E4E9] pb-3 text-xl text-[#2A354F]`}
            >
              {t.summaryTitle}
            </h3>

            <div className="mb-6 space-y-3">
              <div className="flex justify-between text-base">
                <span className={`${inter400.className} text-[#2A354F]`}>
                  {t.subtotal}
                </span>
                <span className={`${inter600.className} text-[#2A354F]`}>
                  755.00 CHF
                </span>
              </div>
              <div className="flex justify-between text-base">
                <span className={`${inter400.className} text-[#2A354F]`}>
                  {t.tax}
                </span>
                <span className={`${inter600.className} text-[#2A354F]`}>
                  15.00 CHF
                </span>
              </div>
              <div className="my-2 h-[1px] bg-[#D5E4E9]"></div>
              <div className="flex justify-between text-lg font-bold">
                <span className={`${inter700.className} text-[#2A354F]`}>
                  {t.total}
                </span>
                <span className={`${inter700.className} text-[#2A354F]`}>
                  755.00 CHF
                </span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-4 flex gap-3">
              <label
                className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border px-4 py-3 transition ${
                  paymentMethod === "twint"
                    ? "border-[#2A354F] bg-[#F0F4F7]"
                    : "border-gray-300 bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="twint"
                  checked={paymentMethod === "twint"}
                  onChange={() => setPaymentMethod("twint")}
                  className="hidden"
                />
                <Image
                  src="/twint.png"
                  alt="/twint.png"
                  width={36}
                  height={36}
                />
                <span
                  className={`${inter600.className} text-base text-[#2A354F]`}
                >
                  TWINT
                </span>
              </label>

              <label
                className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border px-4 py-3 transition ${
                  paymentMethod === "card"
                    ? "border-[#2A354F] bg-[#F0F4F7]"
                    : "border-gray-300 bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                  className="hidden"
                />
                <Image src="/card.png" alt="Card" width={36} height={36} />
                <span
                  className={`${inter600.className} text-base text-[#2A354F]`}
                >
                  Card
                </span>
              </label>
            </div>

            <Button
              content="text"
              size="large"
              btnType="primary"
              className="w-full"
            >
              {t.checkoutBtn}
            </Button>
            <p className="mt-2 text-center text-xs text-gray-500">
              {t.checkoutNote}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
