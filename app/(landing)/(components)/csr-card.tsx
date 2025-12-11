import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const CsrCard = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-16">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* CSR Foundation Card */}
          <div className="lg:col-span-1">
            <Card className="bg-red-500 text-white rounded">
              <CardHeader>
                <CardTitle className="text-2xl">CSR Foundation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-red-100 mb-6">
                  Committed to community development and social responsibility.
                </CardDescription>
                <Button asChild className="bg-yellow-400  rounded">
                  <Link href="/about/csr-foundation">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Milestones and Awards Section */}
          <div className="lg:col-span-2 h-full p-4 border rounded">
            {/* Placeholder for new milestone design */}
               coming soon
          </div>
        </div>
      </div>
    </section>
  );
};

export default CsrCard;
