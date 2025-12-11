import CsrCard from "./(components)/csr-card";
import Hero from "@/app/(landing)/(components)/hero";
import InfoCards from "./(components)/info-cards";
import Leadership from "./(components)/leadership";
import Milestones from "./(components)/milestones";
import QuickFacts from "./(components)/quick-facts";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickFacts />
      <InfoCards />
      <Leadership />
      <CsrCard />
      <Milestones />
    </>
  );
}
