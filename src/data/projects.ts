import proj1 from "@/assets/project-1.jpg";
import proj3 from "@/assets/project-3.jpg";
import proj4 from "@/assets/project-4.png";
import proj5 from "@/assets/project-5.jpg";
import taskoriaImage from "@/assets/project-taskoria.png";
import sunConnectImage from "@/assets/project-sunconnect.png";

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  problem: string;
  role: string;
  features: string[];
  challenges: string;
  result: string;
  tech: string[];
  github?: string;
  live: string;
  image: string;
  category: "frontend" | "backend" | "fullstack";
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "student-dashboard",
    title: "Student Dashboard",
    description:
      "Full-stack student management dashboard with charts, filters, role-based access, JWT authentication, and analytics for performance tracking.",
    problem:
      "Student operations needed a clearer way to manage records, review progress, and make performance data easier to scan.",
    role:
      "Designed and implemented the frontend, connected backend APIs, and built authenticated dashboard workflows.",
    features: [
      "Role-based dashboard views",
      "Charts and performance filters",
      "JWT authentication",
      "Responsive management UI"
    ],
    challenges:
      "Keeping data-heavy screens readable while preserving quick filtering and a clean responsive layout.",
    result:
      "Delivered a practical dashboard experience that turns student records into usable admin insights.",
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
    id: "4",
    slug: "ck-soccer-landing-page",
    title: "Landing Page",
    description:
      "High-performance Next.js landing page with SEO-friendly structure, reusable sections, responsive UI, and maintainable component architecture.",
    problem:
      "The brand needed a fast, responsive web presence that explained the offer clearly and was easy to maintain.",
    role:
      "Built the landing page structure, reusable UI sections, responsive styling, and deployment-ready frontend.",
    features: [
      "SEO-friendly page structure",
      "Reusable section components",
      "Responsive Tailwind layout",
      "Performance-minded implementation"
    ],
    challenges:
      "Balancing visual polish with simple, maintainable components and fast page loading.",
    result:
      "Created a focused marketing page with clear content hierarchy and production-ready delivery.",
    tech: ["Next.js", "Tailwind", "Shadcn", "Aceternity UI", "MongoDB"],
    github: "https://github.com/Prateek2757/Ck-Soccor",
    live: "https://cksoccer.vercel.app/",
    image: proj4,
    category: "frontend",
  },
  {
    id: "2",
    slug: "taskoria",
    title: "Taskoria",
    description:
      "Production service marketplace connecting customers across Australia with trusted local professionals through location-based discovery and structured quote requests.",
    problem:
      "Finding and comparing dependable local professionals is often fragmented, slow, and difficult to evaluate with confidence.",
    role:
      "Developed responsive marketplace experiences, service discovery flows, provider onboarding, and API-connected product interactions.",
    features: [
      "Service and location-based discovery",
      "Customer quote request flow",
      "Professional onboarding journey",
      "Responsive marketplace interface"
    ],
    challenges:
      "Keeping a multi-sided marketplace easy to navigate while supporting many service categories, locations, and user journeys.",
    result:
      "Delivered a live Australia-wide platform that makes requesting, comparing, and hiring local professionals more direct.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Responsive UI"],
    live: "https://www.taskoria.com/",
    image: taskoriaImage,
    category: "fullstack",
  },
  {
    id: "3",
    slug: "postit-nepal",
    title: "PostIt Nepal",
    description:
      "Community platform for posts, comments, replies, and likes, built with Next.js, Sanity CMS, Clerk authentication, and responsive Tailwind layouts.",
    problem:
      "A community-style product needed posting, interaction, and content management without becoming visually crowded.",
    role:
      "Implemented the Next.js UI, content integration, authentication flow, and community interaction features.",
    features: [
      "Posts, comments, replies, and likes",
      "Clerk authentication",
      "Sanity CMS integration",
      "Responsive community layouts"
    ],
    challenges:
      "Making nested community interactions clear across desktop and mobile screens.",
    result:
      "Built a functional community platform with structured content and usable interaction patterns.",
    tech: ["Next.js", "Tailwind", "Shadcn", "Cleark", "Sanity"],
    github: "https://github.com/Prateek2757/PostitNepal",
    live: "https://postit-nepal.vercel.app/",
    image: proj5,
    category: "fullstack",
  },

  {
    id: "5",
    slug: "sun-connect",
    title: "Sun Connect",
    description:
      "Secure, responsive member portal for Sun Life Nepal with dual account access, multilingual support, theme controls, registration, and account recovery flows.",
    problem:
      "Members needed a clear, dependable entry point for accessing different Sun Connect services across desktop and mobile devices.",
    role:
      "Built and refined the authentication experience, responsive layouts, validation states, localization controls, and API-connected user flows.",
    features: [
      "Online and core account access",
      "Mobile number and email login",
      "Multilingual and theme controls",
      "Registration and password recovery"
    ],
    challenges:
      "Presenting multiple authentication paths without adding friction while maintaining clarity, responsiveness, and consistent validation.",
    result:
      "Delivered a polished production login experience that gives Sun Life members clear access to essential account journeys.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "REST APIs"],
    live: "https://sunconnect.sunlife.com.np/en/login",
    image: sunConnectImage,
    category: "fullstack",
  },
  {
    id: "6",
    slug: "cosmotech-frontend-contribution",
    title: "Cosmotech International - Frontend Contribution",
    description:
      "Professional frontend contribution focused on responsive UI, API integration, accessible layouts, and maintainable Next.js/Tailwind implementation.",
    problem:
      "Professional client-facing pages needed responsive implementation and reliable API-connected UI work.",
    role:
      "Contributed frontend development, responsive layouts, UI refinements, and API integration work.",
    features: [
      "Responsive page development",
      "REST API integration",
      "Accessible UI patterns",
      "Next.js and Tailwind implementation"
    ],
    challenges:
      "Maintaining consistency across real client requirements, existing design choices, and production constraints.",
    result:
      "Contributed to a live professional website with maintainable frontend delivery.",
    tech: ["Next.js", "Tailwind CSS", "REST API Integration"],
    github: "https://github.com/Prateek2757",
    live: "https://cosmotechintl.com/",
    image: proj1,
    category: "frontend",
  },
];
