"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { inter400 } from "@/styles/fonts";
import Button from "./ui/Button";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import ShoppingCartIcon from "./icons/ShoppingCartIcon";
import NotificationIcon from "./icons/profile/NotificationIcon";
import MenuIcon from "./icons/profile/MenuIcon";
import HeaderMenuModal from "./HeaderMenuModal";

export default function Header() {
  const [hasBeenInViewChecked, setHasBeenInViewChecked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const t = useTranslations("HomePage.header");
  const commonT = useTranslations("common");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const isCoursesPage = pathname.includes("/courses");
  const isProfilePage = pathname.includes("/profile");
  const isDashboardPage = pathname.includes("/dashboard");

  const { ref: sentinelRef, inView } = useInView({
    threshold: 0,
    rootMargin: "150px 0px 0px 0px",
    triggerOnce: false,
  });

  useEffect(() => {
    setHasBeenInViewChecked(true);
  }, [inView]);

  useEffect(() => {
    const user = localStorage.getItem("user");

    setIsAuthenticated(!!user);
  }, []);
  const headerBaseClasses =
    "fixed top-0 z-50 flex w-full items-center justify-between py-4 transition-all duration-300 sm:px-5 lg:px-10 2xl:px-60";

  const headerStyle =
    !hasBeenInViewChecked || inView
      ? "bg-transparent text-white"
      : "bg-[#2A354F]";

  const changeLanguage = function (locale: string) {
    router.push(pathname, { locale });
  };

  const linkStyle = inView && isCoursesPage ? "text-[#2A354F]" : "text-white";

  if (isAuthenticated === null) return null;

  if (isAuthenticated && (isProfilePage || isDashboardPage)) {
    return (
      <header className={`${headerBaseClasses} bg-[#2A354F]`}>
        <Link href="/">
          <Image
            className="h-[50px]"
            alt="Learning World logo"
            src={`/images/${commonT("logo")}`}
            width={211}
            height={50}
          />
        </Link>

        <nav className="relative flex items-center gap-4">
          <Button
            onClick={() => router.replace("/courses")}
            className="bg-[rgba(255,255,255,0.3)] font-normal"
            btnType="primary"
            size="large"
            content="text"
          >
            {t("buttons.explore")}
          </Button>

          <Button
            size="normal"
            content="icon"
            btnType="text_btn"
            icon={<NotificationIcon />}
          />

          <Button
            size="normal"
            content="icon"
            btnType="outline"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            icon={<MenuIcon />}
          />

          <HeaderMenuModal
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          />
        </nav>
      </header>
    );
  }

  return (
    <>
      <div ref={sentinelRef} className="h-[1px]"></div>
      <header className={`${headerBaseClasses} ${headerStyle}`}>
        <Link href="/">
          <Image
            className="h-[50px]"
            alt="Learning World logo"
            src={`/images/${commonT("logo")}`}
            width={211}
            height={50}
          />
        </Link>

        <nav className="absolute top-1/2 left-1/2 -translate-1/2 max-xl:hidden">
          <ul
            className={`flex justify-center text-base text-white sm:gap-0 lg:gap-3 2xl:gap-5 ${inter400.className}`}
          >
            <li>
              <Button
                className={linkStyle}
                to="#why"
                btnType="text_btn"
                size="normal"
                content="text"
              >
                {t("nav.benefit")}
              </Button>
            </li>
            <li>
              <Button
                className={linkStyle}
                to="#education"
                btnType="text_btn"
                size="normal"
                content="text"
              >
                {t("nav.education")}
              </Button>
            </li>
            <li>
              <Button
                className={linkStyle}
                to="#how"
                btnType="text_btn"
                size="normal"
                content="text"
              >
                {t("nav.howItWorks")}
              </Button>
            </li>
            <li>
              <Button
                className={linkStyle}
                to="#testimonial"
                btnType="text_btn"
                size="normal"
                content="text"
              >
                {t("nav.reviews")}
              </Button>
            </li>
          </ul>
        </nav>

        <div className="relative flex items-center gap-4">
          {!isCoursesPage ? (
            <Button
              onClick={() => router.replace("/courses")}
              className="bg-[rgba(255,255,255,0.3)] font-normal"
              btnType="primary"
              size="large"
              content="text"
            >
              {t("buttons.explore")}
            </Button>
          ) : (
            <Button
              size="normal"
              btnType="outline"
              content="icon"
              icon={<ShoppingCartIcon />}
            />
          )}

          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={locale}
            className={`rounded-sm px-4 py-2 text-xl ${inView && isCoursesPage ? "text-[#2A354F]" : "text-white"} focus:outline-none`}
          >
            <option value="de">{t("language.de")}</option>
            <option value="en">{t("language.en")}</option>
          </select>
          {isAuthenticated ? (
            <>
              <Button
                btnType="text_btn"
                size="normal"
                content="icon"
                icon={
                  <NotificationIcon
                    color={inView && isCoursesPage ? "#2A354F" : "white"}
                  />
                }
              />
              <Button
                size="normal"
                content="icon"
                btnType="outline"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                icon={<MenuIcon />}
              />
              <HeaderMenuModal
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
              />
            </>
          ) : (
            <Button
              to={`/${locale}/auth`}
              content="text"
              btnType="primary"
              size="normal"
            >
              {t("buttons.login")}
            </Button>
          )}
        </div>
      </header>
    </>
  );
}
