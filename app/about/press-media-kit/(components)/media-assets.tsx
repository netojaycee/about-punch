import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import Image from "next/image";

const assets = [
  {
    title: "Company Logo (PNG)",
    image: "/logo.png",
    downloadLink: "/logo.png",
  },
  {
    title: "Brand Guidelines (PDF)",
    image: "/images/press/brand-guidelines.jpg",
    downloadLink: "#",
  },
  {
    title: "Executive Headshots (ZIP)",
    image: "/images/press/headshots.jpg",
    downloadLink: "#",
  },
];

const MediaAssets = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Media Assets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {assets.map((asset) => (
            <Card key={asset.title}>
              <div className="relative h-40 w-full bg-muted flex items-center justify-center">
                <Image
                  src={asset.image}
                  alt={asset.title}
                  width={asset.title.includes("Logo") ? 120 : 200}
                  height={asset.title.includes("Logo") ? 40 : 120}
                  objectFit="contain"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{asset.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <a href={asset.downloadLink} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaAssets;
