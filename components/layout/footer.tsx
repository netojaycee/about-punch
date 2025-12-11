import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t">
      <div className="container mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              PUNCH is a Nigerian multimedia company that publishes newspapers,
              magazines and digital editions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div className="space-y-4 text-sm">
              <p className="font-semibold text-foreground">About Us</p>
              <nav className="flex flex-col space-y-2">
                <Link href="/about" className="text-muted-foreground hover:text-primary">Our Company</Link>
                <Link href="/about/mission-values" className="text-muted-foreground hover:text-primary">Mission & Values</Link>
                <Link href="/about/board-of-directors" className="text-muted-foreground hover:text-primary">Board</Link>
                <Link href="/about/management-team" className="text-muted-foreground hover:text-primary">Management</Link>
                <Link href="/about/history-milestones" className="text-muted-foreground hover:text-primary">History</Link>
              </nav>
            </div>

            <div className="space-y-4 text-sm">
              <p className="font-semibold text-foreground">Legal</p>
              <nav className="flex flex-col space-y-2">
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">Terms of Service</Link>
                <Link href="/editorial-standards" className="text-muted-foreground hover:text-primary">Editorial Standards</Link>
                <Link href="/about/press-media-kit" className="text-muted-foreground hover:text-primary">Press Kit</Link>
              </nav>
            </div>

            <div className="space-y-4 text-sm">
              <p className="font-semibold text-foreground">Stay Updated</p>
              <p className="text-muted-foreground">
                Subscribe to our newsletter to get the latest news.
              </p>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Email" />
                <Button type="submit">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Punch Nigeria Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
