import React from "react";
import FooterIcon from "@/components/icons/FooterIcon";
import FacebookIcon from "@/components/icons/social-media/FacebookIcon";
import InstagramIcon from "@/components/icons/social-media/InstagramIcon";
import LinkedInIcon from "@/components/icons/social-media/LinkedInIcon";
import TwitterIcon from "@/components/icons/social-media/TwitterIcon";
import YoutubeIcon from "@/components/icons/social-media/YoutubeIcon";
import Button from "@/components/ui/Button";
import { inter400, inter700 } from "@/styles/fonts";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("HomePage.footer");

  return (
    <footer className="relative grid grid-cols-[1fr_2fr] gap-y-19 overflow-hidden bg-[#2A354F] pt-21 pb-12 sm:gap-x-10 sm:pr-25 sm:pl-10 lg:gap-x-40 lg:pr-100 lg:pl-20 2xl:gap-x-80 2xl:pr-150 2xl:pl-60">
      <div>
        <h2
          className={`mb-[22px] text-[35px] text-white ${inter700.className} leading-[120%]`}
        >
          {t("companyName")}
        </h2>

        <address
          className={`${inter400.className} mb-9 flex flex-col gap-[22px] text-lg leading-[120%] text-white not-italic`}
        >
          <div>
            {t("address.street")} <br />
            {t("address.city")} <br />
          </div>
          <a href={`mailto:${t("contact.email")}`}>{t("contact.email")}</a>
          <a href={`tel:${t("contact.phone")}`}>{t("contact.phone")}</a>
        </address>

        <ul className="flex gap-3">
          <li>
            <a href="#" aria-label="Facebook">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="#" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Twitter">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="#" aria-label="YouTube">
              <YoutubeIcon />
            </a>
          </li>
        </ul>
      </div>

      <div>
        <nav>
          <p
            className={`mb-8 ${inter700.className} text-[23px] leading-[120%] text-white`}
          >
            {t("information.title")}
          </p>

          <ul>
            <li>
              <Button
                className="pl-0 text-white"
                to="#"
                type="text_btn"
                size="normal"
                content="text"
              >
                {t("information.links.home")}
              </Button>
            </li>
            <li>
              <Button
                className="pl-0 text-white"
                to="#why"
                type="text_btn"
                size="normal"
                content="text"
              >
                {t("information.links.benefit")}
              </Button>
            </li>
            <li>
              <Button
                className="pl-0 text-white"
                to="#education"
                type="text_btn"
                size="normal"
                content="text"
              >
                {t("information.links.learningBlocks")}
              </Button>
            </li>
            <li>
              <Button
                className="pl-0 text-white"
                to="#how"
                type="text_btn"
                size="normal"
                content="text"
              >
                {t("information.links.advantages")}
              </Button>
            </li>
            <li>
              <Button
                className="pl-0 text-white"
                to="#contact"
                type="text_btn"
                size="normal"
                content="text"
              >
                {t("information.links.contact")}
              </Button>
            </li>
          </ul>
        </nav>
      </div>

      <p
        className={`text-base ${inter400.className} leading-[120%] text-white`}
      >
        &copy; <span>{t("copyright")}</span>
      </p>
      <p
        className={`${inter400.className} text-base leading-[120%] text-white`}
      >
        {t("legal")}
      </p>

      <div className="absolute -top-10 right-0">
        <FooterIcon />
      </div>
    </footer>
  );
}
