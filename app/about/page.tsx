import Hero from "./(components)/hero";
import Introduction from "./(components)/introduction";
import NavCards from "./(components)/nav-cards";
import QuickFacts from "./(components)/quick-facts";

const AboutPage = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <QuickFacts />
      <NavCards />
    </>
  );
};

export default AboutPage;
