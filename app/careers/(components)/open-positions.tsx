import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";

const positions = [
  {
    title: "Senior Journalist",
    location: "Lagos, Nigeria",
    type: "Full-time",
  },
  {
    title: "Digital Marketing Specialist",
    location: "Abuja, Nigeria",
    type: "Full-time",
  },
  {
    title: "Frontend Developer (Next.js)",
    location: "Remote",
    type: "Contract",
  },
  {
    title: "Graphic Designer",
    location: "Lagos, Nigeria",
    type: "Full-time",
  },
];

const OpenPositions = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Open Positions
        </h2>
        <div className="space-y-6">
          {positions.map((position) => (
            <Card key={position.title} className="hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-4 items-center p-6">
                <div className="md:col-span-3">
                  <CardTitle>{position.title}</CardTitle>
                  <div className="flex items-center text-muted-foreground text-sm mt-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    {position.location}
                    <span className="mx-2">|</span>
                    <span>{position.type}</span>
                  </div>
                </div>
                <div className="md:col-span-1 md:text-right mt-4 md:mt-0">
                  <Button>Apply Now</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <p className="text-muted-foreground">
                Don&apos;t see a role that fits?{" "}
                <a href="mailto:careers@punchng.com" className="text-primary hover:underline">
                    Send us your resume
                </a>
                .
            </p>
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
