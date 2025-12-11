import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative md:h-[80vh] text-white pt-20">
      <Image
        src="/images/hero-bg.webp"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/40 to-transparent z-10" />
      <div className="relative z-20 flex flex-col justify-end h-full pb-20 container max-w-screen-2xl mx-auto px-4 md:px-16">
        <div className="max-w-3xl space-y-3">
          <h1 className="text-2xl md:text-5xl font-bold leading-tight">
            Informing and empowering a diverse audience for more than five
            decades
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
