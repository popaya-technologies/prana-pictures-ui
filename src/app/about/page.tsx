import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import OurVision from "@/components/about/OurVision";
import OurValues from "@/components/about/OurValues";
import OurTeam from "@/components/about/OurTeam";
import AboutCTA from "@/components/about/AboutCTA";
import { getPublicInformationBySlug } from "@/lib/api/information";
import { getPublicTeamMembers } from "@/lib/api/team";
import { getPageImages } from "@/lib/api/page-images";

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  // Starts in parallel with the requests below; never throws.
  const pageImagesPromise = getPageImages();

  const [informationResult, visionResult, teamResult] =
    await Promise.allSettled([
    getPublicInformationBySlug("about-us-who-we-are"),
    getPublicInformationBySlug("vision"),
    getPublicTeamMembers(),
  ]);

  const whoWeAre =
    informationResult.status === "fulfilled"
      ? informationResult.value
      : null;
  const teamMembers =
    teamResult.status === "fulfilled" ? teamResult.value : [];
  const vision =
    visionResult.status === "fulfilled" ? visionResult.value : null;

  // A page that is disabled (or deleted) in the admin panel comes back as
  // null (404): hide that section. If the API itself fails, keep showing the
  // built-in text so an outage doesn't leave gaps in the page.
  const showWhoWeAre = !(
    informationResult.status === "fulfilled" && informationResult.value === null
  );
  const showVision = !(
    visionResult.status === "fulfilled" && visionResult.value === null
  );
  const pageImages = await pageImagesPromise;

  if (informationResult.status === "rejected") {
    console.error(
      "Unable to load Who We Are information:",
      informationResult.reason,
    );
  }

  if (teamResult.status === "rejected") {
    console.error("Unable to load team members:", teamResult.reason);
  }

  if (visionResult.status === "rejected") {
    console.error("Unable to load Vision:", visionResult.reason);
  }

  return (
    <>
      <Header />

      <main>
        <AboutHero images={pageImages.about} />
        {showWhoWeAre && <WhoWeAre information={whoWeAre} />}
        {showVision && <OurVision information={vision} />}
        <OurValues />
        <OurTeam members={teamMembers} />
        <AboutCTA image={pageImages.about.cta} />
      </main>

      <Footer />
    </>
  );
}
