import { Code, Database, Server, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const groups = [
    { title: "Frontend", icon: Code, items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Shadcn UI", "HTML", "CSS"] },
    { title: "Backend", icon: Server, items: ["Node.js", "Express.js", "REST APIs", "Authentication", "API Integration"] },
    { title: "Database", icon: Database, items: ["PostgreSQL", "Supabase", "MongoDB", "Schema Design"] },
    { title: "Platform", icon: Wrench, items: ["Vercel", "Cloudflare CDN", "Git", "Vite", "Framer Motion"] },
  ];
  return (
    <section id="skills" className="container mx-auto space-y-8 py-20">
      <div>
        <h2 className="font-display text-3xl font-semibold md:text-4xl">Skills</h2>
        <p className="text-muted-foreground">Production tools I use across frontend, backend, database, and deployment.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {groups.map(({ title, icon: Icon, items }) => (
          <div key={title} className="surface-gradient rounded-xl border p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Icon className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <Badge key={s} variant="secondary">{s}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
