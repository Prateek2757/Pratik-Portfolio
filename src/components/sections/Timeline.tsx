import { timeline } from "@/data/experience";

export const Timeline = () => {
  return (
    <section id="experience" className="container mx-auto py-20">
      <div className="mb-8">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">Experience & Education</h2>
        <p className="text-muted-foreground">A brief journey through roles and study.</p>
      </div>
      <ol className="relative border-l pl-6">
        {timeline.map((item) => (
          <li key={item.id} className="mb-10 ml-4">
            <div className="absolute -left-3 mt-1 h-6 w-6 rounded-full border bg-background" aria-hidden />
            <h3 className="font-semibold">{item.title} • <span className="text-muted-foreground">{item.org}</span></h3>
            <span className="text-xs uppercase tracking-wide text-muted-foreground">{item.period}</span>
            <p className="mt-2 text-sm text-muted-foreground">{item.details}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};
