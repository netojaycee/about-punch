import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const releases = [
  {
    date: "October 26, 2025",
    title: "PUNCH Launches New Digital Experience",
    excerpt:
      "PUNCH Nigeria Limited announces the launch of its newly redesigned website, offering a more engaging and user-friendly experience for its readers.",
  },
  {
    date: "September 15, 2025",
    title: "PUNCH Wins 'Newspaper of the Year' Award",
    excerpt:
      "For the third consecutive year, PUNCH has been named 'Newspaper of the Year' at the annual Media Excellence Awards.",
  },
  {
    date: "August 01, 2025",
    title: "New Foundation to Support Young Journalists",
    excerpt:
      "The PUNCH Foundation is launched to provide scholarships and mentorship for aspiring journalists across Nigeria.",
  },
];

const PressReleases = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Press Releases
        </h2>
        <div className="space-y-8">
          {releases.map((release) => (
            <Card key={release.title}>
              <CardHeader>
                <CardTitle>{release.title}</CardTitle>
                <CardDescription>{release.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{release.excerpt}</p>
                <Button variant="link" className="p-0">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressReleases;
