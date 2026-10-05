import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PolicyPage, { type PolicySection } from "@/components/policy/PolicyPage";

const sections: PolicySection[] = [
  {
    title: "Our commitment",
    body: "Prana Pictures aims to respect the privacy of visitors and handle personal information with care. This draft describes the intended approach for information shared through this website.",
  },
  {
    title: "Information access",
    body: "Most pages can be viewed without submitting personal information. Information may be collected when you choose to contact us or use a form on the site.",
  },
  {
    title: "Information you provide",
    body: "A message may include details such as your name, email address, phone number and the information you choose to include in your inquiry.",
  },
  {
    title: "How information is used",
    body: "Information submitted through the website may be used to respond to your inquiry, communicate about a project or maintain business correspondence. It should not be used for unrelated purposes without an appropriate basis.",
  },
  {
    title: "Reasonable care",
    body: "Prana Pictures intends to take reasonable steps to protect information received through this website. No internet transmission or storage method can be guaranteed to be completely secure.",
  },
  {
    title: "Contact",
    body: "For questions about privacy or this draft policy, contact inquiries@pranapictures.com. Final retention, sharing and rights details should be confirmed before publication.",
  },
];

export default function LegalPage() {
  return (
    <>
      <Header />
      <main>
        <PolicyPage
          title="Privacy Policy"
          intro="Please read this privacy statement before using this website or sharing personal information with Prana Pictures."
          sections={sections}
          page="legal"
          relatedPage="disclaimer"
          relatedTitle="Disclaimer"
        />
      </main>
      <Footer />
    </>
  );
}