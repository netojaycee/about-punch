const QuickFacts = () => {
  const facts = [
    { label: "Founded", value: "1973" },
    { label: "Daily Reach", value: "10M+" },
    { label: "Employees", value: "500+" },
    { label: "Editions", value: "3" },
  ];

  return (
    <section className="relative z-10 ">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-16">
        <div className="shadow rounded p-4 -mt-14 bg-white text-black dark:bg-black dark:text-white">
          <h3 className="text-sm font-semibold uppercase text-muted-foreground tracking-widest mb-6 text-center">
            Quick Facts
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {facts.map((fact) => (
              <div key={fact.label}>
                <p className="text-2xl md:text-4xl font-bold text-primary">
                  {fact.value}
                </p>
                <p className="text-muted-foreground mt-1">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;
