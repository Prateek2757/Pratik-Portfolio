import { Seo } from "@/components/Seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
<<<<<<< HEAD
import { Proof } from "@/components/sections/Proof";
=======
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";
<<<<<<< HEAD
import { CvSnapshot } from "@/components/sections/CvSnapshot";

const Index = () => {
  const title = "Pratik Guragain | Full Stack Developer in Nepal | Next.js, PostgreSQL, Supabase";
  const description =
    "Full Stack Developer from Nepal building production-ready web apps with React, Next.js, Node.js, MongoDB, PostgreSQL, Supabase, Vercel, Cloudflare, clean UI, APIs, and database-backed systems.";

  const siteUrl = "https://www.guragainpratik.com.np/";
  const ogImageUrl = `${siteUrl}og-image.png`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}#person`,
        "name": "Pratik Guragain",
        "url": siteUrl,
        "image": ogImageUrl,
        "jobTitle": "Full Stack Developer",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "NP"
        },
        "knowsAbout": [
          "Next.js",
          "React",
          "TypeScript",
          "MongoDB",
          "PostgreSQL",
          "Supabase",
          "Vercel",
          "Cloudflare CDN",
          "Node.js",
          "Tailwind CSS"
        ],
        "sameAs": [
          "https://github.com/Prateek2757",
          "https://www.linkedin.com/in/pratik-guragain-297b0b36a/"
        ]
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}#profile`,
        "url": siteUrl,
        "name": title,
        "description": description,
        "about": {
          "@id": `${siteUrl}#person`
        }
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        "url": siteUrl,
        "name": "Pratik Guragain Portfolio",
        "description": description,
        "publisher": {
          "@id": `${siteUrl}#person`
        }
      }
=======

const Index = () => {
  const title = "Pratik Guragain — Frontend & Full-Stack Developer";
  const description =
    "Portfolio of Pratik Guragain — crafting high-performance, scalable web applications with modern technologies and clean UI.";

    const ogImageUrl = "https://pratikguragain.vercel.app/project-7.jpg";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pratik Guragain",
    "jobTitle": "Frontend & Full-Stack Developer",
    "url": "https://pratikguragain.vercel.app/",
    "sameAs": [
      "https://github.com/Prateek2757",
      "https://www.linkedin.com/in/pratik-guragain/"
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
    ]
  };

  return (
    <>
      <Seo
        title={title}
        description={description}
<<<<<<< HEAD
        canonical={siteUrl}
        image={ogImageUrl}
        imageAlt="Pratik Guragain full-stack developer portfolio preview"
        keywords={[
          "Pratik Guragain",
          "Full Stack Developer Nepal",
          "Next.js Developer",
          "React Developer",
          "MERN Stack Developer",
          "MongoDB Developer",
          "PostgreSQL Developer",
          "Supabase Developer",
          "Vercel Developer",
          "Cloudflare CDN",
          "Insurtech Developer",
          "Frontend Developer Nepal"
        ]}
=======
        canonical="https://pratikguragain.vercel.app/"
        image={ogImageUrl}
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <Hero />
        <About />
<<<<<<< HEAD
        <Proof />
        <Projects />
        <Skills />
        <CvSnapshot />
=======
        <Projects />
        <Skills />
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

<<<<<<< HEAD
export default Index;
=======
export default Index;
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
