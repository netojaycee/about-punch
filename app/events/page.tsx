import Hero from "./(components)/hero";
import UpcomingEvents from "./(components)/upcoming-events";
import PastEvents from "./(components)/past-events";

const EventsPage = () => {
  return (
    <>
      <Hero />
      <UpcomingEvents />
      <PastEvents />
    </>
  );
};

export default EventsPage;
