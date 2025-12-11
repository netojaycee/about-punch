import FeaturedNews from "@/app/(landing)/(components)/featured-news";
import Hero from "@/app/(landing)/(components)/hero";
import Newsletter from "@/app/(landing)/(components)/newsletter";
import Values from "./(components)/values";

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <FeaturedNews />
      <Newsletter />
    </>
  );
}
