import { CalendarCheck, MessageCircle } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function AppointmentCTA() {
  const text = encodeURIComponent("Hello HealingMotion, I want to schedule an appointment.");

  return (
    <section className="section bg-brand-navy text-white dark:bg-slate-900">
      <div className="container-page grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-green">Book care</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Start with a thorough assessment and a clear recovery plan.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-200">
            Choose an in-clinic visit, home visit, or WhatsApp call-back. Our care coordinator will confirm the best time.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <LinkButton href="/appointment">
            <CalendarCheck aria-hidden="true" size={18} /> Book Online
          </LinkButton>
          <a
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            href={`https://wa.me/${siteConfig.whatsapp}?text=${text}`}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle aria-hidden="true" size={18} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
