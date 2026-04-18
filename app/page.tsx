import { AboutMe } from "./components/AboutMe";
import { AboveTheFold } from "./components/AboveTheFold";
import { CarrierSection } from "./components/CarrierSection";
import { ContactSection } from "./components/ContactSection";
import { EducationSection } from "./components/EducationSection";
import { Header } from "./components/Header";
import { LanguagesSection } from "./components/LanguagesSection";

export default function Home() {
  return (
    <main>
      <Header />
      <AboveTheFold />
      <AboutMe />
      <CarrierSection />
      <EducationSection />
      <LanguagesSection />
      <ContactSection />
    </main>
  );  
}
