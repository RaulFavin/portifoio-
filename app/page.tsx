import { AboutMe } from "./components/AboutMe";
import { AboveTheFold } from "./components/AboveTheFold";
import { CarrierSection } from "./components/CarrierSection";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <AboveTheFold />
      <AboutMe />
      <CarrierSection />
    </main>
  );  
}
