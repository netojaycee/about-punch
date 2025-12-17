// import CsrCard from "./(components)/csr-card";
import Hero from "@/app/(landing)/(components)/hero";
import InfoCards from "./(components)/info-cards";
import Leadership from "./(components)/leadership";
import Milestones from "./(components)/milestones";
import QuickFacts from "./(components)/quick-facts";

 export const milestones = [
  {
    year: "1973",
    title: "Founded",
    description:
      "PUNCH is established, setting a new standard for Nigerian journalism.",
    image: "/images/milestones/1.jpg",
  },
  {
    year: "1995",
    title: "National Expansion",
    description:
      "Expanded operations nationwide, becoming a truly national newspaper.",
    image: "/images/milestones/2.jpg",
  },
  {
    year: "2003",
    title: "Online Launch",
    description:
      "Launched Punchng.com, bringing our trusted journalism to a global audience.",
    image: "/images/milestones/3.jpg",
  },
  {
    year: "2020",
    title: "Digital First",
    description:
      "Adopted a digital-first strategy, innovating in mobile and social media.",
    image: "/images/milestones/4.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <QuickFacts />
      <InfoCards />
      <Leadership />
      {/* <CsrCard /> */}
      <Milestones milestones={milestones} />
    </>
  );
}
