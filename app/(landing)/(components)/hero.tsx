import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-center text-white">
      <Image
        src="/images/hero-bg.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute z-0 dark:invert"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 space-y-6 px-4">
        <h1 className="text-5xl md:text-7xl font-bold">
          Advancing Accountability and Inclusivity
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Punch is Nigeria&apos;s most widely known and respected news brand,
          committed to factual, actionable journalism.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/about">Learn More</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
