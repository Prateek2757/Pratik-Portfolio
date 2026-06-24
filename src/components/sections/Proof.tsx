import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Cloud, Database, GitBranch, LayoutDashboard, ShieldCheck } from "lucide-react";

const architecture = [
  { label: "Frontend", value: "Next.js + React UI", icon: LayoutDashboard },
  { label: "API", value: "Routes, auth, integrations", icon: GitBranch },
  { label: "Database", value: "PostgreSQL + Supabase", icon: Database },
  { label: "Delivery", value: "Vercel + Cloudflare CDN", icon: Cloud },
];

const principles = [
  "Clean UI that helps users finish work",
  "Maintainable components and readable code",
  "Database-backed features with practical schemas",
  "Performance, SEO, and deployment readiness",
];

export const Proof = () => {
  return (
    <section id="current-work" className="border-y bg-muted/35">
      <div className="container mx-auto grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Badge variant="secondary" className="mb-4">Engineering focus</Badge>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Building web platforms that are clean, reliable, and ready for production.
          </h2>
          <p className="mt-4 text-muted-foreground leading-7">
            I work across UI, database-driven features, API workflows, deployment,
            and performance improvements. The focus is not just making screens look
            good, but making the full system practical to use and maintain.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {principles.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border bg-card p-4 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Production Stack Architecture</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {architecture.map(({ label, value, icon: Icon }) => (
              <div key={label} className="rounded-lg border border-primary/15 bg-primary/5 p-4">
                <Icon className="mb-4 h-5 w-5 text-primary" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {label}
                </p>
                <p className="mt-2 font-medium">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-muted-foreground">
            Frontend to API to PostgreSQL/Supabase, deployed on Vercel and accelerated
            through Cloudflare. This is the practical system I use for production-ready work.
          </p>
        </div>
      </div>
    </section>
  );
};
