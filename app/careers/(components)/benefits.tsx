import { CheckCircle } from "lucide-react";

const benefits = [
  "Competitive salary and compensation packages",
  "Comprehensive health insurance for you and your family",
  "Generous paid time off and parental leave",
  "Professional development and training opportunities",
  "Modern and collaborative workspace",
  "Regular team-building events and activities",
];

const Benefits = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Employee Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center">
              <CheckCircle className="w-6 h-6 text-primary mr-3 shrink-0" />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
