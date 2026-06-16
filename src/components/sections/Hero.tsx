import Image from "next/image";
import { ArrowRight, CalendarCheck, ShieldCheck } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-brand-sky dark:bg-slate-900" aria-hidden="true" />
      <div className="container-page grid min-h-[calc(100vh-5rem)] items-center gap-10 py-10 lg:grid-cols-[1fr_0.92fr]">
        <div className="relative z-10 animate-fade-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-lg bg-brand-mint px-3 py-2 text-sm font-bold text-brand-navy dark:bg-brand-green/20 dark:text-brand-green">
            <ShieldCheck aria-hidden="true" size={18} /> Trusted physiotherapy and rehabilitation care
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-normal text-brand-navy dark:text-white sm:text-5xl lg:text-6xl">
            Recover faster, move better, and feel confident in your body again.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {siteConfig.name} provides evidence-led physiotherapy for pain relief, sports injuries,
            post-surgery recovery, neuro rehab, and everyday mobility.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/appointment">
              Book Appointment <CalendarCheck aria-hidden="true" size={18} />
            </LinkButton>
            <LinkButton href="/services" variant="secondary">
              Explore Services <ArrowRight aria-hidden="true" size={18} />
            </LinkButton>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            {[
              ["12+", "Years experience"],
              ["8", "Specialized services"],
              ["4.9/5", "Patient rating"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
                <p className="text-2xl font-bold text-brand-blue dark:text-brand-green">{value}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 animate-float-in">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1400&q=80"
              alt="Physiotherapist helping a patient with rehabilitation exercise"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
