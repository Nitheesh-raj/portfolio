import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Redux", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Programming",
    skills: ["Java"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Firebase", "Vercel", "Render"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="bg-muted/50 py-20">
    <div className="container mx-auto max-w-4xl px-4">
      <h2 className="mb-10 text-center text-3xl font-bold text-foreground">Skills</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((cat) => (
          <Card key={cat.title} className="border-border bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{cat.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <Badge key={s} variant="secondary">
                  {s}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
