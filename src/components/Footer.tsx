import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto flex flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between">
      <p className="text-sm text-muted-foreground">© 2025 Nitheesh Raj M. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-foreground">
          <Linkedin className="h-4 w-4" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-foreground">
          <Github className="h-4 w-4" />
        </a>
        <a href="mailto:nitheeshnith619@gmail.com" aria-label="Email" className="text-muted-foreground transition-colors hover:text-foreground">
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
