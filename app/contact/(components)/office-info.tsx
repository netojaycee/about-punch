import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Mail, Phone } from "lucide-react";

const officeLocations = [
  {
    name: "Lagos Headquarters",
    address: "PUNCH Place, Km 14, Lagos-Ibadan Expressway, Magboro, Ogun State",
    phone: "+234 (1) 234 5678",
    email: "contact@punchng.com",
  },
  {
    name: "Abuja Office",
    address: "Suite 12, Block A, XYZ Plaza, Central Business District, Abuja",
    phone: "+234 (9) 876 5432",
    email: "abuja.office@punchng.com",
  },
];

const OfficeInfo = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Offices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {officeLocations.map((office) => (
            <Card key={office.name}>
              <CardHeader>
                <CardTitle>{office.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Building className="w-5 h-5 mr-3 mt-1 shrink-0 text-muted-foreground" />
                  <p>{office.address}</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 shrink-0 text-muted-foreground" />
                  <a href={`tel:${office.phone}`} className="hover:text-primary">
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 shrink-0 text-muted-foreground" />
                  <a
                    href={`mailto:${office.email}`}
                    className="hover:text-primary"
                  >
                    {office.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeInfo;
