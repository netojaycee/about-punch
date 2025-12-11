import { Card, CardContent } from "@/components/ui/card";
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
            <Card key={member.name}>
              <div className="relative h-60 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
