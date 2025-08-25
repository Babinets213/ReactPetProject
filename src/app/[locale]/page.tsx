import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Main from "@/components/Main";
import LandingPageGradient from "@/components/ui/LandingPageGradient";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <>
      <LandingPageGradient />
      <div className="relative">
        <Header />
        <Main />
        <footer></footer>
      </div>
    </>
  );
}
