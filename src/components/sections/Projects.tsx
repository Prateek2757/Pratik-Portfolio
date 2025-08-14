import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";

const categories = ["all", "frontend", "fullstack"] as const;

export const Projects = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("all");
  const filtered = useMemo(() =>
    active === "all" ? projects : projects.filter(p => p.category === active), [active]
  );

  return (
    <section id="projects" className="container mx-auto py-20">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Projects</h2>
          <p className="text-muted-foreground">Selected work across frontend, backend, and full‑stack.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(c => (
            <Button key={c} variant={active === c ? "default" : "outline"} onClick={() => setActive(c)} className="capitalize">
              {c}
            </Button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <motion.article key={p.id} layout initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-xl border">
            <Card className="h-full">
              <CardHeader className="p-0">
                <img src={p.image} alt={`${p.title} — project screenshot`} loading="lazy" className="h-55 w-full object-cover" />
              </CardHeader>
              <CardContent className="space-y-3 p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map(t => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex items-center gap-2 p-4 pt-0">
                <Button asChild variant="outline" size="sm">
                  <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} GitHub`}><Github className="mr-2 h-4 w-4" /> Code</a>
                </Button>
                <Button asChild size="sm">
                  <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live demo`}><ExternalLink className="mr-2 h-4 w-4" /> Live</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};
