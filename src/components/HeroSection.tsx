import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex min-h-[85vh] items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Hello, I'm
        </p>
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Nitheesh Raj M
        </h1>
        <p className="mb-2 text-xl font-semibold text-primary sm:text-2xl">
          Full Stack Developer
        </p>
        <p className="mx-auto mb-8 max-w-lg text-base text-muted-foreground sm:text-lg">
          Building responsive web applications using MERN stack and Java.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" onClick={() => scrollTo("#projects")}>
            <ArrowDown className="mr-2 h-4 w-4" />
            View Projects
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollTo("#contact")}>
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
