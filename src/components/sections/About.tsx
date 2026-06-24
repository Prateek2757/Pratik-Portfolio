import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Server,
  Sparkles,
} from "lucide-react";
import {
  SiCloudflare,
  SiExpress,
  SiGit,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { Button } from "@/components/ui/button";

const stackLayers = [
  {
    label: "Interface",
    description: "Fast, accessible product experiences",
    icon: Code2,
    tools: [
      { label: "React", icon: SiReact, color: "#61DAFB" },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { label: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    label: "Services",
    description: "Reliable APIs and application logic",
    icon: Server,
    tools: [
      { label: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { label: "Express", icon: SiExpress },
    ],
    extras: ["REST APIs", "Authentication"],
  },
  {
    label: "Data",
    description: "Structured, scalable persistence",
    icon: Database,
    tools: [
      { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { label: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { label: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
    ],
  },
  {
    label: "Delivery",
    description: "Production deployment and iteration",
    icon: Cloud,
    tools: [
      { label: "Git", icon: SiGit, color: "#F05032" },
      { label: "Vercel", icon: SiVercel },
      { label: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
    ],
  },
];

const strengths = [
  "Full-stack ownership",
  "Production-minded delivery",
  "Clear, maintainable systems",
];

export const About = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container mx-auto grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            About me
          </div>

          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            I turn product requirements into
            <span className="text-gradient block">systems that ship.</span>
          </h2>

          <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            <p>
              I&apos;m Pratik Guragain, a full-stack developer from Nepal. I build
              production-ready web products across interface design, APIs,
              databases, authentication, and deployment.
            </p>
            <p>
              My professional experience includes insurance technology and live
              customer platforms where reliability, security, and clear user
              journeys matter. I care about practical architecture, thoughtful
              details, and code that remains easy to improve after launch.
            </p>
          </div>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {strengths.map((strength) => (
              <li key={strength} className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                {strength}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero">
              <a href="#projects">
                Explore my work <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#experience">View experience</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-8 -z-10 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-3xl border bg-card/85 shadow-2xl shadow-primary/10 backdrop-blur">
            <div className="tech-grid pointer-events-none absolute inset-0 opacity-45" aria-hidden="true" />
            <div className="relative flex items-center justify-between border-b bg-muted/40 px-5 py-4">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">product-stack.ts</span>
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-500">
                <motion.span
                  animate={reduceMotion ? undefined : { opacity: [0.45, 1, 0.45] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-emerald-500"
                />
                Live
              </div>
            </div>

            <div className="relative space-y-3 p-4 sm:p-6">
              {stackLayers.map(({ label, description, icon: LayerIcon, tools, extras }, index) => (
                <motion.article
                  key={label}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  animate={reduceMotion ? undefined : { y: [0, index % 2 === 0 ? -3 : 3, 0] }}
                  transition={{
                    opacity: { delay: index * 0.1, duration: 0.4 },
                    x: { delay: index * 0.1, duration: 0.4 },
                    y: { delay: index * 0.35, duration: 4 + index * 0.35, repeat: Infinity, ease: "easeInOut" },
                  }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl border bg-background/90 p-4 shadow-sm transition hover:border-primary/35 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <LayerIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display font-semibold">{label}</h3>
                        <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                      {tools.map(({ label: toolLabel, icon: ToolIcon, color }) => (
                        <span
                          key={toolLabel}
                          title={toolLabel}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border bg-card text-foreground shadow-sm transition group-hover:-translate-y-0.5"
                        >
                          <ToolIcon className="h-4 w-4" style={color ? { color } : undefined} />
                          <span className="sr-only">{toolLabel}</span>
                        </span>
                      ))}
                      {extras?.map((extra) => (
                        <span key={extra} className="rounded-lg border bg-muted/60 px-2.5 py-2 text-[11px] font-medium">
                          {extra}
                        </span>
                      ))}
                    </div>
                  </div>

                  {index < stackLayers.length - 1 && (
                    <span className="absolute -bottom-4 left-8 z-10 h-4 w-px overflow-hidden bg-primary/20" aria-hidden="true">
                      <motion.span
                        animate={reduceMotion ? undefined : { y: [-8, 18] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "linear", delay: index * 0.2 }}
                        className="block h-2 w-px bg-primary"
                      />
                    </span>
                  )}
                </motion.article>
              ))}
            </div>

            <div className="relative flex items-center justify-between border-t bg-primary/5 px-5 py-3 text-xs text-muted-foreground">
              <span>Idea → interface → infrastructure</span>
              <span className="font-mono text-primary">ready_to_ship ✓</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
