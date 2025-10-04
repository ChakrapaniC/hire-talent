import FreelancerDomains from "@/componets/NewHire/FreelanceDomain";
import FreelancerHero from "@/componets/NewHire/FreelanceHero";
import HiringJourneyFlow from "@/componets/NewHire/HiringJourney";
import OurPartners from "@/componets/OurPartners/OurPartners";

export default function Home() {
  return (
    <>
    <FreelancerHero/>
    <FreelancerDomains/>
    <HiringJourneyFlow/>
    <OurPartners isHomepage={true}/>
    </>
  );
}
