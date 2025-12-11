import { Mail, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-screen-md px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Media Inquiries</h2>
        <p className="text-lg text-muted-foreground mb-8">
          For all media-related inquiries, please contact our communications
          team.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-primary" />
            <a
              href="mailto:press@punchng.com"
              className="text-lg hover:underline"
            >
              press@punchng.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-primary" />
            <a href="tel:+23412345678" className="text-lg hover:underline">
              +234 (1) 234 5678
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
