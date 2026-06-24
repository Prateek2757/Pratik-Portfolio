<<<<<<< HEAD
import { AnimatePresence, motion } from "framer-motion";
=======
import { motion } from "framer-motion";
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
import { projects } from "@/data/projects";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const categories = ["all", "frontend", "fullstack"] as const;
const categoryLabels: Record<(typeof categories)[number], string> = {
  all: "All work",
  frontend: "Frontend",
  fullstack: "Full-stack",
};

export const Projects = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("all");
  const filtered = useMemo(
    () => active === "all" ? projects : projects.filter((project) => project.category === active),
    [active],
  );

  return (
    <section id="projects" className="container mx-auto scroll-mt-20 py-20">
      <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-primary">Selected work</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Projects built for real users</h2>
          <p className="mt-3 leading-7 text-muted-foreground">Frontend craft, full-stack systems, and production products—from first interaction to final deployment.</p>
        </div>
        <div className="flex flex-wrap gap-2 rounded-xl border bg-muted/40 p-1.5" role="tablist" aria-label="Filter projects by category">
          {categories.map(c => (
            <Button
              key={c}
              role="tab"
              aria-selected={active === c}
              variant={active === c ? "default" : "ghost"}
              size="sm"
              onClick={() => setActive(c)}
              className="rounded-lg"
            >
              {categoryLabels[c]}
              <span className="text-xs opacity-70">
                {c === "all" ? projects.length : projects.filter((project) => project.category === c).length}
              </span>
=======
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
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
            </Button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
<<<<<<< HEAD
        <AnimatePresence mode="popLayout">
          {filtered.map((p, index) => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group h-full"
            >
              <Card className="flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
              <CardHeader className="relative overflow-hidden p-0">
                <img
                  src={p.image}
                  alt={`${p.title} project screenshot by Pratik Guragain`}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" aria-hidden="true" />
                <Badge className="absolute bottom-3 left-3 border-white/20 bg-black/55 text-white backdrop-blur-sm hover:bg-black/55">
                  {p.category === "fullstack" ? "Full-stack" : "Frontend"}
                </Badge>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col space-y-4 p-5">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{p.description}</p>
                </div>
                <p className="rounded-xl border border-primary/15 bg-primary/5 p-3 text-sm leading-6 text-foreground">
                  <span className="font-semibold text-primary">Result:</span> {p.result}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5">
=======
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
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
                  {p.tech.map(t => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
              </CardContent>
<<<<<<< HEAD
              <CardFooter className="flex flex-wrap items-center gap-2 border-t bg-muted/20 p-4">
                <Button asChild variant="default" size="sm" className="flex-1">
                  <Link to={`/projects/${p.slug}`} aria-label={`${p.title} case study`}>
                    Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {p.github && (
                  <Button asChild variant="outline" size="sm">
                    <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} GitHub`}><Github className="mr-2 h-4 w-4" /> Code</a>
                  </Button>
                )}
                <Button asChild variant="outline" size="sm">
                  <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live demo`}><ExternalLink className="mr-2 h-4 w-4" /> Live</a>
                </Button>
              </CardFooter>
              </Card>
            </motion.article>
          ))}
        </AnimatePresence>
=======
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
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
      </motion.div>
    </section>
  );
};
