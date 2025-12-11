import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const events = [
  {
    title: "50th Anniversary Gala",
    year: "2023",
    image: "/images/events/past-event-1.jpg",
  },
  {
    title: "Investigative Journalism Masterclass",
    year: "2022",
    image: "/images/events/past-event-2.jpg",
  },
  {
    title: "Photojournalism Exhibition",
    year: "2021",
    image: "/images/events/past-event-3.jpg",
  },
];

const PastEvents = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.title}>
              <div className="relative h-52 w-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{event.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{event.year}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
