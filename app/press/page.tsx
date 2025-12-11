import ContactInfo from "./(components)/contact-info";
import Hero from "./(components)/hero";
import LatestNews from "./(components)/latest-news";
import MediaAssets from "./(components)/media-assets";
import PressReleases from "./(components)/press-releases";

const PressPage = () => {
  return (
    <>
      <Hero />
      <LatestNews />
      <PressReleases />
      <MediaAssets />
      <ContactInfo />
    </>
  );
};

export default PressPage;
