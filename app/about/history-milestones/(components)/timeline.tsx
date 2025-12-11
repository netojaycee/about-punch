const milestones = [
  {
    year: "1970",
    description: "Company was registered as a business.",
  },
  {
    year: "1973",
    description: "PUNCH Nigeria Limited was registered.",
  },
  {
    year: "1976",
    description: "The first daily edition of The PUNCH was published.",
  },
  {
    year: "1984",
    description: "The company was reorganised under a board of directors.",
  },
  {
    year: "2003",
    description: "The company established a digital presence.",
  },
  {
    year: "2023",
    description: "Celebrated 50 years of publishing.",
  },
];

const Timeline = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2"></div>
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-5/12"></div>
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white font-bold">
                {milestone.year}
              </div>
              <div className="w-5/12 p-4 bg-secondary/20 rounded-lg shadow-md">
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
