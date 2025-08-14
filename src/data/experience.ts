export type TimelineItem = {
  id: string;
  title: string;
  org: string;
  period: string;
  details: string;
  type: "work" | "education" | "Intern";
};

export const timeline: TimelineItem[] = [
  { id: "w1", title: "Frontend Developer Intern ", org: "Cosmotech International Pvt. Ltd.", period: "December-2024 — March-2025", details: "Contributed to responsive UI development and optimized user experiences for client projects.", type: "Intern" },
  { id: "w2", title: "MERN Stack Training ", org: "Mindrisers Institute", period: "June-2024 — October-2024", details: "Shipped pixel-perfect UIs with Next.js and Tailwind CSS.", type: "work" },
  { id: "e1", title: "BITM", org: "Tribhuvan University", period: "2020 — 2024", details: "Focused on software engineering and web technologies.", type: "education" },
];
