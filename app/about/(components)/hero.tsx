import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[400px] flex items-center justify-center text-center text-white">
      <Image
        src="/images/about-hero.jpg"
        alt="About Punch"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 space-y-6 px-4">
        <h1 className="text-5xl md:text-6xl font-bold">
          About Punch Nigeria Limited
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Nigeria’s most widely known and respected news brand.
        </p>
      </div>
    </section>
  );
};

export default Hero;
