import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "TechCart",
    description:
      "Developed TechCart, a responsive electronics store web application showcasing products with modern UI design, built using React.js and Tailwind CSS with backend API integration using Node.js.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Supabase", "JWT", "Vercel"],
    demo: "https://mohan-electronics-showcase-xgje.vercel.app/",
    github: "https://github.com/Nitheesh-raj/mohan-electronics-showcase",
  },
  {
    title: "Chat Application",
    description:
      "A real-time messaging application with user authentication, private chats, and instant message delivery.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
    demo: "https://chat-app-demo.vercel.app",
    github: "https://github.com/nitheeshraj/chat-app",
  },
  {
    title: "Bulk Mail Sender",
    description:
      "A web application for sending bulk emails with CSV contact import and delivery tracking dashboard.",
    tech: ["React", "Node.js", "Express", "Nodemailer", "CSV"],
    demo: "https://bulk-mail-demo.vercel.app",
    github: "https://github.com/nitheeshraj/bulk-mail-sender",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20">
    <div className="container mx-auto max-w-4xl px-4">
      <h2 className="mb-10 text-center text-3xl font-bold text-foreground">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title} className="flex flex-col transition-glow hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20">
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
            <CardFooter className="mt-auto gap-3">
              <Button variant="outline" size="sm" asChild>
                <a href={p.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1.5 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1.5 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
