import { motion } from "framer-motion";
import aboutImg from "@/assets/project-7.jpg";
import aboutImgLight from "@/assets/imagedark.png";

export const About = () => {
  const skills = [
    "Next.js", "React", "TypeScript", "Node.js",
    "MongoDB", "PostgreSQL", "Supabase", "Vercel", "Cloudflare"
  ];

  return (
    <section
      id="about"
      className="container mx-auto grid items-center gap-12 py-20 md:grid-cols-2"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="mb-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I am Pratik Guragain, a full-stack developer from Nepal focused on building
          clean, practical, and production-ready web applications. I work across
          product UI, API workflows, database systems, and deployment using React,
          Next.js, Node.js, MongoDB, PostgreSQL, Supabase, Vercel, and Cloudflare.
        </p>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          My current professional work is in the insurance technology domain, but
          this portfolio is about the craft: simple interfaces, reliable backend
          logic, maintainable code, and applications that are ready to ship.
        </p>

        {/* Skills Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium shadow-sm transition hover:border-primary/40 hover:shadow-md"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative flex mt-8 justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="overflow-hidden rounded-2xl border border-border shadow-lg"
        >
          <img
            src={aboutImg}
            alt="Pratik Guragain full-stack developer portrait"
            className="h-auto w-full object-cover dark:hidden"
          />
          <img
          src={aboutImgLight}
          alt="Pratik Guragain full-stack developer portrait"
          className="hidden h-auto w-full object-cover dark:block"
        />
        </motion.div>
        {/* Glow Effect */}
        <div className="absolute -z-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl"></div>
      </motion.div>
    </section>
  );
};
