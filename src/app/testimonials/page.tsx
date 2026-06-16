import type { Metadata } from "next";
import { Quote, Trophy } from "lucide-react";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read patient reviews and rehabilitation success stories from HealingMotion Physiotherapy.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="section bg-white dark:bg-slate-950">
        <div className="container-page">
          <SectionHeading
            eyebrow="Testimonials"
            title="Patient reviews and success stories"
            description="A few examples of the confidence, independence, and movement our patients have rebuilt."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
                <Quote aria-hidden="true" className="mb-5 text-brand-blue dark:text-brand-green" size={32} />
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">&quot;{item.quote}&quot;</p>
                <div className="mt-6 rounded-lg bg-brand-sky p-4 dark:bg-white/10">
                  <p className="flex items-center gap-2 text-sm font-bold text-brand-navy dark:text-white">
                    <Trophy aria-hidden="true" size={18} /> {item.result}
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/10">
                  <p className="font-bold text-brand-navy dark:text-white">{item.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-300">{item.role} - {item.treatment}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <AppointmentCTA />
    </>
  );
}
