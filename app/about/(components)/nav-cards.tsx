import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  {
    title: "Mission & Values",
    href: "/about/mission-values",
    description: "Our purpose and principles.",
  },
  {
    title: "Board of Directors",
    href: "/about/board-of-directors",
    description: "Meet our leadership.",
  },
  {
    title: "Management Team",
    href: "/about/management-team",
    description: "Our operational leaders.",
  },
  {
    title: "History & Milestones",
    href: "/about/history-milestones",
    description: "Our journey so far.",
  },
  {
    title: "CSR / Foundation",
    href: "/about/csr-foundation",
    description: "Our community impact.",
  },
  {
    title: "Press & Media Kit",
    href: "/about/press-media-kit",
    description: "For press and media inquiries.",
  },
  {
    title: "Careers",
    href: "/careers",
    description: "Join our team.",
  },
  {
    title: "Events",
    href: "/events",
    description: "See our latest events.",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with us.",
  },
];

const NavCards = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.title} passHref>
              <Card className="group h-full hover:border-primary transition-colors flex flex-col">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {link.title}
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                  <CardDescription>{link.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavCards;
