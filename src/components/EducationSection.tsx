import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="py-20">
    <div className="container mx-auto max-w-3xl px-4">
      <h2 className="mb-10 text-center text-3xl font-bold text-foreground">Education</h2>
      <div className="flex gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <GraduationCap className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            B.Tech Information Technology
          </h3>
          <p className="text-sm font-medium text-primary">
            Karpagam College of Engineering
          </p>
          <p className="mt-1 text-sm text-muted-foreground">2021 – 2025</p>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
