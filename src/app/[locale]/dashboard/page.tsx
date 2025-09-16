"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import withAuth from "@/components/hoc/withAuth";
import NoCoursesIcon from "@/components/icons/dashboard/NoCoursesIcon";
import MyCourseCard from "@/components/MyCourseCard";
import Button from "@/components/ui/Button";
import { useRouter } from "@/i18n/navigation";
import { inter700 } from "@/styles/fonts";
import { useTranslations } from "next-intl";
import React from "react";

const myCourses = [
  {
    id: 1,
    title: "Verpfändungen Vorsorgegelder",
    progress: 56,
  },
  {
    id: 2,
    title: "Baurecht",
    progress: 0,
  },
  { id: 3, title: "Assessment Block", progress: 100 },
];

function DashboardPage() {
  const router = useRouter();
  const t = useTranslations("DashboardPage");

  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="mt-30 sm:px-5 lg:px-10 2xl:px-60">
        <h2
          className={`${inter700.className} text-[35px] leading-[120%] text-[#2A354F]`}
        >
          {t("title")}
        </h2>

        {myCourses.length ? (
          <>
            <div className="my-10 flex flex-col gap-6">
              {myCourses.map((course) => (
                <MyCourseCard key={course.id} course={course} />
              ))}
            </div>
            <Button
              className="mb-28"
              btnType="secondary"
              content="text"
              size="large"
            >
              {t("exploreBtn")}
            </Button>
          </>
        ) : (
          <div className="mt-29 mb-14 flex flex-col items-center justify-center gap-14">
            <div>
              <NoCoursesIcon />
            </div>
            <div className="mb-36">
              <Button
                onClick={() => router.replace("/courses")}
                content="text"
                btnType="primary"
                size="large"
              >
                Explore All Courses
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default withAuth(DashboardPage);
