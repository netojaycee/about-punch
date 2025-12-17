"use client";
import Image from "next/image";
import { easeOut, motion } from "framer-motion";

const heroVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOut },
  },
};

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
};

const bgVariants = {
  initial: { scale: 1.08, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: easeOut },
  },
};

const Hero = () => {
  return (
    <section className="relative md:h-[80vh] text-white pt-20 overflow-hidden">
      <motion.div
        initial="initial"
        animate="animate"
        variants={bgVariants}
        className="absolute z-0 inset-0"
      >
        <Image
          src="/images/hero-bg.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
          priority
        />
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={overlayVariants}
        className="absolute inset-0 bg-black/70 z-10"
      />
      <div className="relative z-20 flex flex-col justify-end h-full pb-20 container max-w-screen-2xl mx-auto px-4 md:px-16">
        <motion.div
          initial="initial"
          animate="animate"
          variants={heroVariants}
          className="max-w-3xl space-y-3"
        >
          <h1 className="text-2xl md:text-5xl font-bold leading-tight">
            Informing and empowering a diverse audience for more than five
            decades
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
