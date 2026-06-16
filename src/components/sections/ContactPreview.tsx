import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { openingHours, siteConfig } from "@/lib/site";
import { LinkButton } from "@/components/ui/Button";

export function ContactPreview() {
  return (
    <section className="section bg-brand-sky dark:bg-slate-900">
      <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-blue dark:text-brand-green">Contact</p>
          <h2 className="text-3xl font-bold text-brand-navy dark:text-white sm:text-4xl">Easy to reach, simple to schedule</h2>
          <div className="mt-8 grid gap-4">
            <p className="flex gap-3 text-slate-700 dark:text-slate-200">
              <MapPin aria-hidden="true" className="mt-1 shrink-0 text-brand-blue dark:text-brand-green" size={20} />
              {siteConfig.address}
            </p>
            <a className="focus-ring flex gap-3 rounded-lg text-slate-700 dark:text-slate-200" href={siteConfig.phoneHref}>
              <Phone aria-hidden="true" className="shrink-0 text-brand-blue dark:text-brand-green" size={20} />
              {siteConfig.phone}
            </a>
            <a className="focus-ring flex gap-3 rounded-lg text-slate-700 dark:text-slate-200" href={`mailto:${siteConfig.email}`}>
              <Mail aria-hidden="true" className="shrink-0 text-brand-blue dark:text-brand-green" size={20} />
              {siteConfig.email}
            </a>
            <div className="flex gap-3 text-slate-700 dark:text-slate-200">
              <Clock aria-hidden="true" className="mt-1 shrink-0 text-brand-blue dark:text-brand-green" size={20} />
              <div>
                {openingHours.map((item) => (
                  <p key={item.day}>{item.day}: {item.time}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <LinkButton href="/contact" variant="secondary">View Contact Details</LinkButton>
          </div>
        </div>
        <iframe
          title="HealingMotion clinic location map"
          className="min-h-[360px] w-full rounded-lg border-0 shadow-soft"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={siteConfig.mapsQuery}
        />
      </div>
    </section>
  );
}
