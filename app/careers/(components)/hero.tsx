import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[400px] flex items-center justify-center text-center text-white">
      <Image
        src="/images/careers-hero.jpg"
        alt="Careers at PUNCH"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 space-y-6 px-4">
        <h1 className="text-5xl md:text-6xl font-bold">Join Our Team</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Be a part of a dynamic and innovative team dedicated to shaping the
          future of media in Nigeria.
        </p>
      </div>
    </section>
  );
};

export default Hero;
