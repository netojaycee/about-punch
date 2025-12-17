"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { easeOut, motion } from "framer-motion";

const awards = [
  "Newspaper of the Year - 2022",
  "Best Online News Platform - 2021",
  "Reporter of the Year - 2020",
  "Most Courageous Report - 2019",
  "Ethical Journalism Award - 2018",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const Awards = () => {
  return (
    <section className="py-20 bg-linear-to-br from-[#fffbe6] via-white to-[#fff0f0]">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary drop-shadow-sm">
          Awards & Recognition
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px rgba(255,214,0,0.10)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Card className="bg-white/90 dark:bg-black/80 border-none shadow-lg rounded-2xl transition-all">
                <CardHeader className="flex-row items-center gap-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-[#FFD600] to-[#E53935] shadow text-white">
                    <Trophy className="w-7 h-7" />
                  </span>
                  <CardTitle className="text-lg font-semibold text-primary drop-shadow-sm">
                    {award}
                  </CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
