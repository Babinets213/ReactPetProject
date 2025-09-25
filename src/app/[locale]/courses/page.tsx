"use client";

import { useEffect, useState } from "react";
import { CoursesService } from "@/services/courses";
import OpenedCourseCard from "@/components/OpenedCourseCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { inter400, inter600, inter700 } from "@/styles/fonts";
import { useCart } from "@/context/CartContext";
import { ApiCourse } from "@/types/courses";
// import SmallCourseCards from "@/components/SmallCourseCards";
// import { useTranslations } from "next-intl";
import CoursesGradient from "@/components/icons/CoursesGradient";
import Button from "@/components/ui/Button";
import { useRouter } from "@/i18n/navigation";

export default function CoursesPage() {
  const [publicCourses, setPublicCourses] = useState<ApiCourse[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { cart, addToCart, deleteFromCart } = useCart();
  // const t = useTranslations("AllCoursesPage");
  const router = useRouter();

  useEffect(() => {
    CoursesService.fetchPublicCourses()
      .then(setPublicCourses)
      .catch(() => setError("Failed to fetch courses"));
  }, []);

  // const handleAddCard = function (course: CartItem) {
  //   addToCart(course);
  // };

  // const handleDeleteCard = function (courseId: string) {
  //   deleteFromCart(courseId);
  // };

  const totalCartPrice = cart.reduce((red, cur) => red, 0);

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
        {/* <SmallCourseCards
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
        /> */}
      </main>
      {cart.length > 0 && (
        <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-t-[#F1F1F3] bg-white shadow-md sm:px-5 lg:px-10 2xl:px-60">
          <div className="flex items-center justify-between">
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
              <Button
                onClick={() => router.replace("/cart")}
                content="text"
                btnType="primary"
                size="normal"
              >
                Proceed to Checkout
              </Button>
            </div>
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
