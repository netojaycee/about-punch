import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const executives = [
  {
    name: "Adeyeye Joseph",
    title: "Managing Director/Editor-in-Chief",
    image: "/images/management/adeyeye-joseph.jpg",
  },
  {
    name: "Ademola Oni",
    title: "Editor, Daily",
    image: "/images/management/ademola-oni.jpg",
  },
  {
    name: "Bayo Akinloye",
    title: "Editor, Weekend",
    image: "/images/management/bayo-akinloye.jpg",
  },
  {
    name: "Emeka Nwachukwu",
    title: "Controller, Publications",
    image: "/images/management/emeka-nwachukwu.jpg",
  },
];

const departmentHeads = [
  {
    name: "Olufolakemi Ola-Ojo",
    title: "Head, Human Resources",
    image: "/images/management/olufolakemi-ola-ojo.jpg",
  },
  {
    name: "Oladimeji Rahmon",
    title: "Head, Finance",
    image: "/images/management/oladimeji-rahmon.jpg",
  },
  {
    name: "Val Aigbovo",
    title: "General Manager, Digital & Publications",
    image: "/images/management/val-aigbovo.jpg",
  },
];

const Management = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Executive Management</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {executives.map((executive) => (
            <Card
              key={executive.name}
              className="overflow-hidden rounded-2xl p-2"
            >
              <div className="relative h-48 w-full bg-muted">
                <Image
                  src={executive.image}
                  alt={executive.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 20vw"
                  priority
                />
              </div>
              <CardHeader className="px-2">
                <CardTitle>{executive.name}</CardTitle>
                <p className="text-muted-foreground">{executive.title}</p>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20 mb-12">
          <h2 className="text-4xl font-bold">Department Heads</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {departmentHeads.map((member) => (
            <Card key={member.name} className="overflow-hidden rounded-2xl p-2">
              <div className="relative h-48 w-full bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 20vw"
                  priority
                />
              </div>
              <CardHeader className="px-2">
                <CardTitle>{member.name}</CardTitle>
                <p className="text-muted-foreground">{member.title}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Management;
