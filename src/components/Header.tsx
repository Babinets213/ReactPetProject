"use client";
import React from "react";
import Image from "next/image";
import { inter400 } from "@/styles/fonts";
import Button from "./ui/Button";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function Header() {
  const { ref: sentinelRef, inView } = useInView({
    threshold: 0,
    rootMargin: "150px 0px 0px 0px",
  });

  const headerBaseClasses =
    "fixed top-0 z-50 flex w-full items-center justify-between py-4 transition-all duration-300 sm:px-5 lg:px-10 2xl:px-60";

  const headerStyle = inView ? "bg-transparent text-white" : "bg-[#2A354F]";

  return (
    <>
      <div ref={sentinelRef} className="h-[1px]"></div>
      <header className={`${headerBaseClasses} ${headerStyle}`}>
        <Link href="#">
          <Image
            className="h-[50px]"
            alt="Learning World logo"
            src="/logo.png"
            width={211}
            height={50}
          />
        </Link>

        <nav className="absolute top-1/2 left-1/2 -translate-1/2 max-xl:hidden">
          <ul
            className={`flex justify-center text-base text-white sm:gap-0 lg:gap-3 2xl:gap-5 ${inter400.className}`}
          >
            <li>
              <Link className="inline-block px-4 py-2" href="#why">
                Benefit
              </Link>
            </li>
            <li>
              <Link className="inline-block px-4 py-2" href="#">
                Learning Blocks
              </Link>
            </li>
            <li>
              <Link className="inline-block px-4 py-2" href="#">
                How It Works
              </Link>
            </li>
            <li>
              <Link className="inline-block px-4 py-2" href="#">
                Reviews
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            className="bg-[rgba(255,255,255,0.3)] font-normal"
            type="primary"
            size="large"
          >
            Explore courses
          </Button>
          <Button type="primary" size="normal">
            Login
          </Button>
        </div>
      </header>
    </>
  );
}
