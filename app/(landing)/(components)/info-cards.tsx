"use client"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { easeOut, motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: easeOut } },
};

const CARD_GRADIENT =
  "bg-gradient-to-br from-[#FFD600]/30 via-white/80 to-[#E53935]/20"; // soft yellow to soft red

const MissionVisionCard = () => {
  return (
    <Link href="/about/mission-values">
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
        whileTap={{ scale: 0.98 }}
      >
        <Card className={`${CARD_GRADIENT} group transition-colors border-none shadow rounded-2xl`}>          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl">Mission & Vision</CardTitle>
                <CardDescription>Our purpose and future aspirations</CardDescription>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
          </CardHeader>
        </Card>
      </motion.div>
    </Link>
  );
};

const ValuesCard = () => {
  return (
    <Link href="/about/mission-values#values">
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
        whileTap={{ scale: 0.98 }}
      >
        <Card className={`${CARD_GRADIENT} group transition-colors border-none shadow rounded-2xl`}>          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl">Values</CardTitle>
                <CardDescription>The core principles we uphold</CardDescription>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
          </CardHeader>
        </Card>
      </motion.div>
    </Link>
  );
};

const InfoCards = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-16">
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
        >
          <MissionVisionCard />
          <ValuesCard />
        </motion.div>
      </div>
    </section>
  );
};

export default InfoCards;