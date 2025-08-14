import proj1 from "@/assets/project-1.jpg";
import proj2 from "@/assets/project-2.jpg";
import proj3 from "@/assets/project-3.jpg";
import proj4 from "@/assets/project-4.png";
import proj5 from "@/assets/project-5.jpg";
import proj6 from "@/assets/project-6.jpg";

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  category: "frontend" | "backend" | "fullstack";
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Student Dashboard",
    description:
      "Interactive SaaS dashboard featuring charts, filters, role-based access, and real-time analytics for student performance tracking.",
    tech: [
      "React",
      "TypeScript",
      "Shadcn",
      "Tailwind",
      "Express",
      "JWT",
      "MongoDB",
    ],
    github: "https://github.com/Prateek2757/student-management-system",
    live: "https://studentmsmindriser.vercel.app/",
    image: proj3,
    category: "fullstack",
  },
  {
    id: "2",
    title: "Random Message Generator",
    description:
      "Full-stack app generating and storing random messages with analytics, built using Next.js, Express, MongoDB, and a responsive Tailwind UI.",
    tech: ["Next.js", "Tailwind", "Shadcn", "AUTH.js", "TypeScript", "MongoDB"],
    github: "https://github.com/Prateek2757/RAMDOM-MESSAGE-GENERATOR",
    live: "https://vercel.com/pratik-guragains-projects",
    image: proj2,
    category: "fullstack",
  },
  {
    id: "3",
    title: "PostIt Nepal",
    description:
      "Community platform for creating posts, comments, replies, and likes, using Next.js, Sanity CMS, and a fully responsive Tailwind-based design.",
    tech: ["Next.js", "Tailwind", "Shadcn", "Cleark", "Sanity"],
    github: "https://github.com/Prateek2757/PostitNepal",
    live: "https://postit-nepal.vercel.app/",
    image: proj5,
    category: "fullstack",
  },
  {
    id: "4",
    title: "Landing Page",
    description:
      "High-performance marketing landing page with SEO, conversion tracking, and modular components optimized for speed and maintainability.",
    tech: ["Next.js", "Tailwind", "Shadcn", "Aceternity UI", "MongoDB"],
    github: "https://github.com/Prateek2757/Ck-Soccor",
    live: "https://cksoccer.vercel.app/",
    image: proj4,
    category: "frontend",
  },
  {
    id: "5",
    title: "Reels Photo Pro",
    description:
      "Full-stack media sharing app for videos and photos, supporting uploads, streaming, authentication, and CDN optimization for performance.",
    tech: ["Next.js", "Tailwind", "JWT", "ImageKit", "MongoDB"],
    github: "https://github.com/your-username/reels-photo-pro",
    live: "https://reels-photo-pro.example.com/",
    image: proj5,
    category: "fullstack",
  },
  {
    id: "6",
    title: "Cosmotech International - Frontend Contribution",
    description:
      "Worked on responsive UI development for Cosmotech International, integrating APIs and building accessible layouts using Next.js and Tailwind.",
    tech: ["Next.js", "Tailwind CSS", "REST API Integration"],
    github: "https://github.com/Prateek2757",
    live: "https://cosmotechintl.com/",
    image: proj1,
    category: "frontend",
  },
];
