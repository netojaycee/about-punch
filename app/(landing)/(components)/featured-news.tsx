import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const featuredNews = [
  {
    image: "/images/news-1.jpg",
    title: "Breaking: New Policy Changes Impacting the Nation",
    description: "A new policy has been announced that will have wide-ranging effects on the economy and society.",
    href: "/news/new-policy-changes",
  },
  {
    image: "/images/news-2.jpg",
    title: "Tech Innovations on the Rise in Africa",
    description: "The African tech scene is booming with new startups and innovations that are changing the continent.",
    href: "/news/tech-innovations-africa",
  },
  {
    image: "/images/news-3.jpg",
    title: "The Future of Renewable Energy in Nigeria",
    description: "Nigeria is making significant strides in renewable energy, with new projects and investments paving the way for a greener future.",
    href: "/news/renewable-energy-nigeria",
  },
];

const FeaturedNews = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto max-w-screen-xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredNews.map((news) => (
            <Card key={news.title}>
              <CardHeader className="p-0">
                <Image
                  src={news.image}
                  alt={news.title}
                  width={400}
                  height={250}
                  className="rounded-t-lg object-cover w-full h-48"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle>{news.title}</CardTitle>
                <p className="text-muted-foreground mt-2">{news.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="link" className="p-0">
                  <Link href={news.href}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
