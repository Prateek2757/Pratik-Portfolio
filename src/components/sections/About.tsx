import { motion } from "framer-motion";
import aboutImg from "@/assets/project-7.jpg";
import aboutImgLight from "@/assets/imagedark.png";

export const About = () => {
  const skills = [
    "React", "TypeScript", "Next.js", "Node.js",
    "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion"
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
          About <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I’m a developer specializing in creating modern, high-performance web
          products using <span className="font-semibold text-foreground">React, Next.js, Node.js</span>, 
          and other cutting-edge technologies.  
          I focus on **clean architecture**, **accessible design**, and pixel-perfect 
          user experiences that blend functionality with style.
        </p>

        {/* Skills Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium shadow-sm hover:shadow-md transition"
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
            alt="Developer Portrait"
            className="w-full max-w-s h-auto object-cover dark:hidden"
          />
          <img
          src={aboutImgLight}
          alt="Developer Portrait"
          className="w-full max-w-s h-auto object-cover  hidden dark:block"
        />
        </motion.div>
        {/* Glow Effect */}
        <div className="absolute -z-10 h-80 w-80 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 blur-3xl rounded-full"></div>
      </motion.div>
    </section>
  );
};