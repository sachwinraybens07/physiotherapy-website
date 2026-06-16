import type { Metadata } from "next";
import Image from "next/image";
import { Award, BadgeCheck, Eye, Target } from "lucide-react";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications, team } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the HealingMotion physiotherapy team and learn about our mission, vision, and certifications.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section bg-white dark:bg-slate-950">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-blue dark:text-brand-green">About us</p>
            <h1 className="text-4xl font-bold text-brand-navy dark:text-white sm:text-5xl">A clinic built around better movement and better days</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              HealingMotion began with a simple belief: physiotherapy should be practical, measurable, and deeply human.
              Our clinicians combine modern rehabilitation science with attentive care, helping patients understand their body
              and rebuild confidence one milestone at a time.
            </p>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-lg shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80"
              alt="Modern rehabilitation clinic treatment room"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-brand-sky dark:bg-slate-900">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <article className="rounded-lg bg-white p-7 shadow-sm dark:bg-white/5">
            <Target className="mb-4 text-brand-blue dark:text-brand-green" aria-hidden="true" size={32} />
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white">Mission</h2>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              To deliver accessible, evidence-led physiotherapy that reduces pain, restores function, and helps every patient
              participate fully in work, sport, family, and daily life.
            </p>
          </article>
          <article className="rounded-lg bg-white p-7 shadow-sm dark:bg-white/5">
            <Eye className="mb-4 text-brand-blue dark:text-brand-green" aria-hidden="true" size={32} />
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white">Vision</h2>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              To become the community&apos;s most trusted rehabilitation partner by setting a high standard for outcomes,
              communication, prevention, and continuity of care.
            </p>
          </article>
        </div>
      </section>

      <section className="section bg-white dark:bg-slate-950">
        <div className="container-page">
          <SectionHeading
            eyebrow="Team"
            title="Senior physiotherapist guiding your recovery"
            description="Your care is led by a senior physiotherapist with focused expertise in orthopedic and sports rehabilitation."
            align="center"
          />
          <div className="mx-auto grid max-w-md gap-6">
            {team.map((member) => (
              <article key={member.name} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="relative h-72">
                  <Image src={member.image} alt={member.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-navy dark:text-white">{member.name}</h3>
                  <p className="mt-1 font-semibold text-brand-blue dark:text-brand-green">{member.role}</p>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-mint dark:bg-slate-900">
        <div className="container-page">
          <SectionHeading eyebrow="Certifications" title="Trained, certified, and accountable" />
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg bg-white p-5 shadow-sm dark:bg-white/5">
                <BadgeCheck aria-hidden="true" className="shrink-0 text-brand-blue dark:text-brand-green" size={24} />
                <p className="font-semibold text-brand-navy dark:text-white">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-300">
            <Award aria-hidden="true" size={20} /> Continuing education is reviewed every quarter.
          </p>
        </div>
      </section>
      <AppointmentCTA />
    </>
  );
}
