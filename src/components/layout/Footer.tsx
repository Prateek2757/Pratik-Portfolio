export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 md:h-16 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Pratik Guragain. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#projects" className="hover:text-foreground">Projects</a>
          <a href="#skills" className="hover:text-foreground">Skills</a>
          <a href="#experience" className="hover:text-foreground">Experience</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
      </div>
    </footer>
  );
};
