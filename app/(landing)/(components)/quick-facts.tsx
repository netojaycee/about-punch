"use client";
import { easeOut, motion } from "framer-motion";

const QuickFacts = () => {
  const facts = [
    { label: "Founded", value: "1973" },
    { label: "Daily Reach", value: "10M+" },
    { label: "Employees", value: "500+" },
    { label: "Editions", value: "3" },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const factVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section className="relative z-10 ">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-16">
        <div className="shadow rounded-2xl p-4 -mt-14 bg-white text-black dark:bg-black dark:text-white">
          <h3 className="text-sm font-semibold uppercase text-muted-foreground tracking-widest mb-6 text-center">
            Quick Facts
          </h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {facts.map((fact) => (
              <motion.div key={fact.label} variants={factVariants}>
                <p className="text-2xl md:text-4xl font-bold text-primary">
                  {fact.value}
                </p>
                <p className="text-muted-foreground mt-1">{fact.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;