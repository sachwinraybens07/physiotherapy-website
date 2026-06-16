import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  slug: string;
  description: string;
  image: string;
  icon: LucideIcon;
  highlights: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  treatment: string;
  result: string;
};
