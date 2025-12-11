import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Briefcase, Coffee, Heart, Users } from "lucide-react";

const cultureItems = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Collaboration",
    description: "We foster a collaborative environment where ideas flourish.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Professional Growth",
    description:
      "We are committed to the continuous learning and development of our team.",
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Work-Life Balance",
    description:
      "We believe in a healthy work-life balance to ensure our team's well-being.",
  },
  {
    icon: <Coffee className="w-8 h-8 text-primary" />,
    title: "Inclusive Culture",
    description:
      "We celebrate diversity and are committed to creating an inclusive environment for all employees.",
  },
];

const Culture = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Work Culture
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cultureItems.map((item) => (
            <Card key={item.title} className="flex items-start p-6">
              <div className="mr-6 shrink-0">{item.icon}</div>
              <div>
                <CardTitle>{item.title}</CardTitle>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Culture;
