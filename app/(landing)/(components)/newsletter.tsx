import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Stay Informed</h2>
        <p className="text-muted-foreground mb-8">
          Subscribe to our newsletter to get the latest news and updates.
        </p>
        <form className="flex w-full max-w-md mx-auto items-center space-x-2">
          <Input type="email" placeholder="Enter your email" />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
