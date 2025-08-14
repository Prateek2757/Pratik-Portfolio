import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-xl font-semibold story-link" aria-label="Go to home">
          Pratik Guragain
        </a>
        <div className="hidden items-center gap-6 md:flex">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground story-link">About</a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground story-link">Projects</a>
          <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground story-link">Skills</a>
          <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground story-link">Experience</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground story-link">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline">
            <a href="/Pratik_Cv_I.pdf" download>
              Resume
            </a>
          </Button>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
