import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

const events = [
  {
    title: "Annual Media Conference 2025",
    date: "December 15, 2025",
    location: "Eko Hotel, Lagos",
    image: "/images/events/event-1.jpg",
  },
  {
    title: "Digital Journalism Workshop",
    date: "January 20, 2026",
    location: "Online",
    image: "/images/events/event-2.jpg",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <CardTitle>{event.title}</CardTitle>
                <div className="flex items-center text-muted-foreground text-sm pt-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{event.date}</span>
                  <span className="mx-2">|</span>
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join industry leaders and experts to discuss the future of
                  media and journalism in Nigeria.
                </p>
              </CardContent>
              <CardFooter>
                <Button>Register Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
