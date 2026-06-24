import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Download, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import {
  SiCloudflare,
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
const roles = [
  "Full Stack Developer",
  "React & Next.js Developer",
  "MERN Stack Developer",
  "Next.js Developer",
  "Database & API Builder",
];

const stackIcons = [
  { label: "React", icon: SiReact, color: "#61DAFB" },
  { label: "Next.js", icon: SiNextdotjs, color: "#111827" },
  { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { label: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { label: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { label: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
  { label: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { label: "Vercel", icon: SiVercel, color: "#111827" },
  { label: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");

  // Smooth Typewriter
  useEffect(() => {
    let i = 0;
    const currentRole = roles[roleIndex];
    const typing = setInterval(() => {
      setDisplayedRole(currentRole.slice(0, i + 1));
      i++;
      if (i === currentRole.length) {
        clearInterval(typing);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setDisplayedRole("");
        }, 2000);
      }
    }, 80);
    return () => clearInterval(typing);
  }, [roleIndex]);

  return (
    <div className="relative flex items-center justify-center w-full flex-col overflow-hidden">
      <section
        id="home"
        className="hero-gradient relative min-h-screen w-full overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="tech-grid absolute inset-0 pointer-events-none opacity-75" />
        <div className="tech-scanline absolute left-0 top-28 h-px w-full pointer-events-none" />
        <div className="tech-orb absolute -left-28 top-20 h-72 w-72 rounded-full opacity-70" />
        <div className="tech-orb absolute -right-24 bottom-16 h-80 w-80 rounded-full opacity-60 [animation-delay:1.8s]" />

        <div className="absolute inset-y-0 left-[8%] hidden w-px overflow-hidden bg-primary/10 lg:block">
          <div className="data-stream h-40 w-px" />
        </div>
        <div className="absolute inset-y-0 right-[10%] hidden w-px overflow-hidden bg-primary/10 lg:block">
          <div className="data-stream h-48 w-px [animation-delay:1.6s]" />
        </div>

        <motion.div
          animate={{ y: [0, -12, 0], opacity: [0.72, 1, 0.72] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="tech-glass absolute left-[7%] top-[26%] hidden rounded-xl border p-4 backdrop-blur md:block"
        >
          <div
            className="flex items-center gap-3 text-sm font-medium"
            aria-label="React and Next.js"
          >
            <SiReact className="h-5 w-5" style={{ color: "#61DAFB" }} />
            <SiNextdotjs className="h-5 w-5 text-foreground" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 14, 0], opacity: [0.68, 1, 0.68] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="tech-glass absolute right-[7%] top-[30%] hidden rounded-xl border p-4 backdrop-blur md:block"
        >
          <div
            className="flex items-center gap-3 text-sm font-medium"
            aria-label="MongoDB and PostgreSQL"
          >
            <SiMongodb className="h-5 w-5" style={{ color: "#47A248" }} />
            <SiPostgresql className="h-5 w-5" style={{ color: "#4169E1" }} />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 6.8, ease: "easeInOut" }}
          className="tech-glass absolute bottom-[19%] right-[17%] hidden rounded-xl border p-4 backdrop-blur lg:block"
        >
          <div
            className="flex items-center gap-3 text-sm font-medium"
            aria-label="Vercel, Supabase, and Cloudflare"
          >
            <SiVercel className="h-5 w-5 text-foreground" />
            <SiSupabase className="h-5 w-5" style={{ color: "#3FCF8E" }} />
            <SiCloudflare className="h-5 w-5" style={{ color: "#F38020" }} />
          </div>
        </motion.div>

        <div className="tech-glass absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border px-4 py-2 text-xs text-muted-foreground backdrop-blur md:flex">
          <ShieldCheck className="h-4 w-4 text-primary" />
          Production-ready interfaces, APIs, databases, and deployment
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto flex min-h-screen flex-col items-center justify-center gap-8 py-24 text-center">
          {/* Typing Animation */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-5 text-sm uppercase tracking-[0.28em] text-primary font-mono"
          >
            {displayedRole}
            <span className="animate-pulse">|</span>
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl font-extrabold leading-tight"
          >
            <span className="text-gradient drop-shadow-sm">
              Pratik Guragain
            </span>
            <span className="block text-3xl font-semibold text-foreground md:text-5xl">
              Full Stack Developer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl text-lg leading-8 text-muted-foreground"
          >
            I build production-ready web platforms across React, Next.js,
            Node.js, MongoDB, PostgreSQL, Supabase, Vercel, and Cloudflare -
            turning product requirements into clean interfaces, reliable APIs,
            and deployable systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3"
            aria-label="Production stack"
          >
            {stackIcons.map(({ label, icon: Icon, color }) => (
              <span
                key={label}
                title={label}
                aria-label={label}
                className="brand-icon-card group relative inline-flex h-11 w-11 items-center justify-center rounded-xl border shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-primary/35 hover:bg-card hover:shadow-lg hover:shadow-primary/15"
              >
                <Icon
                  className={
                    label === "Next.js" || label === "Vercel"
                      ? "h-5 w-5 text-foreground"
                      : "h-5 w-5"
                  }
                  style={
                    label === "Next.js" || label === "Vercel"
                      ? undefined
                      : { color }
                  }
                />
                <span className="sr-only">{label}</span>
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              variant="hero"
              asChild
              className="hover:scale-105 transition-transform duration-200 shadow-lg shadow-primary/20"
            >
              <a href="#projects" className="flex items-center gap-2">
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
            </Button>

            <Button
              variant="outline"
              asChild
              className="hover:scale-105 transition-transform duration-200 border-primary/50"
            >
              <a href="#contact" className="flex items-center gap-2">
                Contact Me <Mail className="w-4 h-4" />
              </a>
            </Button>

            <Button
              variant="secondary"
              asChild
              className="hover:scale-105 transition-transform duration-200"
            >
              <a
                href="/pratik_cv.pdf"
                download
                className="flex items-center gap-2"
              >
                Download Resume <Download className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
