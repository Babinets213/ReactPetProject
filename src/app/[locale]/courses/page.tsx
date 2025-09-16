"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CoursesGradient from "@/components/icons/CoursesGradient";
import OpenedCourseCard from "@/components/OpenedCourseCard";
import SmallCourseCards from "@/components/SmallCourseCards";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { expertBlock, getCourses, professionalBlock } from "@/data/coursesData";
import { inter400, inter600, inter700 } from "@/styles/fonts";
import { CartItem } from "@/types/courses";
import { useTranslations } from "next-intl";
import React from "react";

export default function Courses() {
  const t = useTranslations("AllCoursesPage");

  const courses = getCourses(t);

  const { cart, addToCart, deleteFromCart } = useCart();

  const handleAddCard = function (course: CartItem) {
    addToCart(course);
  };

  const handleDeleteCard = function (courseId: number) {
    deleteFromCart(courseId);
  };

  const totalCartPrice = cart.reduce((red, cur) => red + cur.price, 0);

  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="mt-30 sm:px-5 lg:px-10 2xl:px-60">
        <h2
          className={`${inter700.className} mb-8 text-[28px] leading-[120%] text-[#2A354F]`}
        >
          {t("title")}
        </h2>

        <div className="mb-15 flex flex-col gap-6">
          {/* Large Courses */}
          {courses.map((course, i) => (
            <OpenedCourseCard
              onHandleDeleteCard={handleDeleteCard}
              onHandleAddCard={handleAddCard}
              key={i}
              course={course}
              cart={cart}
            />
          ))}
        </div>

        <SmallCourseCards
          title={t("course.professional.title")}
          onHandleDeleteCard={handleDeleteCard}
          onHandleAddCard={handleAddCard}
          courses={professionalBlock}
          cart={cart}
          className="mb-15"
        />

        <SmallCourseCards
          title={t("course.expert.title")}
          onHandleDeleteCard={handleDeleteCard}
          onHandleAddCard={handleAddCard}
          courses={expertBlock}
          cart={cart}
          className="mb-21"
        />
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
      <div className="absolute top-100 -left-100 -z-100">
        <CoursesGradient />
      </div>
      <Footer />
    </div>
  );
}
