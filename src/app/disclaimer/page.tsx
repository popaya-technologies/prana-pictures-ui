import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PolicyPage, { type PolicySection } from "@/components/policy/PolicyPage";

const sections: PolicySection[] = [
  {
    title: "Personal use",
    body: "Visitors may view, print and store copies of publicly available website information for personal, non-commercial use.",
  },
  {
    title: "No redistribution",
    body: "Text, images, film materials and graphics may not be redistributed, republished, modified or hosted elsewhere without prior written permission from Prana Pictures.",
  },
  {
    title: "Commercial use",
    body: "No part of this website may be sold, used for commercial gain or incorporated into another product or publication without written authorization.",
  },
  {
    title: "Information accuracy",
    body: "Website information is provided for general purposes and may change. Please contact Prana Pictures to confirm details before relying on them.",
  },
  {
    title: "Copyright ownership",
    body: "Prana Pictures, LLP and Prana Pictures USA LLC retain rights to their original text, images, video and marks unless otherwise identified. Third-party materials remain the property of their respective owners.",
  },
  {
    title: "Recruitment and casting",
    body: "Prana Pictures does not conduct recruitment or casting through unsolicited requests for money or sensitive financial information. Verify any opportunity through the official contact details on this website.",
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main>
        <PolicyPage
          title="Disclaimer"
          intro="Please review the limitations and restrictions that apply when using this website and related Prana Pictures sites."
          sections={sections}
          page="disclaimer"
          relatedPage="legal"
          relatedTitle="Legal & Privacy"
        />
      </main>
      <Footer />
    </>
  );
}