"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrashIcon from "@/components/icons/cart/TrashIcon";
import Button from "@/components/ui/Button";
import { inter400, inter600, inter700 } from "@/styles/fonts";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
// Fix
const CourseItem = ({
  title,
  price,
  courseId,
  onDelete,
}: {
  title: string;
  price: number;
  courseId: string;
  onDelete: (courseId: string) => void;
}) => {
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
          onClick={() => onDelete(courseId)}
        />
      </div>
    </div>
  );
};

export default function Cart() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const { cart, deleteFromCart, totalCartPrice, clearCart } = useCart();
  const locale = useLocale();


  // Return loading state while cart is loading to prevent hydration mismatch
  if (cart === null) {
    return (
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        <Header />
        <main className="mt-[100px] flex-grow pb-16 sm:px-5 lg:px-10 2xl:px-60">
          <h2
            className={`${inter700.className} mb-11 text-[28px] leading-[120%] text-[#2A354F]`}
          >
            Shopping Cart
          </h2>
          <div className="py-12 text-center">
            <p className={`${inter400.className} text-lg text-[#2A354F]`}>
              Loading cart...
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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

  // Calculate tax from total (15% tax is already included in totalCartPrice)
  // If total includes 15% tax: total = subtotal * 1.15, so subtotal = total / 1.15
  const subtotalWithoutTax = totalCartPrice / 1.15;
  const taxAmount = totalCartPrice - subtotalWithoutTax;

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      {/* 👇 Фон на всю сторінку (поза main і footer) */}
      <div className="fixed inset-0 right-150 -z-10">
        <Image
          src="/Blur_Gradient.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="mt-[100px] flex-grow pb-16 sm:px-5 lg:px-10 2xl:px-60">
        <h2
          className={`${inter700.className} mb-11 text-[28px] leading-[120%] text-[#2A354F]`}
        >
          {t.header.title}
        </h2>

        <p
          className={`${inter400.className} mb-6 text-lg leading-[120%] text-[#2A354F]`}
        >
          {cart.length} Courses in Cart
        </p>

        {cart.length === 0 ? (
          <div className="py-12 text-center">
            <p className={`${inter400.className} mb-4 text-lg text-[#2A354F]`}>
              Your cart is empty
            </p>
            <Link href="/courses">
              <Button content="text" btnType="primary" size="normal">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* LEFT SIDE */}
            <div className="md:col-span-2">
              <div className="mb-4">
                {cart?.map((course, index) => (
                  <CourseItem
                    key={course.id || index}
                    title={
                      course.title[locale] ||
                      Object.values(course.title)[0] ||
                      ""
                    }
                    price={course.price || 0}
                    courseId={course.id}
                    onDelete={deleteFromCart}
                  />
                ))}
              </div>
              <Link href="/courses">
                <Button
                  className="ml-auto"
                  content="text"
                  btnType="outline"
                  size="normal"
                >
                  {t.continueShopping}
                </Button>
              </Link>
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
                    {subtotalWithoutTax.toFixed(2)} CHF
                  </span>
                </div>
                <div className="flex justify-between text-base">
                  <span className={`${inter400.className} text-[#2A354F]`}>
                    {t.tax}
                  </span>
                  <span className={`${inter600.className} text-[#2A354F]`}>
                    {taxAmount.toFixed(2)} CHF
                  </span>
                </div>
                <div className="my-2 h-[1px] bg-[#D5E4E9]"></div>
                <div className="flex justify-between text-lg font-bold">
                  <span className={`${inter700.className} text-[#2A354F]`}>
                    {t.total}
                  </span>
                  <span className={`${inter700.className} text-[#2A354F]`}>
                    {totalCartPrice.toFixed(2)} CHF
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
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
