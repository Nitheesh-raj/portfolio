import { Briefcase } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="bg-muted/50 py-20">
    <div className="container mx-auto max-w-3xl px-4">
      <h2 className="mb-10 text-center text-3xl font-bold text-foreground">Experience</h2>
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Briefcase className="h-5 w-5" />
          </div>
          <div className="w-px flex-1 bg-border" />
        </div>
        <div className="pb-8">
          <h3 className="text-lg font-semibold text-foreground">Web Developer Intern</h3>
          <p className="text-sm font-medium text-primary">VCODEX Company</p>
          <p className="mt-2 text-muted-foreground">
            Worked on responsive UI development and integrated REST APIs to build seamless
            front-end experiences.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
