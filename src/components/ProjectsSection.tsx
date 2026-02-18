import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const projects = [
  {
    title: "TechCart",
    description:
      "Developed TechCart, a responsive electronics store web application showcasing products with modern UI design, built using React.js and Tailwind CSS with backend API integration using Node.js.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Supabase", "JWT", "Vercel"],
  },
  {
    title: "Chat Application",
    description:
      "A real-time messaging application with user authentication, private chats, and instant message delivery.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
  },
  {
    title: "Bulk Mail Sender",
    description:
      "A web application for sending bulk emails with CSV contact import and delivery tracking dashboard.",
    tech: ["React", "Node.js", "Express", "Nodemailer", "CSV"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20">
    <div className="container mx-auto max-w-4xl px-4">
      <h2 className="mb-10 text-center text-3xl font-bold text-foreground">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title} className="border-border bg-card transition-shadow hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">{p.title}</CardTitle>
              <CardDescription>{p.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Badge key={t} variant="outline" className="text-xs">
                  {t}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
