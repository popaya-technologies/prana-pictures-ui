import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import ContactStory from "@/components/contact/ContactStory";
import ContactNotice from "@/components/contact/ContactNotice";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <ContactHero />
        <ContactSection />
        <ContactStory />
        <ContactNotice />
      </main>

      <Footer />
    </>
  );
}