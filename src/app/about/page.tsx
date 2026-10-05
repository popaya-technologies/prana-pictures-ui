import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import OurVision from "@/components/about/OurVision";
import OurValues from "@/components/about/OurValues";
import OurTeam from "@/components/about/OurTeam";
import AboutCTA from "@/components/about/AboutCTA";


export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <AboutHero />
        <WhoWeAre />
        <OurVision />
        <OurValues />
        <OurTeam />
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}