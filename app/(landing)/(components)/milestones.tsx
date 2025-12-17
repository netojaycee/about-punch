"use client"


type Milestone = {
  year: string;
  title?: string;
  description: string;
  image?: string;
};

interface MilestonesProps {
  milestones: Milestone[];
  title?: string;
}

import { easeOut, motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const Milestones = ({
  milestones,
  title = "Our Milestones",
}: MilestonesProps) => {
  return (
    <section className="py-10 bg-linear-to-br from-[#fffbe6] via-white to-[#fff0f0]">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary drop-shadow-sm">
          {title}
        </h2>
        {/* Desktop Timeline (Horizontal) */}
        <motion.div
          className="hidden md:block relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-[#FFD600] via-[#fff] to-[#E53935] opacity-60 -translate-y-1/2"></div>
          <div className="flex justify-between">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="relative flex flex-col items-center w-1/4"
                variants={itemVariants}
              >
                {/* Content above the line */}
                {index % 2 !== 0 && milestone.title && (
                  <div className="text-center mb-10">
                    <h3 className="text-xl font-semibold mb-2 text-red-700">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                      {milestone.description}
                    </p>
                  </div>
                )}
                {/* Circle and Year */}
                <motion.div
                  className="relative flex flex-col items-center justify-center h-24"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 border-2 border-yellow-400 shadow-lg rounded-full z-10 flex items-center justify-center">
                    <div className="w-4 h-4 bg-linear-to-br from-[#FFD600] to-[#E53935] rounded-full"></div>
                  </div>
                  <p
                    className={`text-3xl font-bold text-primary drop-shadow ${
                      index % 2 === 0 ? "mt-15" : "mb-15"
                    }`}
                  >
                    {milestone.year}
                  </p>
                </motion.div>
                {/* Content below the line */}
                {index % 2 === 0 && milestone.title && (
                  <div className="text-center mt-10">
                    <h3 className="text-xl font-semibold mb-2 text-red-700">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                      {milestone.description}
                    </p>
                  </div>
                )}
                {/* If no title, just show description */}
                {!milestone.title && (
                  <div className="text-center mt-6 mb-6">
                    <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                      {milestone.description}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Mobile Timeline (Vertical) */}
        <motion.div
          className="md:hidden relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-linear-to-b from-[#FFD600] via-[#fff] to-[#E53935] opacity-60"></div>
          <div className="space-y-4">
            {milestones.map((milestone) => (
              <motion.div
                key={milestone.year}
                className="relative pl-12"
                variants={itemVariants}
              >
                <div className="absolute top-1 left-4 -translate-x-1/2 w-10 h-10 bg-white/90 border-2 border-yellow-400 shadow-lg rounded-full z-10 flex items-center justify-center">
                  <div className="w-4 h-4 bg-linear-to-br from-[#FFD600] to-[#E53935] rounded-full"></div>
                </div>
                <p className="text-2xl font-bold text-primary mb-1 drop-shadow">
                  {milestone.year}
                </p>
                {milestone.title && (
                  <h3 className="text-lg font-semibold mb-1 text-red-700">
                    {milestone.title}
                  </h3>
                )}
                <p className="text-muted-foreground text-sm">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Milestones;
