
export const milestones = [
  {
    year: "1973",
    title: "Founded",
    description:
      "PUNCH is established, setting a new standard for Nigerian journalism.",
    image: "/images/milestones/1.jpg",
  },
  {
    year: "1995",
    title: "National Expansion",
    description:
      "Expanded operations nationwide, becoming a truly national newspaper.",
    image: "/images/milestones/2.jpg",
  },
  {
    year: "2003",
    title: "Online Launch",
    description:
      "Launched Punchng.com, bringing our trusted journalism to a global audience.",
    image: "/images/milestones/3.jpg",
  },
  {
    year: "2020",
    title: "Digital First",
    description:
      "Adopted a digital-first strategy, innovating in mobile and social media.",
    image: "/images/milestones/4.jpg",
  },
];

const Milestones = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Milestones</h2>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden md:block relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
          <div className="flex justify-between">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="relative flex flex-col items-center w-1/4"
              >
                {/* Content above the line */}
                {index % 2 !== 0 && (
                  <div className="text-center mb-10">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                      {milestone.description}
                    </p>
                  </div>
                )}

                {/* Circle and Year */}
                <div className="relative flex flex-col items-center justify-center h-24">
                  <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-background border-2 border-red-500 rounded-full z-10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <p className={`text-3xl font-bold text-red-500 ${index % 2 === 0 ? 'mt-15' : 'mb-15'}`}>
                    {milestone.year}
                  </p>
                </div>

                {/* Content below the line */}
                {index % 2 === 0 && (
                  <div className="text-center mt-10">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                      {milestone.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden relative">
          <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-border"></div>
          <div className="space-y-4">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative pl-12">
                <div className="absolute top-1 left-4 -translate-x-1/2 w-8 h-8 bg-background border-2 border-red-500 rounded-full z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
                <p className="text-2xl font-bold text-red-500 mb-1">{milestone.year}</p>
                <h3 className="text-lg font-semibold mb-1">{milestone.title}</h3>
                <p className="text-muted-foreground text-sm">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
