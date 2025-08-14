export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  { id: "t1", name: "Alex Rivera", role: "Product Manager", quote: "Delivered fast, with flawless communication and quality code." },
  { id: "t2", name: "Sam Green", role: "CTO", quote: "Strong engineering instincts and great attention to design details." },
  { id: "t3", name: "Priya Shah", role: "Designer", quote: "A pleasure to collaborate with—UI came to life exactly as envisioned." },
];
