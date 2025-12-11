const quickFacts = [
  {
    title: "Founded",
    value: "1973",
  },
  {
    title: "Daily Reach",
    value: "10 Million+",
  },
  {
    title: "Employees",
    value: "500+",
  },
  {
    title: "Editions/Products",
    value: "3",
  },
  {
    title: "Offices",
    value: "5",
  },
];

const QuickFacts = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Facts</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {quickFacts.map((fact) => (
            <div key={fact.title} className="text-center">
              <p className="text-4xl font-bold text-primary">{fact.value}</p>
              <p className="text-muted-foreground mt-2">{fact.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;
