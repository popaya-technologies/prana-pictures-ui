import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import ContactStory from "@/components/contact/ContactStory";
import ContactNotice from "@/components/contact/ContactNotice";
import { getPageImages } from "@/lib/api/page-images";

// Rendered on each request so image changes in the admin panel show at once.
export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const pageImages = await getPageImages();

  return (
    <>
      <Header />

      <main>
        <ContactHero image={pageImages.contact.hero} />
        <ContactSection />
        <ContactStory image={pageImages.contact.story} />
        <ContactNotice />
      </main>

      <Footer />
    </>
  );
}