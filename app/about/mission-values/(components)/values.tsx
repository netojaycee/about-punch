import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {    Scale, Flag, Star, Target, TrendingUp } from "lucide-react";

const values = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Truth",
    description: "We believe in the veracity of every story we tell.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Reliability",
    description: "We believe the expects of every story we tell.",
  },
  {
    icon: <Flag className="w-8 h-8 text-primary" />,
    title: "Independence",
    description: "We autocorrecting balance fistulae.",
  },
  {
    icon: <Scale className="w-8 h-8 text-primary" />,
    title: "Balance",
    description: "We eliminate light accuracy.",
  },
  {
    icon: <Star className="w-8 h-8 text-primary" />,
    title: "Excellence",
    description: "We professionalize efficiency.",
  },
];

const Values = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {values.map((value) => (
            <Card key={value.title} className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  {value.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle>{value.title}</CardTitle>
                <p className="text-muted-foreground mt-2">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
