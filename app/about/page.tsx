
"use client";
import { easeOut, motion } from "framer-motion";
import QuickFacts from "../(landing)/(components)/quick-facts";
import Hero from "./(components)/hero";
import Introduction from "./(components)/introduction";
import NavCards from "./(components)/nav-cards";


const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const AboutPage = () => {
  return (
    <>
      <Hero />
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="container mx-auto max-w-screen-2xl px-4 md:px-16 py-10"
      >
        <Introduction />
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="container mx-auto max-w-screen-2xl px-4 md:px-16 py-10"
      >
        <QuickFacts />
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="container mx-auto max-w-screen-2xl px-4 md:px-16 py-10"
      >
        <NavCards />
      </motion.section>
    </>
  );
};

export default AboutPage;
