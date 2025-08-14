import { Seo } from "@/components/Seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  const title = "Pratik Guragain — Frontend & Full-Stack Developer";
  const description =
    "Portfolio of Pratik Guragain — crafting high-performance, scalable web applications with modern technologies and clean UI.";

  const ogImageUrl = "https://pratikguragain.vercel.app/Pratik%20Guragain.png?theme=dark&md=0&fontSize=100px&images=https://yourdomain.com/assets/og-logo.png";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pratik Guragain",
    "jobTitle": "Frontend & Full-Stack Developer",
    "url": "https://pratikguragain.vercel.app/",
    "sameAs": [
      "https://github.com/Prateek2757",
      "https://www.linkedin.com/in/pratik-guragain/"
    ]
  };

  return (
    <>
      <Seo
        title={title}
        description={description}
        canonical="https://pratikguragain.vercel.app/"
        image={ogImageUrl}
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;