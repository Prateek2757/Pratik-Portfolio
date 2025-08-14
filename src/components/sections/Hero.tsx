import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Download } from "lucide-react";
import { BackgroundLines } from "../ui/background-lines";
import { useEffect, useState } from "react";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";
import nextLogo from "@/assets/nextLogo.png";
const roles = [
  "Frontend Developer",
  "Full-Stack Developer",
  "MERN Stack Specialist",
  "UI/UX Enthusiast",
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
      <section id="home" className="relative w-full overflow-hidden">
        
        {/* Layered Animated Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br  dark:from-[#0f172a] via-[#0f0e25] to-[#0a1a24]  animate-gradient opacity-90" />
        
        {/* Background Lines */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <BackgroundLines className="w-full h-full opacity-30" >
          <>
          </>
          </BackgroundLines>
        </div>

        {/* Floating Tech Icons */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute left-[25%] top-[15%] text-blue-400/70 text-6xl"
        >
         <img
            src={nextLogo}
            alt="Next.js Logo"
            className="w-16 h-15 object-contain hover:scale-105 transition-transform duration-200"
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute left-[12%] top-[30%] text-blue-400/70 text-6xl"
        >
          <SiReact />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute right-[15%] top-[40%] text-green-400/70 text-6xl"
        >
          <SiNodedotjs />
        </motion.div>
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute left-[18%] bottom-[25%] text-emerald-400/70 text-5xl"
        >
          <SiMongodb />
        </motion.div>
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{ repeat: Infinity, duration: 7 }}
          className="absolute right-[20%] bottom-[20%] text-cyan-400/70 text-5xl"
        >
          <SiTailwindcss />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 container mx-auto flex md:min-h-screen flex-col items-center justify-center gap-8 py-20 text-center">
          
          {/* Typing Animation */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm uppercase tracking-widest text-primary font-mono"
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
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
              Pratik Guragain
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-lg text-muted-foreground"
          >
            I craft high-performance, scalable web applications with modern technologies, clean UI, and exceptional user experiences.
          </motion.p>

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
              className="hover:scale-105 transition-transform duration-200 shadow-lg shadow-blue-500/20"
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
              className="hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-purple-500 to-blue-500 text-white"
            >
              <a href="/Pratik_Cv_I.pdf" download className="flex items-center gap-2">
                Download Resume <Download className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};