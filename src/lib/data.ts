import {
  Activity,
  Baby,
  Brain,
  Dumbbell,
  HeartPulse,
  Home,
  ShieldPlus,
  Sparkles,
  StretchHorizontal,
  UserRoundCheck,
} from "lucide-react";
import type { NavItem, Service, Testimonial } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Appointment", href: "/appointment" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    title: "Sports Injury Rehabilitation",
    slug: "sports-injury-rehabilitation",
    description:
      "Return-to-sport plans for sprains, ligament injuries, overuse pain, and strength imbalances.",
    image:
      "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&w=1200&q=80",
    icon: Dumbbell,
    highlights: ["Movement screening", "Strength rebuilding", "Return-to-play testing"],
  },
  {
    title: "Back Pain Treatment",
    slug: "back-pain-treatment",
    description:
      "Personalized care for lower back pain, sciatica, posture strain, and recurring stiffness.",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",
    icon: StretchHorizontal,
    highlights: ["Pain education", "Manual therapy", "Core control programs"],
  },
  {
    title: "Neck Pain Therapy",
    slug: "neck-pain-therapy",
    description:
      "Hands-on therapy and ergonomic coaching for neck pain, headaches, and desk-related tension.",
    image:
      "https://images.unsplash.com/photo-1645005513364-0ad10f03a98f?auto=format&fit=crop&w=1200&q=80",
    icon: Activity,
    highlights: ["Posture correction", "Mobility drills", "Headache support"],
  },
  {
    title: "Post-Surgery Rehabilitation",
    slug: "post-surgery-rehabilitation",
    description:
      "Structured recovery after joint replacement, ligament repair, fracture fixation, and spine surgery.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    icon: ShieldPlus,
    highlights: ["Milestone tracking", "Safe progression", "Surgeon coordination"],
  },
  {
    title: "Neurological Rehabilitation",
    slug: "neurological-rehabilitation",
    description:
      "Functional rehab for stroke recovery, Parkinson's care, balance issues, and nerve conditions.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
    icon: Brain,
    highlights: ["Gait training", "Balance retraining", "Daily function goals"],
  },
  {
    title: "Pediatric Physiotherapy",
    slug: "pediatric-physiotherapy",
    description:
      "Gentle child-friendly therapy for developmental delay, posture, coordination, and injury recovery.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    icon: Baby,
    highlights: ["Play-based sessions", "Parent coaching", "Development support"],
  },
  {
    title: "Geriatric Physiotherapy",
    slug: "geriatric-physiotherapy",
    description:
      "Mobility, fall-prevention, arthritis care, and strength programs for older adults.",
    image:
      "https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&w=1200&q=80",
    icon: HeartPulse,
    highlights: ["Fall prevention", "Arthritis management", "Independence training"],
  },
  {
    title: "Home Visit Physiotherapy",
    slug: "home-visit-physiotherapy",
    description:
      "Clinic-quality assessment and rehab at home for patients who need convenient care.",
    image:
      "https://images.unsplash.com/photo-1576765607924-84f48fcaa048?auto=format&fit=crop&w=1200&q=80",
    icon: Home,
    highlights: ["Home safety review", "Flexible scheduling", "Family involvement"],
  },
];

export const whyChooseUs = [
  {
    title: "Evidence-led care",
    description: "Every plan starts with assessment, measurable goals, and clear progress reviews.",
    icon: Sparkles,
  },
  {
    title: "One-on-one sessions",
    description: "Dedicated therapist time keeps treatment personal, focused, and accountable.",
    icon: UserRoundCheck,
  },
  {
    title: "Whole recovery approach",
    description: "We combine pain relief, movement restoration, strength, and prevention.",
    icon: ShieldPlus,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Aarav Mehta",
    role: "Amateur runner",
    treatment: "Sports Injury Rehabilitation",
    quote:
      "The team helped me recover from a knee injury without rushing the process. I returned to running with much better form and confidence.",
    result: "Back to 10K runs in 10 weeks",
  },
  {
    name: "Priya Nair",
    role: "Software professional",
    treatment: "Neck Pain Therapy",
    quote:
      "My neck pain had become part of daily life. The posture plan and hands-on sessions made a visible difference within a few weeks.",
    result: "Pain-free desk work",
  },
  {
    name: "Rohan D'Souza",
    role: "Post ACL surgery patient",
    treatment: "Post-Surgery Rehabilitation",
    quote:
      "They coordinated with my surgeon and explained every recovery milestone. The structured plan kept me motivated.",
    result: "Full squat and stair climbing restored",
  },
  {
    name: "Lakshmi Rao",
    role: "Retired teacher",
    treatment: "Geriatric Physiotherapy",
    quote:
      "I feel steadier while walking and less worried about falling. The exercises were practical and easy to continue at home.",
    result: "Improved balance and confidence",
  },
];

export const team = [
  {
    name: "Dr. Richwin Jonan S",
    role: "Senior Physiotherapist",
    credentials: "BPT, St. John's Medical College, Bengaluru",
    bio: "A motivated physiotherapist trained in patient assessment, rehabilitation planning, manual therapy, sports injury care, strength training, and fitness guidance. His approach combines compassionate care with practical recovery plans that help patients rebuild strength, mobility, and confidence.",
    experience:
      "Clinical internship experience across Orthopaedics, Neurology, Cardio-Respiratory care, General Medicine and Surgery, Paediatrics, Community Health Rehabilitation, Geriatrics, and Oncology.",
    highlights: [
      "Bachelor of Physiotherapy from St. John's Medical College, RGUHS Bengaluru",
      "Certified in Trigger Point Therapy for Myofascial Pain - Level 1",
      "Basic Care and Life Support workshop at St. John's College of Physiotherapy",
      "Research review on plyometric exercise for improving volleyball player power and strength",
    ],
    specialties: [
      "Sports injury management",
      "Manual therapy",
      "Strength training",
      "Fitness guidance",
      "Community rehabilitation",
    ],
    image: "/images/dr-richwin-jonan-s.jpg",
  },
];

export const certifications = [
  "Indian Association of Physiotherapists registered clinicians",
  "Advanced Manual Therapy certification",
  "Neuro-developmental treatment training",
  "Sports taping and corrective exercise certification",
];
