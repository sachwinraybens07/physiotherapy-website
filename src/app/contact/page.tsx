import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { openingHours, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact HealingMotion Physiotherapy for appointments, directions, opening hours, phone, and email.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section bg-white dark:bg-slate-950">
        <div className="container-page">
          <SectionHeading
            eyebrow="Contact"
            title="Visit, call, or message HealingMotion"
            description="We are located in Indiranagar with early morning and evening appointment slots for busy schedules."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Address", value: siteConfig.address, icon: MapPin },
              { label: "Phone", value: siteConfig.phone, icon: Phone },
              { label: "Email", value: siteConfig.email, icon: Mail },
              { label: "Hours", value: "Mon-Fri 7 AM-8 PM", icon: Clock },
            ].map((item) => (
              <article key={item.label} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <item.icon aria-hidden="true" className="mb-4 text-brand-blue dark:text-brand-green" size={28} />
                <h2 className="font-bold text-brand-navy dark:text-white">{item.label}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-sky dark:bg-slate-900">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg bg-white p-7 shadow-sm dark:bg-white/5">
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white">Opening hours</h2>
            <div className="mt-5 grid gap-4">
              {openingHours.map((item) => (
                <p key={item.day} className="flex justify-between gap-4 border-b border-slate-200 pb-4 text-slate-700 dark:border-white/10 dark:text-slate-200">
                  <span>{item.day}</span>
                  <span className="text-right font-semibold">{item.time}</span>
                </p>
              ))}
            </div>
          </div>
          <iframe
            title="HealingMotion clinic location map"
            className="min-h-[440px] w-full rounded-lg border-0 shadow-soft"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={siteConfig.mapsQuery}
          />
        </div>
      </section>
      <AppointmentCTA />
    </>
  );
}
