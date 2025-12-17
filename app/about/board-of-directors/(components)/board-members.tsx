import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const members = [
  {
    name: "Chief Ajibola Ogunshola",
    title: "Chairman",
    image: "/images/board/ajibola-ogunshola.jpg",
  },
  {
    name: "Mr. Wale Aboderin",
    title: "Chairman (Late)",
    image: "/images/board/wale-aboderin.jpg",
  },
  {
    name: "Mrs. Angela Emuwa",
    title: "Chairperson",
    image: "/images/board/angela-emuwa.jpg",
  },
  {
    name: "Mr. Adeyeye Joseph",
    title: "Managing Director",
    image: "/images/board/adeyeye-joseph.jpg",
  },
];

const BoardMembers = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member) => (
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

export default BoardMembers;
