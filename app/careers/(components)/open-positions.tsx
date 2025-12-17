"use client";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { MapPin, Search } from "lucide-react";
import { easeOut, motion } from "framer-motion";

const positions: { title: string; location: string; type: string }[] = [
  // {
  //   title: "Senior Journalist",
  //   location: "Lagos, Nigeria",
  //   type: "Full-time",
  // },
  // {
  //   title: "Digital Marketing Specialist",
  //   location: "Abuja, Nigeria",
  //   type: "Full-time",
  // },
  // {
  //   title: "Frontend Developer (Next.js)",
  //   location: "Remote",
  //   type: "Contract",
  // },
  // {
  //   title: "Graphic Designer",
  //   location: "Lagos, Nigeria",
  //   type: "Full-time",
  // },
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

const NoPositions = () => (
  <motion.div
    className="flex flex-col items-center justify-center py-16"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, ease: easeOut }}
  >
    <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#FFD600] to-[#E53935] shadow text-white mb-6">
      <Search className="w-10 h-10" />
    </span>
    <h3 className="text-2xl font-bold mb-2 text-primary">No Open Positions</h3>
    <p className="text-muted-foreground mb-4 text-center max-w-md">
      We&apos;re not hiring right now, but we&apos;re always looking for
      talented people. Check back soon or send us your resume!
    </p>
    <Button asChild>
      <a href="mailto:careers@punchng.com">Send Resume</a>
    </Button>
  </motion.div>
);

const OpenPositions = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Open Positions</h2>
        {positions.length === 0 ? (
          <NoPositions />
        ) : (
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {positions.map((position) => (
              <motion.div
                key={position.title}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 32px rgba(255,214,0,0.10)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <Card className="bg-white/90 dark:bg-black/80 border-none shadow-lg rounded-2xl transition-all">
                  <div className="grid grid-cols-1 md:grid-cols-4 items-center p-6">
                    <div className="md:col-span-3">
                      <CardTitle className="text-xl font-semibold text-primary drop-shadow-sm">
                        {position.title}
                      </CardTitle>
                      <div className="flex items-center text-muted-foreground text-sm mt-2">
                        <MapPin className="w-4 h-4 mr-2 text-yellow-500" />
                        {position.location}
                        <span className="mx-2">|</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <div className="md:col-span-1 md:text-right mt-4 md:mt-0">
                      <Button>Apply Now</Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Don&apos;t see a role that fits?{" "}
            <a
              href="mailto:careers@punchng.com"
              className="text-primary hover:underline"
            >
              Send us your resume
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
