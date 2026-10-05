import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import SelectedFilms from "@/components/home/SelectedFilms";
import AboutSection from "@/components/home/AboutSection";
import AwardsStrip from "@/components/home/AwardsStrip";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <SelectedFilms />

        <AboutSection />

        <AwardsStrip />

        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}