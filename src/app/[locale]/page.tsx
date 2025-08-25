import Header from "@/components/Header";
import Main from "@/components/Main";
import LandingPageGradient from "@/components/ui/LandingPageGradient";

export default function HomePage() {
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
