import { CheckCircle2 } from "lucide-react";
import { whyChooseUs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="section bg-white dark:bg-slate-950">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-start">
        <SectionHeading
          eyebrow="Why choose us"
          title="Clinical care that feels clear, calm, and personal"
          description="We keep patients informed at every step, so recovery never feels like guesswork."
        />
        <div className="grid gap-5">
          {whyChooseUs.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-mint text-brand-navy dark:bg-brand-green/20 dark:text-brand-green">
                    <Icon aria-hidden="true" size={24} />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy dark:text-white">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
          <div className="rounded-lg bg-brand-navy p-6 text-white dark:bg-white dark:text-slate-950">
            <p className="flex items-center gap-3 font-bold">
              <CheckCircle2 aria-hidden="true" size={22} /> Free 10-minute discovery call before your first visit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
