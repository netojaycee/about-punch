import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const awards = [
  "Newspaper of the Year - 2022",
  "Best Online News Platform - 2021",
  "Reporter of the Year - 2020",
  "Most Courageous Report - 2019",
  "Ethical Journalism Award - 2018",
];

const Awards = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Awards & Recognition
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award) => (
            <Card key={award}>
              <CardHeader className="flex-row items-center gap-4">
                <Trophy className="w-8 h-8 text-primary" />
                <CardTitle>{award}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
