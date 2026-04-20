import { AboutMe } from "./components/AboutMe";
import { AboveTheFold } from "./components/AboveTheFold";
import { CarrierSection } from "./components/CarrierSection";
import { ContactSection } from "./components/ContactSection";
import { EducationSection } from "./components/EducationSection";
import { Header } from "./components/Header";
import { LanguagesSection } from "./components/LanguagesSection";
import { SeasonalSection } from "./components/SeasonalSection";

export const metadata = {
  title: 'Raul Favin | Mixologist Portfolio',
  description: 'Discover the art of mixology through the portfolio of Raul Favin, a passionate and innovative mixologist. Explore his signature creations, seasonal cocktails, and unique approach to crafting unforgettable drinking experiences.',
}
export default function Home() {
  return (
    <main>
      <Header />
      <AboveTheFold />
      <AboutMe />
      <SeasonalSection />
      <CarrierSection />
      <EducationSection />
      <LanguagesSection />
      <ContactSection />
    </main>
  );  
}
