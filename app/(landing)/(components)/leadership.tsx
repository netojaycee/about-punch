import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const leadershipTeam = [
  {
    name: "Olufemi Olanipekun",
    title: "Chairman",
    image: "/images/leadership/olufemi-olanipekun.jpg",
  },
  {
    name: "Ngozi Okafor",
    title: "COO",
    image: "/images/leadership/ngozi-okafor.jpg",
  },
  {
    name: "Musa Ibrahim",
    title: "Executive Director",
    image: "/images/leadership/musa-ibrahim.jpg",
  },
];

const Leadership = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-16">
        <h2 className="text-3xl font-bold mb-2">Leadership</h2>
        <p className="text-muted-foreground mb-8">
          Meet the team shaping the future of PUNCH.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {leadershipTeam.map((leader) => (
            <Card key={leader.name} className="overflow-hidden rounded-2xl p-2">
              <div className="relative h-48 w-full bg-muted">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 20vw"
                  priority
                />
              </div>
              <CardHeader className="px-2">
                <CardTitle>{leader.name}</CardTitle>
                <p className="text-muted-foreground">{leader.title}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
