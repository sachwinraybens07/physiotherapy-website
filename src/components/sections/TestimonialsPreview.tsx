import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";

export function TestimonialsPreview({ limit = 3 }: { limit?: number }) {
  return (
    <section className="section bg-white dark:bg-slate-950">
      <div className="container-page">
        <SectionHeading
          eyebrow="Patient stories"
          title="Real progress from people we have helped"
          description="Recovery is personal. These stories show what structured care can make possible."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, limit).map((item) => (
            <article key={item.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="mb-5 flex gap-1 text-amber-400" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} aria-hidden="true" size={18} fill="currentColor" />
                ))}
              </div>
              <p className="leading-7 text-slate-700 dark:text-slate-200">&quot;{item.quote}&quot;</p>
              <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/10">
                <p className="font-bold text-brand-navy dark:text-white">{item.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-300">{item.treatment}</p>
              </div>
            </article>
          ))}
        </div>
        {limit < testimonials.length ? (
          <div className="mt-10 text-center">
            <LinkButton href="/testimonials" variant="secondary">Read More Stories</LinkButton>
          </div>
        ) : null}
      </div>
    </section>
  );
}
