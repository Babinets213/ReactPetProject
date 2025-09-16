"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import withAuth from "@/components/hoc/withAuth";
import NoCoursesIcon from "@/components/icons/dashboard/NoCoursesIcon";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { useRouter } from "@/i18n/navigation";
import { inter700 } from "@/styles/fonts";
import React from "react";

function DashboardPage() {
  const { cart } = useCart();
  const router = useRouter();

  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="mt-30 sm:px-5 lg:px-10 2xl:px-60">
        <h2
          className={`${inter700.className} text-[35px] leading-[120%] text-[#2A354F]`}
        >
          My Courses
        </h2>
        {!cart.length && (
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
