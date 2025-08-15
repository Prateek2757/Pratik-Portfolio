export type TimelineItem = {
  id: string;
  title: string;
  org: string;
  period: string;
  details: string;
  type: "work" | "education" | "Intern";
};

export const timeline: TimelineItem[] = [
  {
    id: "w0",
    title: "Frontend Developer",
    org: "Cosmotech International Pvt. Ltd.",
    period: "MARCH-2024 — APRIL-2025",
    details: "Building and maintaining responsive, high-performance web applications while collaborating with backend and design teams to deliver seamless user experiences.",
    type: "work"
  },
  {
    id: "w1",
    title: "Frontend Developer Intern",
    org: "Cosmotech International Pvt. Ltd.",
    period: "December-2023 — March-2024",
    details: "Contributed to responsive UI development and optimized user experiences for client projects.",
    type: "Intern"
  },
  {
    id: "w2",
    title: "MERN Stack Training",
    org: "Mindrisers Institute",
    period: "June-2023 — October-2023",
    details: "Shipped pixel-perfect UIs with Next.js, React, and Tailwind CSS while learning best practices for full-stack development.",
    type: "work"
  },
  {
    id: "e1",
    title: "BIM",
    org: "Tribhuvan University",
    period: "2020 — 2024",
    details: "Studied Business Information Management, focusing on the intersection of IT and business processes.",
    type: "education"
  }
];