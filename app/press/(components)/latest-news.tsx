import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const articles = [
  {
    title: "PUNCH Redefines Digital News in Nigeria",
    date: "October 28, 2025",
    image: "/images/news/news-1.jpg",
    excerpt:
      "With the launch of its new corporate website, PUNCH sets a new standard for digital journalism and user engagement in the region.",
  },
  {
    title: "A Look Inside the PUNCH Foundation's Latest Initiative",
    date: "October 22, 2025",
    image: "/images/news/news-2.jpg",
    excerpt:
      "The foundation's new program aims to equip 1,000 young Nigerians with critical digital skills for the modern workforce.",
  },
  {
    title: "PUNCH Celebrates a Half-Century of Journalistic Excellence",
    date: "October 15, 2025",
    image: "/images/news/news-3.jpg",
    excerpt:
      "Reflecting on 50 years of history, PUNCH reaffirms its commitment to truth, balance, and independence in reporting.",
  },
];

const LatestNews = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-screen-xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.title}>
              <div className="relative h-52 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
                <CardDescription>{article.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{article.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
