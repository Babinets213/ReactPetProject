"use client";

import { useEffect, useState } from "react";
import { CoursesService } from "@/services/courses";
import OpenedCourseCard from "@/components/OpenedCourseCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { inter700 } from "@/styles/fonts";
import { useCart } from "@/context/CartContext";
import { ApiCourse } from "@/types/courses";

export default function CoursesPage() {
  const [publicCourses, setPublicCourses] = useState<ApiCourse[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { cart, addToCart, deleteFromCart } = useCart();

  useEffect(() => {
    CoursesService.fetchPublicCourses()
      .then(setPublicCourses)
      .catch(() => setError("Failed to fetch courses"));
  }, []);

  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="mt-30 sm:px-5 lg:px-10 2xl:px-60">
        <h2
          className={`${inter700.className} mb-8 text-[28px] leading-[120%] text-[#2A354F]`}
        >
          Courses
        </h2>
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className="mb-15 flex flex-col gap-6">
            {publicCourses.map((course) => (
              <OpenedCourseCard
                key={course.id}
                course={course}
                cart={cart}
                onHandleAddCard={addToCart}
                onHandleDeleteCard={deleteFromCart}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
