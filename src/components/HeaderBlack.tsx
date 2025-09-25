"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Button from "./ui/Button";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import NotificationIcon from "./icons/profile/NotificationIcon";
import MenuIcon from "./icons/profile/MenuIcon";
import HeaderMenuModal from "./HeaderMenuModal";
import router from "next/router";

export default function Header() {
  const [hasBeenInViewChecked, setHasBeenInViewChecked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(true);

  const { ref: sentinelRef, inView } = useInView({
    threshold: 0,
    rootMargin: "-150px 0px 0px 0px",
    triggerOnce: false,
  });

  useEffect(() => {
    setHasBeenInViewChecked(true);
  }, [inView]);

  useEffect(() => {
    const user =
      typeof window !== "undefined" ? localStorage.getItem("user") : null;
    setIsAuthenticated(!!user);
  }, []);

  const headerBaseClasses =
    "fixed top-0 z-50 flex w-full items-center justify-between py-4 transition-all duration-300 sm:px-5 lg:px-10 2xl:px-60";

  const headerStyle =
    !hasBeenInViewChecked || inView
      ? "bg-transparent text-white"
      : "bg-[#2A354F]";

  if (isAuthenticated === null) return null;

  return (
    <>
      <div ref={sentinelRef} className="h-[1px]"></div>
      <header className={`${headerBaseClasses} ${headerStyle}`}>
        {/* Logo Section */}
        <Link href="/">
          <div className="flex items-center">
            <div className="relative ml-[50px] h-[50px] w-[50px]">
              <Image
                src="/logo.png"
                alt="Learning World Logo"
                fill
                className="scale-295 object-contain"
                priority
              />
            </div>
          </div>
        </Link>

        {/* Navigation and Buttons Section */}
        <div className="relative flex items-center gap-4">
          <Button
            onClick={() => router.replace("/courses")}
            className="bg-[rgba(255,255,255,0.3)] font-normal text-white"
            btnType="primary"
            size="large"
            content="text"
          >
            Explore courses
          </Button>

          <Button
            size="normal"
            content="icon"
            btnType="text_btn"
            className="text-white"
            icon={<NotificationIcon color={"white"} />}
          />

          <Button
            size="normal"
            content="icon"
            btnType="outline"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
            icon={<MenuIcon />}
          />

          <HeaderMenuModal
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          />
        </div>
      </header>
    </>
  );
}
