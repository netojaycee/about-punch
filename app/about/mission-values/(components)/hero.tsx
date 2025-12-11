import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[400px] flex items-center justify-center text-center text-white">
      <Image
        src="/images/mission-hero.jpg"
        alt="Mission and Values"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 space-y-6 px-4">
        <h1 className="text-5xl md:text-6xl font-bold">Mission & Values</h1>
      </div>
    </section>
  );
};

export default Hero;
