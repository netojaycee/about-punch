import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const MissionVisionCard = () => {
  return (
    <Link href="/about/mission-values">
      <Card className="bg-white group  transition-colors border-none shadow rounded">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">Mission & Vision</CardTitle>
              <CardDescription>Our purpose and future aspirations</CardDescription>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};

const ValuesCard = () => {
  return (
    <Link href="/about/mission-values#values">
      <Card className="bg-white group transition-colors border-none shadow rounded">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">Values</CardTitle>
              <CardDescription>The core principles we uphold</CardDescription>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};


const InfoCards = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-16">
        <div className="grid md:grid-cols-2 gap-8">
          <MissionVisionCard />
          <ValuesCard />
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
