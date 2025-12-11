"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
// import { ModeToggle } from "../ui/mode-toggle";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/events", label: "Events" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isLandingPage) {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isLandingPage]);

  return (
    <header
      className={cn(
        "z-50 w-full",
        isLandingPage
          ? `fixed top-0 transition-all duration-300 ${
              scrolled
                ? "bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border/40"
                : "bg-transparent"
            }`
          : "sticky top-0 border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
      )}
    >
      <div className="container px-4 md:px-16 flex h-20 items-center justify-between max-w-screen-2xl">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors",
                  isLandingPage && !scrolled
                    ? "text-white/80 hover:text-white"
                    : "text-foreground/60 hover:text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* <ModeToggle /> */}
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu
                  className={cn(
                    "h-6 w-6",
                    isLandingPage && !scrolled
                      ? "text-white"
                      : "text-foreground"
                  )}
                />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-8">
                <Logo />
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
