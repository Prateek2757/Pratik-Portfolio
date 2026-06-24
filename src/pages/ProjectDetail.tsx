import { Seo } from "@/components/Seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const siteUrl = "https://www.guragainpratik.com.np/";
const ogImage = `${siteUrl}og-image.png`;

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <>
        <Header />
        <main className="container mx-auto py-24">
          <h1 className="font-display text-4xl font-bold">Project not found</h1>
          <Button asChild className="mt-6">
            <Link to="/#projects">Back to projects</Link>
          </Button>
        </main>
        <Footer />
      </>
    );
  }

  const title = `${project.title} Case Study | Pratik Guragain`;
  const description = `${project.title} case study by Pratik Guragain: ${project.result}`;
  const canonical = `${siteUrl}projects/${project.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "url": canonical,
    "image": ogImage,
    "creator": {
      "@type": "Person",
      "name": "Pratik Guragain",
      "url": siteUrl
    },
    "keywords": project.tech.join(", ")
  };

  return (
    <>
      <Seo
        title={title}
        description={description}
        canonical={canonical}
        image={ogImage}
        imageAlt={`${project.title} case study by Pratik Guragain`}
        keywords={[project.title, ...project.tech, "Pratik Guragain case study"]}
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <section className="container mx-auto py-12 md:py-20">
          <Button asChild variant="ghost" className="mb-8 px-0">
            <Link to="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to projects
            </Link>
          </Button>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Project Case Study
              </p>
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                {project.github && (
                  <Button asChild variant="outline">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      Source Code <Github className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border shadow-lg shadow-primary/10">
              <img
                src={project.image}
                alt={`${project.title} project dashboard screenshot by Pratik Guragain`}
                className="aspect-video w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-y bg-muted/35">
          <div className="container mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Problem", project.problem],
              ["Role", project.role],
              ["Challenge", project.challenges],
              ["Result", project.result],
            ].map(([label, value]) => (
              <article key={label} className="rounded-xl border bg-card p-5 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  {label}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{value}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto py-12 md:py-20">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Feature Proof
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold">
                What the project includes
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="rounded-lg border bg-card p-4 text-sm font-medium">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;
