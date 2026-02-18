import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="bg-muted/50 py-20">
    <div className="container mx-auto max-w-xl px-4 text-center">
      <h2 className="mb-8 text-3xl font-bold text-foreground">Get In Touch</h2>
      <p className="mb-8 text-muted-foreground">
        I'm always open to new opportunities and conversations. Feel free to reach out!
      </p>

      <div className="mb-8 flex flex-col items-center gap-3">
        <a
          href="mailto:nitheeshnith619@gmail.com"
          className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Mail className="h-4 w-4" /> nitheeshnith619@gmail.com
        </a>
        <a
          href="tel:+919360248078"
          className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Phone className="h-4 w-4" /> +91 9360248078
        </a>
      </div>

      <div className="flex justify-center gap-3">
        <Button variant="outline" size="icon" asChild>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default ContactSection;
