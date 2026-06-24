import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const skillGroups = [
  [
    "Frontend",
    "Next.js, React, TypeScript, Tailwind CSS, responsive UI, component systems",
  ],
  ["Backend", "Node.js, API routes, authentication flows, server-side logic"],
  ["Database", "MongoDB, PostgreSQL, Supabase, schema design, SQL queries"],
  [
    "Deployment",
    "Vercel hosting, Cloudflare CDN/DNS, environment variables, production releases",
  ],
  [
    "Professional",
    "Debugging, documentation, SEO basics, performance optimization, teamwork",
  ],
];

const achievements = [
  "Building production web applications across frontend, backend, and deployment.",
  "Building database-backed product features with PostgreSQL and Supabase.",
  "Deploying and maintaining web apps with Vercel and Cloudflare.",
];

export const CvSnapshot = () => {
  return (
    <section id="cv" className="container mx-auto py-20">
      <div className="grid gap-10 rounded-xl border bg-card p-6 shadow-sm md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            CV Snapshot
          </p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Full Stack Developer with production deployment experience.
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Full Stack Developer with hands-on experience building and deploying
            production web applications using React, Next.js, Node.js, MongoDB,
            PostgreSQL, Supabase, Vercel, and Cloudflare. I work on
            database-backed systems, API workflows, responsive user interfaces,
            and release-ready deployment patterns.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="/pratik_cv.pdf" download>
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">
                Contact Me <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid gap-3">
            {skillGroups.map(([label, value]) => (
              <div
                key={label}
                className="rounded-lg border border-primary/15 bg-primary/5 p-4"
              >
                <h3 className="text-sm font-semibold text-primary">{label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{value}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="font-semibold">Recent proof</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {achievements.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
