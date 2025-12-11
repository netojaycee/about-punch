import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const initiatives = [
  {
    title: "Education Support",
    description:
      "Providing scholarships and educational materials to underprivileged students.",
    image: "/images/csr/education.jpg",
  },
  {
    title: "Healthcare Outreach",
    description:
      "Organizing free medical check-ups and health awareness campaigns in rural communities.",
    image: "/images/csr/healthcare.jpg",
  },
  {
    title: "Environmental Sustainability",
    description:
      "Leading tree planting exercises and promoting recycling programs.",
    image: "/images/csr/environment.jpg",
  },
];

const Initiatives = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Initiatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((item) => (
            <Card key={item.title}>
              <div className="relative h-52 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
